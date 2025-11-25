import { NextRequest, NextResponse } from "next/server";
import { authenticate, requireAuth } from "@/middleware/auth";
import cloudinary from "@/lib/cloudinary";

// POST - Upload image from base64
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const { imageData, folder = "uploads" } = body;

    if (!imageData) {
      return NextResponse.json(
        { message: "Image data is required" },
        { status: 400 }
      );
    }

    // Check if it's base64 data
    if (!imageData.startsWith("data:image/")) {
      return NextResponse.json(
        { message: "Invalid image format. Expected base64 data URL." },
        { status: 400 }
      );
    }

    // Convert base64 to buffer
    const base64Data = imageData.split(",")[1];
    const buffer = Buffer.from(base64Data, "base64");

    // Upload to Cloudinary using upload_stream
    const result = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "image",
          folder: folder,
        },
        (error: any, result: any) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve(result);
          } else {
            reject(new Error("Upload failed: No result returned"));
          }
        }
      );

      uploadStream.end(buffer);
    });

    return NextResponse.json(
      {
        message: "Image uploaded successfully",
        url: result.secure_url,
        publicId: result.public_id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error uploading image:", error);

    if (error.message === "Unauthorized") {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: error.message || "Failed to upload image" },
      { status: 500 }
    );
  }
}

