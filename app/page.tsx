import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, DollarSign, Globe, Building, Factory, Pickaxe, Heart } from "lucide-react"
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
                  Leading African technology and business solutions company, driving digital transformation across the
                  continent with cutting-edge software, financial services, and strategic partnerships.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Request a Quote
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
              Comprehensive solutions spanning technology, finance, and international trade to drive your business
              forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technology Services */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-serif">Technology Solutions</CardTitle>
                <CardDescription>Cutting-edge software development and digital transformation services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• App Development (Mobile & Web)</li>
                  <li>• Custom Software Solutions</li>
                  <li>• System Integration</li>
                  <li>• Web Applications</li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Finance Services */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-serif">Financial Services</CardTitle>
                <CardDescription>Professional financial consulting and investment banking solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Investment Banking</li>
                  <li>• Financial Consulting</li>
                  <li>• Accountancy Services</li>
                  <li>• Audit & Compliance</li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Import/Export Services */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-serif">Import & Export</CardTitle>
                <CardDescription>Strategic international trade and supply chain management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Agricultural Products</li>
                  <li>• Industrial Goods</li>
                  <li>• Electronics & Technology</li>
                  <li>• Raw Materials</li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary hover:text-primary/80 mt-4 font-medium"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold">Expanding Our Horizons</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're continuously growing to serve you better. Here's what's coming next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Real Estate</h3>
              <p className="text-sm text-muted-foreground mb-3">Property development and management solutions</p>
              <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                Coming Soon
              </span>
            </Card>

            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground mb-3">Industrial manufacturing and production services</p>
              <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                Coming Soon
              </span>
            </Card>

            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Pickaxe className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Mining</h3>
              <p className="text-sm text-muted-foreground mb-3">Sustainable mining and resource extraction</p>
              <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                Coming Soon
              </span>
            </Card>

            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground mb-3">Medical technology and healthcare solutions</p>
              <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                Coming Soon
              </span>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who trust Afri Tech Group for their technology, finance, and business
            needs across Africa and beyond.
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
              Schedule Consultation
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
                  <Link href="/services" className="hover:text-white">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Import/Export
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
                  <Link href="/careers" className="hover:text-white">
                    Careers
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
