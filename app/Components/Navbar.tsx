"use client"

import { Menu, Bell, Search } from "lucide-react"
import { ProfileMenu } from "./ProfileMenu"

interface NavbarProps {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/20 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-3 sm:px-4 md:px-6">

        {/* Left: Hamburger + Search */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Hamburger (mobile only) */}
          <button
            onClick={onMenuClick}
            className="md:hidden rounded-lg p-2 hover:bg-slate-100 transition"
          >
            <Menu className="h-5 w-5 text-slate-700" />
          </button>

          {/* Search bar */}
          <div className="flex-1 md:flex-none">
            <div className="relative w-full md:w-[400px] lg:w-[500px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search tests, progress..."
                className="
                  w-full rounded-lg border border-slate-300
                  bg-white/40 backdrop-blur-sm
                  pl-9 pr-3 py-2 text-sm
                  placeholder:text-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-400/30
                  transition
                "
              />
            </div>
          </div>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-2 sm:gap-3 ml-4">
          <button className="relative rounded-full p-2 hover:bg-slate-100 transition">
            <Bell className="h-5 w-5 text-slate-700" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-blue-500" />
          </button>

          {/* Profile Button */}
          <ProfileMenu />
        </div>

      </div>
    </header>
  )
}
