let quote_object=[
    {
        name :`J.k Rowling`,
        qoute:` "what is life Without a little risk?" `
       
    },
    
    {
        name :`albert einstein `,
        qoute:` "the true sing of intellgence is not knowledge but imagination" `
    },
    
    {
        
        name :`steve job`,
        qoute:` "have the courage to follow your heart and intuition they somehow know what you truly want to become." `
    }, 

    {
        
        name :`stepen hawking`,
        qoute:` " however difficult life  may seem , there is always something you can do and succeed at " `
    },

    {
        
        name :`apj abdul kalam`,
        qoute:` " the best brains of the nation may by found in the last benches of the classroom "`
    },
    {
        
        name :`faizan alam`,
        qoute:` " Do What You Want To Do , Don't Follow  Crowd" `
    
    }
    

];

let display = document.querySelector('#quote_display');
let Author = document.querySelector('#quote_Author');
let btn = document.querySelector('#quote_btn');
btn.addEventListener("click", display_function);
function display_function(){
    let number_random = Math.floor(Math.random()*quote_object.length)
    Author.innerHTML= quote_object[number_random].name;
    display.innerHTML= quote_object[number_random].qoute;
}