import { getAllPosts } from "@/lib/content"
import { PostCard } from "@/components/post-card"

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">All Posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
