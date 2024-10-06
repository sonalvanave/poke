import data from "./data.json";
// DOM Targeting
const cardsRow=document.querySelector("#cards-row");
const inputEl = document.querySelector("input");

// const paragraph=document.createElement("p");
// paragraph.textContent="our class";
// cardsRow.appendChild(paragraph);

for(let pokemanObj of data){
const div = document.createElement("div");
div.classList.add("col");
div.innerHTML=`
<div class="card">
      <img src="${pokemanObj.image}"
       class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${pokemanObj.name}</h5>
        <p class="card-text">
          ${pokemanObj.description}
      </div>
    </div>`;
    cardsRow.appendChild(div);

}

//console.log(cardsRow);
//for(let pokemanObj of data){
  //  console.log(pokemanObj.name);
//}
//focus input on/ keypress
document.addEventListener("keypress",function(event){
  if(event.key=== "/"){
    //dont'input
    event.preventDefault();
    inputEl.focus();
  }
});
