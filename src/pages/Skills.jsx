'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Code, Server, Database, Cloud,  Lock, Palette, Globe } from 'lucide-react'

const skills = [
  { 
    category: 'Frontend', 
    icon: <Code size={24} />,
    items: [
      { name: 'React', level: 90 },
     
      { name: 'JavaScript', level: 90 },
     
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'shadcn/ui', level: 90 },
    ]
  },
  { 
    category: 'Backend', 
    icon: <Server size={24} />,
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
    ]
  },
  { 
    category: 'Database', 
    icon: <Database size={24} />,
    items: [
      { name: 'MongoDB', level: 90 },
      { name: 'Mongoose', level: 85 },
    ]
  },
  { 
    category: 'DevOps & Tools', 
    icon: <Cloud size={24} />,
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vercel', level: 85 },
      { name: 'Render', level: 80 },
      { name: 'Postman', level: 85 },
    ]
  },
  {
    category: 'Authentication',
    icon: <Lock size={24} />,
    items: [
      { name: 'Clerk', level: 85 },
      { name: 'JWT', level: 80 },
    ]
  },
  {
    category: 'UI/UX',
    icon: <Palette size={24} />,
    items: [
      { name: 'Responsive Design', level: 90 },
      { name: 'UI Frameworks', level: 85 },
      { name: 'Accessibility', level: 80 },
    ]
  },
]

const certifications = [
  "MERN Stack Developer",
  "Git Essential Training",
  "React.js Advanced Concepts",
  "Node.js Microservices",
  "MongoDB for Developers"
]

export default function Skills() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-10">
          My <span className="highlight gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="hover-lift card-gradient h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">
                    {skillCategory.category}
                  </CardTitle>
                  {skillCategory.icon}
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Certifications & Achievements</h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {cert}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Completed in {2023 - index}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <Card className="hover-lift card-gradient">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Globe className="mr-2" size={24} />
                Full Stack Proficiency
              </CardTitle>
              <CardDescription>
                Experienced in building end-to-end web applications using the MERN stack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Proficient in creating robust and scalable applications using MongoDB, Express.js, React, and Node.js. 
                Skilled in integrating modern authentication solutions like Clerk, implementing responsive designs with 
                Tailwind CSS and shadcn/ui, and utilizing version control with Git and GitHub. Experienced in deploying 
                applications on cloud platforms such as Vercel and Render, and proficient in API testing and development 
                using Postman.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}