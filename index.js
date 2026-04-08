let img=document.querySelector("img")
let h2=document.querySelector("h2")
let prevSrc=img.src
let prevText=h2.innerText


img.addEventListener("mouseenter",()=>
{
    img.src="https://cdn.pixabay.com/photo/2018/08/03/15/02/channel-3582081_1280.jpg"
    h2.innerText="Paris"


})
img.addEventListener("mouseleave",()=>
{
    img.src=prevSrc
h2.innerText=prevText
})