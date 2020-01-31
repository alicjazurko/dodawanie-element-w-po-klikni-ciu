let btnClick = document.querySelector('.klik'); // przycisk klik
let divAddNumber = document.querySelector('.elements'); //tu dodajemy divy
// let number = 1;

let number1 = 1;

btnClick.addEventListener('click', function() {
    
        
    let newDiv = document.createElement('div');
        // newDiv.textContent(number1);
        divAddNumber.append(newDiv);
        newDiv.textContent = number1;
        newDiv.classList.add('normal');
        // number1++;
        
        

        if (number1%5 == 0) {
        newDiv.classList.remove('normal');    
        newDiv.classList.add('five');

        }
    number1++;
    
    
    
})