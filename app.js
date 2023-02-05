var gallery = document.querySelector('.gallery')
var images = document.querySelectorAll('.image img')
var galleryImg = document.querySelector('.gallery__inner img')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

var currentIndex = 0

var showGallery = () => {
    if (currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }

    // display  
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        showGallery()    
    })
})

close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
        // ESC
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    } 
})

next.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    } 
})

document.onkeydown = function(event) {
    var e = event || window.event;
    if (e.keyCode == '37' && currentIndex >0) { //LEFT
      currentIndex--;
      showGallery();
    } else if (e.keyCode == '39' && currentIndex<7) { //RIGHT
      currentIndex++;
      showGallery();
    }
  }


