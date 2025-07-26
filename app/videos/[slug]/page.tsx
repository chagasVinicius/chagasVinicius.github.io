import { getVideoBySlug, getAllVideos } from "@/lib/content"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Play } from "lucide-react"

interface VideoPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const videos = await getAllVideos()
  return videos.map((video) => ({
    slug: video.slug,
  }))
}

export default async function VideoPage({ params }: VideoPageProps) {
  const video = await getVideoBySlug(params.slug)

  if (!video) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/videos">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Videos
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{video.title}</h1>
            <div className="flex items-center gap-4 text-slate-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={video.date}>
                  {new Date(video.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
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
            {video.description && <p className="text-lg text-slate-600">{video.description}</p>}
          </header>

          <div className="aspect-video bg-slate-200 rounded-lg mb-8 flex items-center justify-center">
            {video.embedUrl ? (
              <iframe src={video.embedUrl} className="w-full h-full rounded-lg" allowFullScreen title={video.title} />
            ) : (
              <div className="text-slate-500 text-center">
                <Play className="w-16 h-16 mx-auto mb-4" />
                <p>Video player will be embedded here</p>
                <p className="text-sm">Add embedUrl to your video metadata</p>
              </div>
            )}
          </div>

          {video.content && (
            <div className="prose prose-slate max-w-none">
              <div dangerouslySetInnerHTML={{ __html: video.content }} />
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
