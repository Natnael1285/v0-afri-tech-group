import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { CometCard } from "@/components/ui/comet-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Code,
  Settings,
  Database,
  Wallet,
  Cloud,
  GraduationCap,
  Lightbulb,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-gradient-brand">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions spanning custom software development, fintech, ERP systems, IT consulting, training, infrastructure, and innovation labs. We deliver excellence across every service we provide.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* 1. Custom Software Development */}
            <div className="h-full">
            <CometCard>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-4">1. Custom Software Development</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Web Applications:</p>
                        <p>Modern, responsive, and secure platforms for business operations, e-commerce, and customer engagement.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Mobile Applications:</p>
                        <p>Android, iOS, and cross-platform apps with intuitive UI/UX for maximum adoption.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Enterprise Systems:</p>
                        <p>Large-scale solutions for complex workflows, data management, and operational efficiency.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CometCard>
            </div>

            {/* 2. Fintech Solutions */}
            <div className="h-full">
            <CometCard>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-4">2. Fintech Solutions</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Digital Wallets & Mobile Banking:</p>
                        <p>Seamless, secure, and accessible financial services for individuals and SMEs.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Payment Gateways:</p>
                        <p>Fast and reliable transaction processing across multiple channels.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Analytics & Reporting Dashboards:</p>
                        <p>Real-time insights into financial data for smarter decision-making.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Blockchain & Decentralized Finance Solutions:</p>
                        <p>Secure, transparent, and innovative platforms for modern finance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CometCard>
            </div>

            {/* 3. ERP & Business Systems */}
            <div className="h-full">
            <CometCard>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-4">3. ERP & Business Systems</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Inventory & Supply Chain Management:</p>
                        <p>Real-time tracking for improved logistics and inventory control.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">HR & Payroll Automation:</p>
                        <p>Simplify employee management, salary processing, and reporting.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CometCard>
            </div>

            {/* 4. IT Consulting & System Integration */}
            <div className="h-full">
            <CometCard>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-4">4. IT Consulting & System Integration</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Customer Relationship Management (CRM):</p>
                        <p>Tools to manage leads, sales, and client engagement efficiently.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Custom Dashboards & Analytics:</p>
                        <p>Real-time performance tracking for informed strategic decisions.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">IT Strategy & Architecture Planning:</p>
                        <p>Align technology with business goals.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">System Integration & API Development:</p>
                        <p>Connect software and platforms for seamless workflows.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Cloud Solutions & Migration:</p>
                        <p>Flexible, scalable cloud adoption for efficiency and security.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Cybersecurity & Risk Management:</p>
                        <p>Protect data, infrastructure, and operations from modern threats.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CometCard>
            </div>

            {/* 5. Training & Capacity Building */}
            <div className="h-full">
            <CometCard>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-4">5. Training & Capacity Building</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Digital Literacy & Technical Skills:</p>
                        <p>Ensuring staff can effectively use modern software and platforms.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Agile & Development Training:</p>
                        <p>Teaching modern software development, project management, and innovation practices.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Innovation & Problem Solving Workshops:</p>
                        <p>Building creative thinking to adapt in a fast-changing tech world.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CometCard>
            </div>

            {/* 6. Technology Infrastructure Development */}
            <div className="h-full">
            <CometCard>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-4">6. Technology Infrastructure Development</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Cloud Architecture & Hosting:</p>
                        <p>Scalable, secure, and reliable cloud solutions.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Networking & Security Systems:</p>
                        <p>Protect data and ensure uninterrupted operations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CometCard>
          </div>

            {/* 7. Innovation Labs & R&D */}
            <div className="h-full">
            <CometCard>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-4">7. Innovation Labs & R&D</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground mb-1">IoT & Smart Device Integration:</p>
                        <p>Enable innovative applications and automation.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Data Management & Analytics Infrastructure:</p>
                        <p>Organize and analyze data for informed decision-making.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Prototyping Emerging Technologies:</p>
                        <p>Test AI, blockchain, and cloud-based solutions for practical applications.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Local Solutions for Local Challenges:</p>
                        <p>Build tools that solve Africa-specific problems efficiently.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Incubation of New Concepts:</p>
                        <p>Experiment with ideas to create scalable, future-proof solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CometCard>
            </div>
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
                    Custom Software Development
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Fintech Solutions
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    ERP & Business Systems
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    IT Consulting
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
                  <a href="/careers" className="hover:text-white">
                    Careers
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
