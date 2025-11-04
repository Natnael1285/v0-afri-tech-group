import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Code, Rocket, Lightbulb, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Why Partner With AfriTech Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">WHY PARTNER WITH AFRITECH</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages that make us the ideal technology partner for your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Expert Multidisciplinary Team</h3>
              <p className="text-muted-foreground">Design, engineering, strategy.</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">End-to-End Digital Solutions</h3>
              <p className="text-muted-foreground">From idea to launch and beyond.</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Innovation-Driven</h3>
              <p className="text-muted-foreground">Emerging technologies for future-proof systems.</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Client-Centered</h3>
              <p className="text-muted-foreground">We deliver what matters.</p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Sustainable Impact</h3>
              <p className="text-muted-foreground">Solutions built for long-term growth.</p>
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
