"use client"

import dynamic from "next/dynamic"
import { Layout } from "./Components/Layout"

// Dynamically import ChatBot to avoid SSR issues
const EntryTestChatBot = dynamic(() => import("./Components/ChatBot"), {
  ssr: false,
})

export default function DashboardPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Welcome to Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold">Card 1</h3>
            <p className="text-sm text-slate-600 mt-2">Some placeholder content for card 1.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold">Card 2</h3>
            <p className="text-sm text-slate-600 mt-2">Some placeholder content for card 2.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold">Card 3</h3>
            <p className="text-sm text-slate-600 mt-2">Some placeholder content for card 3.</p>
          </div>
        </div>
      </div>

      {/* Entry Test Preparation Chatbot */}
      <EntryTestChatBot />
    </Layout>
  )
}
