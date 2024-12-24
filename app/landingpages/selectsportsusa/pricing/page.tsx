// app/pricing/page.tsx
'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container max-w-6xl mx-auto py-12">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-500">Choose the plan that's right for your organization</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan - Parents */}
        <Card>
          <CardHeader>
            <CardTitle>Parent Account</CardTitle>
            <CardDescription>For parents and athletes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">Free</div>
            <ul className="space-y-3 py-4">
              {[
                "Search organizations",
                "View program details",
                "Message programs",
                "Save favorites",
                "Track applications"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Sign Up Free</Button>
          </CardContent>
        </Card>

        {/* Basic Plan */}
        <Card className="border-blue-200 border-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Basic</CardTitle>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Popular</span>
            </div>
            <CardDescription>For single location programs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">$49<span className="text-lg text-gray-500">/mo</span></div>
            <ul className="space-y-3 py-4">
              {[
                "Organization profile",
                "Unlimited connections",
                "Message center",
                "Basic analytics",
                "Mobile app access",
                "Email support"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">Start 90-Day Trial</Button>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For multi-location organizations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">$99<span className="text-lg text-gray-500">/mo</span></div>
            <ul className="space-y-3 py-4">
              {[
                "Everything in Basic",
                "Multiple locations",
                "Advanced analytics",
                "Custom branding",
                "Priority support",
                "API access"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Start 90-Day Trial</Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 space-y-8">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              q: "What's included in the free trial?",
              a: "The 90-day free trial includes all features of our Basic plan, allowing you to fully experience the platform before choosing a paid plan."
            },
            {
              q: "Can I switch plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
            },
            {
              q: "Do I need a credit card for the trial?",
              a: "No, you don't need a credit card to start your 90-day free trial. We'll remind you before it ends to choose a plan."
            },
            {
              q: "What happens after the trial?",
              a: "After the trial, you can choose to continue with a paid plan or your account will be limited to basic features until you select a plan."
            }
          ].map((faq, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="text-gray-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}