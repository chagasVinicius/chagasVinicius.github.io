import { getAllVideos } from "@/lib/content"
import { VideoCard } from "@/components/video-card"

export default async function VideosPage() {
  const videos = await getAllVideos()

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">All Videos</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}
