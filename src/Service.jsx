import { useEffect, useRef } from "react";
import { CyberGlitchText } from "@/components/ui/cyber-glitch-text"
import styles from './Services.module.css'
function Service (){
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
    opacity: Math.random() *0.6 + 0.2,}))
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
const services = [
{
icon : "🔒",
title : "CYBERSECURITY",
desc : "Protect ur data from every threat ",
team : "SAAS"

},
{
icon :"📊" ,
      title : "DATA MANAGEMENT",
      desc : "Master and structure your data flow",
      team :"SAAS"
},
{ 
icon : "🏗️",
title : "SOFTWARE ARCHITECTURE",
desc : "Design your entire system infrastructure",
team : "SAAS"
},
{
    icon: "📈",
      title: "MARKETING CONSULTING",
      desc: "Grow and scale your startup marketing, we can guide u from the bottom ",
      team: "PRODUCTION"
},
{
icon: "🎥",
      title: "ADVERTISING & SHORT MOVIES ",
      desc: "Including the marketing we gather ur business shooting with it .And for the ones who have some inspiration,  we can make it real and make ur movie  ",
      team: "PRODUCTION"

},
]

return (
<section id="services" className={styles.services}>
<canvas ref={canvasRef} className={styles.canvas} />
<CyberGlitchText
text="ACCESS GRANTED —0001x0x10- WELCOME TO SKYLARK"
className={styles.glitch}/>
<div className={styles.timeline}>
{services.map((service,index)=>(
<div key={index} className={styles.item}>
    <div className={styles.line}>
          <div className={styles.dot}></div>
    </div>
  
    <div className={styles.content}>
        <span className={styles.team}>{service.team}</span>
        <h3 className={styles.title}>
            {service.title}
        </h3>
        <p className={styles.desc}>{service.desc}</p>
   </div>
</div>   

))}
</div>
</section>
)
}
export default Service;