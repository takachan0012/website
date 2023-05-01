//Fetch Post From Medium
function getStoryMedium(){
fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@takachan0012')
.then(resp => resp.json())
.then(blogs => {
  console.log(blogs.items)
  for(i=0; i<blogs.items.length-1; i++){
    let containerBlog = document.getElementById("container-blog");
let cardGroup = document.createElement("div");
//Create cardGroup
cardGroup.setAttribute("class","card-group");
cardGroup.setAttribute("style","max-width: 95%");
addClassList(cardGroup,["mt-3"]);
//Create card
let card = document.createElement("div");
card.setAttribute("class","card");
//Create img
let img = document.createElement("img");
img.setAttribute("class","card-img-top");
addClassList(img,["img-thumbnail"]);
img.setAttribute("src",blogs.items[i].thumbnail);
//create card-body
let cardBody = document.createElement("div");
cardBody.setAttribute("class","card-body");
addClassList(cardBody,["bg-secondary"]);
//create titleCard
let cardTitle = document.createElement("h5");
cardTitle.setAttribute("class","card-title");
cardTitle.innerHTML = blogs.items[i].title;
//create paragraf description
// let p = document.createElement("p");
// p.setAttribute("class","card-text");
// p.innerHTML = blogs.items[i].description; 
//create Link
let link_A = document.createElement("a");
             link_A.setAttribute("href",blogs.items[i].link);
             link_A.setAttribute("class","btn");
             link_A.innerHTML = "Visit";
             addClassList(link_A,["btn-dark","rounded-0"]);
//create cardFooter
let cardFooter = document.createElement("div");
cardFooter.setAttribute("class","card-footer");
//addClassList(cardFooter,["bg-secondary","text-white"]);
let smallFooter = document.createElement("small");
smallFooter.setAttribute("class","text-muted");
smallFooter.innerHTML = `Updated ${blogs.items[i].pubDate}`;
cardFooter.appendChild(smallFooter);


cardBody.appendChild(cardTitle);
//cardBody.appendChild(p);
card.appendChild(img);
card.appendChild(cardBody);
card.appendChild(link_A);
card.appendChild(cardFooter);
cardGroup.appendChild(card);
console.log(cardGroup)
containerBlog.appendChild(cardGroup);
  }
  
})
.catch(e => {
  alert(e);
  document.getElementsByClassName("fs-1")[0].innerHTML = `${e} please Reloading!`; 
  });
}
getStoryMedium();
function addClassList(el,list){
  for(key of list){
    el.classList.add(key);
  }
}