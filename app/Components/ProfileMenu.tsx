"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden border border-slate-300 hover:ring-2 hover:ring-blue-400/40 transition"
      >
        <img
          src="/profile.jpg" // Replace with real user image
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden z-50"
          >
            <div className="px-4 py-3 border-b border-slate-100">
              <p className="text-sm font-semibold text-slate-900">Muhammad</p>
              <p className="text-xs text-slate-500">muhaddis@example.com</p>
            </div>
            <ul>
              <li>
                <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50">
                  Personal info
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50">
                  Manage account
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Logout
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
