var button =document.getElementsByClassName("button");
var display =document.getElementById("display");
var operator=null;
var operand1=0;
var operand2=null;
for(var i=0; i<button.length; i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value=='+'){
            operator='+';
            operand1=parseFloat(display.textContent);
            display.innerText= null;
        }
        else if(value=='-'){
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

        }
        else if(value=='x'){
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

        }
        else if(value=='/'){
            operator='/';
            operand1=parseFloat(display.textContent);
            display.innerText=null;

        }
        else if(value=='AC'){
            operator=null
            operand1=0
            display.innerText=null;
            operand2=null
        }
        else if(value=='C'){
            display.innerText= parseInt(display.innerText/10);
        }


        else if(value=='='){
            operand2=parseFloat(display.textContent);
            display.innerText=eval(operand1+""+operator+""+operand2);
        }
         else{
            display.innerText += value;
        }
     });
}
