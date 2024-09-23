import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { ArrowRight, Download, Linkedin, Github, Mail, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  const personalInfo = [
    { icon: <Mail size={16} />, label: 'Email', value: 'dhruvbhardwaj12a14@gmail.com' },
    { icon: <MapPin size={16} />, label: 'Location', value: 'New Delhi,India' },
    { icon: <Calendar size={16} />, label: 'Birthday', value: 'February 26 ,2003' },
    { icon: <Briefcase size={16} />, label: 'Experience', value: ' 0 years' },
  ]

  const education = [
    
    {
      degree: 'Bachelor of Technology in Information Technology',
      school: 'Manipal University Jaipur,Rajasthan',
      year: '2022-2026',
    },
  ]

  const interests = ['Frontend','Backend','Full Stack','UI-UX Designs']

  return (
    <div className="container max-w-screen-2xl mx-auto px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-10">
          About <span className="highlight gradient-text">Me</span>
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
                <CardDescription>A brief overview of my professional path</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                Hello, I am Dhruv Bhardwaj, and from a young age, I was captivated by technology, beginning with my experiments in C++ during my school years. This early exposure ignited a passion for problem-solving and innovation. I was known for my dedication and perseverance, traits that consistently earned me high grades throughout my academic career. My commitment to learning and growing was evident in my approach to every challenge I faced, whether in the classroom or in my personal projects.
                </p>
                <p className="mb-4">
                Entering college at Manipal University Jaipur marked a significant shift, as I found myself navigating a new and complex world of technology. Despite having minimal prior knowledge, I took proactive steps to prepare for future opportunities. In my first year, I concentrated on mastering data structures and algorithms (DSA), which I recognized as crucial for my placement prospects. My efforts were further supported by the valuable insights and guidance from mentors and professors, which greatly accelerated my learning curve.
                </p>
                <p>
                By the second year, I shifted my focus to web development, starting with foundational technologies such as HTML, CSS, and JavaScript. Although I encountered numerous obstacles, my persistence paid off as I gradually became proficient in these areas. I extended my learning to React, MongoDB, and Express, culminating in the creation of my first significant project, the AI Mock Interview App. This project was a testament to my resilience and dedication, as I faced and overcame various technical challenges. Currently, I am committed to continuous learning and skill enhancement, determined to build a successful future in technology.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Personal Info</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {personalInfo.map((item) => (
                    <motion.li 
                      key={item.label} 
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="mr-2">{item.icon}</span>
                      <span className="font-medium text-muted-foreground mr-2">{item.label}:</span>
                      <span>{item.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/dhruv-bhardwaj-48b96524a/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/DhruvBhardwaj10" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {education.map((edu) => (
                    <motion.li 
                      key={edu.degree} 
                      className="flex items-start"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <GraduationCap size={20} className="mr-2 mt-1" />
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <motion.div
                      key={interest}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Badge variant="secondary">{interest}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="https://drive.google.com/file/d/1utJ7G3b80RAjUG5x5aEpx-sLUGUq0-mR/view?usp=sharing" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
