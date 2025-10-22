// Browse Page JavaScript

// Filter and Sort Functionality
class BrowseManager {
  constructor() {
    this.movies = window.movieDatabase || [];
    this.filteredMovies = [...this.movies];
    this.currentFilters = {
      genre: [],
      decade: [],
      rating: 0,
      runtime: []
    };
    this.sortBy = 'rating';
    this.currentPage = 1;
    this.moviesPerPage = 12;
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateMovieGrid();
    this.updateResultsCount();
    this.updateTotalMovies();
  }

  setupEventListeners() {
    // Genre filters
    const genreFilters = document.querySelectorAll('.genre-filter');
    genreFilters.forEach(filter => {
      filter.addEventListener('change', () => this.handleGenreFilter());
    });

    // Decade filters
    const decadeFilters = document.querySelectorAll('.decade-filter');
    decadeFilters.forEach(filter => {
      filter.addEventListener('change', () => this.handleDecadeFilter());
    });

    // Rating filter
    const ratingRange = document.getElementById('ratingRange');
    if (ratingRange) {
      ratingRange.addEventListener('input', () => this.handleRatingFilter());
    }

    // Runtime filters
    const runtimeFilters = document.querySelectorAll('.runtime-filter');
    runtimeFilters.forEach(filter => {
      filter.addEventListener('change', () => this.handleRuntimeFilter());
    });

    // Sort dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => this.handleSort());
    }

    // Clear filters
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', () => this.clearAllFilters());
    }

    const clearAllBtn = document.getElementById('clearAllFilters');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => this.clearAllFilters());
    }

    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => this.loadMoreMovies());
    }
  }

  handleGenreFilter() {
    const checkedGenres = Array.from(document.querySelectorAll('.genre-filter:checked'))
      .map(filter => filter.value);
    this.currentFilters.genre = checkedGenres;
    this.applyFilters();
  }

  handleDecadeFilter() {
    const checkedDecades = Array.from(document.querySelectorAll('.decade-filter:checked'))
      .map(filter => filter.value);
    this.currentFilters.decade = checkedDecades;
    this.applyFilters();
  }

  handleRatingFilter() {
    const ratingRange = document.getElementById('ratingRange');
    const ratingValue = document.getElementById('ratingValue');
    if (ratingRange && ratingValue) {
      const rating = parseFloat(ratingRange.value);
      this.currentFilters.rating = rating;
      
      if (rating === 0) {
        ratingValue.textContent = 'Any rating';
      } else {
        ratingValue.textContent = `${rating}+ rating`;
      }
      
      this.applyFilters();
    }
  }

  handleRuntimeFilter() {
    const checkedRuntimes = Array.from(document.querySelectorAll('.runtime-filter:checked'))
      .map(filter => filter.value);
    this.currentFilters.runtime = checkedRuntimes;
    this.applyFilters();
  }

  handleSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      this.sortBy = sortSelect.value;
      this.applyFilters();
    }
  }

  applyFilters() {
    this.filteredMovies = this.movies.filter(movie => {
      // Genre filter
      if (this.currentFilters.genre.length > 0) {
        const hasMatchingGenre = this.currentFilters.genre.some(genre => 
          movie.genre.includes(genre)
        );
        if (!hasMatchingGenre) return false;
      }

      // Decade filter
      if (this.currentFilters.decade.length > 0) {
        const movieDecade = this.getDecade(movie.year);
        if (!this.currentFilters.decade.includes(movieDecade)) return false;
      }

      // Rating filter
      if (this.currentFilters.rating > 0) {
        if (movie.rating < this.currentFilters.rating) return false;
      }

      // Runtime filter
      if (this.currentFilters.runtime.length > 0) {
        const movieRuntime = this.getRuntimeCategory(movie.runtime);
        if (!this.currentFilters.runtime.includes(movieRuntime)) return false;
      }

      return true;
    });

    // Sort movies
    this.sortMovies();
    
    // Update UI
    this.updateMovieGrid();
    this.updateActiveFilters();
    this.updateResultsCount();
    this.updateLoadMoreButton();
  }

  sortMovies() {
    this.filteredMovies.sort((a, b) => {
      switch (this.sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'runtime':
          return b.runtime - a.runtime;
        default:
          return b.rating - a.rating;
      }
    });
  }

  getDecade(year) {
    if (year >= 1970 && year < 1980) return '1970s';
    if (year >= 1980 && year < 1990) return '1980s';
    if (year >= 1990 && year < 2000) return '1990s';
    if (year >= 2000 && year < 2010) return '2000s';
    if (year >= 2010 && year < 2020) return '2010s';
    if (year >= 2020) return '2020s';
    return 'Other';
  }

  getRuntimeCategory(runtime) {
    if (runtime < 90) return 'short';
    if (runtime <= 120) return 'medium';
    return 'long';
  }

  updateMovieGrid() {
    const movieGrid = document.getElementById('movieGrid');
    if (!movieGrid) return;

    const startIndex = (this.currentPage - 1) * this.moviesPerPage;
    const endIndex = startIndex + this.moviesPerPage;
    const moviesToShow = this.filteredMovies.slice(startIndex, endIndex);

    if (this.currentPage === 1) {
      movieGrid.innerHTML = '';
    }

    moviesToShow.forEach(movie => {
      const movieCard = this.createMovieCard(movie);
      movieGrid.appendChild(movieCard);
    });

    // Add fade-in animation to new cards
    const newCards = movieGrid.querySelectorAll('.movie-card:not(.loaded)');
    newCards.forEach((card, index) => {
      card.classList.add('loaded');
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }

  createMovieCard(movie) {
    const isInWatchlist = window.watchlistManager?.isInWatchlist(movie.id) || false;
    
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-movie-id', movie.id);
    
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <span class="year">${movie.year}</span>
          <span class="rating">⭐ ${movie.rating}</span>
        </div>
        <div class="movie-genres">
          ${movie.genre.slice(0, 2).map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
        </div>
      </div>
      <button class="watchlist-btn ${isInWatchlist ? 'in-watchlist' : ''}" 
              onclick="toggleWatchlist('${movie.id}')">
        ${isInWatchlist ? '✓' : '+'}
      </button>
    `;

    // Add click handler for movie card
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('watchlist-btn')) {
        window.location.href = `movie_details.html?id=${movie.id}`;
      }
    });

    return card;
  }

  updateActiveFilters() {
    const activeFilters = document.getElementById('activeFilters');
    const filterTags = document.getElementById('filterTags');
    
    if (!activeFilters || !filterTags) return;

    const activeFilterCount = this.getActiveFilterCount();
    
    if (activeFilterCount === 0) {
      activeFilters.style.display = 'none';
      return;
    }

    activeFilters.style.display = 'block';
    filterTags.innerHTML = '';

    // Add genre filters
    this.currentFilters.genre.forEach(genre => {
      const tag = this.createFilterTag(genre, 'genre');
      filterTags.appendChild(tag);
    });

    // Add decade filters
    this.currentFilters.decade.forEach(decade => {
      const tag = this.createFilterTag(decade, 'decade');
      filterTags.appendChild(tag);
    });

    // Add rating filter
    if (this.currentFilters.rating > 0) {
      const tag = this.createFilterTag(`${this.currentFilters.rating}+ rating`, 'rating');
      filterTags.appendChild(tag);
    }

    // Add runtime filters
    this.currentFilters.runtime.forEach(runtime => {
      const runtimeText = runtime === 'short' ? '< 90 min' : 
                         runtime === 'medium' ? '90-120 min' : '> 120 min';
      const tag = this.createFilterTag(runtimeText, 'runtime', runtime);
      filterTags.appendChild(tag);
    });
  }

  createFilterTag(text, type, value = null) {
    const tag = document.createElement('span');
    tag.className = 'filter-tag';
    tag.innerHTML = `
      ${text}
      <span class="remove-tag" onclick="browseManager.removeFilter('${type}', '${value || text}')">✕</span>
    `;
    return tag;
  }

  removeFilter(type, value) {
    switch (type) {
      case 'genre':
        this.currentFilters.genre = this.currentFilters.genre.filter(g => g !== value);
        document.querySelector(`.genre-filter[value="${value}"]`).checked = false;
        break;
      case 'decade':
        this.currentFilters.decade = this.currentFilters.decade.filter(d => d !== value);
        document.querySelector(`.decade-filter[value="${value}"]`).checked = false;
        break;
      case 'rating':
        this.currentFilters.rating = 0;
        document.getElementById('ratingRange').value = 0;
        document.getElementById('ratingValue').textContent = 'Any rating';
        break;
      case 'runtime':
        this.currentFilters.runtime = this.currentFilters.runtime.filter(r => r !== value);
        const runtimeCheckbox = document.querySelector(`.runtime-filter[value="${value}"]`);
        if (runtimeCheckbox) runtimeCheckbox.checked = false;
        break;
    }
    this.applyFilters();
  }

  getActiveFilterCount() {
    return this.currentFilters.genre.length + 
           this.currentFilters.decade.length + 
           (this.currentFilters.rating > 0 ? 1 : 0) + 
           this.currentFilters.runtime.length;
  }

  clearAllFilters() {
    // Reset filters
    this.currentFilters = {
      genre: [],
      decade: [],
      rating: 0,
      runtime: []
    };

    // Uncheck all filter checkboxes
    document.querySelectorAll('.genre-filter, .decade-filter, .runtime-filter').forEach(checkbox => {
      checkbox.checked = false;
    });

    // Reset rating slider
    const ratingRange = document.getElementById('ratingRange');
    const ratingValue = document.getElementById('ratingValue');
    if (ratingRange && ratingValue) {
      ratingRange.value = 0;
      ratingValue.textContent = 'Any rating';
    }

    // Reset to first page
    this.currentPage = 1;

    // Apply filters
    this.applyFilters();
  }

  updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
      resultsCount.textContent = this.filteredMovies.length;
    }
  }

  updateTotalMovies() {
    const totalMovies = document.getElementById('totalMovies');
    if (totalMovies) {
      totalMovies.textContent = this.movies.length;
    }
  }

  updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    const totalPages = Math.ceil(this.filteredMovies.length / this.moviesPerPage);
    
    if (this.currentPage < totalPages) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }

  loadMoreMovies() {
    this.currentPage++;
    this.updateMovieGrid();
    this.updateLoadMoreButton();
  }
}

// Initialize browse manager when page loads
document.addEventListener('DOMContentLoaded', function() {
  window.browseManager = new BrowseManager();
});

// Handle collection filtering from URL parameters
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const collection = urlParams.get('collection');
  
  if (collection && window.browseManager) {
    // Apply collection-specific filters
    switch (collection) {
      case 'hidden-gems':
        // Filter for indie/underseen films (lower ratings, specific genres)
        document.querySelector('.genre-filter[value="Drama"]').checked = true;
        document.querySelector('.genre-filter[value="Thriller"]').checked = true;
        break;
      case 'classic-thrillers':
        document.querySelector('.genre-filter[value="Thriller"]').checked = true;
        document.querySelector('.decade-filter[value="1990s"]').checked = true;
        break;
      case 'award-winners':
        // Filter for high-rated films
        document.getElementById('ratingRange').value = 8.5;
        document.getElementById('ratingValue').textContent = '8.5+ rating';
        break;
      case '90s-nostalgia':
        document.querySelector('.decade-filter[value="1990s"]').checked = true;
        break;
    }
    
    // Apply the filters
    window.browseManager.handleGenreFilter();
    window.browseManager.handleDecadeFilter();
    window.browseManager.handleRatingFilter();
  }
});
