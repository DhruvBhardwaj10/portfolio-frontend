import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2021 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and AWS.',
    achievements: [
      'Improved application performance by 40% through code optimization and caching strategies',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines, reducing deployment time by 60%',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSolutions Co.',
    period: 'Mar 2018 - Dec 2020',
    description: 'Developed and maintained multiple client projects using various web technologies.',
    achievements: [
      'Delivered 15+ successful projects for clients across different industries',
      'Integrated third-party APIs and payment gateways',
      'Collaborated with UX designers to implement responsive designs',
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'RESTful APIs', 'Sass'],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Dynamics',
    period: 'Jun 2016 - Feb 2018',
    description: 'Assisted in the development of the companys main product and internal tools.',
    achievements: [
      'Contributed to the front-end development of the main SaaS product',
      'Developed internal dashboard for data visualization',
      'Participated in Agile development processes and sprint planning',
    ],
    technologies: ['Angular', 'Django', 'PostgreSQL', 'Bootstrap', 'jQuery'],
  },
]

export default function Experience() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-6">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center">
                        <Briefcase className="mr-2 h-5 w-5" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}