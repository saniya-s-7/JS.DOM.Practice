let grow = 0
let btn = document.querySelector('button')
let inner = document.querySelector('#inner')
let h2 = document.querySelector('#bottom h2')

btn.addEventListener('click', ()=>{
    
    btn.style.pointerEvents ='none'

    let int = setInterval(() => {
        grow++
        h2.innerHTML = grow + '%'
        inner.style.width = grow + '%'
    }, 30);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = '0.5'
    },  3000);
})
