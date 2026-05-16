let btn = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click', () => {

    // har 100ms me div create hoga
    let interval = setInterval(() => {

        let div = document.createElement('div')

        let size = Math.random() * 50

        div.style.height = size + "px"
        div.style.width = size + "px"

        let c1 = Math.random() * 256
        let c2 = Math.random() * 256
        let c3 = Math.random() * 256

        div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

        let x = Math.random() * 100
        let y = Math.random() * 100
        let r = Math.random() * 360

        div.style.position = 'absolute'
        div.style.top = y + "%"
        div.style.left = x + "%"
        div.style.rotate = r + "deg"

        let borderRadius = Math.random() * 60

        div.style.borderRadius = borderRadius + 'px'
        div.style.opacity = Math.random() 
        div.style.filter = `blur(${Math.random()*5}px)`
        
        div.style.background =
       `linear-gradient(
        ${Math.random()*360}deg,
        rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256}),
        rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})  
       )`
       
        main.appendChild(div)

    }, 20) // speed


    // 5000ms = 5 second baad stop
    setTimeout(() => {
        clearInterval(interval)
    }, 5000)

})