import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Cookie, Calendar } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Legal <span className="text-gradient-brand">Information</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to transparency and compliance. Review our policies and terms to understand how we protect
            your data and conduct business.
          </p>
        </div>
      </section>

      {/* Legal Documents Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Privacy Policy</h3>
              <p className="text-muted-foreground mb-4">
                How we collect, use, and protect your personal information and data.
              </p>
              <Badge variant="secondary">Last updated: January 2025</Badge>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Terms & Conditions</h3>
              <p className="text-muted-foreground mb-4">The terms governing your use of our services and website.</p>
              <Badge variant="secondary">Last updated: January 2025</Badge>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Cookie className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Cookie Policy</h3>
              <p className="text-muted-foreground mb-4">
                Information about how we use cookies and similar technologies.
              </p>
              <Badge variant="secondary">Last updated: January 2025</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-serif text-2xl">Privacy Policy</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Effective Date: January 1, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="font-serif text-lg font-semibold mb-3">1. Information We Collect</h3>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, contact us, or
                use our services. This may include your name, email address, phone number, company information, and any
                other information you choose to provide.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">2. How We Use Your Information</h3>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                send you technical notices and support messages, and communicate with you about products, services, and
                promotional offers.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">3. Information Sharing</h3>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information with trusted partners who
                assist us in operating our website and conducting our business.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">4. Data Security</h3>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">5. Your Rights</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to access, update, or delete your personal information. You may also opt out of
                certain communications from us. To exercise these rights, please contact us using the information
                provided below.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">6. Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@afritechgroup.com or
                write to us at 123 Technology Avenue, Victoria Island, Lagos, Nigeria.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-serif text-2xl">Terms & Conditions</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Effective Date: January 1, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="font-serif text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground mb-4">
                By accessing and using the services provided by Afri Tech Group PLC, you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                this service.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">2. Services Description</h3>
              <p className="text-muted-foreground mb-4">
                Afri Tech Group PLC provides technology solutions, financial services, and import/export facilitation.
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">3. User Responsibilities</h3>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of your account information and for all
                activities that occur under your account. You agree to notify us immediately of any unauthorized use of
                your account.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">4. Intellectual Property</h3>
              <p className="text-muted-foreground mb-4">
                All content, trademarks, and intellectual property on our website and in our services are owned by Afri
                Tech Group PLC or our licensors. You may not use, reproduce, or distribute any content without our
                written permission.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">5. Limitation of Liability</h3>
              <p className="text-muted-foreground mb-4">
                Afri Tech Group PLC shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of our services, even if we have been advised of the
                possibility of such damages.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">6. Governing Law</h3>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to
                its conflict of law provisions. Any disputes shall be resolved in the courts of Lagos State, Nigeria.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-serif text-2xl">Cookie Policy</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Effective Date: January 1, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="font-serif text-lg font-semibold mb-3">1. What Are Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They are widely used to make websites work more efficiently and provide information to website
                owners.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">2. How We Use Cookies</h3>
              <p className="text-muted-foreground mb-4">
                We use cookies to improve your browsing experience, analyze website traffic, personalize content, and
                remember your preferences. We also use cookies for security purposes and to provide social media
                features.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">3. Types of Cookies We Use</h3>
              <ul className="text-muted-foreground mb-4 list-disc pl-6">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors use our website</li>
                <li>Functional cookies: Remember your preferences and settings</li>
                <li>Marketing cookies: Used to deliver relevant advertisements</li>
              </ul>

              <h3 className="font-serif text-lg font-semibold mb-3">4. Managing Cookies</h3>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies through your browser settings. Please note that disabling certain
                cookies may affect the functionality of our website and your user experience.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">5. Third-Party Cookies</h3>
              <p className="text-muted-foreground mb-4">
                We may use third-party services such as Google Analytics, which may place cookies on your device. These
                third parties have their own privacy policies and cookie policies.
              </p>

              <h3 className="font-serif text-lg font-semibold mb-3">6. Updates to This Policy</h3>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                updated effective date. We encourage you to review this policy periodically.
              </p>
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
