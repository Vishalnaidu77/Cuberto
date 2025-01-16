let body = document.querySelector("body")
let gola = document.querySelector("#gola")

body.addEventListener("mouseenter", () => {
     gsap.to(gola, {
        opacity:1,
        scale:1
     })
})

body.addEventListener("mousemove", (move) => {
    gsap.to(gola, {
        left:move.x-5,
        top:move.y-5
    })
})


let menu = document.querySelector("#menu")
let magnet = document.querySelector("#magnet")

menu.addEventListener("mouseenter", () => {
    gsap.to(magnet, {
       opacity:1,
       scale:1,
    })
})

menu.addEventListener("mouseleave", () => {
    gsap.to(magnet, {
       opacity:0,
       scale:0
    })
})