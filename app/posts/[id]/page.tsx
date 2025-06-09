"use client";

import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fetchPostFromApi } from "@/lib/api-service";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, Tag, User } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);
        setError(null);

        const postId = Number.parseInt(params.id as string);
        if (isNaN(postId) || postId < 0) {
          setError("잘못된 게시물 ID입니다.");
          return;
        }

        // 현재 프로젝트의 도메인 가져오기
        const communityUrl = "https://nicoladoering.net"; // 하드코딩된 도메인 (pbn-domains.json 기반)

        // API에서 게시물 데이터 가져오기
        const fetchedPost = await fetchPostFromApi(communityUrl, postId);
        setPost(fetchedPost);
      } catch (err) {
        console.error("게시물 로드 실패:", err);
        setError("게시물을 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      loadPost();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">
          {error || "게시글을 찾을 수 없습니다"}
        </h1>
        <Button onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> 홈으로 돌아가기
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('/shopping-sale-background.png')`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-end">
          <Button
            variant="outline"
            className="mb-6 bg-white hover:bg-gray-100"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> 목록으로
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto -mt-16 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8 text-sm">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author || "관리자"}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>
                {post.date ? formatDate(new Date(post.date)) : "날짜 없음"}
              </span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4" />
                {post.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-rose-50 text-rose-700 hover:bg-rose-100"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div
            className="prose prose-rose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.excerpt && (
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-md">
              <p className="text-amber-800 font-medium">{post.excerpt}</p>
            </div>
          )}
        </article>
      </div>
      <Footer />
    </div>
  );
}
