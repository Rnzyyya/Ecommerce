// Ryzen Processor Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animation
    const heroAnimation = document.getElementById('ryzenAnimation');
    if (heroAnimation) {
        // Create floating Ryzen chip animation
        const chip = document.createElement('div');
        chip.className = 'ryzen-chip';
        chip.style.opacity = '0';
        heroAnimation.appendChild(chip);
        
        // Fade in animation
        let fadeIn = 0;
        const fadeInterval = setInterval(() => {
            fadeIn += 0.05;
            chip.style.opacity = fadeIn;
            if (fadeIn >= 1) clearInterval(fadeInterval);
        }, 30);
        
        // Floating animation
        let angle = 0;
        const radius = 100;
        const centerX = heroAnimation.offsetWidth / 2;
        const centerY = heroAnimation.offsetHeight / 2;
        
        function animateChip() {
            angle += 0.01;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            chip.style.transform = `translate(${x}px, ${y}px) rotate(${angle * 10}deg)`;
            requestAnimationFrame(animateChip);
        }
        animateChip();
    }

    // Add hover animations to processor cards
    const cards = document.querySelectorAll('.ryzen-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.25)';
            card.style.transition = 'all 0.3s ease-out';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            card.style.transition = 'all 0.3s ease-out';
        });
    });

    // Feature animations
    const features = [
        {
            name: "Zen 4 Architecture",
            desc: "The latest CPU architecture delivering up to 15% better performance per clock and 25% better performance per watt than Zen 3"
        },
        {
            name: "Precision Boost 2", 
            desc: "Intelligently boosts clock speeds based on workload, cooling and power delivery for optimal performance"
        },
        {
            name: "AMD EXPO Technology",
            desc: "One-click memory overclocking profiles for easy DDR5 performance optimization"
        },
        {
            name: "AMD Ryzen™ AI",
            desc: "First dedicated AI engine on a desktop processor for accelerated AI workloads"
        }
    ];

    const featureGrid = document.querySelector('.feature-grid');
    if (featureGrid) {
        features.forEach((feature, index) => {
            const featureItem = document.createElement('div');
            featureItem.className = 'feature-item';
            featureItem.innerHTML = `
                <div class="feature-icon"></div>
                <h4>${feature.name}</h4>
                <p>${feature.desc}</p>
            `;
            featureGrid.appendChild(featureItem);
            
            // Enhanced staggered animation
            featureItem.style.opacity = '0';
            featureItem.style.transform = 'translateY(20px)';
            featureItem.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
            
            setTimeout(() => {
                featureItem.style.opacity = '1';
                featureItem.style.transform = 'translateY(0)';
            }, 100);
        });
    }
});
