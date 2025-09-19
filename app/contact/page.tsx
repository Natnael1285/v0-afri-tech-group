import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Get In <span className="text-gradient-brand">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact our team of experts to discuss your technology, finance, or trade
            requirements. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Reach out to us through any of the following channels. Our team is available to assist you with your
                  inquiries and provide the support you need.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2">Headquarters</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="https://maps.app.goo.gl/uTRW38qNhCZv5wRN8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Click here for exact location
                        </a>
                        <br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+251911353887" className="hover:text-primary">
                          +251 911 353 887
                        </a>
                        <br />
                        <a href="tel:+251972446733" className="hover:text-primary">
                          +251 972 446 733
                        </a>
                        <br />
                        <a href="tel:+251929481206" className="hover:text-primary">
                          +251 929 481 206
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2">Email Address</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:afritech2050@gmail.com" className="hover:text-primary">
                          afritech2050@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 12:00 PM EAT
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="technology">Technology Solutions</option>
                        <option value="finance">Financial Services</option>
                        <option value="trade">Import/Export</option>
                        <option value="consulting">Business Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-brand hover:opacity-90">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">Visit our headquarters in Addis Ababa, Ethiopia.</p>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6177276513!2d38.7577605!3d9.0054496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMTkuNiJOIDM4wrA0NSczMC4wIkU!5e0!3m2!1sen!2set!4v1640000000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute bottom-4 right-4">
                <a href="https://maps.app.goo.gl/uTRW38qNhCZv5wRN8" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-brand hover:opacity-90 shadow-lg">Get Directions</Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Quick Contact</h2>
            <p className="text-muted-foreground">Choose the best way to reach us based on your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">General Inquiries</h3>
              <p className="text-muted-foreground mb-4">
                For general questions about our services and company information.
              </p>
              <Button variant="outline" className="bg-transparent">
                <a href="mailto:afritech2050@gmail.com">afritech2050@gmail.com</a>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Sales & Partnerships</h3>
              <p className="text-muted-foreground mb-4">
                Ready to start a project or explore partnership opportunities.
              </p>
              <Button variant="outline" className="bg-transparent">
                <a href="mailto:afritech2050@gmail.com">afritech2050@gmail.com</a>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-muted-foreground mb-4">Need help with existing services or technical assistance.</p>
              <Button variant="outline" className="bg-transparent">
                <a href="mailto:afritech2050@gmail.com">afritech2050@gmail.com</a>
              </Button>
            </Card>
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
