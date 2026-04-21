// 360 Viewer Initialization
document.addEventListener('DOMContentLoaded', () => {
    const viewerContainer = document.getElementById('photosphere');
    
    if (viewerContainer && window.PhotoSphereViewer) {
      const viewer = new PhotoSphereViewer.Viewer({
        container: viewerContainer,
        panorama: 'assets/sunset_panorama.png',
        caption: 'Sunset Panorama Virtual Experience',
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
});
