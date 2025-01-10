let homenav = document.querySelectorAll(".homenav");

homenav.forEach((x) => {
    x.addEventListener("click",()=>{
        for(i of homenav){
            i.style.borderBottom="0px solid purple";
        }
        x.style.borderBottom="1px solid purple";
    })
});