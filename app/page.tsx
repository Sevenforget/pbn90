import { PostList } from "@/components/post-list"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">최신 할인 정보</h2>
        <PostList />
      </div>
      <Footer />
    </main>
  )
}
