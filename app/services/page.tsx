import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  DollarSign,
  Globe,
  Building,
  Factory,
  Pickaxe,
  Heart,
  Smartphone,
  Monitor,
  Settings,
  Database,
  TrendingUp,
  Calculator,
  FileText,
  Shield,
  Wheat,
  Cpu,
  Package,
  Zap,
  ArrowRight,
  Wrench,
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
            Comprehensive solutions spanning technology, finance, international trade, and automotive services. We
            deliver excellence across every service we provide.
          </p>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Technology Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge software development and digital transformation services to modernize your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">App Development</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• iOS & Android Apps</li>
                <li>• React Native</li>
                <li>• Flutter Development</li>
                <li>• App Store Optimization</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Website Development</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Modern, responsive websites that drive engagement and conversions.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Corporate Websites</li>
                <li>• E-commerce Platforms</li>
                <li>• CMS Development</li>
                <li>• SEO Optimization</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">System Integration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Seamless integration of business systems and third-party services.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• API Development</li>
                <li>• Legacy System Migration</li>
                <li>• Cloud Integration</li>
                <li>• Data Synchronization</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Software Solutions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Custom software tailored to your specific business requirements.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Enterprise Software</li>
                <li>• Database Design</li>
                <li>• Business Intelligence</li>
                <li>• Process Automation</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Financial Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional financial consulting and investment banking solutions for sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Investment Banking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Strategic financial advisory and capital raising services.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Mergers & Acquisitions</li>
                <li>• Capital Markets</li>
                <li>• IPO Advisory</li>
                <li>• Debt Financing</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Financial Consulting</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Expert financial planning and business strategy consulting.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Financial Planning</li>
                <li>• Risk Management</li>
                <li>• Investment Strategy</li>
                <li>• Business Valuation</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Accountancy</h3>
              <p className="text-sm text-muted-foreground mb-4">Comprehensive accounting and bookkeeping services.</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Financial Reporting</li>
                <li>• Tax Planning</li>
                <li>• Payroll Management</li>
                <li>• Budget Analysis</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Audit Services</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Independent audit and assurance services for compliance.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Financial Audits</li>
                <li>• Internal Controls</li>
                <li>• Compliance Review</li>
                <li>• Risk Assessment</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Import & Export Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Import & Export</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic international trade and supply chain management across diverse product categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wheat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Agriculture</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Premium agricultural products and commodities trading.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Cash Crops</li>
                <li>• Food Products</li>
                <li>• Organic Produce</li>
                <li>• Agricultural Equipment</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Industrial Goods</h3>
              <p className="text-sm text-muted-foreground mb-4">Heavy machinery and industrial equipment solutions.</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Manufacturing Equipment</li>
                <li>• Construction Materials</li>
                <li>• Industrial Tools</li>
                <li>• Safety Equipment</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Electronics</h3>
              <p className="text-sm text-muted-foreground mb-4">Latest technology and electronic components trading.</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Consumer Electronics</li>
                <li>• Computer Hardware</li>
                <li>• Telecommunications</li>
                <li>• Electronic Components</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Raw Materials</h3>
              <p className="text-sm text-muted-foreground mb-4">Essential raw materials for various industries.</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Metals & Minerals</li>
                <li>• Chemical Products</li>
                <li>• Energy Resources</li>
                <li>• Textile Materials</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Garage Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Garage Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-profile garage services specializing in heavy machinery and vehicle maintenance, repair, and
              servicing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Heavy Machinery</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Specialized maintenance and repair for construction and industrial equipment.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Excavators & Bulldozers</li>
                <li>• Cranes & Loaders</li>
                <li>• Agricultural Equipment</li>
                <li>• Mining Machinery</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Commercial Vehicles</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete maintenance solutions for trucks, buses, and commercial fleets.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Heavy Duty Trucks</li>
                <li>• Commercial Buses</li>
                <li>• Delivery Vehicles</li>
                <li>• Fleet Management</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Specialized Repairs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Expert repair services for hydraulic systems, engines, and transmissions.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Engine Overhaul</li>
                <li>• Hydraulic Systems</li>
                <li>• Transmission Repair</li>
                <li>• Electrical Systems</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary bg-white">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Preventive Maintenance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scheduled maintenance programs to ensure optimal performance and longevity.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Regular Inspections</li>
                <li>• Oil & Filter Changes</li>
                <li>• Parts Replacement</li>
                <li>• Performance Optimization</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Expanding Our Horizons</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're continuously growing to serve you better. Here's what's coming next in our service portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-secondary/20 text-secondary">Coming Soon</Badge>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Real Estate</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Property development, management, and investment solutions across Africa.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 text-left">
                <li>• Property Development</li>
                <li>• Real Estate Investment</li>
                <li>• Property Management</li>
                <li>• Commercial Leasing</li>
              </ul>
            </Card>

            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-secondary/20 text-secondary">Coming Soon</Badge>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Industrial manufacturing and production services for various sectors.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 text-left">
                <li>• Industrial Production</li>
                <li>• Quality Control</li>
                <li>• Supply Chain Management</li>
                <li>• Product Development</li>
              </ul>
            </Card>

            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-secondary/20 text-secondary">Coming Soon</Badge>
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Pickaxe className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Mining</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sustainable mining and resource extraction with environmental responsibility.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 text-left">
                <li>• Mineral Extraction</li>
                <li>• Environmental Compliance</li>
                <li>• Resource Management</li>
                <li>• Mining Technology</li>
              </ul>
            </Card>

            <Card className="text-center p-6 bg-white/50 backdrop-blur-sm relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-secondary/20 text-secondary">Coming Soon</Badge>
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Medical technology and healthcare solutions for improved patient care.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 text-left">
                <li>• Medical Technology</li>
                <li>• Healthcare IT</li>
                <li>• Telemedicine</li>
                <li>• Health Analytics</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our comprehensive services can drive your business forward. Contact us today for a
            personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Request a Quote
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
                <li>
                  <a href="/services" className="hover:text-white">
                    Garage Services
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
