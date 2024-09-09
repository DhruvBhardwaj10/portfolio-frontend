import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowRight, Code, Briefcase, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    { icon: <Code size={24} />, title: 'Full Stack Development', description: 'Building end-to-end web applications' },
    { icon: <Briefcase size={24} />, title: 'Tech Enthusiast', description: 'Passionate about innovation and technology ' },
    { icon: <User size={24} />, title: 'UI/UX Design', description: 'Creating intuitive and beautiful interfaces' },
  ]

  return (
    <div className="container max-w-screen-2xl mx-auto px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block mb-2">Hi, I'm <span className="highlight gradient-text">Dhruv Bhardwaj</span></span>
          <span className="block text-primary">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h1>
        <motion.p
          className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build beautiful, responsive, and user-friendly web applications using modern technologies.
          Let's create something amazing together!
        </motion.p>
        <motion.div
          className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="rounded-md shadow">
            <Button
              asChild
              className="w-full flex items-center justify-center px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10"
            >
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center mb-10">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <Card className="hover-lift card-gradient">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <motion.div 
                    className="rounded-full bg-primary/10 p-3 mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}