import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CometCard } from "@/components/ui/comet-card"
import { ArrowRight, Code, Wallet, Database, Settings, Cloud, GraduationCap, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                  Empowering Africa Through <span className="text-gradient-brand">Technology</span> &{" "}
                  <span className="text-gradient-brand">Innovation</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Leading African technology company, driving digital transformation across the
                  continent with cutting-edge software development, fintech solutions, ERP systems, IT consulting, and innovation labs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img src="/images/logo.png" alt="Afri Tech Group Logo" className="w-80 h-80 mx-auto animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions spanning custom software development, fintech, ERP systems, IT consulting, training, infrastructure, and innovation labs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Custom Software Development */}
            <CometCard>
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">Custom Software Development</CardTitle>
                  <CardDescription>Web, mobile, and enterprise solutions for modern businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Web Applications</li>
                    <li>• Mobile Applications (iOS & Android)</li>
                    <li>• Enterprise Systems</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </CometCard>

            {/* 2. Fintech Solutions */}
            <CometCard>
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">Fintech Solutions</CardTitle>
                  <CardDescription>Digital wallets, payment gateways, and blockchain solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Digital Wallets & Mobile Banking</li>
                    <li>• Payment Gateways</li>
                    <li>• Blockchain & DeFi Solutions</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </CometCard>

            {/* 3. ERP & Business Systems */}
            <CometCard>
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">ERP & Business Systems</CardTitle>
                  <CardDescription>Inventory, supply chain, and HR automation solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Inventory & Supply Chain Management</li>
                    <li>• HR & Payroll Automation</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </CometCard>

            {/* 4. IT Consulting & System Integration */}
            <CometCard>
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">IT Consulting & System Integration</CardTitle>
                  <CardDescription>CRM, cloud solutions, cybersecurity, and API development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• CRM & Custom Dashboards</li>
                    <li>• Cloud Solutions & Migration</li>
                    <li>• Cybersecurity & Risk Management</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </CometCard>

            {/* 5. Training & Capacity Building */}
            <CometCard>
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">Training & Capacity Building</CardTitle>
                  <CardDescription>Digital literacy, technical skills, and innovation workshops</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Digital Literacy & Technical Skills</li>
                    <li>• Agile & Development Training</li>
                    <li>• Innovation & Problem Solving Workshops</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </CometCard>

            {/* 6. Technology Infrastructure Development */}
            <CometCard>
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">Technology Infrastructure</CardTitle>
                  <CardDescription>Cloud architecture, hosting, and security systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cloud Architecture & Hosting</li>
                    <li>• Networking & Security Systems</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </CometCard>

            {/* 7. Innovation Labs & R&D */}
            <CometCard>
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">Innovation Labs & R&D</CardTitle>
                  <CardDescription>IoT, AI, blockchain prototyping and Africa-specific solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• IoT & Smart Device Integration</li>
                    <li>• Data Management & Analytics</li>
                    <li>• Prototyping Emerging Technologies</li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </CometCard>
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
                  <Link href="/services" className="hover:text-white">
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Fintech Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    ERP & Business Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
               
                <li>
                  <Link href="/legal" className="hover:text-white">
                    Legal
                  </Link>
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
