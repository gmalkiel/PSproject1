    function openLightbox(imageSrc) {
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
    }

    function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    }
  
    function openExternalLink(url) {
    window.open(url, '_blank');
    }
