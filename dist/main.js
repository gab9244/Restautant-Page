(()=>{"use strict";const e=document.createElement("section");e.setAttribute("id","Home");const t=document.createElement("p");t.textContent="Over a millennium of experience";const n=document.createElement("button");n.textContent="Read more",e.append(t),e.append(n);const c=document.createElement("div");c.setAttribute("id","menublockStyle");const d=document.createElement("div");d.setAttribute("id","cardStyle");const o=document.createElement("p");o.textContent="PEFOLDS",d.append(o);const a=document.createElement("div");a.setAttribute("id","cardsImage");const s=document.createElement("button");s.textContent="More Info",s.setAttribute("class","cardButtonStyle"),d.append(a),d.append(s);const r=document.createElement("div");r.setAttribute("id","card1Style");const i=document.createElement("p");i.textContent="GRANGE",r.append(i);const m=document.createElement("div");m.setAttribute("id","cardsImage1");const l=document.createElement("button");l.textContent="More Info",l.setAttribute("class","cardButtonStyle"),r.append(m),r.append(l);const u=document.createElement("div");u.setAttribute("id","card2Style");const p=document.createElement("p");p.textContent="SHCHLOSS",u.append(p);const E=document.createElement("div");E.setAttribute("id","cardsImage2");const b=document.createElement("button");b.textContent="More Info",b.setAttribute("class","cardButtonStyle"),u.append(E),u.append(b);const y=document.createElement("div");y.setAttribute("id","cardStyle");const A=document.createElement("p");A.textContent="PEFOLDS",y.append(A);const C=document.createElement("div");C.setAttribute("id","cardsImage");const v=document.createElement("button");v.textContent="More Info",v.setAttribute("class","cardButtonStyle"),y.append(C),y.append(v),c.append(d,r,u,y);const x=document.createElement("div");x.setAttribute("id","contact"),x.append('our wines are made from the best selected grapes and remember.  " \nHome is where the wine is" ');const S=document.createElement("a");S.href="https://github.com/gab9244",S.append("Github"),x.append(S);const h=document.querySelector("body"),f=document.createElement("div");f.setAttribute("id","container"),h.append(f);const I=document.createElement("header");I.textContent="Wines",I.setAttribute("id","headerMenu"),document.createElement("h1").setAttribute("id","title");const g=document.createElement("div");g.classList.add("buttons"),I.append(g);let L=document.createElement("button"),M=document.createElement("button"),H=document.createElement("button");L.textContent="Home",M.textContent="Menu",H.textContent="Contect",g.append(L),g.append(M),g.append(H);const k=document.createElement("main");function B(t){"home"===t&&(e.style.display="inline",c.style.display="none",x.style.display="none"),"menu"===t&&(c.style.display="flex",e.style.display="none",x.style.display="none",k.append(c)),"contact"==t&&(x.style.display="inline",c.style.display="none",e.style.display="none",k.append(x))}k.setAttribute("id","mainContent"),k.append(e),L.addEventListener("click",(()=>{B("home")})),M.addEventListener("click",(()=>{B("menu")})),H.addEventListener("click",(()=>{B("contact")})),f.append(I),f.append(k)})();