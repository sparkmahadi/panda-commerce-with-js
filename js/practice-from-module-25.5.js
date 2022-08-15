const secondHeaders = document.getElementsByTagName('h2');
    for(const secondHeader of secondHeaders){
      secondHeader.style.color = 'lightblue';
    //   secondHeader.style.backgroundColor = 'black';
    }

document.getElementById('backpack').style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
  }

function submitConsole(){
    console.log('Clicked on Submit Button');
}

const buyButtons = document.getElementsByClassName('buy-button-childs');
for(const buyButton of buyButtons){
    buyButton.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
  }

const submitInput = document.getElementById('exampleInputEmail1');
const handler = document.getElementById('handler');
handler.style.display = 'none';


submitInput.addEventListener('keyup', function(event){
    const text = event.target.value;
    if(text === 'email'){
        btnSubmit.removeAttribute('disabled');
    }
    else{
        btnSubmit.setAttribute('disabled', true)
    }
})

const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function(){
    handler.innerText = 'Congratulations!,\n Youve typed email';
    handler.style.display = 'block'
})