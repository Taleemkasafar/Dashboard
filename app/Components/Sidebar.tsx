"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Sidebar() {
  const [netOpen, setNetOpen] = useState(false)

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 text-white p-6 flex flex-col relative">
      {/* Branding */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-blue-400 tracking-tight">
          Taleem Ka Safar
        </h1>
      </div>

      {/* Menu items */}
      <nav className="flex flex-col gap-1">
        {/* Dashboard */}
        <p className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition">
          Dashboard
        </p>

        {/* Net Engineering */}
        <button
          onClick={() => setNetOpen(!netOpen)}
          className="flex w-full justify-between items-center rounded-lg px-3 py-2 hover:bg-white/10 transition"
        >
          <span>Net Engineering</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${netOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {netOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="ml-4 mt-1 flex flex-col gap-2 text-sm text-slate-200"
            >
              <p className="hover:text-white cursor-pointer transition px-2 py-1 rounded">
                Attempt Test
              </p>
              <p className="hover:text-white cursor-pointer transition px-2 py-1 rounded">
                Schedule Test
              </p>
              <p className="hover:text-white cursor-pointer transition px-2 py-1 rounded">
                AI-Based Test
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Analytics */}
        <p className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition mt-1">
          Analytics
        </p>
      </nav>

      {/* Optional background animation */}
      <motion.div
        className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </aside>
  )
}
