/*EXAMPLE OBJECT*/
let treeObject = {
height: 0,
character: "*",
}


// function buildObject(){


// When the button is clicked or the return key is pressed create the input object and call buildAtree function which prints tree design to console

var button = document.getElementById('grow-button')

button.addEventListener('click', function (mouseEvt){
  console.log(mouseEvt)

//   object.character = input.addEventListener('x', function(){

//   })
//   object.height = input.addEventListener('return', function(){ //ASSIGN THE VALUE IN THE INPUT FIELD TO THE OBJECT.HEIGHT FIELD


// })
// })
})

let input = document.getElementById("tree-height");

input.addEventListener('keypress', function (keyboardEvt) {
  console.log(keyboardEvt)
  if(keyboardEvt.key ==='enter')
    buildAtree(treeObject);
})




function buildAtree (object){

  for (let i = 0; i < object.height; i += object.character)//for the height of the object increment i each time by the character in the objec
  {
  if (i % 3 ===0)
    console.log(i)//if i is odd, output i which should be the same number of character of the line number, which should form the correct tree structure
}

}
