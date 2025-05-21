import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-[#0a3751] text-white mt-8">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Sign Up & Save</h3>
            <p className="text-sm">
              Get our best deals when you sign up for Zoro emails. Subscribe now and never miss a sale.
            </p>
            <div className="flex">
              <Input
                placeholder="Email Address"
                className="rounded-r-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-[#ff6d00] hover:bg-[#e56200] rounded-l-none">Sign Up</Button>
            </div>
            <div className="flex gap-2 mt-2">
              <Link href="#" className="text-white">
                <div className="h-6 w-6 bg-gray-600 flex items-center justify-center rounded">f</div>
              </Link>
              <Link href="#" className="text-white">
                <div className="h-6 w-6 bg-gray-600 flex items-center justify-center rounded">t</div>
              </Link>
              <Link href="#" className="text-white">
                <div className="h-6 w-6 bg-gray-600 flex items-center justify-center rounded">in</div>
              </Link>
              <Link href="#" className="text-white">
                <div className="h-6 w-6 bg-gray-600 flex items-center justify-center rounded">p</div>
              </Link>
              <Link href="#" className="text-white">
                <div className="h-6 w-6 bg-gray-600 flex items-center justify-center rounded">y</div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Information</h3>
            <Link href="#" className="text-sm hover:underline">
              About Us
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Careers
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Brands
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Resource Hub
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Sitemap
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Shipping</h3>
            <Link href="#" className="text-sm hover:underline">
              Shipping Information
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Returns
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Payments
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Taxes
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Track My Order
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Services</h3>
            <Link href="#" className="text-sm hover:underline">
              Customer Service
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Business Accounts
            </Link>
            <Link href="#" className="text-sm hover:underline">
              FAQs
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Zoro Terms
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Zoro Cares
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Participate in Research
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Connect</h3>
            <p className="text-sm">Customer Service Hours Mon-Fri 7am-7pm</p>
            <p className="text-sm">Phone: (855) 289-9676</p>
            <Link href="#" className="text-sm hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-xs">
          <div className="flex justify-between items-center">
            <div>© 2011-2023 Zoro Tools, Inc. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Access
              </Link>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Your Privacy Choices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
