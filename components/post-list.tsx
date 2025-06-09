"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Clock, User } from "lucide-react"
import { getPosts } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export function PostList() {
  const router = useRouter()
  const [posts, setPosts] = useState<any[]>([])
  const [filteredPosts, setFilteredPosts] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    const allPosts = getPosts()
    setPosts(allPosts)
    setFilteredPosts(allPosts)

    // Extract all unique tags
    const tags = Array.from(new Set(allPosts.flatMap((post) => post.tags || [])))
    setAllTags(tags)
  }, [])

  useEffect(() => {
    let result = posts

    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedTag) {
      result = result.filter((post) => post.tags && post.tags.includes(selectedTag))
    }

    setFilteredPosts(result)
  }, [searchTerm, selectedTag, posts])

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  const handlePostClick = (id: string) => {
    router.push(`/posts/${id}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="검색어를 입력하세요..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=500&query=${encodeURIComponent(post.title)}%20discount%20sale')`,
                }}
              />
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <User size={14} />
                  <span>{post.author || "관리자"}</span>
                  <Clock size={14} className="ml-2" />
                  <span>{formatDate(post.date || new Date())}</span>
                </div>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2">
                <div className="flex flex-wrap gap-1">
                  {post.tags &&
                    post.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                </div>
                <Button variant="ghost" size="sm" onClick={() => handlePostClick(post.id)}>
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
