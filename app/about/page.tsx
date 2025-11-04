import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, Zap, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            About <span className="text-gradient-brand">AfriTech Group</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            A next-generation technology and innovation company dedicated to accelerating Africa's digital transformation.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We blend cutting-edge technology with deep local market knowledge to deliver smart, scalable solutions that empower businesses, governments, and communities across the continent.
          </p>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif mb-3">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To accelerate Africa's digital transformation by building accessible, secure, and scalable technology solutions that empower businesses, governments, and communities.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We believe technology should be a bridge to opportunity for everyone, not a privilege for a few. We're driven to enable local businesses to compete globally, empower communities with digital access, and build sustainable, inclusive technology for the future.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif mb-3">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To build Africa's digital backbone — a future where every individual, business, and institution can thrive in a connected, tech-driven world.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We envision a continent where technology is owned and created by Africans, where ideas born in Africa shape global industries. In the next decade, we aspire to be recognized as Africa's most trusted digital solutions powerhouse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">OUR TEAM</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate team of designers, developers, engineers, strategists, and innovators.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">in building</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">in communication</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Speed</h3>
              <p className="text-sm text-muted-foreground">in delivery</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Purpose</h3>
              <p className="text-sm text-muted-foreground">in innovation</p>
            </Card>
          </div>

          {/* Expertise Statement */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <p className="text-lg text-foreground text-center leading-relaxed max-w-4xl mx-auto">
              Our combined expertise allows us to <strong>handle projects of any scale from MVPs to enterprise platforms with precision and agility</strong>.
            </p>
          </Card>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving Africa's digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-24 h-24 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-1">Mr. Harun Beshir</h3>
              <p className="text-primary font-medium mb-3 text-sm">Chief Executive Officer</p>
              <p className="text-sm text-muted-foreground">
                Driving strategic growth and innovation across technology sectors.
              </p>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-24 h-24 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-1">Mr. Fuad Kedir</h3>
              <p className="text-primary font-medium mb-3 text-sm">Chief Financial Officer</p>
              <p className="text-sm text-muted-foreground">
                Financial strategist ensuring sustainable growth and fiscal excellence.
              </p>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-24 h-24 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-1">Mr. Natnael Solomon</h3>
              <p className="text-primary font-medium mb-3 text-sm">Chief Technology Officer</p>
              <p className="text-sm text-muted-foreground">
                Technology innovator specializing in scalable software solutions.
              </p>
            </Card>
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
