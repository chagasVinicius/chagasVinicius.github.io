// Create a simple config file
export const siteConfig = {
  showVideos: process.env.NEXT_PUBLIC_SHOW_VIDEOS === "true" || false,
  showBlog: true,
  showResources: true,
  showContact: true,
}

