"use client"

import { useState, useEffect } from "react"
import { Search, SortDesc, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/lib/articles"

interface ArticleSearchProps {
  initialArticles?: typeof articles
}

export default function ArticleSearch({ initialArticles = articles }: ArticleSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredArticles, setFilteredArticles] = useState(initialArticles)
  const [sortOption, setSortOption] = useState("latest")

  useEffect(() => {
    let results = [...initialArticles]
    
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
  }, [searchQuery, sortOption, initialArticles])

  const searchId = "article-search-input";
  const resultsId = "search-results";
  const noResultsId = "no-results-message";
  
  return (
    <div className="space-y-8" role="region" aria-labelledby={searchId}>
      <h2 id={searchId} className="sr-only">Article search and results</h2>
      
      {/* Search and Sort Controls */}
      <div 
        className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between" 
        role="search" 
        aria-label="Search and sort controls"
      >
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" aria-hidden="true" />
          <Input
            id={searchId}
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-lg h-12"
            aria-label="Search articles"
            aria-controls={resultsId}
            aria-describedby={filteredArticles.length === 0 ? noResultsId : undefined}
          />
        </div>
        <Tabs 
          defaultValue="latest" 
          className="w-full md:w-auto" 
          onValueChange={setSortOption} 
          aria-label="Sort options"
        >
          <TabsList className="grid w-full grid-cols-2" aria-label="Sort by">
            <TabsTrigger value="latest" className="text-base" role="tab">
              <Clock className="mr-2 h-4 w-4" aria-hidden="true" />
              Latest
            </TabsTrigger>
            <TabsTrigger value="mostViewed" className="text-base" role="tab">
              <SortDesc className="mr-2 h-4 w-4" aria-hidden="true" />
              Most Viewed
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div 
          id={resultsId}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" 
          role="feed" 
          aria-label="Search results"
          aria-busy={false}
        >
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div 
          id={noResultsId}
          className="text-center py-12" 
          role="status" 
          aria-live="polite"
        >
          <h3 className="text-xl font-medium">No articles found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search query</p>
        </div>
      )}
    </div>
  )
}
