function onClickTextImageChange()
{
const designH2=document.querySelector('#design-h2')
const projectH2=document.querySelector('#project-h2')
const executionH2=document.querySelector('#execution-h2')
const changeablePara=document.querySelector('#changeable-para')
const changeableImg=document.querySelector('#changeable-img')

designH2.addEventListener('click',(e)=>{
    e.preventDefault()
   changeableImg.style.backgroundImage="url('assets/asset 9.webp')"
   changeablePara.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
   designH2.style.borderLeft="3px solid #fe3f0a"
   projectH2.style.borderLeft="3px solid rgba(141, 136, 136, 0.748)"
   executionH2.style.borderLeft="3px solid rgba(141, 136, 136, 0.748)"
   changeablePara.appendChild()
})
projectH2.addEventListener('click',(e)=>{
    e.preventDefault()
   changeableImg.style.backgroundImage="url('assets/asset 10.webp')"
   changeablePara.innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
   projectH2.style.borderLeft="3px solid #fe3f0a"
   designH2.style.borderLeft="3px solid rgba(141, 136, 136, 0.748)"
   executionH2.style.borderLeft="3px solid rgba(141, 136, 136, 0.748)"
   changeablePara.appendChild()

})
executionH2.addEventListener('click',(e)=>{
    e.preventDefault()
   changeableImg.style.backgroundImage="url('assets/asset 11.webp')"
   changeablePara.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
   executionH2.style.borderLeft="3px solid #fe3f0a"
   designH2.style.borderLeft="3px solid rgba(141, 136, 136, 0.748)"
   projectH2.style.borderLeft="3px solid rgba(141, 136, 136, 0.748)"
   changeablePara.appendChild()
})
}
onClickTextImageChange()

function onHoverImageChange(){
const fixedImage = document.querySelector('.fixed-image')
const hoverableProjectContainer = document.querySelector('.hoverable-project-container')

hoverableProjectContainer.addEventListener('mouseenter',()=>{
    fixedImage.style.display='block'
})
hoverableProjectContainer.addEventListener('mouseleave',()=>{
    fixedImage.style.display='none'
})

const projects=document.querySelectorAll('#project')
projects.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        const image=e.getAttribute('data-image')
        fixedImage.style.backgroundImage=`url(${image})`
    })
   
})
}

onHoverImageChange()
const loader = document.querySelector('.loader')
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000)
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
