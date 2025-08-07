"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

// Dynamically import the ArticleSearch component with loading state
const ArticleSearch = dynamic(() => import('@/components/article-search'), {
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-pulse text-center">
        <p className="text-lg">Loading search...</p>
      </div>
    </div>
  ),
  ssr: false
})

export default function HelpCenterPage() {
  return (
    <div>
      <main className="flex-1">
        <section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          aria-labelledby="help-center-heading"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 
                  id="help-center-heading" 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Help Center
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find helpful articles and guides to assist you with common technology questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className="w-full py-12 md:py-24"
          aria-label="Article search section"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <ArticleSearch />
          </div>
        </section>
      </main>
    </div>
  )
}
