import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">할인정보 블로그</h3>
            <p className="mb-4">
              최신 할인 정보와 쿠폰 코드를 매일 업데이트하여 제공합니다. 현명한 소비를 위한 최고의 파트너가 되겠습니다.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-rose-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-rose-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-rose-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-rose-400 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">인기 카테고리</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  패션/의류
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  전자제품
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  식품/음료
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  여행/숙박
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400 transition-colors">
                  뷰티/화장품
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">구독하기</h3>
            <p className="mb-4">최신 할인 정보를 이메일로 받아보세요.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="이메일 주소"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900"
              />
              <button
                type="submit"
                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                구독
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 할인정보 블로그. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
