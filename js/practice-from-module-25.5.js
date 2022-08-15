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
/* ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।  */

const dynamicImg = document.getElementById('dynamic-img');

dynamicImg.addEventListener('mouseenter', function(event){
    event.target.src = 'images/categories/shoes.png'
})

dynamicImg.addEventListener('mouseleave', function(event){
    event.target.src = 'images/categories/bag.png'
})

dynamicImg.addEventListener('dblclick', function(event){
    event.target.src = 'images/categories/watch.png'
})


/* ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।  */

const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function(event){
    if(event.target !== event.currentTarget){
        // for doing nothing
    }
    else{
        subscribe.style.backgroundColor = 'tomato';
    }
})

subscribe.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = 'white';
})