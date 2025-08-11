# Help Center SEO Guidelines

This document provides guidelines for creating and optimizing Help Center articles for local SEO targeting Naperville and Wheaton, IL.

## Article Structure

Each Help Center article should follow this structure:

1. **Title (H1)**: Include location keywords when relevant
   - Example: "How to Fix WiFi Connection Issues in Naperville Homes"
   - Example: "Computer Running Slow? 5 Quick Fixes for Wheaton Residents"

2. **Introduction**: Brief overview that includes location keywords naturally
   - Mention "Naperville" or "Wheaton" in the first paragraph
   - Target seniors and caregivers with clear, friendly language

3. **Main Content**: Step-by-step instructions with clear headings (H2, H3)
   - Use simple, non-technical language
   - Include screenshots or images when helpful

4. **Local Call-to-Action**: Always include at the end of each article
   - Link to relevant service page
   - Link to contact page
   - Include city-specific mentions

## SEO Metadata

For each article, implement the following metadata:

```tsx
export const metadata: Metadata = generateSeoMetadata({
  title: "Article Title with Location | Tech Support Pal",
  description: "Brief description (150-160 chars) with location keywords and main problem/solution",
  path: "/help-center/article-slug",
  keywords: [
    "keyword with location",
    "problem keyword Naperville",
    "solution keyword Wheaton",
    // Add 3-5 more relevant keywords
  ]
})
```

## Schema Markup

Each article should include Article schema:

```tsx
<Script id="article-schema" type="application/ld+json">
  {generateArticleSchema({
    headline: "Article Title",
    description: "Brief description of article",
    image: "https://techsupportpal.com/images/article-image.jpg", // Update with actual image
    datePublished: "YYYY-MM-DD", // Use actual publication date
    dateModified: "YYYY-MM-DD", // Update when content changes
    authorName: "Tech Support Pal"
  })}
</Script>
```

## Local CTA Component

Add this component at the end of each article:

```tsx
<LocalCTA 
  problem="[Problem addressed in article]"
  cities={["Naperville", "Wheaton"]}
/>
```

## Internal Linking Strategy

- Link to relevant service pages
- Link to city-specific pages when mentioning locations
- Link to emergency page for urgent issues
- Cross-link between related help articles

## Example Article Structure

```tsx
import { Metadata } from "next"
import Script from "next/script"
import { generateSeoMetadata, generateArticleSchema } from "@/lib/seo"
import { LocalCTA } from "@/components/local-cta"

export const metadata: Metadata = generateSeoMetadata({
  title: "How to Fix WiFi Connection Issues in Naperville | Tech Support Pal",
  description: "Simple solutions for WiFi connection problems in Naperville homes. Learn how to troubleshoot your network with these senior-friendly steps.",
  path: "/help-center/wifi-connection-issues-naperville",
  keywords: [
    "wifi connection issues Naperville",
    "fix internet connection Naperville",
    "senior-friendly wifi troubleshooting",
    "home network help Naperville",
    "wifi not working DuPage County"
  ]
})

export default function WiFiConnectionIssuesArticle() {
  return (
    <article className="help-center-article">
      <h1>How to Fix WiFi Connection Issues in Naperville Homes</h1>
      
      {/* Article content */}
      
      <LocalCTA 
        problem="WiFi connection issues"
        cities={["Naperville", "Wheaton"]}
      />
      
      <Script id="article-schema" type="application/ld+json">
        {generateArticleSchema({
          headline: "How to Fix WiFi Connection Issues in Naperville Homes",
          description: "Simple solutions for WiFi connection problems in Naperville homes. Learn how to troubleshoot your network with these senior-friendly steps.",
          image: "https://techsupportpal.com/images/wifi-troubleshooting.jpg",
          datePublished: "2025-08-11",
          dateModified: "2025-08-11",
          authorName: "Tech Support Pal"
        })}
      </Script>
    </article>
  )
}
```
