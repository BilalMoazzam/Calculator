let string="";
let buttons= document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click',(e) => {
    const value = e.target.innerHTML?.trim()
       console.log('string',value)
    if(value == '='){
      string = eval(string);
   } else if(value == 'AC'){
      string = '';
   }
    else{
      string = string + value
    }
      document.querySelector('input').value = string;
    
  })
})