"use client"

import { useState } from "react"
import { Tag } from "lucide-react"
import { DealsDrawer } from "./deals-drawer"

export function DealsDrawerButton() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <button className="text-[#222222] text-md font-bold flex items-center" onClick={() => setIsDrawerOpen(true)}>
        <Tag className="h-4 w-4 fill-[#222222] lg:mr-1" />
        <span className="hidden lg:inline">Deals</span>
      </button>

      <DealsDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
