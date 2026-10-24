'use strict';
(() => {
  const projects = [
    {title:'DR Garage',tag:'DATA & AI PLATFORM',year:'2025–NOW',description:"The strategic centerpiece of duPont REGISTRY Group's digital transformation — a full-stack data and AI analytics platform powering luxury automotive marketplace intelligence.",tech:['React','Python','AWS','ML']},
    {title:'GlanceAI',tag:'AI WEARABLE',year:'2026',description:"Personal AI assistant streaming Ray-Ban Meta smart glasses camera feed through Claude's Vision API, delivering contextual answers to Apple Watch in under 3 seconds.",tech:['Swift','Claude API','watchOS','Meta SDK']},
    {title:'Voice AI Suite',tag:'AI VOICE PLATFORM',year:'2026',description:'Three-product AI voice calling platform for service businesses — receptionist, follow-up caller, and outreach bot. Built inbound-first to stay TCPA-compliant.',tech:['Retell AI','GoHighLevel','n8n','Node.js']},
    {title:'BePlayFuel',tag:'GAMING PLATFORM',year:'2024–NOW',description:'Competitive gaming platform with mobile-first features and real-time matchmaking. React Native frontend with scalable backend services.',tech:['React Native','Node.js','Firebase']}
  ];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let selected=0, paused=reduced.matches, amplitude=.65, phase=0, frame=0;
  const signal=document.querySelector('#signal-canvas');
  const atlas=document.querySelector('#atlas-canvas');
  const canvas=signal||atlas;
  const ctx=canvas?.getContext('2d');
  let width=0,height=0;
  function resize(){
    if(!ctx)return;
    const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;
    const ratio=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);
    draw();
  }
  function draw(){
    if(!ctx||!width||!height)return;
    ctx.clearRect(0,0,width,height);
    if(signal){
      ctx.strokeStyle='#9cb558';ctx.lineWidth=.5;
      for(let x=0;x<width;x+=width/8){ctx.beginPath();ctx.moveTo(x,15);ctx.lineTo(x,height-15);ctx.stroke()}
      for(let y=height/8;y<height;y+=height/8){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(width,y);ctx.stroke()}
      const count=42;
      for(let k=0;k<count;k++){
        const depth=k/(count-1);ctx.strokeStyle=`rgba(23,40,20,${.25+depth*.7})`;ctx.lineWidth=.65;
        ctx.beginPath();
        for(let i=0;i<=220;i++){
          const t=i/220;const envelope=Math.pow(Math.sin(t*Math.PI),1.2);
          const frequency=[3,5,2,7][selected];
          const oscillation=Math.sin(t*Math.PI*frequency+phase+depth*3.2)*Math.cos(t*9-phase*.35+depth*2);
          const x=t*width;const y=height*.25+depth*height*.5+oscillation*envelope*amplitude*height*.22;
          i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
        }ctx.stroke();
      }
    }else if(atlas){
      const box=canvas.getBoundingClientRect();
      const points=Array.from(document.querySelectorAll('.atlas-nodes button')).map(node=>{const r=node.getBoundingClientRect();return [(r.left+r.width/2-box.left)/width,(r.top+r.height/2-box.top)/height]});
      const edges=[[0,1],[0,2],[1,2],[1,3],[2,3]];
      edges.forEach(([a,b])=>{
        ctx.beginPath();ctx.moveTo(points[a][0]*width,points[a][1]*height);ctx.lineTo(points[b][0]*width,points[b][1]*height);
        ctx.strokeStyle=a===selected||b===selected?'#efff90':'#8294f7';ctx.lineWidth=a===selected||b===selected?1.5:.7;ctx.stroke();
      });
    }
  }
  function tick(){frame=0;if(paused||document.hidden||!signal)return;phase+=.009;draw();frame=requestAnimationFrame(tick)}
  function animate(){cancelAnimationFrame(frame);frame=0;draw();if(!paused&&!document.hidden&&signal)frame=requestAnimationFrame(tick)}
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
    selected=Number(button.dataset.project);const p=projects[selected];
    document.querySelectorAll('[data-project]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.project)===selected)));
    const panel=document.querySelector('.project-detail, .atlas-detail');
    panel.querySelector('[data-title]').textContent=p.title;
    panel.querySelector('[data-description]').textContent=p.description;
    panel.querySelector('[data-tech]').textContent=p.tech.join(' / ');
    const meta=panel.querySelectorAll('.project-meta span');meta[0].textContent=p.tag;meta[1].textContent=p.year;
    draw();
  }));
  const pause=document.querySelector('#pause');
  function pauseState(){if(!pause)return;pause.textContent=paused?'Resume signal':'Pause signal';pause.setAttribute('aria-pressed',String(paused))}
  pause?.addEventListener('click',()=>{paused=!paused;pauseState();animate()});
  document.querySelector('#amplitude')?.addEventListener('input',event=>{amplitude=Number(event.target.value)/100;draw()});
  document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelector('.atlas-field').classList.toggle('list-mode',button.dataset.view==='list');
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    resize();
  }));
  document.querySelectorAll('.fold').forEach(fold=>fold.addEventListener('toggle',()=>{
    if(fold.open)document.querySelectorAll('.fold').forEach(other=>{if(other!==fold)other.open=false});
  }));
  if(ctx){new ResizeObserver(resize).observe(canvas);resize();pauseState();animate()}
  reduced.addEventListener('change',()=>{paused=reduced.matches;pauseState();animate()});
  document.addEventListener('visibilitychange',animate);
})();
