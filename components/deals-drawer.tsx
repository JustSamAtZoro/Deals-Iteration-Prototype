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
        <div className="h-full flex flex-col">
          {/* Fixed Header */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold">Enjoy everyday savings</h2>
                <p className="text-sm text-gray-600">Shop our ongoing site-wide promotions</p>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-4">
              {/* Deal 1 */}
              <div className="block bg-gray-100 rounded-md p-3 border border-gray-200 hover:bg-gray-200 transition-colors">
                <div className="flex items-center mb-2">
                  <div className="bg-black text-white text-xs px-3 py-1 rounded-full flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span className="mr-1">1</span>day left!
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <Link href="/search" className="hover:underline">
                      <h3 className="font-semibold">Up to 20% off spring maintenance</h3>
                    </Link>
                    <p className="text-sm mb-1">Copy and paste code at checkout:</p>
                    <div className="flex items-center">
                      <span className="text-[#D24600] font-bold mr-2">SPMC595</span>
                      <div
                        onClick={e => {
                          e.stopPropagation();
                          e.preventDefault();
                          copyToClipboard("ADVH77629");
                        }}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        role="button"
                        tabIndex={0}
                      >
                        <Copy className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deal 2 */}
              <div className="block bg-gray-100 rounded-md p-3 border border-gray-200 hover:bg-gray-200 transition-colors space-y-2">
                <div className="flex items-start">
                  <div>
                    <Link href="/search" className="hover:underline">
                      <h3 className="font-semibold">Milwaukee Mechanics Tools*</h3>
                    </Link>
                    <p className="text-sm mb-1">Copy and paste code at checkout:</p>
                    <div className="flex items-center">
                      <span className="text-[#D24600] font-bold mr-2">MMTAF526</span>
                      <div
                        onClick={e => {
                          e.stopPropagation();
                          e.preventDefault();
                          copyToClipboard("MMTAF526");
                        }}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        role="button"
                        tabIndex={0}
                      >
                        <Copy className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offers */}
              <div className="block bg-gray-100 rounded-md p-3 border border-gray-200 mb-4 hover:bg-gray-200 transition-colors">
                <div className="flex items-start">
                  <div>
                    <Link href="/search" className="hover:underline">
                      <h3 className="font-semibold">15% off electrical supplies</h3>
                    </Link>
                    <p className="text-sm mb-1">Copy and paste code at checkout:</p>
                    <div className="flex items-center">
                      <span className="text-[#D24600] font-bold mr-2">ESPMWD595</span>
                      <div
                        onClick={e => {
                          e.stopPropagation();
                          e.preventDefault();
                          copyToClipboard("ESPMWD595");
                        }}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        role="button"
                        tabIndex={0}
                      >
                        <Copy className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closeout Savings */}
              <div className="block bg-gray-100 rounded-md p-3 border border-gray-200 hover:bg-gray-200 transition-colors">
                <div className="flex items-start">
                  <div>
                    <Link href="/search" className="hover:underline">
                      <h3 className="font-semibold">Closeout Savings</h3>
                    </Link>
                    <p className="text-sm">Shop these great deals before they're gone. No code needed!</p>
                  </div>
                </div>
              </div>

              {/* View All Button */}
              <div className="mt-5">
                <Link href="/deals" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-[#0B485B] text-[#0B485B] font-bold hover:bg-[#0B485B] hover:text-white transition-colors"
                  >
                    View all promotions
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Fixed Footer */}
          <div className="p-6 border-t border-gray-200">
            <Link href="#" className="text-blue-600 text-sm hover:underline">
              See promo rules & exclusions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
