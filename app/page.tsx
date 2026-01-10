"use client"

import { Layout } from "./Components/Layout"
import { QuickAction } from "./Components/QuickAction"
import { AnalyticsCard } from "./Components/AnalyticsCard"
import { SuggestedVideosCard } from "./Components/SuggestedVideosCard"

export default function DashboardPage() {
  const user = "Muhammad" // Replace with actual user data

  return (
    <Layout>
      {/* Greeting Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Hello, <span className="text-blue-700">{user}</span>👋</h1>
        <p className="text-sm text-slate-600 mt-1">
          Keep pushing forward! Every step brings you closer to your goal.
        </p>
      </div>

      {/* Quick Actions */}
      <QuickAction />

      {/* Analytics Card */}
      <AnalyticsCard />

      {/* Suggested Videos */}
      <SuggestedVideosCard />
    </Layout>
  )
}
