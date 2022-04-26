// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach( function(btn) {
    btn.addEventListener('click', function(event){
        const styles =  event.currentTarget.classList;
        if(styles.contain("decrease")) {
            count--;
        } else if (styles.contain("increase")) {
            count++;
        }  else {
            count = 0;
        }
        value.textContent = count;
    })
});