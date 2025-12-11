"use client";

import { useFetch } from "@/hooks/useFetch";
import PostCard from "@/public/components/Posts/PostCard";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p className="text-center py-10">Loading posts...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Posts
          
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    </main>
  );
}
