export interface HeroSection {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface Service {
  id: string
  icon: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  description: string
  photo?: string | null
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  name: string
  description: string
  link?: string | null
  photo?: string | null
  createdAt: string
  updatedAt: string
}

export interface ContactInfo {
  id: string
  address: string
  phone: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface LocationInfo {
  id: string
  mapLink: string
  createdAt: string
  updatedAt: string
}

export interface ContactMessage {
  id: string
  email: string
  message: string
  createdAt: string
}

export interface AboutPage {
  id: string
  mission: string
  vision: string
  createdAt: string
  updatedAt: string
}

export interface System {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export interface ContactMessagesResponse {
  messages: ContactMessage[]
  pagination: PaginationMeta
}

interface ApiResponse<T> {
  message?: string
  data: T
}

interface MessageResponse {
  message: string
}

type HeroPayload = Pick<HeroSection, "title" | "description">
type ServicePayload = Pick<Service, "icon" | "name" | "description">
type TeamMemberPayload = Pick<TeamMember, "name" | "position" | "description" | "photo">
type ProjectPayload = Pick<Project, "name" | "description" | "link" | "photo">
type ContactInfoPayload = Pick<ContactInfo, "address" | "phone" | "email">
type LocationPayload = Pick<LocationInfo, "mapLink">
type AboutPayload = Pick<AboutPage, "mission" | "vision">
type SystemPayload = Pick<System, "name" | "description">

async function requestJSON<T>(input: string, init?: RequestInit): Promise<T> {
  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    credentials: "include",
  })

  const text = await response.text()
  const data = text ? JSON.parse(text) : null

  if (!response.ok) {
    // Create an error with the full response data for better error handling
    const error = new Error(data?.message ?? `Request failed with status ${response.status}`) as Error & { response?: any }
    error.response = data
    throw error
  }

  return data as T
}

export const dashboardApi = {
  hero: {
    fetch: () => requestJSON<HeroSection | null>("/api/dashboard/hero"),
    save: (payload: HeroPayload, hasExisting: boolean) =>
      requestJSON<ApiResponse<HeroSection>>("/api/dashboard/hero", {
        method: hasExisting ? "PUT" : "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    delete: (id: string) =>
      requestJSON<MessageResponse>(`/api/dashboard/hero/${id}`, { method: "DELETE" }),
  },
  services: {
    list: () => requestJSON<Service[]>("/api/dashboard/services"),
    create: (payload: ServicePayload) =>
      requestJSON<ApiResponse<Service>>("/api/dashboard/services", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    update: (id: string, payload: ServicePayload) =>
      requestJSON<ApiResponse<Service>>(`/api/dashboard/services/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    delete: (id: string) =>
      requestJSON<MessageResponse>(`/api/dashboard/services/${id}`, { method: "DELETE" }),
  },
  team: {
    list: () => requestJSON<TeamMember[]>("/api/dashboard/team-members"),
    create: (payload: TeamMemberPayload) =>
      requestJSON<ApiResponse<TeamMember>>("/api/dashboard/team-members", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    update: (id: string, payload: TeamMemberPayload) =>
      requestJSON<ApiResponse<TeamMember>>(`/api/dashboard/team-members/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    delete: (id: string) =>
      requestJSON<MessageResponse>(`/api/dashboard/team-members/${id}`, { method: "DELETE" }),
  },
  projects: {
    list: () => requestJSON<Project[]>("/api/dashboard/projects"),
    create: (payload: ProjectPayload) =>
      requestJSON<ApiResponse<Project>>("/api/dashboard/projects", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    update: (id: string, payload: ProjectPayload) =>
      requestJSON<ApiResponse<Project>>(`/api/dashboard/projects/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    delete: (id: string) =>
      requestJSON<MessageResponse>(`/api/dashboard/projects/${id}`, { method: "DELETE" }),
  },
  contactInfo: {
    fetch: () => requestJSON<ContactInfo | null>("/api/dashboard/contact-info"),
    save: (payload: ContactInfoPayload, hasExisting: boolean) =>
      requestJSON<ApiResponse<ContactInfo>>("/api/dashboard/contact-info", {
        method: hasExisting ? "PUT" : "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
  },
  location: {
    fetch: () => requestJSON<LocationInfo | null>("/api/dashboard/location"),
    save: (payload: LocationPayload, hasExisting: boolean) =>
      requestJSON<ApiResponse<LocationInfo>>("/api/dashboard/location", {
        method: hasExisting ? "PUT" : "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
  },
  contactMessages: {
    list: (params?: { page?: number; limit?: number; email?: string; sortBy?: string; sortOrder?: string }) => {
      const search = new URLSearchParams()
      if (params?.page) search.set("page", String(params.page))
      if (params?.limit) search.set("limit", String(params.limit))
      if (params?.email) search.set("email", params.email)
      if (params?.sortBy) search.set("sortBy", params.sortBy)
      if (params?.sortOrder) search.set("sortOrder", params.sortOrder)

      const query = search.toString()
      const url = query ? `/api/dashboard/contact-messages?${query}` : "/api/dashboard/contact-messages"

      return requestJSON<ContactMessagesResponse>(url)
    },
    delete: (ids: string[]) =>
      requestJSON<{ message: string; count: number }>("/api/dashboard/contact-messages", {
        method: "DELETE",
        body: JSON.stringify({ ids }),
      }),
  },
  about: {
    fetch: () => requestJSON<AboutPage | null>("/api/dashboard/about"),
    save: (payload: AboutPayload, hasExisting: boolean) =>
      requestJSON<ApiResponse<AboutPage>>("/api/dashboard/about", {
        method: hasExisting ? "PUT" : "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
  },
  systems: {
    list: () => requestJSON<System[]>("/api/dashboard/systems"),
    create: (payload: SystemPayload) =>
      requestJSON<ApiResponse<System>>("/api/dashboard/systems", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    update: (id: string, payload: SystemPayload) =>
      requestJSON<ApiResponse<System>>(`/api/dashboard/systems/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      }).then((res) => res.data),
    delete: (id: string) =>
      requestJSON<MessageResponse>(`/api/dashboard/systems/${id}`, { method: "DELETE" }),
  },
}

