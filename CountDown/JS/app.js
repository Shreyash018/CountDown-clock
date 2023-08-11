

//  const endDate = " 20 AUG 2023 12:00 AM "
//  document.getElementById("end-Date").innerText = endDate;
//
//  const inputs = document.querySelectorAll("input");
// function clock(){
//   const end = new Date(endDate);
//   const now = new Date();
//   const diff = (end - now ) /1000;
//   console.log(diff);
//   inputs[0].value = Math.floor(diff/3600/24);
//
// }
//
// clock()

const endDate = "Aug 20, 2023 00:00:00";
const endElement = document.getElementById("end-Date");
endElement.innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end - now;
  inputs[0].value = Math.floor(diff / (1000 * 60 * 60 * 24));
  inputs[1].value = Math.floor(diff /60 * 60) % 24 ;
  inputs[2].value = Math.floor(diff /60 ) % 60 ;
  inputs[3].value = Math.floor(diff) % 60 ;


}

clock();

setInterval (
  ()=> {
    clock()
  }, 1000
)
