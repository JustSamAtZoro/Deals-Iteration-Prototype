"use client"

import { useEffect, useRef } from "react"
import { X, Copy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
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
        className={`fixed w-full max-w-sm bg-white h-[calc(100vh-64px)] top-[64px] pointer-events-auto transform transition-transform duration-800 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold">Enjoy everyday savings</h2>
              <p className="text-sm text-gray-600 mb-6">Shop our ongoing site-wide promotions</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4 flex-grow">
            {/* Deal 1 */}
            <Link href="/search" className="block bg-gray-100 rounded-md p-2 border border-gray-200 hover:bg-gray-200 transition-colors">
              <div className="flex items-center mb-2">
                <div className="bg-black text-white text-xs px-3 py-1 rounded-full flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span className="mr-1">1</span>day left!
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-black text-white rounded-full w-[48px] h-[48px] flex items-center justify-center mr-3">
                  <div className="text-center">
                    <div className="text-lg font-bold">20%</div>
                    <div className="text-xs -mt-1">Off</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Up to 20% off spring maintenance</h3>
                  <p className="text-sm mb-1">Copy and paste code at checkout:</p>
                  <div className="flex items-center">
                    <span className="text-[#D24600] font-bold mr-2">SPMC595</span>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                        copyToClipboard("ADVH77629");
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Deal 2 */}
            <Link href="/search" className="block bg-gray-100 rounded-md p-2 border border-gray-200 hover:bg-gray-200 transition-colors space-y-2">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-[#D24600] text-white rounded-full w-[48px] h-[48px] flex items-center justify-center mr-3">
                  <div className="text-center">
                    <div className="text-lg font-bold">10%</div>
                    <div className="text-xs -mt-1">Off</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Milwaukee Mechanics Tools*</h3>
                  <p className="text-sm mb-1">Copy and paste code at checkout:</p>
                  <div className="flex items-center">
                    <span className="text-[#D24600] font-bold mr-2">MMTAF526</span>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                        copyToClipboard("MMTAF526");
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Special Offers */}
            <Link href="/search" className="block bg-gray-100 rounded-md p-2 border border-gray-200 mb-4 hover:bg-gray-200 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Image src="/weekly-deals.png" alt="Special Deals" width={48} height={48} className="rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold">15% off electrical supplies</h3>
                  <p className="text-sm mb-1">Copy and paste code at checkout:</p>
                  <div className="flex items-center">
                    <span className="text-[#D24600] font-bold mr-2">ESPMWD595</span>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                        copyToClipboard("ESPMWD595");
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Closeout Savings */}
            <Link href="/search" className="block bg-gray-100 rounded-md p-2 border border-gray-200 hover:bg-gray-200 transition-colors">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <Image src="/closeouts.png" alt="Closeouts" width={48} height={48} className="rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold">Closeout Savings</h3>
                  <p className="text-sm">Shop these great deals before they're gone. No code needed!</p>
                </div>
              </div>
            </Link>

            {/* View All Button */}
            <div className="mt-5">
              <Button
                variant="outline"
                className="w-full border-[#0B485B] text-[#0B485B] font-bold hover:bg-[#0B485B] hover:text-white transition-colors"
              >
                View all promotions
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            <Link href="#" className="text-blue-600 text-sm hover:underline">
              See promo rules & exclusions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
