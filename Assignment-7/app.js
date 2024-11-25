// const form = document.querySelector('form');
// const ul = document.querySelector('.fruits');

// // onclicking on add button data present in input will be stored in li with two button (delete and edit) embeded and then it will be appended in parent ul

// form.addEventListener('submit', function(event){
//   event.preventDefault();
  

// // create a li element 

// const li = document.createElement('li');

// //fetch value from input
// const liText = document.querySelector('#fruit-to-add').value;

// // put value in li tag    add a "delete button "   and   an "edit button"
//   li.innerHTML = liText+ '<button class="delete-btn" >x</button> <button class="edit-btn" >Edit</button>';

//   //--------------
  
// // const liText = document.createTextNode('lichi');
// // const liText = document.querySelector('#fruit-to-add');
// // li.append(liText.value);

// // li.className = 'fruit';
// // //delete btn

// // const deletebtn = document.createElement('button');
// // const buttonText = document.createTextNode('x');
// // deletebtn.appendChild(buttonText);
// // deletebtn.className = 'delete-btn';

// // //edit Button
// // const editBtn = document.createElement('button');
// // const editBtnText = document.createTextNode('Edit');
// // editBtn.appendChild(editBtnText);
// // editBtn.className = 'edit-btn';



// // // append delete btn
// //   li.appendChild(deletebtn);


// // //append edit btn
// // li.appendChild(editBtn);

// // // console.log(editBtn);


// // console.log(li);
// //---------------------------

// //put li element inside ul tag
//   ul.appendChild(li);
// })

// // To attach a event listener on delete button we need to apply event listener over whole ul element
// ul.addEventListener('click', function(event){
//   if(event.target.classList.contains('delete-btn')){         //target the delete button 
//     const fruitToDelete = event.target.parentElement;         //target the parent li element 
//         console.log(fruitToDelete);                           // to check what are you deleting (this line is not required)
//     ul.removeChild(fruitToDelete);                              // now since we have selected our target element now we will remove it from ul 

//   }
// });


// const input = document.querySelector('#fruit-to-add');

// // operation on edit button similar as delete element

// ul.addEventListener('click',function(event){                           // To attach a event listener on delete button we need to apply event listener over whole ul element
//  if(event.target.classList.contains('edit-btn')){                      //target the edit button 
//    const fruitToEdit = event.target.parentElement;                    // target the parent li element 
//    const fruitName = fruitToEdit.firstChild.textContent.trim();      // extract the value of li element and store in a variable
//    ul.removeChild(fruitToEdit);                                      // remove the target li element from the ul
//     input.value = fruitName;                                           //store or put hre extracted values in input
   
//  }
// })
//                                  ---------------------------------



// Select the form element and the unordered list (ul) element
const form = document.querySelector('form');
const ul = document.querySelector('.fruits');

// Add an event listener to the form to handle the submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Create a new li (list item) element
  const li = document.createElement('li');

  // Fetch the value entered in the input field with id "fruit-to-add"
  const liText = document.querySelector('#fruit-to-add').value;

  // Populate the li element with the input value, a delete button, and an edit button
  li.innerHTML = liText + '<button class="delete-btn">x</button> <button class="edit-btn">Edit</button>';

  // Append the newly created li element into the ul (fruits list)
  ul.appendChild(li);
});

// Attach an event listener to the ul for handling click events on delete buttons
ul.addEventListener('click', function(event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains('delete-btn')) {
    // Identify the parent li element of the clicked delete button
    const fruitToDelete = event.target.parentElement;

    // Log the element to be deleted (for debugging purposes, this line is optional)
    console.log(fruitToDelete);

    // Remove the li element (the fruit) from the ul
    ul.removeChild(fruitToDelete);
  }
});

// Select the input field where fruits are entered
const input = document.querySelector('#fruit-to-add');

// Attach an event listener to the ul for handling click events on edit buttons
ul.addEventListener('click', function(event) {
  // Check if the clicked element is an edit button
  if (event.target.classList.contains('edit-btn')) {
    // Identify the parent li element of the clicked edit button
    const fruitToEdit = event.target.parentElement;

    // Extract the current fruit name from the li element
    const fruitName = fruitToEdit.firstChild.textContent.trim();

    // Remove the li element (the fruit) from the ul to allow editing
    ul.removeChild(fruitToEdit);

    // Set the extracted fruit name in the input field for editing
    input.value = fruitName;
  }
});
