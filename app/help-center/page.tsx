"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, SortDesc, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { articles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const [sortOption, setSortOption] = useState("latest")

  useEffect(() => {
    let results = [...articles]
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        article => 
          article.title.toLowerCase().includes(query) || 
          article.summary.toLowerCase().includes(query)
      )
    }
    
    // Sort articles
    if (sortOption === "latest") {
      results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortOption === "mostViewed") {
      results.sort((a, b) => b.views - a.views)
    }
    
    setFilteredArticles(results)
  }, [searchQuery, sortOption])

  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Help Center</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find helpful articles and guides to assist you with common technology questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              {/* Search and Sort Controls */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="relative w-full md:w-1/2">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 text-lg h-12"
                  />
                </div>
                <Tabs defaultValue="latest" className="w-full md:w-auto" onValueChange={setSortOption}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="latest" className="text-base">
                      <Clock className="mr-2 h-4 w-4" />
                      Latest
                    </TabsTrigger>
                    <TabsTrigger value="mostViewed" className="text-base">
                      <SortDesc className="mr-2 h-4 w-4" />
                      Most Viewed
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Articles Grid */}
              {filteredArticles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">No articles found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search query</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
