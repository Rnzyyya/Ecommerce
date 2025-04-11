// Shop Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Intersection Observer for animations
    function initAnimations() {
        const sections = document.querySelectorAll('.category-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            // Only animate when section comes into view
            observer.observe(section);
        });
    }

    // View More Button Functionality
    function setupViewMoreButtons() {
        const buttons = document.querySelectorAll('.view-more');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.closest('.category-section').id;
                // Navigate to the appropriate category page
                if (category === 'gpus') {
                    window.location.href = 'gpus.html';
                } else if (category === 'threadrippers') {
                    window.location.href = 'threadrippers.html';
                }
            });
        });
    }

    // Handle product actions
    function setupProductActions() {
        document.querySelectorAll('.amd-btn-secondary').forEach(button => {
            button.addEventListener('click', function() {
                const productTitle = document.querySelector('h1').textContent;
                const productPrice = document.querySelector('.product-price').textContent;
                alert("You have added an item to cart");
            });
        });

        document.querySelectorAll('.amd-btn-primary').forEach(button => {
            button.addEventListener('click', function() {
                const productTitle = document.querySelector('h1').textContent;
                alert("You have purchased an item");
            });
        });
    }

    // Initialize all functionality
    initAnimations();
    setupViewMoreButtons();
    setupProductActions();

    // Responsive adjustments
    window.addEventListener('resize', function() {
        // Any responsive JS adjustments would go here
    });
});
