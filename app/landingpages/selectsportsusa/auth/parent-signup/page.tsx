'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function OrgSignupPage() {
  return (
    <div className="min-h-screen flex">
      

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Start Your Free Trial</h2>
            <p className="text-gray-500">No credit card required</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-4">
              <Input placeholder="Organization Name" />

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select organization type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="youth">Youth Sports Program</SelectItem>
                  <SelectItem value="academy">Sports Academy</SelectItem>
                  <SelectItem value="facility">Training Facility</SelectItem>
                  <SelectItem value="club">Club Team</SelectItem>
                </SelectContent>
              </Select>

              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>

              <Input type="email" placeholder="Work Email" />
              <Input type="tel" placeholder="Phone Number" />
            </div>

            <Button type="submit" className="w-full">Create Account</Button>

            <p className="text-sm text-center text-gray-500">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="underline">Terms</Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
            </p>
          </form>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Left Panel - Benefits */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white p-12 flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-8">90-Day Free Trial Includes:</h2>
          <ul className="space-y-6">
            {[
              "Full organization profile with photos and details",
              "Unlimited athlete connections",
              "Message center for parent communication",
              "Program listing in search results",
              "Analytics dashboard",
              "Mobile app access"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  )
}