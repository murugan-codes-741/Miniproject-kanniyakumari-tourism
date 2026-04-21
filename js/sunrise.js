// 360 Viewer Initialization
document.addEventListener('DOMContentLoaded', () => {
  const viewerContainer = document.getElementById('photosphere');
  
  if (viewerContainer && window.PhotoSphereViewer) {
    const viewer = new PhotoSphereViewer.Viewer({
      container: viewerContainer,
      // Placeholder image used due to generator restrictions.
      // Can be replaced with a true equirectangular panoramic image later.
      panorama: 'assets/sunset_panorama.png',
      caption: 'Sunrise at Three Seas Virtual Experience',
      defaultYaw: '130deg',
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
});
