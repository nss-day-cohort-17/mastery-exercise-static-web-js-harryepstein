/*EXAMPLE OBJECT*/
let treeObject = {
height: 20,
character: "*",
}


// function buildObject() NEED AN OBJECT CONSTRUCTOR


// When the button is clicked or the return key is pressed create the input object and call buildAtree function which prints tree design to console

var button = document.getElementById('grow-button')

button.addEventListener('click', function (mouseEvt){//deine input by getting element
  console.log(mouseEvt);
  console.log("you clicked grow");//grow baby, grow!

  buildAtree(treeObject);//create tree
})

//when a return is pressed inside the input field, run the buildAtree function

let input = document.getElementById("tree-height");//deine input by getting element

input.addEventListener('keypress', function (keyboardEvt) {
  console.log(keyboardEvt)
  if(keyboardEvt.key ==='Enter')
    console.log("you pressed enter")//grow baby, grow!

    buildAtree(treeObject);//create tree
})


function buildAtree (object){
  let tree = "";
  for (let i = ""; i.length <= object.height; i += object.character)//for the height of the object increment i each time by the character in the objec
  {
    if (i.length % 3 ===0){
      tree += i;
    }  //if i is odd, output i which should be the same number of character of the line number, which should form the correct tree structure, 1, 3, 5, 7, 9, 11
  }
  i += "***** \n ***** \n *****\n *****\n *****\n *****\n *****\n";
  console.log(tree) //every tree needs a trunk
}

buildAtree(treeObject);//CALL THE FUNCTION
