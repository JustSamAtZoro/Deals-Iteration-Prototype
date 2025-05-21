"use client"

import { useEffect, useRef } from "react"
import { X, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DealsDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function DealsDrawer({ isOpen, onClose }: DealsDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      // Remove this line to allow scrolling
      // document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      // Remove this line as well
      // document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied code: ${text}`)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <div className="fixed inset-0 z-40 flex justify-end pointer-events-none">
      {/* Overlay - starts below the header */}
      <div className="absolute inset-0 top-[64px] bg-[#222222] bg-opacity-45 pointer-events-auto" onClick={onClose} />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed w-full max-w-sm bg-gray-100 h-[calc(100vh-64px)] top-[64px] pointer-events-auto transform transition-transform duration-800 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Exclusive Deals</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4 flex-grow">
            {/* Deal 1 */}
            <div className="bg-white rounded-md p-4 border border-gray-200">
              <h3 className="text-[#0a3751] font-semibold mb-1">$5 off when you spend $50 or more</h3>
              <p className="text-sm mb-1">Copy and paste code at checkout:</p>
              <div className="flex items-center">
                <span className="text-[#ff6d00] font-bold mr-2">ADVH77629</span>
                <button onClick={() => copyToClipboard("ADVH77629")} className="text-gray-500 hover:text-gray-700">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Deal 2 */}
            <div className="bg-white rounded-md p-4 border border-gray-200">
              <h3 className="text-[#0a3751] font-semibold mb-1">20% off your entire order</h3>
              <p className="text-sm mb-1">Copy and paste code at checkout:</p>
              <div className="flex items-center">
                <span className="text-[#ff6d00] font-bold mr-2">BMDN88FTH25</span>
                <button onClick={() => copyToClipboard("BMDN88FTH25")} className="text-gray-500 hover:text-gray-700">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Everyday Savings Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-1">Enjoy everyday savings</h3>
              <p className="text-sm mb-4">Shop our ongoing site-wide promotions</p>

              {/* Promotion */}
              <div className="bg-white rounded-md p-4 border border-gray-200">
                <h3 className="text-[#0a3751] font-semibold mb-1">10% Off janitorial and sanitation</h3>
                <p className="text-sm">
                  Rules & Restrictions apply. Offer ends 02/09/25 at 11:59pm CT.{" "}
                  <Link href="/deals" className="text-blue-600 hover:underline">
                    See offer
                  </Link>
                </p>
              </div>
            </div>

            {/* View All Button */}
            <div className="mt-4">
              <a href="/deals">
                <Button variant="outline" className="w-full border-[#0a3751] text-[#0a3751]">
                  View all promotions
                </Button>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-300">
            <Link href="#" className="text-blue-600 text-sm hover:underline">
              See promo rules & exclusions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
