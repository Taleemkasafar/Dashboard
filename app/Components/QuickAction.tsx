"use client"

import {
  BookOpen,
  Bookmark,
  CheckCircle2,
  SlidersHorizontal,
  HelpCircle,
} from "lucide-react"

const actions = [
  { title: "Resources", desc: "Study material & guides", icon: BookOpen },
  { title: "Saved", desc: "Bookmarked questions", icon: Bookmark },
  { title: "Attempts", desc: "Your test history", icon: CheckCircle2 },
  { title: "Custom", desc: "Create custom tests", icon: SlidersHorizontal },
  { title: "FAQ", desc: "Common questions", icon: HelpCircle },
]

export function QuickAction() {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="w-full md:w-[98%] lg:w-[95%] bg-white rounded-2xl p-6 shadow-md">

        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Quick Actions
        </h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {actions.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="
                bg-blue-100/70
                border border-blue-200/60
                rounded-xl p-4
                hover:bg-blue-200/70
                transition
                cursor-pointer
              "
            >
              <Icon className="h-6 w-6 text-blue-800 mb-2" />
              <h3 className="font-semibold text-blue-900">{title}</h3>
              <p className="text-sm text-slate-700/80">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
