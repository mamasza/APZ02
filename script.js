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
// wywołaj domyślny slajd (wrzuć info do HTML)
changeHTMLInfo(currSlide)

// do stałej leftArr przypisujemy klasę "leftArr" z dokumentu HTML
const leftArr = document.querySelector(".leftArr")
// obsługujemy kliknięcie w element .leftArr
leftArr.onclick = function(){
  // wywołujemy zmianę slajdu z parametrem left
  changeSlide( "left" )
}

// ANALOGICZNIE: 
document.querySelector(".rightArr").onclick = () => {
  changeSlide( "right" )
}

// blok kodu zmieniający slajd w zależności od kierunku (left / right)
// zmienia numer slajdu
function changeSlide( direction ){
  // sprawdź, czy kierunek jest "left"
  if( direction == "left" ){
    // zmniejsz licznik slajdu o 1 (przełącz na slajd po lewej stronie)
    currSlide--
  }else{ // jeśli nie
    // zwiększ licznik slajdu o 1 (przełącz na slajd po prawej stronie)
    currSlide++
  }

  // blokujemy wyświetlanie slajdów które nie istnieją (-1 itd.. )
  // jeśli slajdy w lewo się skończyły - włącz skrajny prawy
  if(currSlide < 0){
    // włącz ostatni slajd po prawej stonie
    currSlide = 2
  }

  // ANALOGICZNIE
  if(currSlide > 2){
    currSlide = 0
  }

  // wywołaj funkcję zmieniającą info w HTML z nowym numerem slajdu
  changeHTMLInfo(currSlide)
}