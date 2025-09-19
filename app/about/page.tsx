import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            About <span className="text-gradient-brand">Afri Tech Group</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering African excellence in technology, finance, and international trade. Founded in 2025, we are
            committed to driving sustainable growth and innovation across the continent.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower African businesses and communities through innovative technology solutions, strategic
                  financial services, and sustainable international trade partnerships that drive economic growth and
                  digital transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's leading technology and business solutions conglomerate, recognized globally for
                  excellence, innovation, and our commitment to sustainable development across diverse industries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Innovation & Excellence</li>
                  <li>• Integrity & Transparency</li>
                  <li>• Sustainable Growth</li>
                  <li>• Community Impact</li>
                  <li>• Cultural Respect</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Our Growth Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to continental leadership - our story of innovation and expansion.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-8 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2025</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">Foundation & Technology Focus</h3>
                <p className="text-muted-foreground">
                  Afri Tech Group PLC was established in 2025 with a focus on providing cutting-edge software
                  development and digital solutions to African businesses, marking the beginning of our journey to
                  transform the continent's technology landscape.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2026</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">Financial Services Expansion</h3>
                <p className="text-muted-foreground">
                  Planned expansion into financial consulting, investment banking, and audit services, positioning
                  ourselves to become a comprehensive business solutions provider across Africa.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2027</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">International Trade Division</h3>
                <p className="text-muted-foreground">
                  Strategic launch of our import/export division, facilitating trade in agriculture, industrial goods,
                  electronics, and raw materials across Africa and international markets.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2028</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">Multi-Industry Expansion</h3>
                <p className="text-muted-foreground">
                  Ambitious expansion into real estate, manufacturing, mining, and healthcare sectors, establishing
                  ourselves as Africa's premier technology-driven conglomerate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary leaders driving Afri Tech Group's mission across the continent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Mr. Harun Beshir</h3>
              <p className="text-primary font-medium mb-2">Chief Executive Officer</p>
              <p className="text-sm text-muted-foreground">
                Visionary leader driving Afri Tech Group's strategic growth and innovation across technology, finance,
                and international trade sectors.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Mr. Fuad Kedir</h3>
              <p className="text-primary font-medium mb-2">Chief Financial Officer</p>
              <p className="text-sm text-muted-foreground">
                Financial strategist with expertise in investment banking, audit, and international trade finance,
                ensuring sustainable growth and fiscal excellence.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Mr. Natnael Solomon</h3>
              <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
              <p className="text-sm text-muted-foreground">
                Technology innovator specializing in scalable software solutions and digital transformation strategies
                for African businesses.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Projects Planned</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/80">Initial Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-white/80">Target Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2025</div>
              <div className="text-white/80">Founded</div>
            </div>
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
