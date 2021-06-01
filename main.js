let inputtext = document.querySelector("#input-text");
let butonClick = document.querySelector("#clicked")
let outputText = document.querySelector('#output-text')

let url = "https://api.funtranslations.com/translate/minion.json";


function translate(){
  console.log(inputtext.value)

  fetch(`${url}?text=${inputtext.value}`)
    .then((responce) => responce.json())
    .then((data) => {
      outputText.innerHTML = data.contents.translated
    })
    .catch(err=>console.log(err.message))
}

butonClick.addEventListener("click", translate);

