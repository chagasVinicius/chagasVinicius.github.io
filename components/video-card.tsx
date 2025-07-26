import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Play } from "lucide-react"

interface Video {
  slug: string
  title: string
  description?: string
  date: string
  duration?: string
  thumbnail?: string
}

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/videos/${video.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-video bg-slate-200 relative overflow-hidden rounded-t-lg">
          {video.thumbnail ? (
            <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-12 h-12 text-slate-400" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Play className="w-12 h-12 text-white" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2">{video.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {video.description && <p className="text-slate-600 line-clamp-2 mb-4">{video.description}</p>}
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={video.date}>
                {new Date(video.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            {video.duration && (
              <div className="flex items-center gap-1">
                <Play className="w-4 h-4" />
                <span>{video.duration}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
