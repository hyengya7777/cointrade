
/*
let observer = new IntersectionObserver((디브들) => {
    let time = 700
    디브들.forEach((각각의_요소)=>{
        setTimeout(()=>{
            각각의_요소.target.style.transform = "translateX(20%)";
            각각의_요소.target.style.opacity = 1;
            
        } , time)
        time += 700
        
    })

})

let wallpaper_div = document.querySelectorAll(".wallpaper_h1_div")

observer.observe(wallpaper_div[0])
observer.observe(wallpaper_div[1])
observer.observe(wallpaper_div[2])

*/


const box = document.querySelector(".hero-content");
const child = box.children
const children_array = Array.from(child);
const button =  document.querySelector(".hero-content-button");



function show_texts(){
    let time = 500
    children_array.forEach((각각의_요소)=>{

        setTimeout(()=>{
    
            각각의_요소.style.transform = `translateX(15vw)`;
            각각의_요소.style.opacity = 1;
    
        } , time )
    
        time += 500
    
    
    })

    
}
show_texts()

setTimeout(() => button.style.opacity = 1, 2000)

/*
const 동전_박스들 = document.querySelectorAll(".grid-item")
const 동전_박스_어래이 = Array.from(동전_박스들)

동전_박스_어래이.forEach((element) => {


    console.log(element)
    
    element.addEventListener('mousemove' , (event_information)=>{

        let x = event_information.offsetX;
        let y = event_information.offsetY;

        
        let rotateY = -1/5 * x + 20
        let rotateX = 4/25 * y - 10

        console.log(x,y)

        element.style = ` transform : perspective(650px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`


    })
    element.addEventListener('mouseout' , ()=>{

        element.style = ` transform : perspective(350px) rotateX(0deg) rotateY(0deg)`


    })

});
*/


button.addEventListener("click" , scrollToSection)

function scrollToSection() {
    document.getElementById("target").scrollIntoView({ behavior: "smooth" });
    console.log("dfdsfdsfsdfsdfdsfdsf")
}








