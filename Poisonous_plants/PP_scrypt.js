
// Toggle grid padding
function myFunction() {
    var x = document.getElementById("myGrid");
    if (x.className === "w3-row") {
      x.className = "w3-row-padding";
    } else { 
      x.className = x.className.replace("w3-row-padding", "w3-row");
    }
  }
  
  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

// Modal Image Gallery
/*function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }*/

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