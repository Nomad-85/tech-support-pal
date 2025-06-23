"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Eye, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import { incrementArticleViews } from "@/lib/article-utils"
import { notFound } from "next/navigation"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug)
  
  useEffect(() => {
    if (article) {
      incrementArticleViews(article.slug)
    }
  }, [article])
  
  if (!article) {
    notFound()
  }

  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="mb-8">
              <Link href="/help-center">
                <Button variant="ghost" className="pl-0 hover:bg-transparent hover:underline">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Help Center
                </Button>
              </Link>
            </div>
            
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  {article.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-gray-500 mb-8">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="mr-2 h-4 w-4" />
                    <span>{article.views} views</span>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
