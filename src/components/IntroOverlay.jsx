import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/components/_introoverlay.scss'

export default function IntroOverlay({ onFinish }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      if (!ready) {
        setReady(true)
        setTimeout(onFinish, 1200) // wait for exit animation
      }
    }

    window.addEventListener('mousemove', handleInteraction)
    window.addEventListener('keydown', handleInteraction)

    return () => {
      window.removeEventListener('mousemove', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
    }
  }, [ready, onFinish])

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            className="intro-video"
            src="/videos/intro-loop2.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <motion.div
            className="intro-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <h1 className="intro-logo">UD Design Solutions</h1>
            {/* <p>Press any key or move mouse to enter</p> */}
          </motion.div>

          <motion.div
            className="intro-overlay-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
