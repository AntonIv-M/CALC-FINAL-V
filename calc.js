let input = document.getElementById ('display')
let input0 = ""

function annInput (value) {
    input0 += value
    input.value = input0
}

function annInputClear (value) {
    input0 = ''
    input.value = ''

}

function annOper (operator){
    input0 += '' + operator + '';
    input.value =  input0
}

function annInputRes (){
    input.value = eval(input0)
    input0 = input.vale
}




/*let a = '';
let b = '';
let sing = '';
let finish = false;

const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const sings = ['/','X','-','+'];

//Экран

const out = document.querySelector ('.display'); 

// Очистка
function clearAll (){
let a = '0';
let b = '0';
let sing = '0';
let finish = false;
out.textContent = 0;
}

document.querySelector('.AC').onclick = clearAll;





document.querySelector ('.button').onclick = (event) =>{
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('AC')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (numbers.includes(key)) {
        if (b === ''& sing === ''){
        a += key;
       out.textContent = a;
    }
        if (a!=='' && b!=='' && finish){
        b = key;
        finish - false;
        out.textContent = b;
    }
        else{
        b +=key;
        out.textContent = b;
        }
        console.log(a,b, sing);
        return;
    }

    if(sings.includes(key)){
        sing = key;
        out.textContent = sing;
        console.log(a ,b , sing);
        return;
    }

    if (key === '='){
    
        switch (sing){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a*b;
                break;
            case "/":
                if (b=== '0') {
                    out.textContent = 'нельзя';
                    a= '';
                    b= '';
                    sing = '';
                    return;
                }
                a = a/b;
                break;

        }
        finish = true;
        out.textContent = a ;
        console.table( a , b , sing);


    }

}
*/

