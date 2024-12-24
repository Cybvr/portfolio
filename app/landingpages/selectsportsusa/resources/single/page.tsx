'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Share2, Heart } from "lucide-react"
import Image from "next/image"

export default function SingleResourcePage() {
  const article = {
    title: "Select Sports USA Launches New Youth Basketball Program",
    date: "March 15, 2024",
    author: "John Smith",
    readTime: "5 min read",
    category: "News",
    content: `
      Select Sports USA is excited to announce the launch of our new youth basketball development program, designed to nurture young talent and promote the sport at grassroots level.

      The program, which will commence this spring, offers comprehensive training sessions led by experienced coaches and former professional players. It aims to develop fundamental skills while fostering a love for the game among young athletes.
    `,
    tags: ["Youth Basketball", "Development", "Training"],
    relatedArticles: [
      {
        title: "Summer Camp Registration Now Open",
        date: "March 10, 2024",
        category: "Announcements"
      },
      {
        title: "Player Spotlight: Rising Stars of 2024",
        date: "March 5, 2024",
        category: "Features"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/1080"
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </section>

      {/* Article Content */}
      <section className="relative -mt-20">
        <div className="container px-4 md:px-6">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{article.category}</span>
                <span>•</span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b">
                <Image
                  src="/api/placeholder/40/40"
                  alt={article.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">{article.author}</div>
                  <div className="text-sm text-muted-foreground">Basketball Director</div>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <p className="whitespace-pre-line">{article.content}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <Button key={index} variant="outline" size="sm">
                    {tag}
                  </Button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-8 border-t">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="max-w-3xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {article.relatedArticles.map((related, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {related.category} • {related.date}
                    </div>
                    <h3 className="font-bold hover:text-blue-600 cursor-pointer">
                      {related.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}