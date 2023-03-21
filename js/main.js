const $select1 = document.querySelector("#select1");

const $rolTopContent = document.querySelector("#top");
const $rolJunglaContent = document.querySelector("#jungla");
const $rolMidContent = document.querySelector("#mid");
const $rolAdcContent = document.querySelector("#adc");
const $rolSupportContent = document.querySelector("#support");

$select1.addEventListener('change', function() {
    if("top" === $select1.value.toLowerCase()) {
        $rolTopContent.style.display = "block";
        $rolTopContent.classList.toggle('anim3');
        //$rolTopContent.classList.toggle('anim3');
        $rolJunglaContent.style.display = "none";
        $rolMidContent.style.display = "none";
        $rolAdcContent.style.display = "none";
        $rolSupportContent.style.display = "none";
    } else if("jungla" === $select1.value.toLowerCase()) {
        $rolJunglaContent.style.display = "block";
        $rolTopContent.style.display = "none";
        $rolMidContent.style.display = "none";
        $rolAdcContent.style.display = "none";
        $rolSupportContent.style.display = "none";
    } else if("mid" === $select1.value.toLowerCase()){
        $rolMidContent.style.display = "block";
        $rolTopContent.style.display = "none";
        $rolJunglaContent.style.display = "none";
        $rolAdcContent.style.display = "none";
        $rolSupportContent.style.display = "none";
    } else if("adc" === $select1.value.toLowerCase()){
        $rolAdcContent.style.display = "block";
        $rolTopContent.style.display = "none";
        $rolJunglaContent.style.display = "none";
        $rolMidContent.style.display = "none";
        $rolSupportContent.style.display = "none";
    } else if("support" === $select1.value.toLowerCase()){
        $rolSupportContent.style.display = "block";
        $rolTopContent.style.display = "none";
        $rolJunglaContent.style.display = "none";
        $rolMidContent.style.display = "none";
        $rolAdcContent.style.display = "none";
    }
})