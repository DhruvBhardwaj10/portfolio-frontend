import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Globe, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import AiMockInterview from '../images/AIMockInterview.png'
const projects = [
  {
    id: 1,
    title: 'AI-Mock Interview App',
    description: 'The AI Mock Interview App, built with the MERN Stack, conducts interviews based on job details and experience, offering real-time feedback and performance ratings.',
    longDescription: 'The AI Mock Interview App is built using the MERN Stack and simulates interviews based on the users job position, job description, and years of experience. It generates tailored questions, provides real-time feedback, and offers a performance rating. This app helps users improve their interview skills through AI-powered assessments.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind','Clerk','Shadcn Ui'],
    image: AiMockInterview,
    demoLink: 'https://ai-interview-app-red.vercel.app/',
    githubLink: 'https://github.com/DhruvBhardwaj10/AI-InterviewApp',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Attendance Tracking System',
    description: 'A responsive attendance tracking application with real-time creation,deletion and updation of student records.',
    longDescription: 'This Student Tracking app allows the teachers to create a student record and also allows them to save attendance for the students which gets saved in real time system.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind','Clerk','Shadcn Ui'],
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://example-taskapp.com',
    githubLink: 'https://github.com/johndoe/task-management-app',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that provides real-time weather information and forecasts.',
    longDescription: 'This weather dashboard pulls data from multiple weather APIs to provide accurate and up-to-date information. It features an interactive map, hourly and daily forecasts, and severe weather alerts. The app also includes a feature for saving favorite locations.',
    technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Chart.js', 'Mapbox GL'],
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://example-weather.com',
    githubLink: 'https://github.com/johndoe/weather-dashboard',
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Inventory Management System',
    description: 'A robust inventory management system for small to medium-sized businesses.',
    longDescription: 'This inventory management system helps businesses track their stock levels, manage suppliers, and generate reports. It includes features like barcode scanning, low stock alerts, and integration with popular accounting software. The system is designed to be scalable and can handle multiple warehouses.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker', 'REST API'],
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://example-inventory.com',
    githubLink: 'https://github.com/johndoe/inventory-system',
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Fitness Tracking Mobile App',
    description: 'A cross-platform mobile app for tracking workouts and nutrition.',
    longDescription: 'This fitness tracking app allows users to log their workouts, track their nutrition, and set fitness goals. It includes features like custom workout plans, progress photos, and social sharing. The app uses device sensors to automatically detect and log certain activities.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Google Fit API', 'Apple HealthKit'],
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://example-fitness.com',
    githubLink: 'https://github.com/johndoe/fitness-tracker',
    category: 'Backend',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  return (
    <div className="container max-w-screen-2xl mx-auto px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-10">
          My <span className="highlight gradient-text">Projects</span>
        </h2>
        <div className="mb-10 flex flex-wrap gap-4">
          {['All', 'Full Stack', 'Frontend', 'Backend'].map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full flex flex-col hover-lift card-gradient">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedProject(project)}>
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="card-gradient">
                        <DialogHeader>
                          <DialogTitle>{selectedProject?.title}</DialogTitle>
                          <DialogDescription>{selectedProject?.longDescription}</DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-between mt-4">
                          <Button asChild>
                            <a href={selectedProject?.demoLink} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                          <Button asChild variant="outline">
                            <a href={selectedProject?.githubLink} target="_blank" rel="noopener noreferrer">
                              <FaGithub className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}