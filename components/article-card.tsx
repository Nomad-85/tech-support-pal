"use client"

import Link from "next/link"
import { Eye, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Article } from "@/lib/articles"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const titleId = `article-title-${article.slug}`;
  const summaryId = `article-summary-${article.slug}`;
  
  return (
    <Card 
      className="overflow-hidden flex flex-col h-full" 
      role="article"
      aria-labelledby={titleId}
      aria-describedby={summaryId}
    >
      <CardContent className="flex-grow p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold leading-tight" id={titleId}>
            <Link 
              href={`/help-center/${article.slug}`} 
              className="hover:underline focus:underline"
              aria-describedby={summaryId}
            >
              {article.title}
            </Link>
          </h3>
          <p className="text-gray-500 line-clamp-3" id={summaryId}>
            {article.summary}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        <div 
          className="flex items-center text-sm text-gray-500"
          aria-label="Article popularity"
        >
          <Eye className="mr-1 h-4 w-4" aria-hidden="true" />
          <span>{article.views} views</span>
        </div>
        <Link 
          href={`/help-center/${article.slug}`} 
          aria-label={`Read full article about ${article.title}`}
        >
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            aria-hidden="true"
          >
            Read More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
