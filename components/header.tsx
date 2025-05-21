"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, Phone, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DealsDrawerButton } from "@/components/deals-drawer-button"

export function Header() {
  return (
    <>
      {/* Header */}
      <header className="bg-white text-[#222222] sticky top-0 z-50">
        <div className="container mx-auto px-2 md:px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="mr-2">
              <Image src="/placeholder.svg?height=30&width=80" alt="Zoro logo" width={80} height={30} className="h-8" />
            </Link>
            <button className="text-[#222222] text-md font-bold flex items-center">
              <span className="mr-1">Menu</span>
            </button>
          </div>

          <div className="flex-1 max-w-sm md:max-w-md lg:max-w-xl mx-2 md:mx-4 border-1">
            <div className="relative flex">
              <Input
                placeholder="What can we help you find?"
                className="w-full rounded-l-md rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <a href="/search">
                <Button className="bg-[#ff6d00] hover:bg-[#e56200] rounded-l-none rounded-r-md">
                  <Search className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-8">
            <DealsDrawerButton />
            <button className="text-[#222222] text-md font-bold flex items-center">
              <Phone className="h-4 w-4 fill-[#222222] lg:mr-1" />
              <span className="hidden lg:inline">Help</span>
            </button>
            <button className="text-[#222222] text-md font-bold flex items-center">
              <User className="h-4 w-4 fill-[#222222] lg:mr-1" />
              <span className="hidden lg:inline">My Account</span>
            </button>
            <button className="text-[#222222] text-md font-bold flex items-center relative">
              <ShoppingCart className="h-4 w-4 fill-[#222222]" />
              <span className="absolute -top-1 -right-1 bg-[#ff6d00] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
              <span className="hidden lg:inline ml-1">Cart</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
