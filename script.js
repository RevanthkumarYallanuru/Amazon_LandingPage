const images=document.querySelectorAll(".hidden-slider ul img");
const prev=document.querySelector(".control_previous");
const next=document.querySelector(".control_next");


let n=0;
function changeSlide()
{
 for(let i=0; i<images.length; i++)
 {
    images[i].style.display="none";

 }
 images[n].style.display="block";

}
changeSlide();

prev.addEventListener('click',(e)=>{
    if(n>0)
    {
        n--;
        console.log(n);
    }
    else{
        n=images.length-1;
        console.log(n);

    }
    changeSlide();
});

next.addEventListener('click',(e)=>{
    if(n<images.length-1)
    {
        n++;
        console.log(n);
    }
    else{
       n=0;
        console.log(n);

    }
    changeSlide();
});

// for container inside the scroll schedule
const scorllcont=document.querySelectorAll(".products");
for(const item of scorllcont)
{
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;


    });

}