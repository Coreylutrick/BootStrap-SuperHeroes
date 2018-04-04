const PrintToDom = (domString, divId) => 
{
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (heroArray) => 
{
  let domString = ""
  heroArray.forEach((superheroes) =>
  {
    domString += `<div class="col-md-3">`
    domString +=  `<div class="panel">`
    domString +=    `<div class="panel-heading">`
    domString +=      `<h3 class="panel-title">${superheroes.name}</h3>`
    domString +=    `</div>`
    domString +=    `<div class="panel-body">`
    if(superheroes.gender === "Male")
    {
    domString +=      `<img class="heroImg male" src="${superheroes.image}"<br>`
    } else 
    {
    domString +=      `<img class="heroImg female" src="${superheroes.image}"<br>`
    }
    domString +=      `<p class="heroDesc">${superheroes.description}</p>`
    domString +=    `</div>`
    domString +=  `</div>`
    domString += `</div>`
  });
  PrintToDom(domString, "hero-holder")
};

function executeThisCodeAfterFileLoaded () 
{
  const data = JSON.parse(this.responseText);
  buildDomString(data.superheroes);
}


function executeThisCodeIfXHRFails () 
{
  console.log("something went wrong");
}


const startApp = () => 
{
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("get", "../db/superheroes.json");
  myRequest.send();
};



startApp();