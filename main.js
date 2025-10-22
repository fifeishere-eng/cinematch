// CineMatch Main JavaScript (shared across pages)

// --- Movie Database (20 films) ---
const movieDatabase = [
  { id:"movie_001", title:"Inception", year:2010, runtime:148, rating:8.8, genre:["Sci-Fi","Thriller"], director:"Christopher Nolan", cast:["Leonardo DiCaprio","Tom Hardy","Elliot Page"], plot:"A thief who steals secrets through dream-sharing is tasked with inception.", poster:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg", trailer:"https://www.youtube.com/watch?v=YoHD9XEInc0" },
  { id:"movie_002", title:"The Shawshank Redemption", year:1994, runtime:142, rating:9.3, genre:["Drama"], director:"Frank Darabont", cast:["Tim Robbins","Morgan Freeman"], plot:"Two imprisoned men bond over years, finding redemption.", poster:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg", trailer:"https://www.youtube.com/watch?v=6hB3S9bIaco" },
  { id:"movie_003", title:"The Dark Knight", year:2008, runtime:152, rating:9.0, genre:["Action","Crime","Drama"], director:"Christopher Nolan", cast:["Christian Bale","Heath Ledger"], plot:"Batman faces the Joker's reign of chaos.", poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/hqkIcbrOHL86UncnHIsHVcVmzue.jpg", trailer:"https://www.youtube.com/watch?v=EXeTwQWrcwY" },
  { id:"movie_004", title:"Pulp Fiction", year:1994, runtime:154, rating:8.9, genre:["Crime","Drama"], director:"Quentin Tarantino", cast:["John Travolta","Uma Thurman","Samuel L. Jackson"], plot:"Intersecting tales of crime and redemption.", poster:"https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg", trailer:"https://www.youtube.com/watch?v=s7EdQ4FqbhY" },
  { id:"movie_005", title:"Interstellar", year:2014, runtime:169, rating:8.6, genre:["Sci-Fi","Drama","Adventure"], director:"Christopher Nolan", cast:["Matthew McConaughey","Anne Hathaway"], plot:"Explorers travel through a wormhole to save humanity.", poster:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/xu9zaAevzQ5nnzXN6foQSMackcZ.jpg", trailer:"https://www.youtube.com/watch?v=zSWdZVtXT7E" },
  { id:"movie_006", title:"The Matrix", year:1999, runtime:136, rating:8.7, genre:["Sci-Fi","Action"], director:"Lana Wachowski", cast:["Keanu Reeves","Laurence Fishburne"], plot:"A hacker learns the truth about reality.", poster:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/fNG7i7R8M2nPJj7xGZ9DZf3QZ3B.jpg", trailer:"https://www.youtube.com/watch?v=m8e-FF8MsqU" },
  { id:"movie_007", title:"Parasite", year:2019, runtime:132, rating:8.5, genre:["Thriller","Drama"], director:"Bong Joon-ho", cast:["Song Kang-ho","Cho Yeo-jeong"], plot:"A poor family infiltrates a wealthy household.", poster:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg", trailer:"https://www.youtube.com/watch?v=5xH0HfJHsaY" },
  { id:"movie_008", title:"Get Out", year:2017, runtime:104, rating:7.7, genre:["Horror","Thriller"], director:"Jordan Peele", cast:["Daniel Kaluuya","Allison Williams"], plot:"A visit to the girlfriend's parents turns sinister.", poster:"https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/6uBlEXksA4JW9We7QQ4Jg3d4q3N.jpg", trailer:"https://www.youtube.com/watch?v=sRfnevzM9kQ" },
  { id:"movie_009", title:"La La Land", year:2016, runtime:128, rating:8.0, genre:["Musical","Romance","Drama"], director:"Damien Chazelle", cast:["Ryan Gosling","Emma Stone"], plot:"Two artists navigate love and ambition in LA.", poster:"https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/fp6y30hZ6zWlm0UYHdXQwWOPw3.jpg", trailer:"https://www.youtube.com/watch?v=0pdqf4P9M1s" },
  { id:"movie_010", title:"Mad Max: Fury Road", year:2015, runtime:120, rating:8.1, genre:["Action","Adventure","Sci-Fi"], director:"George Miller", cast:["Tom Hardy","Charlize Theron"], plot:"A high-octane escape across a wasteland.", poster:"https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg", trailer:"https://www.youtube.com/watch?v=hEJnMQG9ev8" },
  { id:"movie_011", title:"The Godfather", year:1972, runtime:175, rating:9.2, genre:["Crime","Drama"], director:"Francis Ford Coppola", cast:["Marlon Brando","Al Pacino"], plot:"A mafia dynasty transfers power.", poster:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg", trailer:"https://www.youtube.com/watch?v=sY1S34973zA" },
  { id:"movie_012", title:"Forrest Gump", year:1994, runtime:142, rating:8.8, genre:["Drama","Romance"], director:"Robert Zemeckis", cast:["Tom Hanks","Robin Wright"], plot:"A simple man's extraordinary life.", poster:"https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/7c9UVPPiTPltouxRVY6N9uugaVA.jpg", trailer:"https://www.youtube.com/watch?v=bLvqoHBptjg" },
  { id:"movie_013", title:"The Prestige", year:2006, runtime:130, rating:8.5, genre:["Drama","Mystery","Thriller"], director:"Christopher Nolan", cast:["Hugh Jackman","Christian Bale"], plot:"Rival magicians engage in a deadly game.", poster:"https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/rMMdfZk9t91r7AsC8j7G2v2Y2bR.jpg", trailer:"https://www.youtube.com/watch?v=o4gHCmTQDVI" },
  { id:"movie_014", title:"Whiplash", year:2014, runtime:107, rating:8.5, genre:["Drama","Music"], director:"Damien Chazelle", cast:["Miles Teller","J.K. Simmons"], plot:"A drummer is pushed to greatness by a ruthless teacher.", poster:"https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg", trailer:"https://www.youtube.com/watch?v=7d_jQycdQGo" },
  { id:"movie_015", title:"The Social Network", year:2010, runtime:120, rating:7.8, genre:["Drama"], director:"David Fincher", cast:["Jesse Eisenberg","Andrew Garfield"], plot:"The founding of Facebook and ensuing battles.", poster:"https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/ok5Wh8385Kgblq9MSU4VGvazeMH.jpg", trailer:"https://www.youtube.com/watch?v=lB95KLmpLR4" },
  { id:"movie_016", title:"Spirited Away", year:2001, runtime:125, rating:8.6, genre:["Animation","Fantasy","Adventure"], director:"Hayao Miyazaki", cast:["Rumi Hiiragi","Miyu Irino"], plot:"A girl enters a world of spirits to save her parents.", poster:"https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg", trailer:"https://www.youtube.com/watch?v=ByXuk9QqQkk" },
  { id:"movie_017", title:"The Grand Budapest Hotel", year:2014, runtime:99, rating:8.1, genre:["Comedy","Drama"], director:"Wes Anderson", cast:["Ralph Fiennes","Tony Revolori"], plot:"A concierge and lobby boy become embroiled in a caper.", poster:"https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/4d7f0O62n3pDHKZ4r5XrbAi3WcC.jpg", trailer:"https://www.youtube.com/watch?v=1Fg5iWmQjwk" },
  { id:"movie_018", title:"The Matrix Reloaded", year:2003, runtime:138, rating:7.2, genre:["Sci-Fi","Action"], director:"Lana Wachowski", cast:["Keanu Reeves","Carrie-Anne Moss"], plot:"Neo fights to end the war against the machines.", poster:"https://image.tmdb.org/t/p/w500/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg", trailer:"https://www.youtube.com/watch?v=kYzz0FSgpSU" },
  { id:"movie_019", title:"Blade Runner 2049", year:2017, runtime:164, rating:8.0, genre:["Sci-Fi","Drama"], director:"Denis Villeneuve", cast:["Ryan Gosling","Harrison Ford"], plot:"A young blade runner unearths a long-buried secret.", poster:"https://image.tmdb.org/t/p/w500/aMpyrCizvSgPbP14ZgT8p0m4vNs.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/ilRyazdMJwN05exqhwK4tMKBYZs.jpg", trailer:"https://www.youtube.com/watch?v=gCcx85zbxz4" },
  { id:"movie_020", title:"The Lord of the Rings: The Fellowship of the Ring", year:2001, runtime:178, rating:8.8, genre:["Fantasy","Adventure"], director:"Peter Jackson", cast:["Elijah Wood","Ian McKellen"], plot:"A hobbit begins a quest to destroy a powerful ring.", poster:"https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", backdrop:"https://image.tmdb.org/t/p/w1280/3WjbxaqYB4vAbdUfdr5vbglD2JZ.jpg", trailer:"https://www.youtube.com/watch?v=V75dMMIW2B4" }
];

// --- Watchlist Management ---
class WatchlistManager {
  constructor() { this.watchlist = this.load(); }
  load() { try { return JSON.parse(localStorage.getItem('cinematch-watchlist')||'[]'); } catch { return []; } }
  save() { localStorage.setItem('cinematch-watchlist', JSON.stringify(this.watchlist)); }
  add(id){ if(!this.watchlist.includes(id)){ this.watchlist.push(id); this.save(); this.toast('Added to watchlist!'); } }
  remove(id){ this.watchlist = this.watchlist.filter(x=>x!==id); this.save(); this.toast('Removed from watchlist!'); }
  has(id){ return this.watchlist.includes(id); }
  movies(){ return movieDatabase.filter(m=>this.watchlist.includes(m.id)); }
  toast(msg){ const el=document.createElement('div'); el.textContent=msg; el.style.cssText='position:fixed;top:100px;right:20px;background:#2C5F87;color:#fff;padding:12px 16px;border-radius:8px;z-index:3000;box-shadow:0 8px 24px rgba(0,0,0,.2)'; document.body.appendChild(el); setTimeout(()=>{ el.remove(); },1800); }
}
const watchlistManager = new WatchlistManager();

// --- UI Helpers ---
function createMovieCard(movie){
  const inList = watchlistManager.has(movie.id);
  const isTopRated = movie.rating >= 8.8;
  const isNewer = movie.year >= 2019;
  const badge = isTopRated ? '<span class="badge badge-primary" style="position:absolute;left:12px;top:12px;z-index:1;">Featured</span>' : (isNewer ? '<span class="badge badge-primary" style="position:absolute;left:12px;top:12px;z-index:1;">New</span>' : '');
  return `
    <div class="movie-card" data-movie-id="${movie.id}">
      ${badge}
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta"><span class="year">${movie.year}</span><span class="rating">⭐ ${movie.rating}</span></div>
        <div class="movie-genres">${movie.genre.slice(0,2).map(g=>`<span class=\"genre-tag\">${g}</span>`).join('')}</div>
      </div>
      <button class="watchlist-btn ${inList?'in-watchlist':''}" onclick="toggleWatchlist('${movie.id}')">${inList?'✓':'+'}</button>
    </div>`;
}

function toggleWatchlist(id){ watchlistManager.has(id)?watchlistManager.remove(id):watchlistManager.add(id); const btn=document.querySelector(`[data-movie-id="${id}"] .watchlist-btn`); if(btn){ const now=watchlistManager.has(id); btn.classList.toggle('in-watchlist',now); btn.textContent= now?'✓':'+'; } }

function searchMovies(query){ if(!query||!query.trim()) return movieDatabase; const q=query.toLowerCase(); return movieDatabase.filter(m=> m.title.toLowerCase().includes(q) || m.director.toLowerCase().includes(q) || m.cast.some(a=>a.toLowerCase().includes(q)) || m.genre.some(g=>g.toLowerCase().includes(q)) ); }

// --- Homepage wiring ---
document.addEventListener('DOMContentLoaded', () => {
  const trending = document.getElementById('trendingCarousel');
  if (trending){ const items = [...movieDatabase].sort((a,b)=>b.rating-a.rating).slice(0,10); trending.innerHTML = items.map(createMovieCard).join(''); }

  // Search modal controls
  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModal');
  const closeSearchModal = document.getElementById('closeSearchModal');
  const modalSearch = document.getElementById('modalSearch');
  const searchResults = document.getElementById('searchResults');

  if (searchBtn && searchModal){ searchBtn.addEventListener('click', ()=>{ searchModal.classList.add('active'); modalSearch && modalSearch.focus(); }); }
  if (closeSearchModal && searchModal){ closeSearchModal.addEventListener('click', ()=> searchModal.classList.remove('active')); }
  if (searchModal){ searchModal.addEventListener('click', (e)=>{ if(e.target.classList.contains('modal-backdrop')) searchModal.classList.remove('active'); }); }

  function wireSearchInput(input, resultsEl){ if(!input) return; input.addEventListener('input', (e)=>{ const q=e.target.value; if(resultsEl){ const results=searchMovies(q).slice(0,12); resultsEl.innerHTML = q.trim()? results.map(createMovieCard).join('') : '<p class="search-placeholder" style="text-align:center;color:#9CA3AF;padding:16px;">Start typing to search movies...</p>'; }}); input.addEventListener('keypress',(e)=>{ if(e.key==='Enter'){ const q=e.target.value; if(q.trim()){ window.location.href = `search_results.html?q=${encodeURIComponent(q)}`; } }}); }

  wireSearchInput(document.getElementById('heroSearch'), null);
  wireSearchInput(modalSearch, searchResults);

  // Collection card navigation
  document.querySelectorAll('.collection-card').forEach(card=> card.addEventListener('click', ()=>{ const c=card.dataset.collection; window.location.href = `browse.html?collection=${c}`; }));

  // CTA → Browse
  const cta = document.querySelector('.cta-button'); if (cta){ cta.addEventListener('click', ()=> window.location.href='browse.html'); }

  // Card click → details (ignore watchlist button)
  document.addEventListener('click', (e)=>{ const card = e.target.closest('.movie-card'); if(card && !e.target.classList.contains('watchlist-btn')){ const id = card.getAttribute('data-movie-id'); window.location.href = `movie_details.html?id=${id}`; } });
});

// Expose for other pages
window.movieDatabase = movieDatabase;
window.watchlistManager = watchlistManager;
window.createMovieCard = createMovieCard;
window.toggleWatchlist = toggleWatchlist;
window.searchMovies = searchMovies;
