// 3D Tilt Effect and Parallax
document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect for Glass Cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none'; // Remove transition during movement for smoothness
        });
    });

    // Simple Hero Parallax
    const heroContent = document.querySelector('.hero-text');
    const portal = document.getElementById('3d-portal');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(scrolled < window.innerHeight) {
            if(heroContent) heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            if(portal) portal.style.transform = `translate(-50%, -50%) translateZ(${scrolled * -0.5}px) scale(${1 + scrolled*0.001})`;
        }
    });
});
