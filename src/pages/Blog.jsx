import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the upcoming trends and technologies that will shape the web development landscape in the coming year.',
    date: 'Dec 15, 2023',
    tags: ['Web Development', 'Trends', 'Technology'],
    readTime: '5 min read',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Dive deep into React Hooks and learn how to use them effectively to build powerful and efficient React applications.',
    date: 'Nov 28, 2023',
    tags: ['React', 'JavaScript', 'Web Development'],
    readTime: '10 min read',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    title: 'Building Scalable Backend Systems with Node.js and MongoDB',
    excerpt: 'Learn the best practices for creating robust and scalable backend systems using Node.js and MongoDB.',
    date: 'Nov 10, 2023',
    tags: ['Node.js', 'MongoDB', 'Backend'],
    readTime: '8 min read',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    title: 'The Art of Writing Clean and Maintainable Code',
    excerpt: 'Discover techniques and principles for writing code that is easy to read, understand, and maintain over time.',
    date: 'Oct 22, 2023',
    tags: ['Clean Code', 'Best Practices', 'Software Development'],
    readTime: '7 min read',
    image: '/placeholder.svg?height=200&width=400',
  },
]

export default function Blog() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-6">
          Latest Blog Posts
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover-lift">
                <CardHeader>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}