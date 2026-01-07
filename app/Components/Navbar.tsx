"use client"

import { Bell, Search } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 shadow-sm bg-transparent">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        {/* Left (empty) */}
        <div className="flex items-center gap-3"></div>

        {/* Center: Search */}
        <div className="hidden md:flex w-full max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tests, progress..."
              className="w-full rounded-lg border border-slate-700 bg-transparent text-slate-400 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/30 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Right: Notifications */}
        <button className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100 transition">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-blue-500" />
        </button>

      </div>
    </header>
  )
}
