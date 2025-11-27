const menu = document.getElementById('menu');
const get = document.getElementById('get');
const closegetter = document.querySelector('.x');

const loadgetter = document.querySelector('.load');
const getter = document.querySelector('.getter');
closegetter.addEventListener('click', () =>{
    getter.style.display = 'none';
});

get.addEventListener('click', () =>{
    loadgetter.style.display = 'flex';
    setTimeout(() => {
         getter.style.display = 'flex';
         loadgetter.style.display = 'none';
    }, 3000);
});


window.addEventListener('scroll', () =>{
    if(scrollY > 400){
        menu.classList.add('scrolled')
    }
    else{
        menu.classList.remove('scrolled');
    }
});
const words = ["DELICIOUS", "HEALTHY","TESTED"];
        let currentWordIndex = 0; 
        let currentCharIndex = 0; 
        let isErasing = false; 
        let speed = 180; 
        let eraseSpeed = 140; 
        let pauseBetweenWords = 1000; 
        let typingTextElement = document.getElementById("typingText");

        function type() {
            if (!isErasing){
                if (currentCharIndex < words[currentWordIndex].length) {
                    typingTextElement.innerHTML += words[currentWordIndex].charAt(currentCharIndex);
                    currentCharIndex++;
                    setTimeout(type, speed);
                } else {
                
                    setTimeout(erase, pauseBetweenWords);
                }
            } else {
                erase();
            }
        }



        function erase() {
            if (currentCharIndex > 0) {
                typingTextElement.innerHTML = words[currentWordIndex].substring(0, currentCharIndex - 1);
                currentCharIndex--;
                setTimeout(erase, eraseSpeed);
            } else {
                
                currentWordIndex = (currentWordIndex + 1) % words.length;
                isErasing = false;
                setTimeout(type, speed); 
            }
        }

        type();




// window.addEventListener('load', () =>{
//     setTimeout(() => {
//         mark.style.width = '100%';
//         mark.style.transition = '.5s ease';
//         mark.style.backgroundColor = 'rgb(50, 245, 99)';
//     }, 2000);
// });


