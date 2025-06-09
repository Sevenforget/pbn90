import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/shopping-discount-sale.png')`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">최고의 할인 정보를 한눈에</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            매일 업데이트되는 특가 정보와 쿠폰 코드로 현명한 소비를 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              최신 할인 보기
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-white/20 hover:bg-white/30">
              인기 카테고리
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  )
}
