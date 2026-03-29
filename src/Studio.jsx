import { useEffect, useRef } from "react";
import styles from "./Studio.module.css";

function Studio() {
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
  <section id="studio" className={styles.studio}>
    <canvas ref={canvasRef} className={styles.canvas}></canvas>
    <div className={styles.content}>
      <h2 className={styles.title}>WELCOME TO SKYLARK TEAM</h2>
      <p className={styles.subtitle}>We make different teams divided into two sections</p>
      <div className={styles.teams}>
   <div className={styles.card}>
     <h3 className={styles.cardTitle}>SAAS team</h3>
     <p className={styles.cardText}>SkyLark can code your system architecture
              & protect your data</p>
   </div>
   <div className={styles.card}>
     <h3 className={styles.cardTitle}>PRODUCTION team</h3>
     <p className={styles.cardText}>We can film your startup's marketing content over the stock market, after vertualizing it .</p>
   </div>
</div>
    </div>   
</section>
)}
export default Studio ;