"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Cookie, Calendar, Mail, Globe, MapPin } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Legal Documents Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <a 
              href="#privacy-policy" 
              className="block cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('privacy-policy')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              <Card className="group text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-1 bg-gradient-to-br from-white to-muted/20 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Privacy Policy</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  How we collect, use, and protect your personal information and data.
                </p>
                <Badge variant="secondary" className="px-4 py-1.5">Last updated: November 2025</Badge>
              </Card>
            </a>

            <a 
              href="#terms-conditions" 
              className="block cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('terms-conditions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              <Card className="group text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-1 bg-gradient-to-br from-white to-muted/20 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Terms & Conditions</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">The terms governing your use of our services and website.</p>
                <Badge variant="secondary" className="px-4 py-1.5">Last updated: November 2025</Badge>
              </Card>
            </a>

            <a 
              href="#cookie-policy" 
              className="block cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('cookie-policy')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              <Card className="group text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-1 bg-gradient-to-br from-white to-muted/20 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Cookie className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Cookie Policy</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Information about how we use cookies and similar technologies.
                </p>
                <Badge variant="secondary" className="px-4 py-1.5">Last updated: November 2025</Badge>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy-policy" className="py-20 bg-gradient-to-b from-muted/30 to-background scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-2 border-border/50 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6 border-b border-border/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-serif text-3xl mb-2">Privacy Policy — AfriTech Group PLC</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Calendar className="h-4 w-4" />
                    Last updated: November 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  AfriTech Group PLC ("we", "our", or "us") values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.afritechplc.com) or use any of our products, services, or platforms.
                </p>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">1</span>
                      Information We Collect
                    </h3>
                    <p className="text-muted-foreground ml-10">We may collect:</p>
                    <ul className="text-muted-foreground ml-10 space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span><strong className="text-foreground">Personal information</strong> – such as your name, email, phone number, or company name when you contact us or sign up for services.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span><strong className="text-foreground">Usage data</strong> – including IP address, browser type, and website interaction analytics.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span><strong className="text-foreground">Project or business data</strong> – when you engage AfriTech for custom software or technology solutions.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">2</span>
                      How We Use Your Information
                    </h3>
                    <p className="text-muted-foreground ml-10">We use collected data to:</p>
                    <ul className="text-muted-foreground ml-10 space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Provide and improve our digital services.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Communicate with clients, respond to inquiries, and deliver proposals.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Analyze usage trends to enhance user experience.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Send updates, newsletters, or promotional materials (with consent).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">3</span>
                      Information Sharing
                    </h3>
                    <p className="text-muted-foreground ml-10 mb-3">
                      We do not sell or rent your data. We may share limited information with:
                    </p>
                    <ul className="text-muted-foreground ml-10 space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Trusted service providers assisting in hosting or analytics.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Legal authorities if required by law or to protect AfriTech's rights.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">4</span>
                      Data Security
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      We implement strict administrative, technical, and physical security measures to protect your information from unauthorized access or disclosure.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">5</span>
                      Cookies
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      Our website uses cookies to personalize content and analyze performance. You can manage cookie preferences through your browser settings.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">6</span>
                      Your Rights
                    </h3>
                    <p className="text-muted-foreground ml-10 mb-3">You have the right to:</p>
                    <ul className="text-muted-foreground ml-10 space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Request access to or correction of your personal data.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Withdraw consent to marketing communications.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Request deletion of your personal data when no longer needed.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">7</span>
                      Contact Us
                    </h3>
                    <p className="text-muted-foreground ml-10 mb-4">For any privacy-related concerns, contact us at:</p>
                    <div className="ml-10 space-y-3">
                      <a href="mailto:afritech2050@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group">
                        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground group-hover:text-primary transition-colors">afritech2050@gmail.com</span>
                      </a>
                      <a href="https://www.afritechplc.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group">
                        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground group-hover:text-primary transition-colors">www.afritechplc.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section id="terms-conditions" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-2 border-border/50 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6 border-b border-border/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-serif text-3xl mb-2">Terms & Conditions — AfriTech Group PLC</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Calendar className="h-4 w-4" />
                    Effective Date: November 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  Welcome to AfriTech Group PLC's website and services. By accessing our platforms, you agree to these Terms & Conditions.
                </p>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">1</span>
                      Use of Our Services
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      You agree to use AfriTech services lawfully and responsibly. Unauthorized access, data scraping, or misuse of our systems is strictly prohibited.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">2</span>
                      Intellectual Property
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      All materials on our platforms — including text, designs, logos, and code — are the property of AfriTech Group PLC. You may not reproduce or distribute them without written consent.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">3</span>
                      Client Projects
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      All software and digital solutions developed for clients remain confidential. Ownership terms are outlined in individual project contracts.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">4</span>
                      Limitation of Liability
                    </h3>
                    <p className="text-muted-foreground ml-10 mb-3">AfriTech shall not be liable for:</p>
                    <ul className="text-muted-foreground ml-10 space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Temporary website unavailability,</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Indirect damages caused by misuse of our platforms,</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Data loss beyond our reasonable control.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">5</span>
                      Modifications
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      We may update these terms occasionally. Updates will be posted on this page with the new effective date.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">6</span>
                      Governing Law
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      These Terms are governed by the laws of the Federal Democratic Republic of Ethiopia.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">7</span>
                      Contact
                    </h3>
                    <p className="text-muted-foreground ml-10 mb-4">For legal or contractual inquiries:</p>
                    <div className="ml-10 space-y-3">
                      <a href="mailto:afritech2050@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group">
                        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground group-hover:text-primary transition-colors">afritech2050@gmail.com</span>
                      </a>
                      <div className="flex items-center gap-3 p-3 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground">Mexico Sengatera, Traders Union Building, 8th Floor, Addis Ababa, Ethiopia.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookie-policy" className="py-20 bg-gradient-to-b from-muted/30 to-background scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-2 border-border/50 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6 border-b border-border/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Cookie className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-serif text-3xl mb-2">Cookie Policy — AfriTech Group PLC</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Calendar className="h-4 w-4" />
                    Last updated: November 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  AfriTech uses cookies to improve your browsing experience on www.afritechplc.com.
                </p>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">1</span>
                      What Are Cookies?
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      Cookies are small files stored on your device that help websites remember your preferences, improve performance, and track analytics.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">2</span>
                      Types of Cookies We Use
                    </h3>
                    <ul className="text-muted-foreground ml-10 space-y-3 list-none">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span><strong className="text-foreground">Essential Cookies:</strong> Enable basic website functionality.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span><strong className="text-foreground">Analytics Cookies:</strong> Help us understand user behavior to enhance performance.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span><strong className="text-foreground">Preference Cookies:</strong> Remember language or theme settings.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span><strong className="text-foreground">Marketing Cookies:</strong> Used only with your consent for relevant advertisements.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">3</span>
                      Managing Cookies
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      You can accept, decline, or remove cookies at any time through your browser settings. Note: disabling cookies may affect some site features.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">4</span>
                      Third-Party Cookies
                    </h3>
                    <p className="text-muted-foreground ml-10 leading-relaxed">
                      We may use trusted third-party services like Google Analytics or Meta Pixel for insights. These services have their own privacy policies.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">5</span>
                      Contact
                    </h3>
                    <p className="text-muted-foreground ml-10 mb-4">For cookie-related questions:</p>
                    <div className="ml-10">
                      <a href="mailto:afritech2050@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group w-fit">
                        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground group-hover:text-primary transition-colors">afritech2050@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  <a href="/services" className="hover:text-white transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Import/Export
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/partners" className="hover:text-white transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
               
                <li>
                  <a href="/legal" className="hover:text-white transition-colors">
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
