let img = document.querySelector('img')
let heart = document.querySelector('#heart')


img.addEventListener('dblclick',()=>{
         heart.style.opacity = 1
         heart.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'
         setTimeout(() => {
             heart.style.transform = 'translate(-50%,-250%) scale(1) rotate(60deg)'
         }, 800);

         setTimeout(() => {
             heart.style.opacity = 0
         }, 1000);

         setTimeout(() => {
            heart.style.transform = 'translate(-50%,-50%) scale(0) rotate(0deg)'
         }, 1200);
})