import{ad as c,ae as m}from"./siteModulesConstants.BHqRCOJy.js";const p=e=>e.startsWith("www."),x=e=>p(e)?e.substring(4):e,A=e=>{const t=`${e}=`,a=decodeURIComponent(document.cookie).split(";");for(let o=0;o<a.length;o+=1){let s=a[o];for(;s.charAt(0)===" ";)s=s.substring(1);if(s.indexOf(t)===0)return s.substring(t.length,s.length)}return""},I=(e,t,n,{cdomain:a=null}={})=>{const o=new Date;o.setTime(o.getTime()+n*24*60*60*1e3);const s=n?`expires=${o.toUTCString()};`:"",r=a?`domain=${a};`:"";document.cookie=`${e}=${t};${s}path=/;${r}`},N=e=>{document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`},S=!1,L=()=>window.self!==window.top,i=({type:e,tagName:t,properties:n={},children:a=[]})=>{if(e!=="element")return console.error("Failed to injected HTML element - missing node type");const o=document.createElement(t);if(Object.entries(n).forEach(([s,r])=>{o.setAttribute(s,r)}),a.length){const s=a.find(r=>r.type==="text").value;s&&(o.innerHTML=s)}return o},g=e=>{const t=`[${c}="${e}"]`;return document.querySelector(t)},u=e=>{const t=i(e),n=g(t.getAttribute(c));return t.outerHTML===n?.outerHTML?n:(n?.remove(),document.head.append(t),t)},h=e=>{const t=i(e),n=g(t.getAttribute(c));return t.outerHTML===n?.outerHTML?n:(n?.remove(),document.body.append(t),t)},f=e=>`!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '${e}');
	fbq('track', 'PageView');`,y=e=>`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${e}&ev=PageView&noscript=1"/>`,w=({containerId:e,gtmQuery:t=""}={})=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl${t};f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','${e}');`,j=({containerId:e,gtmQuery:t=""}={})=>`<iframe src="https://www.googletagmanager.com/ns.html?id=${e}${t}"
		height="0" width="0" style="display:none;visibility:hidden"></iframe>`,E=({containerId:e,googleAdsIds:t})=>{const n=t.length?t.map(o=>`gtag('config', '${o}');`).join(`
		`):"";return`window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		${e?`gtag('config', '${e}');`:""}
		${n}`},T=e=>`https://www.googletagmanager.com/gtag/js?id=${e}`,v=e=>`(function(h,o,t,j,a,r){
		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		h._hjSettings={hjid:${e},hjsv:6};
		a=o.getElementsByTagName('head')[0];
		r=o.createElement('script');r.async=1;
		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		a.appendChild(r);
	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,b=e=>`https://code-eu1.jivosite.com/widget/${e}`,l=({siteMeta:e,areCookiesAllowed:t})=>{const n={};return t&&e.facebookPixel&&(n["noscript-fb-pixel"]={tagName:"noscript",children:[{type:"text",value:y(e.facebookPixel)}]}),t&&e.googleTagManager&&(n["noscript-gtm"]={tagName:"noscript",children:[{type:"text",value:j(e.googleTagManager)}]}),t&&e.facebookPixel&&(n["script-fb-pixel"]={tagName:"script",children:[{type:"text",value:f(e.facebookPixel)}]}),t&&(e.googleTagManager||e.googleAdsIds?.length)&&(n["script-gtm"]={tagName:"script",children:[{type:"text",value:w({containerId:e.googleTagManager?e.googleTagManager:e.googleAdsIds[0]})}]}),t&&(e.googleAnalytics||e.googleAdsIds?.length)&&(n["script-google-analytics"]={tagName:"script",children:[{type:"text",value:E({containerId:e.googleAnalytics,googleAdsIds:e.googleAdsIds||[]})}]},e.googleAnalytics&&(n["script-google-analytics-async"]={tagName:"script",properties:{src:T(e.googleAnalytics)}})),t&&e.hotjar&&(n["script-hotjar"]={tagName:"script",children:[{type:"text",value:v(e.hotjar)}]}),e.jivoChat&&(n["script-jivochat"]={tagName:"script",properties:{src:b(e.jivoChat)}}),Object.entries(n).map(([a,{tagName:o,properties:s={},children:r=[]}])=>({type:"element",tagName:o,properties:{...s,[c]:a},children:r}))},d=e=>{e.forEach(t=>m.includes(t.properties[c])?h(t):u(t))},k=({siteMeta:e,areCookiesAllowed:t})=>{const n=l({siteMeta:e,areCookiesAllowed:t});d(n)},_=({siteMeta:e,areCookiesAllowed:t})=>{const n=l({siteMeta:e,areCookiesAllowed:t});d(n)},P=(e,t)=>window.gtag("event",e,t),q=e=>{const{currency:t,amount:n}=e.variants[0].prices[0],{title:a,seo_settings:o}=e;return{value:n,currency:t.code.toUpperCase(),items:[{title:a,slug:o.slug}]}},B=e=>{const t=e.reduce((o,s)=>{const{amount:r}=s.variants[0].prices[0];return o+r},0),n=e.map(o=>({title:o.title,slug:o.seo_settings.slug})),{currency:a}=e[0].variants[0].prices[0];return{value:t,currency:a.code.toUpperCase(),items:n}};export{A as a,k as b,P as c,B as d,L as e,q as f,x as g,_ as h,S as i,N as j,u as k,I as s};
