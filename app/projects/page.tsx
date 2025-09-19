import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-gradient-brand">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our successful projects across technology, finance, and international trade. Each project
            represents our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="default" className="px-4 py-2 bg-primary text-primary-foreground">
              All Projects
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              Technology
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              Finance
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              Import/Export
            </Badge>
          </div>
        </div>
      </section>

      {/* Technology Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Technology Solutions</h2>
            <p className="text-muted-foreground">
              Innovative software applications and digital platforms we've developed for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img
                  src="/images/agribank-mobile.png"
                  alt="AgriBank Mobile App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Mobile App</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">AgriBank Mobile App</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription>
                  Revolutionary mobile banking solution for agricultural financing across West Africa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Completed: December 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>50,000+ Active Users</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      React Native
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      MongoDB
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img
                  src="/images/ecotrade-platform.png"
                  alt="EcoTrade Platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Web Platform</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">EcoTrade Platform</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription>
                  B2B e-commerce platform connecting African exporters with global importers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Completed: November 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>2,500+ Registered Traders</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      PostgreSQL
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Stripe
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img
                  src="/images/financeflow-erp.png"
                  alt="FinanceFlow ERP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Enterprise Software</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">FinanceFlow ERP</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription>
                  Comprehensive ERP system for mid-size financial institutions across Africa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Completed: October 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>15 Financial Institutions</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Angular
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      .NET Core
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      SQL Server
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Finance & Trade Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Finance & Trade Solutions</h2>
            <p className="text-muted-foreground">
              Strategic consulting and trade facilitation services launching soon.
            </p>
          </div>

          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-12 shadow-lg">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Coming Soon</h3>
                  <p className="text-muted-foreground mb-6">
                    Our finance and trade solutions are currently in development. We're preparing comprehensive services
                    including investment banking, trade facilitation, and strategic consulting to help businesses across
                    Africa grow and expand globally.
                  </p>
                  <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                    Launching Q2 2026
                  </Badge>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Investment Banking & Consulting</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Import/Export Trade Facilitation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Strategic Business Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our portfolio of successful projects. Let's discuss how we can bring your vision to life with our
            expertise and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              View More Projects
            </Button>
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
