// Interactive Map Logic
document.addEventListener('DOMContentLoaded', () => {
    const pins = document.querySelectorAll('.map-pin');
    const modals = document.querySelectorAll('.map-modal');

    pins.forEach(pin => {
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            // Hide all modals
            modals.forEach(m => m.classList.remove('active'));
            
            // Show target modal
            const targetId = pin.getAttribute('data-target');
            const targetModal = document.getElementById(targetId);
            if (targetModal) {
                targetModal.classList.add('active');
            }
        });
    });

    // Click outside to close map modal
    document.addEventListener('click', () => {
        modals.forEach(m => m.classList.remove('active'));
    });
});
