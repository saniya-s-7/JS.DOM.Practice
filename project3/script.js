const users = [
  {
    fullname: "Ayesha Khan",
    profession: "Frontend Developer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },

  {
    fullname: "Zaid Ahmed",
    profession: "Graphic Designer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },

  {
    fullname: "Sara Ali",
    profession: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },

  {
    fullname: "Hamza Sheikh",
    profession: "Backend Developer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },

  {
    fullname: "Fatima Noor",
    profession: "Content Writer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  }
];

let sum = "";

users.forEach(function(elem){
   sum = sum + `
  <div id="card">
    
    <div class="img-container">
      <img src="${elem.img}" alt="">
      <i class="ri-heart-fill heart"></i>
    </div>

    <h1>${elem.fullname}</h1>
    <h3>${elem.profession}</h3>
  </div>`
});

let main = document.querySelector('main')

main.innerHTML = sum


let allImages = document.querySelectorAll('.img-container')

allImages.forEach(function(elem){

   elem.addEventListener('dblclick',function(){

      let heart = elem.querySelector('.heart')

      heart.style.opacity = '1'
      heart.style.transform = 'translate(-50%,-50%) scale(1)'

      setTimeout(function(){

        heart.style.transform = 'translate(-50%,-120%) scale(1.3)'
        heart.style.opacity = '0'

      },500)

      setTimeout(function(){

        heart.style.transform = 'translate(-50%,-50%) scale(0)'

      },1000)

   })

})

