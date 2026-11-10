import { BlogPost } from "@/types";

/**
 * Active published blog posts.
 * Currently empty per user request until a post is requested to be published.
 * Archived posts are preserved in src/data/blog-posts-archive.ts.
 */
export const blogPosts: BlogPost[] = [];
