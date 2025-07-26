import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")
const videosDirectory = path.join(process.cwd(), "content/videos")

// Ensure directories exist
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true })
}
if (!fs.existsSync(videosDirectory)) {
  fs.mkdirSync(videosDirectory, { recursive: true })
}

export interface Post {
  slug: string
  title: string
  date: string
  excerpt?: string
  readTime?: string
  content: string
}

export interface Video {
  slug: string
  title: string
  date: string
  description?: string
  duration?: string
  thumbnail?: string
  embedUrl?: string
  content?: string
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
      .map((name) => {
        const slug = name.replace(/\.(md|mdx)$/, "")
        const fullPath = path.join(postsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt,
          readTime: data.readTime,
          content,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error("Error reading posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const altPath = path.join(postsDirectory, `${slug}.mdx`)

    let fileContents: string
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8")
    } else if (fs.existsSync(altPath)) {
      fileContents = fs.readFileSync(altPath, "utf8")
    } else {
      return null
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt,
      readTime: data.readTime,
      content,
    }
  } catch (error) {
    console.error("Error reading post:", error)
    return null
  }
}

export async function getAllVideos(): Promise<Video[]> {
  try {
    const fileNames = fs.readdirSync(videosDirectory)
    const videos = fileNames
      .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
      .map((name) => {
        const slug = name.replace(/\.(md|mdx)$/, "")
        const fullPath = path.join(videosDirectory, name)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          description: data.description,
          duration: data.duration,
          thumbnail: data.thumbnail,
          embedUrl: data.embedUrl,
          content,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return videos
  } catch (error) {
    console.error("Error reading videos:", error)
    return []
  }
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  try {
    const fullPath = path.join(videosDirectory, `${slug}.md`)
    const altPath = path.join(videosDirectory, `${slug}.mdx`)

    let fileContents: string
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8")
    } else if (fs.existsSync(altPath)) {
      fileContents = fs.readFileSync(altPath, "utf8")
    } else {
      return null
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      description: data.description,
      duration: data.duration,
      thumbnail: data.thumbnail,
      embedUrl: data.embedUrl,
      content,
    }
  } catch (error) {
    console.error("Error reading video:", error)
    return null
  }
}
