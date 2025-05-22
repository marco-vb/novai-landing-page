import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Zap,
  BarChart3,
  Clock,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/novai-logo.svg"
              alt="nov.ai Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#product"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Product
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Log In
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                  Transform Customer Support with AI
                </h1>
                <p className="text-xl text-gray-600">
                  nov.ai develops AI-powered solutions that revolutionize how
                  businesses handle customer relations, support, and back office
                  operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6">
                    Request Demo
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-6">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                  <div className="absolute -top-4 -left-4 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    N.Eleven AI Assistant
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                      <p className="text-gray-800">
                        How can I reset my password?
                      </p>
                    </div>
                    <div className="bg-teal-100 rounded-lg p-4 ml-auto max-w-[80%]">
                      <p className="text-gray-800">
                        To reset your password, please click on the "Forgot
                        Password" link on the login page. You'll receive an
                        email with instructions to create a new password. If you
                        don't receive the email within 5 minutes, please check
                        your spam folder or contact our support team.
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 ml-auto italic">
                      Powered by N.Eleven
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Meet N.Eleven
              </h2>
              <p className="text-xl text-gray-600">
                An intelligent virtual assistant that revolutionizes customer
                support through AI-powered automation and context-aware
                responses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-teal-600" />
                    Instant Customer Support
                  </h3>
                  <p className="text-gray-600">
                    N.Eleven answers customer questions as soon as they arrive,
                    providing immediate support without delays.
                  </p>
                </div>

                <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-teal-600" />
                    Context-Aware Responses
                  </h3>
                  <p className="text-gray-600">
                    Leveraging a sophisticated RAG system, N.Eleven provides
                    personalized support by utilizing your company's
                    documentation and past tickets.
                  </p>
                </div>

                <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-teal-600" />
                    Improved Efficiency
                  </h3>
                  <p className="text-gray-600">
                    Reduce ticket volume and improve response times while
                    maintaining high-quality communication with your customers.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-100 to-teal-50 p-8 rounded-2xl shadow-lg">
                <div className="aspect-video bg-white rounded-lg shadow-sm p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/images/novai-logo.svg"
                        alt="nov.ai Logo"
                        width={100}
                        height={33}
                        className="h-8 w-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      N.Eleven
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Intelligent Virtual Assistant
                    </p>
                    <div className="inline-flex items-center justify-center bg-teal-600 text-white px-4 py-2 rounded-full text-sm">
                      <Clock className="mr-2 h-4 w-4" />
                      Responding in seconds, not hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Key Features & Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Discover how N.Eleven can transform your customer support
                operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Automated Responses
                </h3>
                <p className="text-gray-600">
                  Automatically handle repetitive inquiries, freeing up your
                  support team to focus on complex issues.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Personalized Support
                </h3>
                <p className="text-gray-600">
                  Deliver tailored responses based on customer history and
                  context for a more personalized experience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Analytics & Insights
                </h3>
                <p className="text-gray-600">
                  Gain valuable insights into customer inquiries and support
                  performance to continuously improve.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Why Businesses Choose N.Eleven
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Reduced Response Times
                    </h4>
                    <p className="text-gray-600">
                      Immediate responses to customer inquiries, 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Lower Support Costs
                    </h4>
                    <p className="text-gray-600">
                      Decrease operational expenses while improving service
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Increased Customer Satisfaction
                    </h4>
                    <p className="text-gray-600">
                      Faster, more accurate responses lead to happier customers
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Seamless Integration
                    </h4>
                    <p className="text-gray-600">
                      Works with your existing ticket management system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How N.Eleven Works
              </h2>
              <p className="text-xl text-gray-600">
                Seamlessly integrate AI-powered support into your existing
                workflow
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Integration
                </h3>
                <p className="text-gray-600">
                  Connect N.Eleven to your ticket management system and
                  knowledge base
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Learning
                </h3>
                <p className="text-gray-600">
                  N.Eleven analyzes your documentation and past support
                  interactions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Automation
                </h3>
                <p className="text-gray-600">
                  Customer inquiries are automatically answered with
                  context-aware responses
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Continuous Improvement
                </h3>
                <p className="text-gray-600">
                  The system learns from new interactions to improve future
                  responses
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-teal-600 to-sky-600 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl mb-8">
                Join the companies already using N.Eleven to provide exceptional
                customer experiences while reducing support costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Request Demo
                </Button>
                <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/novai-logo.svg"
                alt="nov.ai Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="mb-4">
                AI-powered solutions that transform how businesses handle
                customer relations and support.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    N.Eleven
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} nov.ai. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
