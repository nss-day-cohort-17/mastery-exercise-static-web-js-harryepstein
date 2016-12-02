/*EXAMPLE OBJECT*/
let treeObject = {
height: 5,
character: "*",
}


// function buildObject(){


// When the button is clicked or the return key is pressed create the input object and call buildAtree function which prints tree design to console

var button = document.getElementById('grow-button')

button.addEventListener('click', function (mouseEvt){
  console.log(mouseEvt)
  console.log("you clicked grow")

})

let input = document.getElementById("tree-height");

input.addEventListener('keypress', function (keyboardEvt) {
  console.log(keyboardEvt)
  if(keyboardEvt.key ==='Enter')
    console.log("you pressed enter")

    buildAtree(treeObject);
})


function buildAtree (object){
  for (let i = ""; i <= object.height; i += object.character)//for the height of the object increment i each time by the character in the objec
  {
    if (i.length % 3 ===0)
      console.log("Hello I am in the for loop, help me!")
      console.log(i)//if i is odd, output i which should be the same number of character of the line number, which should form the correct tree structure, 1, 3, 5, 7, 9, 11
  }
  console.log(" ***** \n ***** \n *****\n *****\n *****\n *****\n *****\n" )//every tree needs a trunk
}

buildAtree(treeObject);
