$.fn.quietflow=function(l){var s=this.width(),m=this.height();$("#quietflow").remove();var a="starfield",o=-1e3;null!=l&&null!=l.z_Index&&(o=l.z_Index);var u,f,n,c=[],M=!0,g=10,p=255,C=255,S=255,y=20,b=30,v="#6F6F6F",T=40,k=50,x=50,B=s/2,D=m/2,R=50,w="#D4145A",P="#FBB03B",G=3,F="#fff",q=50,z=400,I=80,t=document.createElement("canvas"),L=t.getContext("2d");t.id="quietflow",t.width=s,t.height=m,t.style.zIndex=o,t.style.position="fixed",t.style.top=0;var e,r,i,h=$(this).attr("id");null!=h?document.getElementById(h).appendChild(t):document.body.appendChild(t);function A(l,o,a,t){return null!=t?"rgba("+Math.floor(Math.random()*l).toString()+","+Math.floor(Math.random()*o).toString()+","+Math.floor(Math.random()*a).toString()+", .5)":"rgb("+Math.floor(Math.random()*l).toString()+","+Math.floor(Math.random()*o).toString()+","+Math.floor(Math.random()*a).toString()+")"}null!=l?"squareFlash"==l.theme?(a="squareFlash",null!=l.squareSize&&(g=l.squareSize),null!=l.maxRed&&(p=l.maxRed),null!=l.maxGreen&&(C=l.maxGreen),null!=l.maxBlue&&(S=l.maxBlue),f=null!=l.speed?l.speed:100):"vortex"==l.theme?(a="vortex",null!=l.mainRadius&&(y=l.mainRadius),null!=l.miniRadii&&(b=l.miniRadii),u=null!=l.backgroundCol?l.backgroundCol:"#01FAFC",null!=l.circleCol&&(v=l.circleCol),f=null!=l.speed?l.speed:10):"bouncingBalls"==l.theme?(a="bouncingBalls",null!=l.specificColors&&(c=l.specificColors),u=null!=l.backgroundCol?l.backgroundCol:"#D6D6D6",null!=l.maxRadius&&(T=l.maxRadius),null!=l.bounceSpeed&&(k=l.bounceSpeed),null!=l.bounceBallCount&&(x=l.bounceBallCount),M=null==l.transparent||l.transparent):"shootingLines"==l.theme?(a="shootingLines",u=null!=l.backgroundCol?l.backgroundCol:"#000",null!=l.lineColor?lineColor=l.lineColor:lineColor="#fff",f=null!=l.speed?l.speed:150,n=null!=l.lineGlow?l.lineGlow:"#fff",null!=l.lines&&(R=l.lines)):"simpleGradient"==l.theme?(a="simpleGradient",null!=l.primary&&(w=l.primary),null!=l.accent&&(P=l.accent)):"starfield"==l.theme?(a="starfield",null!=l.starColor&&(F=l.starColor),null!=l.starSize&&(G=l.starSize),f=null!=l.speed?l.speed:100):"layeredTriangles"==l.theme?(a="layeredTriangles",u=null!=l.backgroundCol?l.backgroundCol:"#D6D6D6",M=null==l.transparent||l.transparent,null!=l.specificColors&&(c=l.specificColors),null!=l.triangles&&(q=l.triangles)):"cornerSpikes"==l.theme?(a="cornerSpikes",null!=l.specificColors&&(c=l.specificColors),u=null!=l.backgroundCol?l.backgroundCol:"#000",null!=l.lineColor?lineColor=l.lineColor:lineColor="#fff",f=null!=l.speed?l.speed:100,n=null!=l.lineGlow?l.lineGlow:"#fff"):"floatingBoxes"==l.theme&&(a="floatingBoxes",null!=l.specificColors&&(c=l.specificColors),null!=l.boxCount&&(z=l.boxCount),null!=l.maxBoxSize&&(I=l.maxBoxSize),u=null!=l.backgroundCol?l.backgroundCol:"#D6D6D6",M=null==l.transparent||l.transparent):(e="You need to specify some attributes!",r="#D6D6D6",i="#DF0000",console.log("%c "+e,"background: "+r+"; color: "+i)),function(){if("squareFlash"==a)setTimeout(function l(){for(var o=0;o<s;o+=g+1)for(var a=0;a<m;a+=g+1)L.fillStyle=A(p,C,S),L.fillRect(o,a,g,g);setTimeout(l,f)},f);else if("vortex"==a){var r=2,i=4,h=s/2,d=m/2;setTimeout(function l(){(s<h+r||h+r<0)&&(r=-r),(m<d+i||d+i<0)&&(i=-i),h+=r,d+=i,L.fillStyle=u,L.fillRect(0,0,s,m);for(var o=0;o<b;o++)for(var a=0;a<b;a++){var t=o/b*s,e=a/b*m,n=Math.sqrt(Math.pow(h-t,2)+Math.pow(d-e,2))/y;L.beginPath(),L.fillStyle=v,L.arc(t,e,n,0,2*Math.PI,!0),L.closePath(),L.fill()}setTimeout(l,f)},f)}else if("bouncingBalls"==a){circleData=[];for(var l=0;l<x;l++)0==c.length?M?circleData.push([Math.random()*s,Math.random()*m,Math.random()*T,2*Math.random(),4*Math.random(),A(255,255,255,.5)]):circleData.push([Math.random()*s,Math.random()*m,Math.random()*T,2*Math.random(),4*Math.random(),A(255,255,255)]):circleData.push([Math.random()*s,Math.random()*m,Math.random()*T,2*Math.random(),4*Math.random(),c[Math.floor(Math.random()*c.length)]]);setTimeout(function l(){L.fillStyle=u,L.fillRect(0,0,s,m);for(var o=0;o<x;o++){var a=circleData[o];(a[0]+a[3]>s||a[0]+a[3]<0)&&(a[3]=-a[3]),(a[1]+a[4]>m||a[1]+a[4]<0)&&(a[4]=-a[4]),a[0]+=a[3],a[1]+=a[4],L.beginPath(),L.fillStyle=a[5],L.arc(a[0],a[1],a[2],0,2*Math.PI,!0),L.closePath(),L.fill()}setTimeout(l,k)},k)}else if("shootingLines"==a)setTimeout(function l(){L.fillStyle=u,L.fillRect(0,0,s,m),L.beginPath(),L.fillStyle=lineColor,L.arc(B,D,2,0,2*Math.PI,!0),L.closePath(),L.fill();for(var o=0;o<R;o++)L.beginPath(),L.moveTo(B,D),L.lineTo(Math.random()*s,Math.random()*m),L.strokeStyle=lineColor,L.shadowColor=n,L.shadowBlur=20,L.stroke();setTimeout(l,f)},f);else if("simpleGradient"==a){var o=L.createLinearGradient(0,0,s/2,m);o.addColorStop(0,w),o.addColorStop(1,P),L.fillStyle=o,L.fillRect(0,0,s,m)}else if("starfield"==a){var e=[];for(l=0;l<700;l++)e.push([Math.random()*s*2-s,Math.random()*m,Math.random()*G,Math.ceil(5*Math.random())]);setTimeout(function l(){var o=L.createLinearGradient(0,0,s/2,m);o.addColorStop(0,"#333333"),o.addColorStop(1,"#000"),L.fillStyle=o,L.fillRect(0,0,s,m);for(var a=0;a<e.length;a++){var t=e[a];t[0]+=t[3],L.beginPath(),L.fillStyle=F,L.arc(t[0],t[1],t[2],0,2*Math.PI,!0),L.shadowColor="#fff",L.shadowBlur=20,L.closePath(),L.fill(),t[0]>s&&(e.splice(a,1),e.unshift([Math.random()*s/4-s/4,Math.random()*m,Math.random()*G,Math.ceil(5*Math.random())]))}setTimeout(l,f)},f)}else if("layeredTriangles"==a)for(L.fillStyle=u,L.fillRect(0,0,s,m),l=0;l<q;l++)L.beginPath(),L.moveTo(Math.random()*s,Math.random()*m),L.lineTo(Math.random()*s,Math.random()*m),L.lineTo(Math.random()*s,Math.random()*m),0<c.length?L.fillStyle=c[Math.floor(Math.random()*c.length)]:L.fillStyle=A(255,255,255,.5),L.closePath(),L.fill();else if("cornerSpikes"==a)L.fillStyle=u,L.fillRect(0,0,s,m),setTimeout(function l(){L.beginPath(),0<c.length?L.strokeStyle=c[Math.floor(Math.random()*c.length)]:L.strokeStyle=A(255,255,255),L.moveTo(0,0),L.lineTo(Math.random()*s,Math.random()*m),0<c.length?L.strokeStyle=c[Math.floor(Math.random()*c.length)]:L.strokeStyle=A(255,255,255),L.moveTo(s,0),L.lineTo(Math.random()*s,Math.random()*m),0<c.length?L.strokeStyle=c[Math.floor(Math.random()*c.length)]:L.strokeStyle=A(255,255,255),L.moveTo(0,m),L.lineTo(Math.random()*s,Math.random()*m),0<c.length?L.strokeStyle=c[Math.floor(Math.random()*c.length)]:L.strokeStyle=A(255,255,255),L.moveTo(s,m),L.lineTo(Math.random()*s,Math.random()*m),L.shadowColor=n,L.shadowBlur=20,L.stroke(),setTimeout(l,f)},f);else if("floatingBoxes"==a){var t=[];for(l=0;l<z;l++)0==c.length?M?t.push([Math.random()*s*2-s,Math.random()*m,Math.random()*I+1,A(255,255,255,.5),5*Math.random()]):t.push([Math.random()*s*2-s,Math.random()*m,Math.random()*I+1,A(255,255,255),5*Math.random()]):t.push([Math.random()*s*2-s,Math.random()*m,Math.random()*I+1,c[Math.floor(Math.random()*c.length)],5*Math.random()]);setTimeout(function l(){L.fillStyle=u,L.fillRect(0,0,s,m);for(var o=0;o<t.length;o++){var a=t[o];L.fillStyle=a[3],L.fillRect(a[0],a[1],a[2],a[2]),a[0]+=a[4],a[1]-=a[4],(a[0]>s+I||a[1]<-I)&&(t.splice(o,1),0==c.length?M?t.push([Math.random()*s*2-s,Math.random()*m*2+m,Math.random()*I+1,A(255,255,255,.5),5*Math.random()]):t.push([Math.random()*s*2-s,Math.random()*m*2+m,Math.random()*I+1,A(255,255,255),5*Math.random()]):t.push([Math.random()*s*2-s,Math.random()*m*2+m,Math.random()*I+1,c[Math.floor(Math.random()*c.length)],5*Math.random()]))}setTimeout(l,100)},100)}}()};