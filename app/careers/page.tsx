import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, TrendingUp, Heart, Globe, Award, BookOpen, Coffee, Zap, ArrowRight } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Join Our <span className="text-gradient-brand">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of Africa's leading technology and business solutions company. Help us shape the future of
            innovation across the continent.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Why Choose Afri Tech Group?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, and meaningful impact across
              Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Career Growth</h3>
              <p className="text-muted-foreground">
                Accelerate your career with mentorship programs, skill development opportunities, and clear advancement
                paths.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Global Impact</h3>
              <p className="text-muted-foreground">
                Work on projects that transform businesses and communities across Africa and make a real difference in
                people's lives.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Innovation Culture</h3>
              <p className="text-muted-foreground">
                Be at the forefront of technology and business innovation with access to cutting-edge tools and
                methodologies.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Diverse Team</h3>
              <p className="text-muted-foreground">
                Join a multicultural team of talented professionals from across Africa and beyond, fostering creativity
                and collaboration.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Learning & Development</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities including conferences, certifications, and internal training programs.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible working arrangements, comprehensive benefits, and a supportive environment that values your
                well-being.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting opportunities to join our growing team and make your mark in African technology and
              business.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-xl">Senior Full-Stack Developer</CardTitle>
                    <CardDescription className="text-base">Technology Division</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary text-primary-foreground">Full-time</Badge>
                    <Badge variant="outline">Remote</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Lead the development of innovative web and mobile applications for our African clients. Work with
                    modern technologies including React, Node.js, and cloud platforms.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Lagos, Nigeria / Remote</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3+ years experience</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        TypeScript
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        AWS
                      </Badge>
                    </div>
                    <Button className="bg-gradient-brand hover:opacity-90">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-xl">Financial Analyst</CardTitle>
                    <CardDescription className="text-base">Finance Division</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary text-primary-foreground">Full-time</Badge>
                    <Badge variant="outline">On-site</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Support investment banking and financial consulting projects across Africa. Analyze market trends,
                    prepare financial models, and assist with client presentations.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Accra, Ghana</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>1-3 years experience</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Financial Modeling
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Excel
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Bloomberg
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        CFA
                      </Badge>
                    </div>
                    <Button className="bg-gradient-brand hover:opacity-90">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-xl">Trade Operations Manager</CardTitle>
                    <CardDescription className="text-base">Import/Export Division</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary text-primary-foreground">Full-time</Badge>
                    <Badge variant="outline">Hybrid</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Oversee international trade operations, manage supplier relationships, and ensure compliance with
                    import/export regulations across African markets.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>2-4 years experience</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Supply Chain
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Logistics
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Trade Finance
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        SAP
                      </Badge>
                    </div>
                    <Button className="bg-gradient-brand hover:opacity-90">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Internship Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Launch your career with our comprehensive internship programs designed to provide real-world experience
              and mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Technology Internship</CardTitle>
                <CardDescription>6-month program in software development and digital innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Full-stack development projects</li>
                  <li>• Mentorship from senior developers</li>
                  <li>• Exposure to latest technologies</li>
                  <li>• Potential for full-time offer</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Finance Internship</CardTitle>
                <CardDescription>4-month program in investment banking and financial analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Financial modeling training</li>
                  <li>• Client project participation</li>
                  <li>• Industry certifications</li>
                  <li>• Networking opportunities</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Trade Internship</CardTitle>
                <CardDescription>5-month program in international trade and supply chain management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Trade operations exposure</li>
                  <li>• Market research projects</li>
                  <li>• Cross-cultural experience</li>
                  <li>• Professional development</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the next step in your career journey. Explore our opportunities and become part of Africa's technology
            and business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              View All Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Submit Resume
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
