import { getPostBySlug, getAllPosts } from "@/lib/content"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <article className="max-w-4xl mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/posts">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Posts
          </Link>
        </Button>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-slate-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
          {post.excerpt && <p className="text-lg text-slate-600 mt-4">{post.excerpt}</p>}
        </header>

        <div className="prose prose-slate max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  )
}
