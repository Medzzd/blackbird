import { useEffect, useRef } from 'react'
import styles from './Join.module.css'

function Join () {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.6 + 0.2
    }))

    let animID
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animID = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animID)
  }, [])

  return (
    <section id="join" className={styles.join}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        <h2 className={styles.title}>JOIN SKYLARK</h2>
        <p className={styles.subtitle}>
          Ready to take your project to the next level ?
        </p>

        <div className={styles.items}>

          <a href="mailto:Skylarddz@gmail.com" className={styles.item}>
            <span className={styles.icon}>✉️</span>
            <span className={styles.text}>Skylarddz@gmail.com</span>
          </a>


          <a href="tel:1246973" className={styles.item}>
            <span className={styles.icon}>📞</span>
            <span className={styles.text}>1246973</span>
          </a>

        </div>
      </div>

    </section>
  )
}

export default Join