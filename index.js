// Selection des cercles
const cercle_1=document.querySelector('.cercle_1');
const cercle_2=document.querySelector('.cercle_2');
const cercle_3=document.querySelector('.cercle_3')
// Selection images
const image_1=document.querySelector('.wizard-1');
const image_2=document.querySelector('.wizard-2');
const image_3=document.querySelector('.wizard-3')
const title=document.querySelector('h2')
// formmulaire
const form_1=document.querySelector('.form_one');
const form_2=document.querySelector('.form_two');
const form_3=document.querySelector('.form_three')

cercle_1.addEventListener('click', () => {
    image_1.style.display="block";
    image_2.style.display="none"
    image_3.style.display="none"
    //  formulaire
    form_1.style.display="block";
    form_2.style.display="none";
    form_3.style.display="none";
})
cercle_2.addEventListener('click', () => {
    console.log('yes')
    // images
    image_1.style.display="none";
    image_2.style.display="block"
    image_3.style.display="none";
    // formualire
    form_1.style.display="none";
    form_2.style.display="block";
    form_3.style.display="none";

    // image_2.classList.toggle('form-row_show')
   
})
cercle_3.addEventListener('click', () => {
    image_1.style.display="none";
    image_2.style.display="none"
    image_3.style.display="block"
// formulaire
form_1.style.display="none";
form_2.style.display="none";
form_3.style.display="block";
    
   
})
