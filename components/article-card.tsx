"use client"

import Link from "next/link"
import Image from "next/image"
import { Eye, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Article } from "@/lib/articles"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      {article.image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardContent className="flex-grow p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold leading-tight">
            {article.title}
          </h3>
          <p className="text-gray-500 line-clamp-3">
            {article.summary}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        <div className="flex items-center text-sm text-gray-500">
          <Eye className="mr-1 h-4 w-4" />
          <span>{article.views} views</span>
        </div>
        <Link href={`/help-center/${article.slug}`}>
          <Button variant="ghost" size="sm" className="gap-1">
            Read More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
