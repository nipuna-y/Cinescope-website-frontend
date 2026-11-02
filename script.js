const movies=[
 {title:'Eda Raa',genre:'Biography · Musical · Romance',year:'2026',runtime:'2h 25m',tag:'Trending',img:'assets/Now Showing/eda-raa-title.jpg',desc:'A heartfelt story of music, family and the moments that shape a life.'},
 {title:'Adaraneeya Tharuwak',genre:'Romance · Musical',year:'2026',runtime:'2h 14m',tag:'Now Showing',img:'assets/Featured Movies/dharmayuddhaya-3-banner.png',desc:'A melodic journey where unexpected encounters change everything.'},
 {title:'Ahasa Tharam',genre:'Romance · Musical',year:'2026',runtime:'1h 55m',tag:'Popular',img:'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=700&q=85',desc:'A young dreamer finds hope and connection in the heart of the city.'},
 {title:'Kalpana',genre:'Romance · Drama',year:'2025',runtime:'2h 12m',tag:'Audience Pick',img:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=700&q=85',desc:'A return home leads to difficult choices and an unexpected new beginning.'},
 {title:'Eka Thamai Meka',genre:'Comedy · Drama',year:'2025',runtime:'2h 10m',tag:'Comedy Hit',img:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85',desc:'One unforgettable day brings a group of strangers together.'},
 {title:'My Simba',genre:'Comedy · Adventure',year:'2025',runtime:'2h 05m',tag:'Family Pick',img:'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=700&q=85',desc:'A family adventure full of humour, courage and heart.'},
 {title:'Happy Birthday',genre:'Mystery · Thriller',year:'2025',runtime:'2h 27m',tag:'Sirasa Original',img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85',desc:'A family gathering takes a dark turn when a long-hidden secret comes to light.'},
 {title:'Dharma Yuddhaya 2',genre:'Crime · Thriller',year:'2025',runtime:'2h 33m',tag:'Blockbuster',img:'assets/Homepage Slider/dharma-yuddhaya-3.jpg',desc:'A determined investigator follows a trail that reveals more than expected.'},
 {title:'U Turn',genre:'Mystery · Thriller',year:'2024',runtime:'2h 26m',tag:'Fan Favourite',img:'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=700&q=85',desc:'One decision on a rain-soaked road changes the lives of strangers.'},
 {title:'Goal',genre:'Sports · Family',year:'2024',runtime:'1h 39m',tag:'Feel Good',img:'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=85',desc:'A small village team dreams of a chance to play on the biggest stage.'}
];
const news=[
 {title:'Eda Raa brings a new musical story to the big screen',date:'October 8, 2026',category:'Film Releases',img:'assets/Cinema News/happy-birthday-banner.jpg',desc:'A new local cinema release celebrates music, family and the stories that connect generations.'},
 {title:'Dharma Yuddhaya 3 gears up for production',date:'October 8, 2026',category:'Industry',img:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=85',desc:'The popular crime franchise is preparing its next chapter, with further details expected soon.'},
 {title:'Adaraneeya Tharuwak expands overseas screenings',date:'August 20, 2026',category:'International',img:'assets/Cinema News/happy-birthday-banner.jpg',desc:'The romantic musical is reaching audiences beyond Sri Lanka with screenings across several cities.'},
 {title:'Kotu heads for a cinematic adaptation',date:'July 6, 2026',category:'Adaptations',img:'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=600&q=85',desc:'A much-loved stage story is being reimagined for the big screen by a local creative team.'}
];
const episodes=[
 {title:'Cinescope | Episode 104',date:'17 October 2026',img:'assets/Homepage Slider/asterix-reference.png',desc:'This week in cinema, new releases, interviews and stories from behind the scenes.'},
 {title:'Cameraman: Behind the Frame',date:'10 October 2026',img:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=85',desc:'A conversation about the craft, challenges and creativity of cinematography.'},
 {title:'Cinescope | Episode 102',date:'03 October 2026',img:'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=85',desc:'The latest cinema highlights, cast conversations and local film updates.'}
];
function movieCard(m){return `<a class="movie-card" href="movie-details.html?id=${encodeURIComponent(m.title)}"><div class="poster"><img loading="lazy" src="${m.img}" alt="${m.title} poster"><span class="tag">${m.tag}</span></div><h3>${m.title}</h3><p>${m.genre} · ${m.year}</p></a>`}
function newsCard(n,index){return `<article class="news-card" data-news-index="${index}" role="button" tabindex="0" aria-label="Read article: ${n.title.replace(/"/g,'&quot;')}"><img loading="lazy" src="${n.img}" alt="${n.title.replace(/"/g,'&quot;')}"><div><small>${n.category.toUpperCase()} · ${n.date}</small><h3>${n.title}</h3><p>${n.desc}</p><span class="news-read-more">READ STORY ↗</span></div></article>`}
function episodeCard(e){return `<article class="episode"><img loading="lazy" src="${e.img}" alt=""><div><small>${e.date.toUpperCase()} · SIRASA TV</small><h3>${e.title}</h3><p>${e.desc}</p><button class="play-episode">▶ &nbsp; Watch episode</button></div></article>`}
function sampleImage(folder, prefix, index){return `assets/${folder}/${prefix}-sample-${String(index+1).padStart(2,'0')}.jpg`}
function renderGrid(id,list){
 const el=document.getElementById(id);if(!el)return;
 const page=location.pathname.split('/').pop()||'index.html';
 const folder=(id==='featured-grid'||page==='featured-movies.html')?'Featured Movies':'Now Showing';
 const prefix=folder==='Featured Movies'?'featured-movies':'now-showing';
 el.innerHTML=list.map((m,i)=>movieCard({...m,img:sampleImage(folder,prefix,i%5)})).join('');
}
function renderNews(id,list=news){
 const el=document.getElementById(id);if(!el)return;
 el.innerHTML=list.map((n,i)=>newsCard({...n,img:sampleImage('Cinema News','cinema-news',i%5)},news.indexOf(n))).join('');
}

// News article drawer: image, full story and associated film information.
const newsFilmInfo=[
 {film:'Eda Raa',genre:'Biography · Musical · Romance',year:'2026',runtime:'Feature film',status:'Release coverage'},
 {film:'Dharma Yuddhaya 3',genre:'Crime · Thriller',year:'2026',runtime:'To be announced',status:'In production'},
 {film:'Adaraneeya Tharuwak',genre:'Romance · Musical',year:'2026',runtime:'Feature film',status:'Overseas screenings'},
 {film:'Kotu',genre:'Drama · Adaptation',year:'To be announced',runtime:'To be announced',status:'Adaptation announced'}
];
function ensureNewsDrawer(){
 if(document.getElementById('news-drawer-overlay'))return;
 const overlay=document.createElement('div');overlay.id='news-drawer-overlay';overlay.className='news-drawer-overlay';overlay.setAttribute('aria-hidden','true');
 overlay.innerHTML=`<div class="news-drawer" role="dialog" aria-modal="true" aria-labelledby="news-drawer-title"><button class="news-drawer-close" type="button" aria-label="Close article">×</button><div class="news-drawer-content"><small id="news-drawer-meta" class="news-drawer-meta"></small><h2 id="news-drawer-title"></h2><div class="news-drawer-image-wrap"><img id="news-drawer-image" src="" alt=""></div><div id="news-drawer-body" class="news-drawer-body"></div><section class="news-film-info"><small>FILM INFORMATION</small><h3 id="news-film-title"></h3><div class="news-film-facts"><div><span>Genre</span><strong id="news-film-genre"></strong></div><div><span>Year</span><strong id="news-film-year"></strong></div><div><span>Runtime</span><strong id="news-film-runtime"></strong></div><div><span>Status</span><strong id="news-film-status"></strong></div></div></section></div></div>`;
 document.body.appendChild(overlay);
 const close=()=>{overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');document.body.classList.remove('news-drawer-open')};
 overlay.querySelector('.news-drawer-close').addEventListener('click',close);overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))close()});
}
function openNewsArticle(index){
 const article=news[index];if(!article)return;ensureNewsDrawer();const overlay=document.getElementById('news-drawer-overlay');const info=newsFilmInfo[index]||{film:'Film details',genre:'To be announced',year:'To be announced',runtime:'To be announced',status:'Updates pending'};
 document.getElementById('news-drawer-image').src=sampleImage('Cinema News','cinema-news',index%5);document.getElementById('news-drawer-image').alt=article.title;
 document.getElementById('news-drawer-meta').textContent=`${article.category.toUpperCase()}  ·  ${article.date}`;document.getElementById('news-drawer-title').textContent=article.title;
 document.getElementById('news-drawer-body').innerHTML=`<p>${article.desc}</p><p>Cinescope brings you the latest updates on this story, including the creative direction, release developments and what audiences can look forward to. Further official announcements and confirmed details will be added as they become available.</p>`;
 document.getElementById('news-film-title').textContent=info.film;document.getElementById('news-film-genre').textContent=info.genre;document.getElementById('news-film-year').textContent=info.year;document.getElementById('news-film-runtime').textContent=info.runtime;document.getElementById('news-film-status').textContent=info.status;
 overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.classList.add('news-drawer-open');overlay.querySelector('.news-drawer-close').focus();
}
document.addEventListener('click',event=>{const card=event.target.closest('.news-card[data-news-index]');if(card)openNewsArticle(Number(card.dataset.newsIndex))});
document.addEventListener('keydown',event=>{const card=event.target.closest?.('.news-card[data-news-index]');if(card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();openNewsArticle(Number(card.dataset.newsIndex))}});
function renderEpisodes(){const el=document.getElementById('episode-grid');if(el)el.innerHTML=episodes.map(episodeCard).join('')}
renderGrid('now-grid',movies.slice(0,5));renderGrid('featured-grid',[movies[6],movies[1],movies[4],movies[8],movies[5]]);renderGrid('all-movies-grid',movies);renderNews('news-grid',news.slice(0,2));renderNews('all-news-grid');renderEpisodes();
// Shared navigation
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');if(menu&&nav)menu.addEventListener('click',()=>nav.classList.toggle('open'));
const search=document.querySelector('.search-overlay');document.getElementById('search-open')?.addEventListener('click',()=>{search.classList.add('open');search.setAttribute('aria-hidden','false');document.getElementById('search-input')?.focus()});document.getElementById('search-close')?.addEventListener('click',()=>{search.classList.remove('open');search.setAttribute('aria-hidden','true')});search?.addEventListener('click',e=>{if(e.target===search)search.classList.remove('open')});document.getElementById('search-input')?.addEventListener('input',e=>{let q=e.target.value.toLowerCase();let results=[...movies.map(m=>({title:m.title,href:`movie-details.html?id=${encodeURIComponent(m.title)}`})),...news.map(n=>({title:n.title,href:'cinema-news.html'}))].filter(x=>x.title.toLowerCase().includes(q));document.getElementById('search-results').innerHTML=q?results.map(x=>`<p><a href="${x.href}">${x.title} ↗</a></p>`).join('')||'No matching stories found.':''});document.querySelector('.top')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
// Hero slider: fixed-size carousel with smooth cross-fade and animated pagination
const slides=[
 {title:'Kotu',tag:'COMING SOON',desc:'A colourful new story of love, rivalry and family bonds from Sri Lankan cinema.',img:'assets/Homepage Slider/kotu-banner.png',trailer:'CasqAl1jEG0'},
 {title:'Dharma Yuddhaya 3',tag:'NOW SHOWING',desc:'A new chapter unfolds. Discover the latest stories and releases from Sri Lankan cinema.',img:'assets/Homepage Slider/dharma-yuddhaya-3.jpg',trailer:'YOz7T-yJUGA'},
 {title:'Happy Birthday',tag:'SIRASA ORIGINAL',desc:'A family gathering. A hidden secret. A story that changes everything.',img:'assets/Homepage Slider/happy-birthday-banner.png',trailer:null},
 {title:'Asterix & Obelix',tag:'FEATURED FILM',desc:'Adventure awaits in a world of magic, mystery and larger-than-life characters.',img:'assets/Homepage Slider/asterix-reference.png',trailer:'pPNrWvatXiU'}
];
let slideIndex=0, sliderTimer;
function setSlide(i){
 const hero=document.querySelector('.hero'); if(!hero)return;
 slideIndex=(i+slides.length)%slides.length; const s=slides[slideIndex];
 hero.classList.remove('banner-zoom');
 void hero.offsetWidth;
 hero.classList.add('banner-zoom');
 hero.classList.add('is-changing');
 hero.style.setProperty('--hero-image',`url("${s.img}")`);
 const title=hero.querySelector('h1'),tag=hero.querySelector('.eyebrow'),desc=hero.querySelector('.description');
 if(title){title.textContent=s.title;title.classList.remove('title-enter');void title.offsetWidth;title.classList.add('title-enter');}
 if(tag)tag.textContent='✦  '+s.tag; if(desc)desc.textContent=s.desc;
 hero.querySelectorAll('[data-slide]').forEach((b,j)=>{b.classList.toggle('chosen',j===slideIndex);b.setAttribute('aria-current',j===slideIndex?'true':'false')});
 window.setTimeout(()=>hero.classList.remove('is-changing'),520);
}
function restartSlider(){window.clearInterval(sliderTimer);if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)sliderTimer=window.setInterval(()=>setSlide(slideIndex+1),10000)}
document.querySelector('.hero .next')?.addEventListener('click',()=>{setSlide(slideIndex+1);restartSlider()});
document.querySelector('.hero .prev')?.addEventListener('click',()=>{setSlide(slideIndex-1);restartSlider()});
document.querySelectorAll('[data-slide]').forEach(b=>b.addEventListener('click',()=>{setSlide(Number(b.dataset.slide));restartSlider()}));
const heroEl=document.querySelector('.hero');
// Preload carousel artwork to avoid a blank/late first transition.
slides.forEach(s=>{const image=new Image();image.src=s.img;});
// Keep the carousel advancing automatically even when the pointer rests over the hero.
setSlide(0);
restartSlider();

// Hero trailer modal: play the selected banner's YouTube trailer in an overlay.
const trailerOverlay=document.getElementById('trailer-overlay');
const trailerFrame=document.getElementById('trailer-frame');
const trailerTitle=document.getElementById('trailer-title');
const trailerFallback=document.getElementById('trailer-fallback');
const trailerYoutubeLink=document.getElementById('trailer-youtube-link');
function openHeroTrailer(){
 const current=slides[slideIndex]||slides[0];
 if(!trailerOverlay||!trailerFrame)return;
 trailerTitle.textContent=`${current.title} — Trailer`;
 const query=encodeURIComponent(`${current.title} Sri Lankan movie official trailer`);
 trailerYoutubeLink.href=`https://www.youtube.com/results?search_query=${query}`;
 if(current.trailer){
  trailerFrame.src=`https://www.youtube-nocookie.com/embed/${current.trailer}?autoplay=1&rel=0`;
  trailerFrame.hidden=false;trailerFallback.hidden=true;
 }else{
  trailerFrame.src='';trailerFrame.hidden=true;trailerFallback.hidden=false;
 }
 trailerOverlay.classList.add('open');trailerOverlay.setAttribute('aria-hidden','false');
 document.body.classList.add('modal-open');
}
function closeHeroTrailer(){
 if(!trailerOverlay||!trailerFrame)return;
 trailerOverlay.classList.remove('open');trailerOverlay.setAttribute('aria-hidden','true');
 trailerFrame.src='';document.body.classList.remove('modal-open');
}
document.getElementById('hero-watch-trailer')?.addEventListener('click',openHeroTrailer);
document.getElementById('trailer-close')?.addEventListener('click',closeHeroTrailer);
trailerOverlay?.addEventListener('click',event=>{if(event.target===trailerOverlay)closeHeroTrailer()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeHeroTrailer()});
// Filter buttons
const filterButtons=document.querySelectorAll('[data-filter]');filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const key=btn.dataset.filter;const filtered=key==='all'?movies:movies.filter(m=>m.genre.toLowerCase().includes(key)||m.tag.toLowerCase().includes(key));renderGrid('all-movies-grid',filtered)}));
// Movie details page from query string
const detailTitle=document.getElementById('detail-title');if(detailTitle){const title=new URLSearchParams(location.search).get('id')||'Eda Raa';const m=movies.find(x=>x.title===title)||movies[0];detailTitle.textContent=m.title;document.getElementById('detail-tag').textContent=m.tag;document.getElementById('detail-meta').textContent=`${m.genre} · ${m.year} · ${m.runtime}`;document.getElementById('detail-desc').textContent=m.desc;document.querySelector('.detail-hero')?.style.setProperty('--detail-image',`url('${m.img}')`);const poster=document.getElementById('detail-poster');if(poster)poster.src=m.img;document.getElementById('related-grid')&&(document.getElementById('related-grid').innerHTML=movies.filter(x=>x.title!==m.title).slice(0,5).map(movieCard).join(''))}
// Demo actions for video buttons
const toast=document.querySelector('.toast');function showToast(msg){if(!toast)return;toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}document.querySelectorAll('.play-episode').forEach(b=>b.addEventListener('click',()=>showToast('Video playback can be connected to the official Cinescope TV source.')));document.querySelectorAll('.watch-trailer').forEach(b=>b.addEventListener('click',()=>showToast('Trailer playback can be connected to the official movie trailer.')));

// Gentle scroll-in motion for content sections and cards
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.section,.tv,.page-intro,.detail-columns,.movie-card,.news-card,.episode').forEach(el=>revealObserver.observe(el));}


// Pointer-following golden glow beneath the navigation panel.
const navGlow=document.querySelector('.header .nav-box');
if(navGlow){
 navGlow.addEventListener('pointermove',event=>{
  const rect=navGlow.getBoundingClientRect();
  navGlow.style.setProperty('--mouse-x',`${event.clientX-rect.left}px`);
  navGlow.classList.add('pointer-active');
 });
 navGlow.addEventListener('pointerleave',()=>navGlow.classList.remove('pointer-active'));
}
