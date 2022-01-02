let progress = document.querySelectorAll('.progress');
let progress_number = document.querySelectorAll('.progress_num');


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