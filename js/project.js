let content = {
  project:{
    test1: {
      title: "stopwatch",
      description: "stopwatch with feature calculation of difference time between previous time and current time taken",
      link:"https://mitsuya-creator.github.io/website/project/stopwatch/"
    }
  }
}
function addClassList(el,list){
  for(key of list){
    el.classList.add(key);
  }
}
//PAGE PROJECT
function objBystring(o, s) {
  let card;
        if (s in o) {
              for(key in o[s]){
              let resultSubkey = [];

             for(subkey in o[s][key]){
               resultSubkey.push(o[s][key][subkey])
             }
             let projectBody = document.getElementById("container-project");
             let carD = document.createElement("div");
             carD.setAttribute("style","max-width: 95%;");
             carD.setAttribute("class","card")
             addClassList(carD,["text-white","bg-secondary","mt-3"]);
             
             projectBody.appendChild(carD);
             let cards = document.createElement("div");
             cards.setAttribute("id",resultSubkey[0]);
             cards.setAttribute("class","card-header");
             cards.innerHTML = "Featured";
             carD.appendChild(cards);
             
             let cardsBody = document.createElement("div");
             cardsBody.setAttribute("class","card-body");
             
             let cardTitle = document.createElement("h5");
             cardTitle.setAttribute("class","card-title");
             cardTitle.innerHTML = resultSubkey[0];
             cardsBody.appendChild(cardTitle);
             
             let paragrap = document.createElement("p");
             paragrap.setAttribute("class","card-text");
             paragrap.innerHTML = resultSubkey[1];
             cardsBody.appendChild(paragrap);
             let link_A = document.createElement("a");
             link_A.setAttribute("href",resultSubkey[2]);
             link_A.setAttribute("class","btn");
             //Set Not Found Alert
             link_A.setAttribute("onclick","alert('Progressing..')");
             link_A.innerHTML = "Go";
             addClassList(link_A,["btn-dark"]);
             cardsBody.appendChild(link_A);
             
             carD.appendChild(cardsBody);
              }
            }
        else {
            alert("Projects are not Found");
            return;
        }
}
objBystring(content, 'project');