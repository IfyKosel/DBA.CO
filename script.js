//  the responsive toogle button
let menu = document.querySelector("#menu");
let headlist = document.querySelector("#headlist");
menu.onclick = () => {
    menu.classList.toggle("menu_list");
    headlist.classList.toggle("open");
}

// the animation on the section with green background
const sects = document.querySelectorAll(".trans");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes(){
    const timeOut = window.innerHeight / 5 * 4;
    sects.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < timeOut){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    });
} 

// the animation on the services section
const anime = document.querySelectorAll(".up-slide");
window.addEventListener("scroll", animeSlide);
animeSlide();
function animeSlide(){
    const timeIn = window.innerHeight / 5 * 4;
    anime.forEach(slide => {
        const boxTop = slide.getBoundingClientRect().top;
        if (boxTop < timeIn){
            slide.classList.add("show");
        }
        else{
            slide.classList.remove("show");
        }
    });
}