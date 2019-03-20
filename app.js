function onReady() {
   let id = 0;
   const toDos = []; //Our state is going to be an array of to-dos.
   const addToDoForm = document.getElementById('addToDoForm');
 function createNewToDo() { //  update our array of to-dos
   const newToDoText = document.getElementById('newToDoText'); //access the text input, so that we can get the text for the title of each to-do.
 if (!newToDoText.value) { return; } //prevents empty to do

   toDos.push({ //add the new to-do to the toDos array using the push() method.
         title: newToDoText.value,// assign the value of the text input, newToDoText to the title key
         complete: false,
         id: id++,
   });
   newToDoText.value = ''; //clear the text input for the user.

    renderTheUI();//this is called everytime the state changes
  }
  function renderTheUI() { //will take our current state (the toDos array) and render the UI.
      const toDoList = document.getElementById('toDoList'); // to access the <ul> in the HTML.
      toDoList.textContent = '';
    toDos.forEach(function(toDo) { //Using forEach is how we'll render each to-do as a li in the ul.
      const newLi = document.createElement('li'); //next 3 lines are for checkbox
      const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title; //todos title duh

    toDoList.appendChild(newLi); // the DOM
      newLi.appendChild(checkbox);

    });
    delteToDos.forEach(function( ) { //Using forEach is how we'll render each to-do as a li in the ul.
      const deleteBox = document.createElement('delete');
    deleteBox.type = "delete";

    newLi.textContent = toDo.title; //todos title duh

    toDoList.appendChild(newLi); // the DOM
      newLi.appendChild(deleteBox);

    });
}
  addToDoForm.addEventListener('submit', event => { // event listener, using the submit event of the form element.
    event.preventDefault();//prevent the page from reloading.
    createNewToDo();//call the createNewToDo() function we just created.
    deleteToDo();
  });
  renderTheUI(); //render the UI based on the current state.
}
//calls on Ready
window.onload = function() {
  onReady();
};
