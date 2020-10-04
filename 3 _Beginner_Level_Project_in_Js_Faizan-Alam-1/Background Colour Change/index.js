let select_container_btn = document.querySelector('.containerbtn');
let select_btn=document.querySelector('#btn');
// let colour_obj =['#E44236', '#B83227', '#D63031', '#E84342','#FF3031','#BA2F16','#EC4849','#FF3E4D'];
let colour_obj =['grey','green','yellow','black', 'red', 'pink'];

select_btn.addEventListener('click' , colour_change);

function colour_change(){
    // select_container_btn.style.backgroundColor = colour_obj[0]
    let random = Math.floor(Math.random()*colour_obj.length)
    select_container_btn.style.backgroundColor= colour_obj[random]
}