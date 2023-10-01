
const input = document.querySelector('#input1');
let inputValue = input.value;

let url = `https://api.unsplash.com/photos/random?query=${inputValue}&client_id=TWXd1fXP_v6kh6dc8fIZR0tKpqkyRToOLwwYNLKI8cc&count=30`;

// let url = `https://api.unsplash.com/photos/random?query=${inputValue}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo&count=30`;



console.log(input.value)


const AccessKey = 'TWXd1fXP_v6kh6dc8fIZR0tKpqkyRToOLwwYNLKI8cc'

let data = []

async function getData() {
  const res = await fetch(url);
  let data = await res.json();

  for (let i = 0; i < data.length; i += 1) {
    let pic = data[i].urls.regular;
    let alt_descr = data[i].alt_description;
    let img = document.createElement('img');
    img.classList.add('picture');
    img.src = pic;
    img.alt = `${alt_descr}`;
    pictures.append(img); 
  }
}
getData();



//фокус
document.querySelector("input").focus();
 
// форма
const form = document.querySelector('#form1')

form.onsubmit = function() {
  let value = form.text.value;
  if (value == '') return false; // игнорируем отправку пустой формы

  complete(value);
  return false;
};

function click() {
    console.log('hi');
    inputValue = input.value;
    console.log(inputValue);
    if (inputValue == '') return false; 
    // getData();
  }
  // form.onclick
const submitButton = document.querySelector('#submitButton')
  submitButton.onclick = click();
