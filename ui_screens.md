# CineMatch - UI Screen Specifications

This document provides detailed specifications for each of the 5 screens you'll build for the CineMatch MVP prototype.

---

## Navigation & Layout Standards

### Global Header (Present on all pages)

**Components**:
- **Logo**: "CineMatch" with film reel icon (left side)
- **Navigation Menu**: Browse • Search • Watchlist (center or right)
- **Search Icon**: Opens search modal or navigates to search (right side)

**Behavior**:
- Fixed/sticky header on scroll (optional)
- Active state for current page
- Smooth hover transitions on nav items
- Consistent across all 5 pages

**Styling Notes**:
- Use design system colors for nav items
- Consider semi-transparent background with backdrop blur
- Height: 70-80px
- Logo should be clickable → returns to homepage

### Global Footer (Present on all pages)

**Components**:
- **CineMatch branding** and tagline
- **Quick Links**: About • Contact • Privacy • Terms
- **Social Icons**: Optional (Twitter, Instagram, etc.)
- **Copyright notice**: "© 2025 CineMatch. All rights reserved."

**Styling Notes**:
- Dark background (--cm-charcoal or --cm-dark-bg)
- Light text on dark background
- Centered or multi-column layout
- Padding: 40-60px vertical

---

## Screen 1: Landing / Homepage

**File**: `landing.html`  
**Purpose**: Primary entry point that showcases the platform and encourages movie discovery.

### Sections to Include:

#### 1. Hero Section
**Content**:
- **Headline**: "Discover Your Next Favorite Film" (large, dramatic typography)
- **Subheadline**: "Curated recommendations, personalized collections, and thousands of films to explore" (supporting text)
- **Search Bar**: Large, prominent input field with placeholder "Search movies, actors, directors..."
- **CTA Button**: "Start Exploring" or "Browse Movies"
- **Background**: Featured movie backdrop with gradient overlay (dark at bottom, transparent at top)

**Layout**:
- Full viewport height or 70vh minimum
- Centered content with max-width ~800px
- Background image should be subtle (low opacity overlay)
- Search bar should be focal point

**Interactions**:
- Search bar has focus state with glow
- CTA button has hover lift effect
- Smooth fade-in animation on page load

#### 2. Trending Now Section
**Content**:
- **Section Title**: "Trending Now" with "View All →" link
- **Movie Carousel**: Horizontal scrollable row of 8-10 movie cards
- Each card shows: Poster image, title, year, rating (⭐ 8.5)

**Layout**:
- Cards: ~200px wide × 320px tall
- Horizontal scroll or arrow navigation
- Snap scrolling for better UX
- Gap between cards: 16-20px

**Interactions**:
- Cards scale up slightly on hover (1.05x)
- "Add to Watchlist" button fades in on hover
- Click card → navigates to movie details page
- Smooth scroll animation

#### 3. Curated Collections Section
**Content**:
- **Section Title**: "Curated Collections"
- **Collection Cards**: 3-4 themed collections
  - "Hidden Gems" (indie/underseen films)
  - "Classic Thrillers" (suspense classics)
  - "Award Winners" (Oscar/award films)
  - "90s Nostalgia" (decade-specific)

**Layout**:
- Grid: 2×2 or 1×3 depending on space
- Each card shows: Background image, collection title, film count
- Cards: 300-400px wide × 200-250px tall

**Interactions**:
- Overlay darkens on hover
- Smooth scale transform
- Click → navigates to Browse page with filters pre-applied

#### 4. Featured Categories (Optional)
**Content**:
- Quick genre buttons/pills: Action • Drama • Comedy • Sci-Fi • Horror • Romance
- Click → Browse page filtered by genre

**Layout**:
- Horizontal row of pill-shaped buttons
- Centered or left-aligned

**Interactions**:
- Hover: background color change
- Active state visible

### Visual Hierarchy:
1. Hero section (most prominent)
2. Trending Now (high engagement)
3. Curated Collections (exploration)
4. Footer (utility)

### Example Layout Sketch:
```
┌─────────────────────────────────────────┐
│ [Logo]      Browse  Search  Watchlist   │ ← Header
├─────────────────────────────────────────┤
│                                         │
│     Discover Your Next Favorite Film    │ ← Hero
│     [Search movies, actors...]          │
│     [Start Exploring]                   │
│                                         │
├─────────────────────────────────────────┤
│ Trending Now                  View All →│
│ [🎬][🎬][🎬][🎬][🎬][🎬][🎬][🎬] → │ ← Carousel
├─────────────────────────────────────────┤
│ Curated Collections                     │
│ [Hidden Gems] [Classic Thrillers]       │
│ [Award Winners] [90s Nostalgia]         │ ← Grid
├─────────────────────────────────────────┤
│ About • Contact • Privacy • Terms       │ ← Footer
└─────────────────────────────────────────┘
```

---

## Screen 2: Browse / Explore

**File**: `browse.html`  
**Purpose**: Comprehensive movie catalog with filtering and sorting capabilities.

### Sections to Include:

#### 1. Page Header
**Content**:
- **Page Title**: "Browse Movies" (H1)
- **Subtitle**: "Explore our collection of [X] films"
- **View Toggle**: Grid view / List view (optional)

#### 2. Filter Sidebar (Left)
**Content**:
- **Genre Filter**: Checkboxes or pills
  - Action, Drama, Comedy, Sci-Fi, Horror, Romance, Thriller, Documentary
- **Decade Filter**: Checkboxes or range slider
  - 1970s, 1980s, 1990s, 2000s, 2010s, 2020s
- **Rating Filter**: Range slider
  - 0-10 or star rating
- **Runtime Filter**: Checkboxes
  - < 90 min, 90-120 min, > 120 min
- **Clear Filters Button**: Reset all filters

**Layout**:
- Fixed width: 240-280px
- Sticky on scroll (optional)
- Collapsible sections (accordions)

**Interactions**:
- Filters apply immediately (or with "Apply" button)
- Active filters highlighted
- Clear button only appears when filters active

#### 3. Active Filters Bar (Top of main content)
**Content**:
- Pill-shaped tags showing active filters
- Example: "Drama ✕" "1990s ✕" "Rating 8+ ✕"
- "Clear All" link

**Interactions**:
- Click ✕ to remove individual filter
- Smooth fade-out animation

#### 4. Sort Controls & Results Count
**Content**:
- Results count: "Showing 48 movies"
- Sort dropdown: "Sort by: Popularity • Rating • Release Date • Title"

**Layout**:
- Horizontal bar above movie grid
- Space between count and sort

#### 5. Movie Grid
**Content**:
- Grid of movie cards (responsive)
- Each card shows:
  - Poster image
  - Title
  - Year
  - Rating (⭐ 8.5)
  - Genre tags (2-3 max)
  - "Add to Watchlist" button (on hover)

**Layout**:
- Desktop: 3-4 columns
- Tablet: 2-3 columns
- Cards: ~220px wide × 380px tall
- Gap: 20-24px
- Equal heights per row

**Interactions**:
- Hover: card lifts with shadow
- "Add to Watchlist" button fades in
- Click card → movie details page
- Smooth filter transitions

#### 6. Pagination or Load More (Bottom)
**Content**:
- Page numbers or "Load More" button
- "Showing 1-20 of 156 movies"

### Example Layout Sketch:
```
┌───────────┬─────────────────────────────────┐
│           │ Browse Movies                   │
│ FILTERS   │ Showing 48 movies  [Sort by ▾]  │
│           ├─────────────────────────────────┤
│ Genre     │ [Drama ✕] [1990s ✕] Clear All   │
│ □ Action  ├─────────────────────────────────┤
│ ☑ Drama   │ [🎬]  [🎬]  [🎬]  [🎬]         │
│ □ Comedy  │                                 │
│           │ [🎬]  [🎬]  [🎬]  [🎬]         │
│ Decade    │                                 │
│ □ 1980s   │ [🎬]  [🎬]  [🎬]  [🎬]         │
│ ☑ 1990s   │                                 │
│           │        [Load More]               │
│ [Clear]   │                                 │
└───────────┴─────────────────────────────────┘
```

---

## Screen 3: Movie Details

**File**: `movie_details.html`  
**Purpose**: Comprehensive information about a specific film.

### Sections to Include:

#### 1. Hero Backdrop Section
**Content**:
- **Background**: Large backdrop image with gradient overlay
- **Movie Title**: Large, dramatic typography (H1)
- **Metadata**: Year • Runtime • Rating badge (⭐ 8.8)
- **Genre Tags**: Pill-shaped tags

**Layout**:
- Full-width background image
- Content max-width ~1200px, centered
- Gradient overlay (dark at bottom)
- Height: 40-50vh

**Interactions**:
- Parallax scroll effect (optional)
- Fade-in animation on load

#### 2. Movie Information Panel
**Content**:
- **Poster Image**: Floating over backdrop (left side)
- **Quick Info** (right of poster):
  - Director: "Christopher Nolan"
  - Cast: "Leonardo DiCaprio, Tom Hardy, Elliot Page"
  - Release Date: "July 16, 2010"
  - Language: "English"
  - Budget/Box Office (optional)
- **Action Buttons**:
  - "Add to Watchlist" (primary button)
  - "Share" (secondary button)
  - "Watch Trailer" (link or button)

**Layout**:
- Two-column layout below hero
- Poster: ~300px wide (sticky on scroll optional)
- Info panel: fills remaining space

#### 3. Plot Synopsis Section
**Content**:
- **Section Title**: "Plot Synopsis"
- **Plot Text**: 2-3 paragraphs describing the story (no spoilers)

**Layout**:
- Max-width 700px for readability
- Comfortable line-height (1.6-1.8)

#### 4. Cast & Crew Section
**Content**:
- **Section Title**: "Cast & Crew"
- **Cards** for key people:
  - Profile photo (or placeholder)
  - Name
  - Role/Character name
- 4-6 cast members shown

**Layout**:
- Horizontal grid (4 columns)
- Cards: ~150px wide
- Photo: circular or rounded square

**Interactions**:
- Hover: name highlights

#### 5. Trailer Section (Optional)
**Content**:
- Embedded YouTube player or thumbnail with play button
- "Watch Trailer" button if not embedded

**Layout**:
- 16:9 aspect ratio
- Max-width 800px

#### 6. Related Movies Section
**Content**:
- **Section Title**: "More Like This" or "Related Films"
- Horizontal scrollable row of 6-8 movie cards
- Similar format to Trending section

**Layout**:
- Similar to homepage carousel
- Smaller cards (180px wide)

**Interactions**:
- Cards link to other movie details pages
- Hover effects consistent with other cards

### Example Layout Sketch:
```
┌─────────────────────────────────────────┐
│     INCEPTION (backdrop image)          │
│     2010 • 148 min • ⭐ 8.8             │
│     Sci-Fi • Thriller                   │
├─────────────────────────────────────────┤
│ [Poster] │ Director: Christopher Nolan  │
│  Image   │ Cast: Leonardo DiCaprio...   │
│          │ Release: July 16, 2010       │
│          │ [Add to Watchlist] [Share]   │
├──────────┴─────────────────────────────┤
│ Plot Synopsis                           │
│ A thief who steals corporate secrets... │
│                                         │
├─────────────────────────────────────────┤
│ Cast & Crew                             │
│ [👤] [👤] [👤] [👤]                   │
├─────────────────────────────────────────┤
│ More Like This                          │
│ [🎬][🎬][🎬][🎬][🎬][🎬]             │
└─────────────────────────────────────────┘
```

---

## Screen 4: Watchlist

**File**: `watchlist.html`  
**Purpose**: Personal collection of saved movies for later viewing.

### Sections to Include:

#### 1. Page Header
**Content**:
- **Page Title**: "My Watchlist" (H1)
- **Subtitle**: "You have X movies saved"
- **Sort/Filter Controls**: 
  - Sort by: Date Added • Title • Rating
  - Filter by genre (optional)
- **Clear Watchlist Button**: "Clear All" (with confirmation)

**Layout**:
- Centered or left-aligned
- Controls in horizontal row

#### 2. Empty State (If no movies)
**Content**:
- **Illustration or Icon**: Empty watchlist graphic
- **Message**: "Your watchlist is empty"
- **Subtext**: "Start exploring and add movies you want to watch"
- **CTA Button**: "Browse Movies"

**Layout**:
- Centered vertically and horizontally
- Max-width 400px

**Styling**:
- Light, friendly tone
- Use secondary/muted colors

#### 3. Watchlist Grid (If movies saved)
**Content**:
- Grid of saved movie cards
- Each card shows:
  - Poster image
  - Title
  - Year
  - Rating
  - Date added (optional)
  - "Remove" button (✕ icon, visible on hover)

**Layout**:
- Grid: 3-4 columns
- Cards: Similar to browse page (~220px wide)
- Gap: 20-24px

**Interactions**:
- Hover: card lifts, remove button appears
- Click card → movie details
- Click remove → confirm modal → remove from list
- Smooth fade-out animation when removing

#### 4. Bulk Actions Bar (Optional)
**Content**:
- "Select All" checkbox
- "Remove Selected" button (when items selected)
- "Export List" or "Share Watchlist" button

**Layout**:
- Appears above grid when selection mode active
- Fixed position or inline

#### 5. Statistics/Insights (Optional Bonus)
**Content**:
- Total runtime: "42 hours of movies"
- Genre breakdown: Pie chart or bars
- Average rating: "⭐ 8.2 average"

**Layout**:
- Sidebar or top panel
- Compact, visual

### Example Layout Sketch:
```
┌─────────────────────────────────────────┐
│ My Watchlist                            │
│ You have 12 movies saved                │
│ Sort by: Date Added ▾  [Clear All]      │
├─────────────────────────────────────────┤
│ [🎬]      [🎬]      [🎬]      [🎬]     │
│ Title     Title     Title     Title     │
│ 2020 ⭐8.5 2019 ⭐7.8 2021 ⭐9.0        │
│ [✕]       [✕]       [✕]       [✕]      │
│                                         │
│ [🎬]      [🎬]      [🎬]      [🎬]     │
│                                         │
└─────────────────────────────────────────┘
```

---

## Screen 5: Search Results

**File**: `search_results.html`  
**Purpose**: Display movies matching user's search query.

### Sections to Include:

#### 1. Search Header
**Content**:
- **Search Bar**: Pre-filled with search query, editable
- **Search Button**: Re-submit search
- **Back Link**: "← Back to Browse" or "← Back"

**Layout**:
- Prominent at top
- Search bar: large, centered or left-aligned
- Max-width ~700px

#### 2. Results Summary
**Content**:
- **Query Display**: "Results for 'inception'"
- **Results Count**: "Found 15 movies"
- **Sort Options**: Similar to browse page

**Layout**:
- Below search bar
- Horizontal row

#### 3. Results Grid
**Content**:
- Grid of matching movie cards
- Same card format as browse page:
  - Poster, title, year, rating, genres
  - "Add to Watchlist" on hover

**Layout**:
- Grid: 3-4 columns
- Responsive
- Consistent with browse page grid

**Interactions**:
- Same as browse page
- Click → movie details

#### 4. No Results State
**Content**:
- **Icon**: Magnifying glass or empty state illustration
- **Message**: "No movies found for 'xyz'"
- **Suggestions**:
  - "Try different keywords"
  - "Check spelling"
  - "Browse popular movies instead"
- **CTA Button**: "Browse All Movies"

**Layout**:
- Centered
- Max-width 500px
- Friendly, helpful tone

#### 5. Search Suggestions (Optional)
**Content**:
- "Did you mean: [suggestion]?"
- Popular searches or related queries
- Recently searched (if implementing localStorage)

**Layout**:
- Below search bar or in sidebar
- List or pill buttons

#### 6. Filter Options (Optional)
**Content**:
- "Refine results" with genre/decade filters
- Similar to browse page sidebar but simpler

**Layout**:
- Sidebar or top bar
- Collapsible on mobile

### Example Layout Sketch:
```
┌─────────────────────────────────────────┐
│ [← Back]                                │
│                                         │
│ [Search: inception         ] [Search]   │
│                                         │
│ Results for "inception"                 │
│ Found 15 movies          Sort by: ▾     │
├─────────────────────────────────────────┤
│ [🎬]      [🎬]      [🎬]      [🎬]     │
│ Inception  The Prestige  Interstellar   │
│ 2010 ⭐8.8 2006 ⭐8.5    2014 ⭐8.7    │
│                                         │
│ [🎬]      [🎬]      [🎬]      [🎬]     │
│                                         │
└─────────────────────────────────────────┘
```

---

## Component Library (Reusable Across Pages)

### Movie Card Component
**Used on**: All pages except Movie Details

**Structure**:
```html
<div class="movie-card">
  <img src="poster.jpg" alt="Movie Title" class="movie-poster">
  <div class="movie-info">
    <h3 class="movie-title">Movie Title</h3>
    <div class="movie-meta">
      <span class="year">2020</span>
      <span class="rating">⭐ 8.5</span>
    </div>
    <div class="movie-genres">
      <span class="genre-tag">Drama</span>
      <span class="genre-tag">Thriller</span>
    </div>
  </div>
  <button class="watchlist-btn">Add to Watchlist</button>
</div>
```

**States**:
- Default
- Hover (lifted with shadow)
- Watchlist button visible on hover

### Filter Section Component
**Used on**: Browse, Search Results (optional)

**Structure**:
- Collapsible sections (accordions)
- Checkboxes or radio buttons
- Clear/Apply buttons

### Modal Component
**Used for**: Watchlist confirmation, Share dialog, Video player

**Structure**:
- Overlay backdrop (rgba(0,0,0,0.7))
- Centered content panel
- Close button (✕)
- Smooth fade-in/out animations

---

## Interaction Patterns

### Page Transitions
- **Between pages**: Smooth fade or slide transitions (optional)
- **Card clicks**: Instant navigation (no loading needed)
- **Modal opens**: Fade backdrop, slide-up content

### Loading States
- **Skeleton screens**: Gray placeholder cards while "loading"
- **Spinner**: For search results or filters
- **Progress bar**: For video loading (if implementing trailer)

### Hover Effects
- **Cards**: Scale(1.05), shadow increase, button fade-in
- **Buttons**: Background color shift, slight lift
- **Links**: Underline animation or color change

### Form Interactions
- **Search bar**: Focus state with glow/border highlight
- **Checkboxes**: Custom styled with smooth check animation
- **Dropdowns**: Smooth open/close with arrow rotation

---

## Responsive Behavior

### Breakpoints Recommendation:
- **Desktop**: 1200px+ (4 columns)
- **Laptop**: 992px-1199px (3 columns)
- **Tablet**: 768px-991px (2 columns)
- **Mobile**: <768px (1 column) - Optional for this assignment

### Priority Adjustments:
- Stack layout elements vertically on smaller screens
- Collapsible navigation (hamburger menu)
- Hide filter sidebar, replace with modal/drawer
- Simplify grids (fewer columns)

---

## Accessibility Considerations

### Minimum Requirements:
- **Alt text** on all images
- **Semantic HTML** (header, nav, main, section, footer)
- **Keyboard navigation** for interactive elements
- **Focus states** visible on all interactive elements
- **Color contrast** meets WCAG AA standards

### Bonus:
- ARIA labels for icons and buttons
- Skip to content link
- Screen reader announcements for dynamic content

---

## Data & Content Guidelines

### Movie Titles to Use (Examples):
Use popular, recognizable films for demo data:

- The Shawshank Redemption (1994, Drama)
- Inception (2010, Sci-Fi/Thriller)
- The Dark Knight (2008, Action/Crime)
- Pulp Fiction (1994, Crime/Drama)
- Interstellar (2014, Sci-Fi/Adventure)
- The Matrix (1999, Sci-Fi/Action)
- Parasite (2019, Thriller/Drama)
- Get Out (2017, Horror/Thriller)
- La La Land (2016, Musical/Romance)
- Mad Max: Fury Road (2015, Action)

### Images:
- Use poster images from TMDB or IMDb (for demo purposes)
- Or use placeholder services: `https://via.placeholder.com/300x450`
- Ensure consistent aspect ratios (2:3 for posters)

### Ratings:
- Use realistic scores (7.0-9.5 range)
- Include ⭐ icon for visual clarity

---

## Final Checklist for Each Page

Before considering a page complete:

- [ ] Navigation header is consistent and functional
- [ ] Footer is present and styled
- [ ] All interactive elements have hover states
- [ ] Links to other pages work correctly
- [ ] Design system colors and typography are used
- [ ] Page is responsive (at least desktop/laptop)
- [ ] No console errors
- [ ] Smooth transitions on interactions
- [ ] Images have proper aspect ratios and alt text
- [ ] Page looks polished and professional

---

**These specifications provide a comprehensive blueprint for building each screen. Use them as a guide, but feel free to add creative flourishes that align with the CineMatch brand! 🎬✨**

