import { useEffect, useRef } from "react";
import styles from './Hero.module.css';
import bird from './assets/bird.png';
function Hero () {
const canvasRef = useRef(null);
useEffect(()=>{
const canvas = canvasRef.current;
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = Array.from({ length:80},()=>({
    x:Math.random() * canvas.width,
    y: Math.random()* canvas.height,
    r: Math.random() *2 + 0.5,
    dx:(Math.random()-0.5)*0.6,
    dy: (Math.random()-0.5)*0.6,
    opacity: Math.random*0.6 + 0.2,}))
let animID
function draw (){
    ctx.clearRect (0,0,canvas.width,canvas.height);
    particles.forEach(p=> { 
    ctx.beginPath();
     ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.fill();
    p.x +=p.dx;
    p.y +=p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *=-1 ;
    if(p.y < 0 || p.y > canvas.height )p.dy*=-1;    
    });
    animID=requestAnimationFrame(draw);
}    
draw();
return() => cancelAnimationFrame(animID);
},[])
return (
<section className={styles.hero}>
<canvas ref={canvasRef} className={styles.canvas}></canvas>
<div className={styles.content}>
<h1 className={styles.title}>SKYLARK    
</h1>
<p className={styles.subtitle}></p>
<p  className={styles.tagline}>
    we develope minds not only softwares
</p>
<p className={styles.description}>
     and we can make every inspiration comes in
ur mind to reality !
</p>
</div>
<img src={bird} alt="blackbird" className={styles.bird}/>
</section>
)
}
export default Hero ;