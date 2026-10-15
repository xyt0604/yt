(() => {
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0;

  function resize(){
    const dpr = window.devicePixelRatio || 1;
    w = canvas.width = Math.floor(window.innerWidth * dpr);
    h = canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', () => { resize(); });
  resize();

  const config = {
    count: Math.max(30, Math.floor((window.innerWidth * window.innerHeight) / 20000)),
    maxDist: 150,
    speed: 0.6,
    color: '255,255,255'
  };

  const particles = [];
  const mouse = {x: null, y: null, radius: 120};

  class Particle {
    constructor(){
      this.reset(true);
    }
    reset(init){
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random()*0.5 + 0.2) * config.speed;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.r = Math.random()*2 + 0.8;
      this.alpha = Math.random()*0.6 + 0.2;
      if(!init && Math.random()<0.05){ this.x = Math.random()*window.innerWidth; this.y = -10; }
    }
    step(){
      this.x += this.vx;
      this.y += this.vy;
      if(this.x < -20 || this.x > window.innerWidth+20 || this.y < -20 || this.y > window.innerHeight+20){
        this.reset();
      }
    }
    draw(){
      ctx.beginPath();
      ctx.fillStyle = `rgba(${config.color},${this.alpha})`;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fill();
    }
  }

  function initParticles(){
    particles.length = 0;
    for(let i=0;i<config.count;i++) particles.push(new Particle());
  }

  function step(){
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);

    // move & draw
    for(let p of particles){ p.step(); p.draw(); }

    // draw connections
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x; const dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < config.maxDist){
          const t = 1 - dist / config.maxDist;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${config.color},${(t*0.35).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
      // mouse interaction
      if(mouse.x !== null){
        const p = particles[i];
        const dx = p.x - mouse.x; const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < mouse.radius){
          const force = (1 - dist / mouse.radius) * 0.6;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

  // initialize
  initParticles();
  requestAnimationFrame(step);

  // handle visibility change to pause/resume
  document.addEventListener('visibilitychange', () => {
    if(document.hidden){ /* noop - animation frames stop automatically */ }
  });

  // expose a small API for integration
  window.CanvasBg = {
    rebuild: () => { initParticles(); }
  };

})();
