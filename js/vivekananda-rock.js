document.addEventListener('DOMContentLoaded', () => {
    // Viewer Instance declaration
    let viewer;
    const viewerElement = document.querySelector('#photosphere');
    
    // Virtual Walk locations - reusing image but changing pitch/yaw to simulate locations
    const locationsInfo = {
        'mandapam': {
            panorama: 'assets/vivekananda_rock.png',
            caption: 'Mandapam (Meditation Hall)',
            yaw: '180deg',
            pitch: '0deg'
        },
        'shripada': {
            panorama: 'assets/vivekananda_rock.png',
            caption: 'Shripada Mandapam (Sacred Footprint)',
            yaw: '90deg',
            pitch: '-5deg'
        },
        'main-hall': {
            panorama: 'assets/vivekananda_rock.png',
            caption: 'Main Memorial Hall',
            yaw: '0deg',
            pitch: '10deg'
        },
        'statue-view': {
            panorama: 'assets/vivekananda_rock.png',
            caption: 'Thiruvalluvar Statue View Point',
            yaw: '270deg',
            pitch: '0deg'
        }
    };

    if (viewerElement && window.PhotoSphereViewer) {
        viewer = new PhotoSphereViewer.Viewer({
            container: viewerElement,
            panorama: locationsInfo['mandapam'].panorama,
            caption: locationsInfo['mandapam'].caption,
            defaultYaw: locationsInfo['mandapam'].yaw,
            defaultPitch: locationsInfo['mandapam'].pitch,
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

    // Handle hotspot clicks
    const hotspots = document.querySelectorAll('.hotspot-list li');
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (e) => {
            // Remove active class
            hotspots.forEach(h => h.classList.remove('active'));
            // Add active class to clicked
            e.currentTarget.classList.add('active');

            const locationKey = e.currentTarget.getAttribute('data-location');
            const locData = locationsInfo[locationKey];

            if (viewer && locData) {
                // Animate view coordinates to simulate a location change
                viewer.animate({
                    yaw: locData.yaw,
                    pitch: locData.pitch,
                    speed: '2rpm'
                });
                
                // Set the caption using simple DOM update since 'setCaption' varies by API version
                setTimeout(() => {
                    const captionEl = document.querySelector('.psv-caption-content');
                    if(captionEl) captionEl.innerHTML = locData.caption;
                }, 100);
            }
        });
    });

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

    document.querySelectorAll('.glass-card').forEach(card => {
        card.classList.add('fade-in-section');
        observer.observe(card);
    });
});
