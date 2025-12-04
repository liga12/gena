document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('lightgallery');
    if (galleryContainer) {
        lightGallery(galleryContainer, {
            plugins: [lgThumbnail],
            speed: 1000,
            licenseKey: '0000-0000-0000-0000',
            mobileSettings: {
                controls: true,
                showCloseIcon: true,
                download: false,
                closable: true,
                swipeToClose: true
            }
        });
    }
});