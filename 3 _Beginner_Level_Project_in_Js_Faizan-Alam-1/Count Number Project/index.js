// ***********************************************************|Add  Element in js|**************************************************************** 

let upper = document.querySelector('#upper_btn');
let lower = document.querySelector('#lower_btn');
let display = document.querySelector('#count_display_number');
let reset_btn = document.querySelector('#reset')

//****************************************** ************** |Initial Value Variable For Btn|*************************************************************

let count_variable = 0;

// ****************************************************************|Upper Button|***************************************************************

upper.addEventListener('click', run_upper_function);

function run_upper_function() {

    upper = ++count_variable;

    display.innerHTML = upper;


    if (upper > '0') {

        display.style.color = 'green';

    }

    else if (upper == '0') {

        display.style.color = 'white';

    }

    // **************************************************|Animate  When We Press Upper Btn|**************************************************** 

    display.animate([{ opacity: '0.2'  }, { opacity: '1.0'}], { duration: 1000 }, { fill: 'forwards' })

}




//********************************************************************|lower button|***********************************************************

lower.addEventListener('click', run_lower_function);

function run_lower_function() {

    lower = --count_variable;

    display.innerHTML = lower;


    if (lower < '0') {

        display.style.color = 'red';

    }

    else if (lower == '0') {

        display.style.color = 'white';

    }

    //****************************************************************** */ |Animate  When We Press down/lower Btn|*****************************


    display.animate([{ opacity: '0.2'  }, { opacity: '1.0'}], { duration: 1000 }, { fill: 'forwards' })
}






//***************************************************** |Reset btn| ****************************************************************************


reset_btn.addEventListener('click', reset_function);


function reset_function() {

    count_variable = 0;
    upper = count_variable;
    display.innerHTML = upper;


    if (upper == '0') {

        display.style.color = 'white';

    }

    //******************************************************** ** |Animate  When We Press Reset Btn|********************************************* 


    display.animate([{ opacity: '0.2'  }, { opacity: '1.0'}], { duration: 1000 }, { fill: 'forwards' })


}





// for animation we use element.animate  here is doc link : -  https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

//  Syntax

// var animation = element.animate(keyframes, options);