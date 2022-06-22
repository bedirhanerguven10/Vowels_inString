let content = document.getElementById("input");
let button = document.querySelector(".btn");
const input = document.getElementById('input');

button.addEventListener("click", (e) => {
    if(e.target.classList.contains('btn')){
        let cont = e.target.previousElementSibling.value ;
        if (cont == '') {
            alert ('Please enter a valid text !')
        }else {
            e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText =countVowels();
            e.target.previousElementSibling.value = '';  
        }
    
}})

const countVowels = () => {
   
let counter = 0;    
let text = input.value;
 text = text.toLowerCase().split('');

let sectext = text.map((value) => {
    if (value === 'a') {
        counter +=1;
    }else if(value== 'e'){
        counter +=1;
    } else if(value== 'i'){
        counter +=1;
    } else if(value== 'o'){
        counter +=1;
    } else if(value== 'u'){
        counter +=1;
    }

})
let result = counter;
return result;
}