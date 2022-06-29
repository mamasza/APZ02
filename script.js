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
let slideNr = 1;
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
  const image = data[slideNr].src
  const imageDOM = document.querySelector("img")
  imageDOM.src="img/"+image
  image.src = data[slideNr].src;
  const h2 = document.querySelector('h2')
  h2.innerText = data[slideNr].title;

}
/*
const lewa = document.querySelector('.leftArr')
lewa.onclick = function(){
  console.log(slideNr)
    slideNr--;
    changeHTMLInfo(slideNr);
    console.log(slideNr)
    if slideNr == 0 {slideNr = 2}
//prawa
const prawa = document.querySelector('.rightArr')
prawa.onclick = function(){
  console.log(slideNr)
  slideNr++;
  changeHTMLInfo(slideNr);
  console.log(slideNr)
}
*/
//
//
//
// ustaw zmienną sterującą globalnie slajdami
let currSlide = 1;

changeHTMLInfo(currSlide)

const leftArr = document.querySelector(".leftArr")

leftArr.onclick = function(){
  changeSlide( "left" )
}
const rightArr = document.querySelector(".rightArr")

leftArr.onclick = function(){
  changeSlide( "right" )
}


function changeSlide( direction ){
  
  if( direction == "left" ){ currSlide--}
  else{ currSlide++}

  if(currSlide < 0){
    currSlide = 2
  }
  if(currSlide > 2){
    currSlide = 0
  }

  changeHTMLInfo(currSlide)
}