const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    if (color === 'grey'){
      body.style.backgroundColor = color;
    }else if(color === 'white'){
      body.style.backgroundColor = color;
    }else if(color === 'blue'){
      body.style.backgroundColor = color;
    }else if(color === 'yellow'){
      body.style.backgroundColor = color;
    }else{
      alert("This is not a valid entry");
    }
  });
});
