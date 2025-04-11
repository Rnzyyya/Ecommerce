// Hero Banner Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.amd-hero-slide');
const dots = document.querySelectorAll('.dot');
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize slideshow
let slideTimer;
function startSlideTimer() {
    clearInterval(slideTimer); // Clear any existing timer
    slideTimer = setInterval(nextSlide, slideInterval);
}
startSlideTimer();

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        clearInterval(slideTimer);
        showSlide(index);
        startSlideTimer();
    });
});

// Pause on hover
const heroBanner = document.querySelector('.amd-hero-banner');
heroBanner.addEventListener('mouseenter', () => clearInterval(slideTimer));
heroBanner.addEventListener('mouseleave', startSlideTimer);

// Enhanced Mega Menu Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Mega Menu Functionality
    const megaMenus = document.querySelectorAll('.mega-menu');
    let activeMenu = null;
    
    megaMenus.forEach(menu => {
        const trigger = menu.querySelector(':scope > a');
        const dropdown = menu.querySelector('.amd-mega-menu');
        
        // Make Product nav item non-clickable
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
        });

        // Show mega menu on hover (desktop)
        menu.addEventListener('mouseenter', () => {
            if (window.innerWidth > 1024) {
                if (activeMenu && activeMenu !== dropdown) {
                    activeMenu.style.display = 'none';
                }
                dropdown.style.display = 'block';
                activeMenu = dropdown;
            }
        });

        // Hide mega menu when mouse leaves (desktop)
        menu.addEventListener('mouseleave', () => {
            if (window.innerWidth > 1024) {
                dropdown.style.display = 'none';
                activeMenu = null;
            }
        });

        // Toggle mega menu on click (mobile)
        if (window.innerWidth <= 1024) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            });
        }
    });

    // Search Toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchContainer = document.querySelector('.search-container');

    if (searchToggle && searchContainer) {
        searchToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Close when clicking outside (handles both mega menu and search)
    document.addEventListener('click', (e) => {
        // Close mega menu if open and click is outside
        if (activeMenu && !activeMenu.contains(e.target)) {
            const isTrigger = Array.from(megaMenus).some(menu => 
                menu.contains(e.target) || menu.querySelector(':scope > a') === e.target
            );
            if (!isTrigger) {
                activeMenu.style.display = 'none';
                activeMenu = null;
            }
        }
        
        // Close search if open and click is outside
        if (searchContainer && searchContainer.style.display === 'block' && 
            !searchContainer.contains(e.target) && e.target !== searchToggle) {
            searchContainer.style.display = 'none';
        }
    });

    // Announcement Bar Close
    const closeAnnouncement = document.querySelector('.close-announcement');
    const announcementBar = document.querySelector('.amd-announcement-bar');

    if (closeAnnouncement && announcementBar) {
        closeAnnouncement.addEventListener('click', () => {
            announcementBar.style.display = 'none';
        });
    }
});
