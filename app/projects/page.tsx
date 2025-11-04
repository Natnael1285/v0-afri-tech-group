"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "NSAA Blog & Info Portal",
      client: "Nineteen Sixty-three African Aerospace PLC",
      description: "AfriTech developed a dynamic blog and content platform for NSAA, enabling them to showcase their work, projects, and innovations in African aerospace.",
      features: [
        "Interactive Blog Gallery: Share articles, news, and insights about aerospace and satellite technology.",
        "Company Info & Highlights: Clearly display NSAA's mission, vision, and ongoing initiatives.",
        "User-Friendly Navigation: Designed for both experts and the general public to explore easily.",
        "Scalable & Modern Tech Stack: Ensures the platform can grow as NSAA expands its reach.",
      ],
      impact: "The platform allows NSAA to communicate achievements, share expertise, and inspire stakeholders across the continent, positioning them as Africa's leader in aerospace and satellite development.",
      link: "https://aersospacemain.onrender.com/",
      badge: "Web Platform",
    },
    {
      id: 2,
      title: "Leave Management System",
      client: "Hope Enterprise College",
      description: "AfriTech developed a custom leave management platform for Hope Enterprise College, designed to simplify internal employee management and streamline HR operations.",
      features: [
        "Employee Leave Tracking: Monitor vacation, sick leave, and other absences in real-time.",
        "Automated Approval Workflows: Managers can approve or reject requests digitally, reducing paperwork.",
        "Attendance & Reporting: Generate insights into employee attendance trends and leave balances.",
        "User-Friendly Interface: Accessible via web for staff and management, making HR operations smoother.",
      ],
      impact: "The system increased operational efficiency, reduced manual HR errors, and improved employee satisfaction, enabling the college to focus on its core mission: education.",
      link: "https://lvms.heuc.edu.et/",
      badge: "Management System",
    },
    {
      id: 3,
      title: "Pharmacy Management System",
      client: "PharmaCare",
      description: "AfriTech developed a comprehensive pharmacy management system for PharmaCare, enabling full control over operations and inventory management.",
      features: [
        "Inventory Tracking: Monitor all medications in stock, including quantities and expiration dates.",
        "Automated Alerts: Receive notifications for out-of-stock or expired products.",
        "Purchase & Sales Management: Easily record medicine purchases, sales transactions, and updates in real-time.",
        "Integrated Reporting: Generate detailed reports on sales, stock levels, and product movements.",
        "User-Friendly Interface: Designed for pharmacy staff to manage operations efficiently and accurately.",
      ],
      impact: "The system reduced errors, optimized stock management, and improved operational efficiency, allowing PharmaCare to deliver reliable service and maintain regulatory compliance.",
      link: "https://pharmacy-managemet-system-15.onrender.com",
      badge: "Management System",
    },
    {
      id: 4,
      title: "Digital Marketing Platform",
      client: "Rentless Marketing",
      description: "AfriTech partnered with Rentless Marketing, a marketing agency helping businesses dominate their markets, to enhance their digital presence and campaign effectiveness.",
      features: [
        "Modern UI/UX Design: Clean, intuitive interface for clients and internal teams.",
        "Content Management: Flexible CMS for easy website and social media updates.",
        "Optimized Experience: Mobile-friendly, fast, and user-centric design.",
        "Campaign Tools: Integrated SEO, analytics, and lead generation features.",
      ],
      impact: "Improved client engagement, streamlined campaign management, and increased online visibility for Rentless Marketing and its clients.",
      link: "https://www.relentlessmkting.com/",
      badge: "Web Platform",
    },
    {
      id: 5,
      title: "Student Management System",
      client: "Hope Enterprise University College",
      description: "AfriTech is developing an AI-enhanced Student Management System to streamline academic and administrative processes at Hope Enterprise University College.",
      features: [
        "Smart Administration: Manage grades, exams, registration, attendance, and student records in one platform.",
        "AI-Enhanced Features: Automation and intelligent analytics for faster decisions.",
        "Optimized User Experience: Intuitive, responsive interface for students, faculty, and administrators.",
        "Comprehensive Management Tools: Dashboards, reports, notifications, and analytics for full oversight.",
      ],
      impact: "Simplifies university operations, reduces administrative workload, and empowers the university community with a smarter, technology-driven approach to student management.",
      badge: "AI-Enhanced System",
      ongoing: true,
    },
  ]

  const projectItems = projects.map((project) => ({
    id: project.id,
    content: (
      <Card className="h-full p-4 border border-border bg-card hover:shadow-lg transition-shadow">
        <div className="space-y-3">
          <div>
            <Badge className="bg-primary text-primary-foreground mb-2 text-xs">{project.badge}</Badge>
            <h3 className="text-lg font-serif font-bold mb-1 text-card-foreground">{project.title}</h3>
            <p className="text-xs text-muted-foreground">{project.client}</p>
            {project.ongoing && (
              <Badge variant="outline" className="mt-1 text-xs border-primary text-primary">
                Ongoing
              </Badge>
            )}
          </div>
          <p className="text-xs text-card-foreground line-clamp-3">{project.description}</p>
          <div>
            <p className="font-semibold text-xs mb-1 text-card-foreground">Impact:</p>
            <p className="text-[10px] text-muted-foreground line-clamp-3">{project.impact}</p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-xs"
            >
              View Project <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </Card>
    ),
  }))

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Our Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Innovative software solutions we've developed for businesses and institutions across Africa.
            </p>
          </div>

          <div className="h-[28rem] rounded-md flex flex-col antialiased bg-background items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={projectItems} direction="right" speed="slow" pauseOnHover={true} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who trust Afri Tech Group for their technology, finance, and business needs across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-secondary"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/images/logo.png" alt="Afri Tech Group" className="h-8 w-8" />
                <span className="font-serif text-lg font-bold">AFRI TECH GROUP PLC</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Empowering Africa through technology and innovation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <a href="/services" className="hover:text-white">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Import/Export
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/partners" className="hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="/legal" className="hover:text-white">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; 2025 Afri Tech Group PLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
