var navMenuAnchorTags =document.querySelectorAll('.nav-menu a');
var interval;

for(var i=0;i<navMenuAnchorTags.length;i++){

        navMenuAnchorTags[i].addEventListener('click',function(event){
            event.preventDefault();

            var targetSectionID = this.textContent.trim().toLowerCase();
            var targetSection =document.getElementById(targetSectionID);
             //interval =setInterval(scrollVertically,20,targetSection);

             interval =setInterval(function(){
                 scrollVertically(targetSection);
             },20);
        });
}

function scrollVertically(targetSection){
  
        var targetSectionCoordinates = targetSection.getBoundingClientRect();

        if(targetSectionCoordinates.top <= 0){
            console.log(targetSectionCoordinates.top);
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    }




var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);