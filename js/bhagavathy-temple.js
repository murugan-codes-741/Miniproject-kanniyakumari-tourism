document.addEventListener('DOMContentLoaded', () => {
    
    // Viewer Initialization
    const viewerElement = document.querySelector('#photosphere');
    
    if (viewerElement && window.PhotoSphereViewer) {
        new PhotoSphereViewer.Viewer({
            container: viewerElement,
            panorama: 'assets/bhagavathy_temple.png',
            caption: 'Virtual Darshan - Bhagavathy Amman Temple Exterior',
            defaultYaw: '180deg',
            defaultPitch: 0,
            touchmoveTwoFingers: true,
            mousewheelCtrlKey: true,
            navbar: [
                'autorotate',
                'zoom',
                'caption',
                'fullscreen'
            ]
        });
    }

    // Audio Control Logic
    const audioEl = document.getElementById('temple-bell-audio');
    const audioBtn = document.getElementById('btn-audio-toggle');
    const audioStatus = document.getElementById('audio-status');

    if (audioEl && audioBtn) {
        audioEl.volume = 0.4; // Soft background volume

        audioBtn.addEventListener('click', () => {
            if (audioEl.paused) {
                audioEl.play().then(() => {
                    audioStatus.innerText = 'Audio On';
                    audioBtn.style.background = 'rgba(239, 159, 39, 0.4)';
                }).catch(err => {
                    console.log('Audio playback failed: ', err);
                });
            } else {
                audioEl.pause();
                audioStatus.innerText = 'Audio Off';
                audioBtn.style.background = 'rgba(4, 44, 83, 0.6)';
            }
        });
    }

    // Fade in animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section, .glass-card').forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });
});
