"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, XCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function AnalyticsCard() {
  const subCards = [
    {
      title: "Attempted MCQs",
      value: "120",
      bg: "bg-blue-100/50",
      text: "text-blue-900",
      icon: <ArrowUpRight className="h-5 w-5 text-blue-700" />,
    },
    {
      title: "Failed MCQs",
      value: "15",
      bg: "bg-red-100/50",
      text: "text-red-900",
      icon: <XCircle className="h-5 w-5 text-red-700" />,
    },
    {
      title: "Weak Points",
      value: "5",
      bg: "bg-green-100/50",
      text: "text-green-900",
      icon: <AlertCircle className="h-5 w-5 text-green-700" />,
    },
  ]

  return (
    <div className="w-full max-w-[95%] mx-auto p-6 bg-white/95 shadow-md rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Analytics</h2>
        <Button size="sm" variant="outline">
          See All Analytics
        </Button>
      </div>

      {/* Subcards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subCards.map((sub, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`rounded-xl p-4 flex flex-col justify-between ${sub.bg} ${sub.text} shadow-sm`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-semibold">{sub.title}</h3>
              {sub.icon}
            </div>
            <p className="mt-2 text-2xl font-bold">{sub.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
