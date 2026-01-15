"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const [netOpen, setNetOpen] = useState(false)

  const content = (
    <nav className="space-y-3">
      <p className="text-xl font-bold text-blue-300 mb-6">
        Taleem Ka Safar
      </p>

      <p className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
        Dashboard
      </p>

      <button
        onClick={() => setNetOpen(!netOpen)}
        className="flex w-full items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10"
      >
        <span>Net Engineering</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${netOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {netOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="ml-4 space-y-2 text-sm text-slate-300"
          >
            <p className="cursor-pointer hover:text-white">Attempt Test</p>
            <p className="cursor-pointer hover:text-white">Schedule Test</p>
            <p className="cursor-pointer hover:text-white">AI-Based Test</p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:flex w-64 min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 text-white p-6">
        {content}
      </aside>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="fixed left-0 top-0 z-50 w-64 h-full bg-gradient-to-b from-blue-900 to-slate-900 text-white p-6 z-60"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
            >
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
