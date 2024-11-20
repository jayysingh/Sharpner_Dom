// Write the code as shown in the video below:
const x = document.querySelector('#main-heading');
x.style.textAlign = 'right';

const y = document.querySelector('.fruits');
y.style.backgroundColor = ('grey');

y.style.padding =('30px');
y.style.margin =('30px');

y.style.width = '50%';
y.style.borderRadius = '5px';
y.style.listStyleType = 'none';

const basket = document.querySelector('h2');
basket.style.marginLeft ='30px';

const fruititem = document.querySelectorAll('.fruit');
for(let i=0;i<fruititem.length;i++){
  if(i%2===0){
    fruititem[i].style.backgroundColor = 'white';
    fruititem[i].style.textcolor="Bla"
  }else{
        fruititem[i].style.backgroundColor ='brown';
    fruititem[i].style.color="white";
}
 fruititem[i].style.padding =('10px');
fruititem[i].style.margin =('10px');
  fruititem[i].style.borderRadius =('5px');

  
}

const l = document.querySelector('h2');
l.style.color = "brown";

