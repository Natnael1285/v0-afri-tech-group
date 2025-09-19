import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Users, Handshake, ArrowRight, Building } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-gradient-brand">Partners</span> &{" "}
            <span className="text-gradient-brand">Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building lasting relationships with leading organizations across Africa and beyond. Together, we're driving
            innovation and growth across multiple industries.
          </p>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Strategic Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Strategic Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver exceptional solutions and drive innovation across Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">Microsoft</div>
                <div className="text-xs text-muted-foreground">Technology Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">AWS</div>
                <div className="text-xs text-muted-foreground">Cloud Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">DBE</div>
                <div className="text-xs text-muted-foreground">Financial Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">DHL</div>
                <div className="text-xs text-muted-foreground">Logistics Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">Accenture</div>
                <div className="text-xs text-muted-foreground">Consulting Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">SAP</div>
                <div className="text-xs text-muted-foreground">Enterprise Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">Oracle</div>
                <div className="text-xs text-muted-foreground">Database Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">Salesforce</div>
                <div className="text-xs text-muted-foreground">CRM Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">IBM</div>
                <div className="text-xs text-muted-foreground">AI Partner</div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-sm">Google Cloud</div>
                <div className="text-xs text-muted-foreground">Cloud Partner</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the leaders who trust Afri Tech Group to drive their digital transformation and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Afri Tech Group transformed our entire banking infrastructure. Their mobile banking solution has
                  increased our customer engagement by 300% and streamlined our operations significantly."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Okonkwo</div>
                    <div className="text-sm text-muted-foreground">CEO, Unity Bank Nigeria</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "The financial consulting services provided by Afri Tech Group were instrumental in our successful
                  IPO. Their expertise in African markets is unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Michael Asante</div>
                    <div className="text-sm text-muted-foreground">CFO, Ghana Mining Corp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Their trade facilitation services opened new markets for our agricultural exports. We've seen a 40%
                  increase in international sales within the first year."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Fatima Diallo</div>
                    <div className="text-sm text-muted-foreground">Director, Ivory Coast Cocoa Cooperative</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "The ERP system they developed has revolutionized our operations. Real-time data access and automated
                  processes have improved our efficiency by 60%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">James Mwangi</div>
                    <div className="text-sm text-muted-foreground">Operations Manager, East Africa Logistics</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Outstanding service and deep understanding of the African market. Their investment advisory helped us
                  navigate complex regulatory environments successfully."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Amara Sesay</div>
                    <div className="text-sm text-muted-foreground">CEO, Sierra Leone Development Fund</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Their e-commerce platform has enabled us to reach customers across 15 African countries. The
                  technical support and ongoing optimization have been exceptional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">David Ochieng</div>
                    <div className="text-sm text-muted-foreground">Founder, AfriMart Online</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages of partnering with Afri Tech Group for your business growth and expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">Strategic Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Joint ventures and strategic partnerships that leverage our combined expertise and market presence.
              </p>
            </Card>

            <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">Market Access</h3>
              <p className="text-sm text-muted-foreground">
                Gain access to African markets through our extensive network and local market knowledge.
              </p>
            </Card>

            <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">Resource Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Share resources, expertise, and infrastructure to deliver superior solutions to our clients.
              </p>
            </Card>

            <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">Innovation Focus</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate on cutting-edge solutions and innovative approaches to complex business challenges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">Become Our Partner</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our network of successful partners and clients. Let's explore how we can work together to achieve
            mutual growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Schedule Meeting
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
