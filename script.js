let progress = document.querySelectorAll('.progress');
let progress_number = document.querySelectorAll('.progress_num');
let links = document.querySelectorAll('.link')

// Scroll for Chrome

var link = $('.link');

link.on('click', function(e){
    e.preventDefault();

    var selector = $($(this).attr('href'));

    $('html, body').animate({
        scrollTop: selector.offset().top - 60
    }, 600);
})

// Scroll for Mozilla

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            block: "center", behavior: "smooth" 
        })
    })
}

// Progress-bar

function move() {
    for (let i = 0; i < progress.length; i++) {
        let start = 0;
        let interval = setInterval(() => {
            progress[i].value = start;
            let number = progress[i].dataset.current;
            progress_number[i].innerHTML = start + '%';
            start++;
            if (start > number) {
                clearInterval(interval);
            }
        }, 10);
    }
}

move();