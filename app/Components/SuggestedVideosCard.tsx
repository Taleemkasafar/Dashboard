"use client"

import { ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SuggestedVideosCard() {
  const videos = [
    {
      title: "NUST Entry Test Strategy",
      url: "#",
      thumbnail: "https://via.placeholder.com/150x90?text=Video+1",
    },
    {
      title: "Time Management Tips",
      url: "#",
      thumbnail: "https://via.placeholder.com/150x90?text=Video+2",
    },
    {
      title: "AI-Based Test Techniques",
      url: "#",
      thumbnail: "https://via.placeholder.com/150x90?text=Video+3",
    },
    {
      title: "Quick Revision Hacks",
      url: "#",
      thumbnail: "https://via.placeholder.com/150x90?text=Video+4",
    },
  ]

  return (
    <div className="w-full max-w-[95%] mx-auto my-8 bg-white/95 rounded-2xl shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-900">Suggested Videos</h2>
        <Button size="sm" variant="outline" >          
          See All Suggestions     
        </Button>
      </div>     

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video, idx) => (
          <a
            key={idx}
            href={video.url}
            target="_blank"
            className="bg-blue-100/30 rounded-2xl p-4 flex flex-col items-center shadow-sm hover:shadow-md hover:scale-105 transition-transform w-full"
          >
            <div className="relative w-full h-28 mb-2 rounded-xl overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <Play className="absolute top-2 right-2 w-5 h-5 text-white/90" />
            </div>
            <p className="text-center text-blue-900 text-sm font-medium">
              {video.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
