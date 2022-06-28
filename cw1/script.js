/*
const zdjecia = ["", "Ewa", "Maria"];  // tablica (array) stringów 
	const views = [ 		// tablica obiektów
      {
        "src" : "1.jpg",
        "name" : " Pierwszy "
      },
      {
        "src" : "2.jpg",
        "name" : " Drugi "
      }
    ];
*/
const data = [
  {
    title: "pink lake",
    src:  "1.webp",
  },
  {
    title: "single island",
    src:  "2.webp",
  },
  {
    title: "forest lake",
    src:  "3.webp",
  },
]
console.log(data)
/*
const photo = document.querySelector("img")
photo.src="1.webp"

*/

function changeHTMLInfo (slideNr){
  const title = data[slideNr].title 
  const titleDOM =document.querySelector("h2") 
  titleDOM.innerHTML=title

  console.log(data[slideNr].title,data[slideNr].src);
  const picture = document.querySelector('.picture')
  picture.src = data[slideNr].src;
  const h2 = document.querySelector('h2')
  h2.innerText = data[slideNr].title;

}
const lewa = document.querySelector('.lefftArr')
lewa.onclick = function(){
    console.log("click")
    slideNr = slideNr-1;
    changeHTMLinfo(slideNr);
}

const prawa = document.querySelector('.rightArr')
prawa.onclick = function(){
    console.log("click");
    slideNr = slideNr+1;
    changeHTMLinfo(slideNr);
}