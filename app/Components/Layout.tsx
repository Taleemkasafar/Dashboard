"use client"

import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Persistent Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

