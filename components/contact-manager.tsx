// // "use client"

// // import { useState } from "react"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import { Edit2, Save, X } from "lucide-react"
// // import { Textarea } from "./ui/textarea"
// // import { Input } from "./ui/input"
// // import PhoneInput from "react-phone-number-input"
// // import "react-phone-number-input/style.css"

// // interface ContactInfo {
// //   address: string
// //   phone: string
// //   email: string
// //   mapLink: string
// // }

// // interface LocationInfo {
// //   mapLink: string
// //   createdAt: string
// //   updatedAt: string
// // }

// // const initialContact: ContactInfo = {
// //   phone: "+1 (555) 123-4567",
// //   email: "hello@company.com",
// //   address: "123 Business Avenue, Tech City, TC 12345",
// //   mapLink: "https://maps.google.com",
// // }

// // const initialLocation: LocationInfo = {
// //   mapLink: "https://www.google.com/maps/embed?pb=...",
// //   createdAt: "2024-01-15",
// //   updatedAt: "2024-01-15",
// // }

// // export function ContactManager() {
// //   const [contact, setContact] = useState<ContactInfo>(initialContact)
// //   const [location, setLocation] = useState<LocationInfo>(initialLocation)
// //   const [isEditing, setIsEditing] = useState(false)
// //   const [editData, setEditData] = useState<ContactInfo>(initialContact)
// //   const [editLocation, setEditLocation] = useState<LocationInfo>(initialLocation)

// //   const startEdit = () => {
// //     setEditData({ ...contact })
// //     setEditLocation({ ...location })
// //     setIsEditing(true)
// //   }

// //   const saveEdit = () => {
// //     setContact({ ...editData })
// //     setLocation({
// //       ...editLocation,
// //       updatedAt: new Date().toISOString().split("T")[0],
// //     })
// //     setIsEditing(false)
// //   }

// //   const cancelEdit = () => {
// //     setIsEditing(false)
// //   }

// //   // Handle phone number change
// //   const handlePhoneChange = (value: string | undefined) => {
// //     if (value) {
// //       setEditData({ ...editData, phone: value })
// //     }
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <div className="flex items-center justify-between">
// //         <div>
// //           <h2 className="text-3xl font-bold text-foreground mb-2">Contact Information</h2>
// //           <p className="text-muted-foreground">Manage your company contact details</p>
// //         </div>
// //         {!isEditing && (
// //           <Button onClick={startEdit} className="bg-[#987a34] text-white hover:bg-[#7a6029]">
// //             <Edit2 className="h-4 w-4 mr-2" /> Edit
// //           </Button>
// //         )}
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Left Column - Contact Information */}
// //         <div className="space-y-4">
// //           <Card className="border-border bg-card">
// //             <CardHeader>
// //               <CardTitle className="text-foreground">Address</CardTitle>
// //               <CardDescription>Physical office location</CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               {isEditing ? (
// //                 <Textarea
// //                   value={editData.address}
// //                   onChange={(e) => setEditData({ ...editData, address: e.target.value })}
// //                   className="w-full p-2 bg-background border border-input rounded text-foreground resize-none h-20"
// //                 />
// //               ) : (
// //                 <p className="text-foreground">{contact.address}</p>
// //               )}
// //             </CardContent>
// //           </Card>

// //           <Card className="border-border bg-card">
// //             <CardHeader>
// //               <CardTitle className="text-foreground">Phone</CardTitle>
// //               <CardDescription>Primary contact number</CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               {isEditing ? (
// //                 <div className="custom-phone-input-container">
// //                   <PhoneInput
// //                     international
// //                     defaultCountry="US"
// //                     value={editData.phone}
// //                     onChange={handlePhoneChange}
// //                     className="custom-phone-input"
// //                   />
// //                 </div>
// //               ) : (
// //                 <p className="text-lg font-mono text-foreground">{contact.phone}</p>
// //               )}
// //             </CardContent>
// //           </Card>

// //           <Card className="border-border bg-card">
// //             <CardHeader>
// //               <CardTitle className="text-foreground">Email</CardTitle>
// //               <CardDescription>Main business email</CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               {isEditing ? (
// //                 <Input
// //                   type="email"
// //                   value={editData.email}
// //                   onChange={(e) => setEditData({ ...editData, email: e.target.value })}
// //                   className="w-full p-2 bg-background border border-input rounded text-foreground"
// //                 />
// //               ) : (
// //                 <p className="text-lg font-mono text-foreground">{contact.email}</p>
// //               )}
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* Right Column - Map Link and Additional Info */}
// //         <div className="space-y-4">
// //           <Card className="border-border bg-card">
// //             <CardHeader>
// //               <CardTitle className="text-foreground">Map Link</CardTitle>
// //               <CardDescription>Google Maps or location URL</CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               {isEditing ? (
// //                 <Input
// //                   type="url"
// //                   value={editLocation.mapLink}
// //                   onChange={(e) => setEditLocation({ ...editLocation, mapLink: e.target.value })}
// //                   className="w-full p-2 bg-background border border-input rounded text-foreground"
// //                 />
// //               ) : (
// //                 <div className="space-y-3">
// //                   <p className="text-sm text-muted-foreground break-all">{location.mapLink}</p>
// //                   <Button 
// //                     variant="outline" 
// //                     size="sm" 
// //                     asChild
// //                     className="w-full"
// //                   >
// //                     <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
// //                       Open Map
// //                     </a>
// //                   </Button>
// //                 </div>
// //               )}
// //             </CardContent>
// //           </Card>

// //           <Card className="border-border bg-card">
// //             <CardHeader>
// //               <CardTitle className="text-foreground">Last Updated</CardTitle>
// //               <CardDescription>Information update history</CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="space-y-2 text-sm">
// //                 <div className="flex justify-between">
// //                   <span className="text-muted-foreground">Last Updated:</span>
// //                   <span className="text-foreground">{location.updatedAt}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-muted-foreground">Created:</span>
// //                   <span className="text-foreground">{location.createdAt}</span>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Save/Cancel Buttons */}
// //           {isEditing && (
// //             <Card className="border-border bg-card">
// //               <CardContent className="pt-6">
// //                 <div className="space-y-3">
// //                   <p className="text-sm text-muted-foreground text-center">
// //                     Save or cancel your changes
// //                   </p>
// //                   <div className="flex gap-2">
// //                     <Button variant="outline" onClick={cancelEdit} className="flex-1">
// //                       <X className="h-4 w-4 mr-2" /> Cancel
// //                     </Button>
// //                     <Button onClick={saveEdit} className="flex-1 bg-[#345143] text-white hover:bg-[#2a4037]">
// //                       <Save className="h-4 w-4 mr-2" /> Save Changes
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           )}
// //         </div>
// //       </div>

   
// //     </div>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Edit2, Save, X, Mail, MessageSquare, User, Phone, Calendar } from "lucide-react"
// import { Textarea } from "./ui/textarea"
// import { Input } from "./ui/input"
// import PhoneInput from "react-phone-number-input"
// import "react-phone-number-input/style.css"

// interface ContactInfo {
//   address: string
//   phone: string
//   email: string
//   mapLink: string
// }

// interface LocationInfo {
//   mapLink: string
//   createdAt: string
//   updatedAt: string
// }

// interface ContactMessage {
//   id: string
//   name: string
//   email: string
//   phone: string
//   subject: string
//   message: string
//   createdAt: string
//   status: "new" | "read" | "replied"
// }

// const initialContact: ContactInfo = {
//   phone: "+1 (555) 123-4567",
//   email: "hello@company.com",
//   address: "123 Business Avenue, Tech City, TC 12345",
//   mapLink: "https://maps.google.com",
// }

// const initialLocation: LocationInfo = {
//   mapLink: "https://www.google.com/maps/embed?pb=...",
//   createdAt: "2024-01-15",
//   updatedAt: "2024-01-15",
// }

// const initialMessages: ContactMessage[] = [
//   {
//     id: "1",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     subject: "Partnership Inquiry",
//     message: "I'm interested in discussing potential partnership opportunities with your company. Could we schedule a call next week?",
//     createdAt: "2024-01-20",
//     status: "new"
//   },
//   {
//     id: "2",
//     name: "Sarah Wilson",
//     email: "sarah.wilson@techcorp.com",
//     phone: "+1 (555) 987-6543",
//     subject: "Project Collaboration",
//     message: "We love your work and would like to explore collaboration on our upcoming mobile app project. Please let me know when you're available for a discussion.",
//     createdAt: "2024-01-19",
//     status: "read"
//   },
//   {
//     id: "3",
//     name: "Mike Johnson",
//     email: "mike.j@startup.io",
//     phone: "+1 (555) 456-7890",
//     subject: "Service Pricing",
//     message: "Could you please send me more information about your service packages and pricing? We're looking to develop a custom web application.",
//     createdAt: "2024-01-18",
//     status: "replied"
//   }
// ]

// export function ContactManager() {
//   const [contact, setContact] = useState<ContactInfo>(initialContact)
//   const [location, setLocation] = useState<LocationInfo>(initialLocation)
//   const [messages, setMessages] = useState<ContactMessage[]>(initialMessages)
//   const [isEditing, setIsEditing] = useState(false)
//   const [editData, setEditData] = useState<ContactInfo>(initialContact)
//   const [editLocation, setEditLocation] = useState<LocationInfo>(initialLocation)
//   const [activeTab, setActiveTab] = useState<"information" | "messages">("information")

//   const startEdit = () => {
//     setEditData({ ...contact })
//     setEditLocation({ ...location })
//     setIsEditing(true)
//   }

//   const saveEdit = () => {
//     setContact({ ...editData })
//     setLocation({
//       ...editLocation,
//       updatedAt: new Date().toISOString().split("T")[0],
//     })
//     setIsEditing(false)
//   }

//   const cancelEdit = () => {
//     setIsEditing(false)
//   }

//   // Handle phone number change
//   const handlePhoneChange = (value: string | undefined) => {
//     if (value) {
//       setEditData({ ...editData, phone: value })
//     }
//   }

//   // Mark message as read
//   const markAsRead = (id: string) => {
//     setMessages(messages.map(msg => 
//       msg.id === id ? { ...msg, status: "read" as const } : msg
//     ))
//   }

//   // Mark message as replied
//   const markAsReplied = (id: string) => {
//     setMessages(messages.map(msg => 
//       msg.id === id ? { ...msg, status: "replied" as const } : msg
//     ))
//   }

//   // Delete message
//   const deleteMessage = (id: string) => {
//     setMessages(messages.filter(msg => msg.id !== id))
//   }

//   // Get status color
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "new": return "bg-blue-500"
//       case "read": return "bg-gray-500"
//       case "replied": return "bg-green-500"
//       default: return "bg-gray-500"
//     }
//   }

//   // Get status text
//   const getStatusText = (status: string) => {
//     switch (status) {
//       case "new": return "New"
//       case "read": return "Read"
//       case "replied": return "Replied"
//       default: return "Unknown"
//     }
//   }

//   // Count unread messages
//   const unreadCount = messages.filter(msg => msg.status === "new").length

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold text-foreground mb-2">Contact</h2>
//           <p className="text-muted-foreground">Manage contact information and customer messages</p>
//         </div>
//         {activeTab === "information" && !isEditing && (
//           <Button onClick={startEdit} className="bg-[#987a34] text-white hover:bg-[#7a6029]">
//             <Edit2 className="h-4 w-4 mr-2" /> Edit
//           </Button>
//         )}
//       </div>

//       {/* Tab Navigation */}
//       <div className="border-b border-border">
//         <div className="flex space-x-8">
//           <button
//             onClick={() => setActiveTab("information")}
//             className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//               activeTab === "information"
//                 ? "border-[#987a34] text-[#987a34]"
//                 : "border-transparent text-muted-foreground hover:text-foreground"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <MessageSquare className="h-4 w-4" />
//               Contact Information
//             </div>
//           </button>
//           <button
//             onClick={() => setActiveTab("messages")}
//             className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors relative ${
//               activeTab === "messages"
//                 ? "border-[#987a34] text-[#987a34]"
//                 : "border-transparent text-muted-foreground hover:text-foreground"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               Contact Messages
//               {unreadCount > 0 && (
//                 <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {unreadCount}
//                 </span>
//               )}
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Contact Information Tab */}
//       {activeTab === "information" && (
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Left Column - Contact Information */}
//           <div className="space-y-4">
//             <Card className="border-border bg-card">
//               <CardHeader>
//                 <CardTitle className="text-foreground">Address</CardTitle>
//                 <CardDescription>Physical office location</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isEditing ? (
//                   <Textarea
//                     value={editData.address}
//                     onChange={(e) => setEditData({ ...editData, address: e.target.value })}
//                     className="w-full p-2 bg-background border border-input rounded text-foreground resize-none h-20"
//                   />
//                 ) : (
//                   <p className="text-foreground">{contact.address}</p>
//                 )}
//               </CardContent>
//             </Card>

//             <Card className="border-border bg-card">
//               <CardHeader>
//                 <CardTitle className="text-foreground">Phone</CardTitle>
//                 <CardDescription>Primary contact number</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isEditing ? (
//                   <div className="custom-phone-input-container">
//                     <PhoneInput
//                       international
//                       defaultCountry="US"
//                       value={editData.phone}
//                       onChange={handlePhoneChange}
//                       className="custom-phone-input"
//                     />
//                   </div>
//                 ) : (
//                   <p className="text-lg font-mono text-foreground">{contact.phone}</p>
//                 )}
//               </CardContent>
//             </Card>

//             <Card className="border-border bg-card">
//               <CardHeader>
//                 <CardTitle className="text-foreground">Email</CardTitle>
//                 <CardDescription>Main business email</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isEditing ? (
//                   <Input
//                     type="email"
//                     value={editData.email}
//                     onChange={(e) => setEditData({ ...editData, email: e.target.value })}
//                     className="w-full p-2 bg-background border border-input rounded text-foreground"
//                   />
//                 ) : (
//                   <p className="text-lg font-mono text-foreground">{contact.email}</p>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Column - Map Link and Additional Info */}
//           <div className="space-y-4">
//             <Card className="border-border bg-card">
//               <CardHeader>
//                 <CardTitle className="text-foreground">Map Link</CardTitle>
//                 <CardDescription>Google Maps or location URL</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isEditing ? (
//                   <Input
//                     type="url"
//                     value={editLocation.mapLink}
//                     onChange={(e) => setEditLocation({ ...editLocation, mapLink: e.target.value })}
//                     className="w-full p-2 bg-background border border-input rounded text-foreground"
//                   />
//                 ) : (
//                   <div className="space-y-3">
//                     <p className="text-sm text-muted-foreground break-all">{location.mapLink}</p>
//                     <Button 
//                       variant="outline" 
//                       size="sm" 
//                       asChild
//                       className="w-full"
//                     >
//                       <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
//                         Open Map
//                       </a>
//                     </Button>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             <Card className="border-border bg-card">
//               <CardHeader>
//                 <CardTitle className="text-foreground">Last Updated</CardTitle>
//                 <CardDescription>Information update history</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Last Updated:</span>
//                     <span className="text-foreground">{location.updatedAt}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Created:</span>
//                     <span className="text-foreground">{location.createdAt}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Save/Cancel Buttons */}
//             {isEditing && (
//               <Card className="border-border bg-card">
//                 <CardContent className="pt-6">
//                   <div className="space-y-3">
//                     <p className="text-sm text-muted-foreground text-center">
//                       Save or cancel your changes
//                     </p>
//                     <div className="flex gap-2">
//                       <Button variant="outline" onClick={cancelEdit} className="flex-1">
//                         <X className="h-4 w-4 mr-2" /> Cancel
//                       </Button>
//                       <Button onClick={saveEdit} className="flex-1 bg-[#345143] text-white hover:bg-[#2a4037]">
//                         <Save className="h-4 w-4 mr-2" /> Save Changes
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Contact Messages Tab */}
//       {activeTab === "messages" && (
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-semibold text-foreground">
//                 Customer Messages ({messages.length})
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 Manage inquiries and messages from customers
//               </p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             {messages.map((message) => (
//               <Card key={message.id} className="border-border bg-card">
//                 <CardContent className="p-6">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex items-center space-x-3">
//                       <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
//                         <User className="h-5 w-5 text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-foreground">{message.name}</h4>
//                         <p className="text-sm text-muted-foreground">{message.email}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(message.status)}`}>
//                         {getStatusText(message.status)}
//                       </span>
//                       <span className="text-xs text-muted-foreground flex items-center gap-1">
//                         <Calendar className="h-3 w-3" />
//                         {message.createdAt}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex items-center space-x-4 text-sm">
//                       <div className="flex items-center space-x-1">
//                         <Phone className="h-4 w-4 text-muted-foreground" />
//                         <span className="text-foreground">{message.phone}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Mail className="h-4 w-4 text-muted-foreground" />
//                         <span className="text-foreground">{message.subject}</span>
//                       </div>
//                     </div>

//                     <div className="bg-muted/50 rounded-lg p-4">
//                       <p className="text-foreground text-sm leading-relaxed">{message.message}</p>
//                     </div>

//                     <div className="flex justify-end space-x-2 pt-2">
//                       {message.status === "new" && (
//                         <Button variant="outline" size="sm" onClick={() => markAsRead(message.id)}>
//                           Mark as Read
//                         </Button>
//                       )}
//                       <Button 
//                         variant="outline" 
//                         size="sm" 
//                         onClick={() => markAsReplied(message.id)}
//                         className={message.status === "replied" ? "bg-green-50 text-green-700 border-green-200" : ""}
//                       >
//                         {message.status === "replied" ? "Replied" : "Mark as Replied"}
//                       </Button>
//                       <Button 
//                         variant="outline" 
//                         size="sm" 
//                         onClick={() => deleteMessage(message.id)}
//                         className="text-destructive border-destructive/20 hover:bg-destructive/10"
//                       >
//                         Delete
//                       </Button>
//                       <Button size="sm" className="bg-[#345143] text-white hover:bg-[#2a4037]">
//                         <Mail className="h-4 w-4 mr-2" />
//                         Reply
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}

//             {messages.length === 0 && (
//               <Card className="border-border bg-card">
//                 <CardContent className="p-8 text-center">
//                   <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold text-foreground mb-2">No Messages Yet</h3>
//                   <p className="text-muted-foreground">Customer messages will appear here when they contact you through your website.</p>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Save, X, Mail, MessageSquare, User, Phone, Calendar, Send, X as CloseIcon, CheckCircle, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { dashboardApi, type ContactMessage as ApiContactMessage } from "@/lib/dashboard-api"
 
interface ContactInfo {
  address: string
  phone: string
  email: string
  mapLink: string
}

interface LocationInfo {
  mapLink: string
  createdAt: string
  updatedAt: string
}

interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: string
  status: "new" | "read" | "replied"
}

interface Reply {
  id: string
  messageId: string
  content: string
  createdAt: string
  sent: boolean
}

// Helper function to extract name from email
const extractNameFromEmail = (email: string): string => {
  const namePart = email.split("@")[0]
  // Convert email format to readable name (e.g., "john.doe" -> "John Doe")
  return namePart
    .split(/[._-]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

// Helper function to extract subject from message (first line or first sentence)
const extractSubjectFromMessage = (message: string): string => {
  const firstLine = message.split("\n")[0].trim()
  if (firstLine.length > 50) {
    return firstLine.substring(0, 50) + "..."
  }
  return firstLine || "Inquiry"
}

// Transform API message to UI format
const transformMessage = (apiMessage: ApiContactMessage, status: "new" | "read" | "replied" = "new"): ContactMessage => {
  const date = new Date(apiMessage.createdAt)
  return {
    id: apiMessage.id,
    name: extractNameFromEmail(apiMessage.email),
    email: apiMessage.email,
    phone: "N/A", // Phone not available in database
    subject: extractSubjectFromMessage(apiMessage.message),
    message: apiMessage.message,
    createdAt: date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }),
    status
  }
}

export function ContactManager() {
  const [contact, setContact] = useState<ContactInfo | null>(null)
  const [location, setLocation] = useState<LocationInfo | null>(null)
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [replies, setReplies] = useState<Reply[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingContactInfo, setLoadingContactInfo] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [contactInfoError, setContactInfoError] = useState<string | null>(null)
  // Track message status locally (since DB doesn't have status field)
  const [messageStatus, setMessageStatus] = useState<Record<string, "new" | "read" | "replied">>({})
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [editData, setEditData] = useState<ContactInfo>({
    phone: "",
    email: "",
    address: "",
    mapLink: ""
  })
  const [editLocation, setEditLocation] = useState<LocationInfo>({
    mapLink: "",
    createdAt: "",
    updatedAt: ""
  })
  const [activeTab, setActiveTab] = useState<"information" | "messages">("information")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [replySubject, setReplySubject] = useState("")
  const [showReplyModal, setShowReplyModal] = useState(false)
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: "success" | "error" }>({ 
    show: false, 
    message: "", 
    type: "success" 
  })
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  // Load data from API
  useEffect(() => {
    loadContactInfo()
    loadLocationInfo()
    loadMessages()
  }, [])

  const loadContactInfo = async () => {
    setLoadingContactInfo(true)
    setContactInfoError(null)
    try {
      const data = await dashboardApi.contactInfo.fetch()
      if (data) {
        setContact({
          phone: data.phone,
          email: data.email,
          address: data.address,
          mapLink: "" // mapLink is in location, not contact
        })
        setEditData({
          phone: data.phone,
          email: data.email,
          address: data.address,
          mapLink: ""
        })
      } else {
        // No data exists yet
        setContact(null)
        setEditData({
          phone: "",
          email: "",
          address: "",
          mapLink: ""
        })
      }
    } catch (err) {
      setContactInfoError(err instanceof Error ? err.message : "Failed to load contact information")
      console.error("Error loading contact info:", err)
    } finally {
      setLoadingContactInfo(false)
    }
  }

  const loadLocationInfo = async () => {
    try {
      const data = await dashboardApi.location.fetch()
      if (data) {
        setLocation(data)
        setEditLocation(data)
      } else {
        // No data exists yet
        setLocation(null)
        setEditLocation({
          mapLink: "",
          createdAt: "",
          updatedAt: ""
        })
      }
    } catch (err) {
      console.error("Error loading location info:", err)
    }
  }

  const loadMessages = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await dashboardApi.contactMessages.list()
      const transformedMessages = response.messages.map(msg => 
        transformMessage(msg, messageStatus[msg.id] || "new")
      )
      setMessages(transformedMessages)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load messages")
      console.error("Error loading messages:", err)
    } finally {
      setLoading(false)
    }
  }

  const startEdit = () => {
    if (contact) {
      setEditData({ ...contact })
    }
    if (location) {
      setEditLocation({ ...location })
    }
    setIsEditing(true)
  }

  const saveEdit = async () => {
    // Validate required fields
    if (!editData.address.trim() || !editData.phone.trim() || !editData.email.trim()) {
      showNotification("Please fill in all required fields (address, phone, email)", "error")
      return
    }

    if (!editLocation.mapLink.trim()) {
      showNotification("Map link is required", "error")
      return
    }

    setIsSaving(true)
    setContactInfoError(null)

    try {
      // Save contact info
      const hasExistingContact = contact !== null
      const savedContact = await dashboardApi.contactInfo.save(
        {
          address: editData.address.trim(),
          phone: editData.phone.trim(),
          email: editData.email.trim(),
        },
        hasExistingContact
      )

      // Save location info
      const hasExistingLocation = location !== null
      const savedLocation = await dashboardApi.location.save(
        {
          mapLink: editLocation.mapLink.trim(),
        },
        hasExistingLocation
      )

      setContact({
        phone: savedContact.phone,
        email: savedContact.email,
        address: savedContact.address,
        mapLink: ""
      })
      setLocation(savedLocation)
      setIsEditing(false)
      showNotification("Contact information updated successfully!", "success")
    } catch (err: any) {
      // Handle validation errors from backend
      if (err?.response?.errors && Array.isArray(err.response.errors)) {
        const errorMessages = err.response.errors.map((e: any) => `${e.field}: ${e.message}`).join(", ")
        showNotification(errorMessages || err.response.message || "Validation failed", "error")
      } else if (err?.response?.message) {
        showNotification(err.response.message, "error")
      } else if (err instanceof Error) {
        showNotification(err.message || "Failed to save contact information", "error")
      } else {
        showNotification("Failed to save contact information", "error")
      }
    } finally {
      setIsSaving(false)
    }
  }

  const cancelEdit = () => {
    setIsEditing(false)
    // Reset to original values
    if (contact) {
      setEditData({ ...contact })
    }
    if (location) {
      setEditLocation({ ...location })
    }
  }

  // Show notification
  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" })
    }, 3000)
  }

  // Handle phone number change
  const handlePhoneChange = (value: string | undefined) => {
    if (value) {
      setEditData({ ...editData, phone: value })
    }
  }

  // Mark message as read
  const markAsRead = (id: string) => {
    // Update message status
    setMessageStatus(prev => {
      const updated: Record<string, "new" | "read" | "replied"> = { ...prev, [id]: "read" }
      return updated
    })
    // Update messages array
    setMessages(prevMessages => 
      prevMessages.map(msg => 
        msg.id === id ? { ...msg, status: "read" as const } : msg
      )
    )
    showNotification("Message marked as read", "success")
  }

  // Mark message as replied
  const markAsReplied = (id: string) => {
    setMessageStatus(prev => ({ ...prev, [id]: "replied" }))
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: "replied" as const } : msg
    ))
  }

  // Delete message
  const deleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) {
      return
    }

    setIsDeleting(id)
    try {
      await dashboardApi.contactMessages.delete([id])
      setMessages(messages.filter(msg => msg.id !== id))
      const newStatus = { ...messageStatus }
      delete newStatus[id]
      setMessageStatus(newStatus)
      showNotification("Message deleted successfully", "success")
    } catch (err) {
      showNotification(err instanceof Error ? err.message : "Failed to delete message", "error")
    } finally {
      setIsDeleting(null)
    }
  }

  // Start replying to a message
  const startReply = (message: ContactMessage) => {
    setReplyingTo(message.id)
    setReplySubject(`Re: ${message.subject}`)
    setReplyContent(`Dear ${message.name},\n\nThank you for your message. `)
    setShowReplyModal(true)
    markAsRead(message.id)
  }

  // Close reply modal
  const closeReplyModal = () => {
    setShowReplyModal(false)
    setReplyingTo(null)
    setReplyContent("")
    setReplySubject("")
  }

  // Send reply
  const sendReply = () => {
    if (!replyingTo || !replyContent.trim()) {
      showNotification("Please write a reply message", "error")
      return
    }

    const newReply: Reply = {
      id: Date.now().toString(),
      messageId: replyingTo,
      content: replyContent,
      createdAt: new Date().toISOString().split("T")[0],
      sent: true
    }

    setReplies([...replies, newReply])
    markAsReplied(replyingTo)
    
    // In a real app, you would send the email here
    const message = messages.find(m => m.id === replyingTo)
    console.log("Sending reply to:", message?.email)
    console.log("Subject:", replySubject)
    console.log("Content:", replyContent)

    // Close modal and reset
    closeReplyModal()
    showNotification("Reply sent successfully!", "success")
  }

  // Get replies for a message
  const getRepliesForMessage = (messageId: string) => {
    return replies.filter(reply => reply.messageId === messageId)
  }

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500"
      case "read": return "bg-gray-500"
      case "replied": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  // Get status text
  const getStatusText = (status: string) => {
    switch (status) {
      case "new": return "New"
      case "read": return "Read"
      case "replied": return "Replied"
      default: return "Unknown"
    }
  }

  // Count unread messages - use useMemo to ensure it updates when messageStatus or messages change
  const unreadCount = messages.filter(msg => {
    // Check messageStatus first, then fall back to message.status, then default to "new"
    const status = messageStatus[msg.id] || msg.status || "new"
    return status === "new"
  }).length

  // Get current message being replied to
  const currentMessage = replyingTo ? messages.find(m => m.id === replyingTo) : null

  return (
    <div className="space-y-6">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center space-x-2 p-4 rounded-lg shadow-lg border transition-all duration-300 ${
          notification.type === "success" 
            ? "bg-green-50 border-green-200 text-green-800" 
            : "bg-red-50 border-red-200 text-red-800"
        }`}>
          <CheckCircle className={`h-5 w-5 ${
            notification.type === "success" ? "text-green-600" : "text-red-600"
          }`} />
          <span className="font-medium">{notification.message}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setNotification({ ...notification, show: false })}
            className={`h-6 w-6 p-0 ${
              notification.type === "success" 
                ? "text-green-600 hover:bg-green-100" 
                : "text-red-600 hover:bg-red-100"
            }`}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Contact</h2>
          <p className="text-muted-foreground">Manage contact information and customer messages</p>
        </div>
        {activeTab === "information" && !isEditing && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                loadContactInfo()
                loadLocationInfo()
              }}
              disabled={loadingContactInfo}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loadingContactInfo ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button onClick={startEdit} className="bg-[#987a34] text-white hover:bg-[#7a6029]">
              <Edit2 className="h-4 w-4 mr-2" /> Edit
            </Button>
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("information")}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "information"
                ? "border-[#987a34] text-[#987a34]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Contact Information
            </div>
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors relative ${
              activeTab === "messages"
                ? "border-[#987a34] text-[#987a34]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Messages
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Contact Information Tab */}
      {activeTab === "information" && (
        <div className="space-y-4">
          {contactInfoError && (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <p>{contactInfoError}</p>
                <Button variant="outline" size="sm" onClick={loadContactInfo} className="ml-auto">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Retry
                </Button>
              </div>
            </div>
          )}

          {loadingContactInfo ? (
            <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Contact Information */}
              <div className="space-y-4">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Address</CardTitle>
                    <CardDescription>Physical office location</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Textarea
                        value={editData.address}
                        onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                        className="w-full p-2 bg-background border border-input rounded text-foreground resize-none h-20"
                        placeholder="Enter your business address"
                      />
                    ) : (
                      <p className="text-foreground">{contact?.address || "No address set yet"}</p>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Phone</CardTitle>
                    <CardDescription>Primary contact number</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <div className="custom-phone-input-container">
                        <PhoneInput
                          international
                          defaultCountry="US"
                          value={editData.phone}
                          onChange={handlePhoneChange}
                          className="custom-phone-input"
                        />
                      </div>
                    ) : (
                      <p className="text-lg font-mono text-foreground">{contact?.phone || "No phone number set yet"}</p>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Email</CardTitle>
                    <CardDescription>Main business email</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        className="w-full p-2 bg-background border border-input rounded text-foreground"
                        placeholder="Enter your business email"
                      />
                    ) : (
                      <p className="text-lg font-mono text-foreground">{contact?.email || "No email set yet"}</p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Map Link and Additional Info */}
              <div className="space-y-4">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Map Link</CardTitle>
                    <CardDescription>Google Maps or location URL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Input
                        type="url"
                        value={editLocation.mapLink}
                        onChange={(e) => setEditLocation({ ...editLocation, mapLink: e.target.value })}
                        className="w-full p-2 bg-background border border-input rounded text-foreground"
                        placeholder="Enter Google Maps URL"
                      />
                    ) : location?.mapLink ? (
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground break-all">{location.mapLink}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="w-full"
                        >
                          <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
                            Open Map
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <p className="text-muted-foreground italic">No map link set yet</p>
                    )}
                  </CardContent>
                </Card>

                {location && (
                  <Card className="border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-foreground">Last Updated</CardTitle>
                      <CardDescription>Information update history</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span className="text-foreground">{new Date(location.updatedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Created:</span>
                          <span className="text-foreground">{new Date(location.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Save/Cancel Buttons */}
                {isEditing && (
                  <Card className="border-border bg-card">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground text-center">
                          Save or cancel your changes
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" onClick={cancelEdit} className="flex-1" disabled={isSaving}>
                            <X className="h-4 w-4 mr-2" /> Cancel
                          </Button>
                          <Button onClick={saveEdit} disabled={isSaving} className="flex-1 bg-[#345143] text-white hover:bg-[#2a4037]">
                            {isSaving ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <Save className="h-4 w-4 mr-2" /> Save Changes
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Contact Messages Tab */}
      {activeTab === "messages" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Customer Messages ({messages.length})
              </h3>
              <p className="text-sm text-muted-foreground">
                Manage inquiries and messages from customers
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={loadMessages}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>

          {error && (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <p>{error}</p>
                <Button variant="outline" size="sm" onClick={loadMessages} className="ml-auto">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Retry
                </Button>
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{message.name}</h4>
                        <p className="text-sm text-muted-foreground">{message.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(message.status)}`}>
                        {getStatusText(message.status)}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {message.createdAt}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{message.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{message.subject}</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-foreground text-sm leading-relaxed">{message.message}</p>
                    </div>

                    {/* Show existing replies */}
                    {getRepliesForMessage(message.id).map((reply) => (
                      <div key={reply.id} className="bg-green-50 border border-green-200 rounded-lg p-4 ml-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Send className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">Your Reply</span>
                          <span className="text-xs text-green-600">{reply.createdAt}</span>
                        </div>
                        <p className="text-green-900 text-sm leading-relaxed whitespace-pre-wrap">
                          {reply.content}
                        </p>
                      </div>
                    ))}

                    <div className="flex justify-end space-x-2 pt-2">
                      {message.status === "new" && (
                        <Button variant="outline" size="sm" onClick={() => markAsRead(message.id)}>
                          Mark as Read
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => startReply(message)}
                        className={message.status === "replied" ? "bg-green-50 text-green-700 border-green-200" : ""}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {message.status === "replied" ? "Reply Again" : "Reply"}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => deleteMessage(message.id)}
                        disabled={isDeleting === message.id}
                        className="text-destructive border-destructive/20 hover:bg-destructive/10"
                      >
                        {isDeleting === message.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Delete"
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {messages.length === 0 && !loading && (
              <Card className="border-border bg-card">
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Messages Yet</h3>
                  <p className="text-muted-foreground">Customer messages will appear here when they contact you through your website.</p>
                </CardContent>
              </Card>
            )}
            </div>
          )}
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && currentMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Reply to Message</h3>
                <p className="text-sm text-muted-foreground">
                  Replying to: {currentMessage.name} ({currentMessage.email})
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeReplyModal}
                className="h-8 w-8 p-0"
              >
                <CloseIcon className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
              {/* Original Message Preview */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Original Message</h4>
                <div className="text-sm text-foreground space-y-2">
                  <p><strong>From:</strong> {currentMessage.name} &lt;{currentMessage.email}&gt;</p>
                  <p><strong>Subject:</strong> {currentMessage.subject}</p>
                  <p><strong>Date:</strong> {currentMessage.createdAt}</p>
                  <div className="mt-2 pt-2 border-t border-border">
                    <p className="text-foreground">{currentMessage.message}</p>
                  </div>
                </div>
              </div>

              {/* Reply Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    value={replySubject}
                    onChange={(e) => setReplySubject(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Reply
                  </label>
                  <Textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="w-full min-h-[200px] resize-vertical"
                    placeholder="Type your reply here..."
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-2 p-6 border-t border-border bg-muted/20">
              <Button variant="outline" onClick={closeReplyModal}>
                Cancel
              </Button>
              <Button onClick={sendReply} className="bg-[#345143] text-white hover:bg-[#2a4037]">
                <Send className="h-4 w-4 mr-2" />
                Send Reply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}