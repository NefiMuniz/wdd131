// Select the necessary elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const chapterList = document.querySelector('#list');

// Add a click event listener to the Add Chapter button
button.addEventListener('click', function() {
    const inputValue = input.value.trim();  // Get and trim the input value

    // Check if the input field is completely blank
    if (inputValue === "") {
        alert("Enter the book name and the chapter.");
        input.value = "";
        input.focus();  // Return focus to the input field
        return;
    }

    // Check if the input contains both text and numbers
    const hasText = /[a-zA-Z]/.test(inputValue);  // Check for letters
    const hasNumbers = /\d/.test(inputValue);  // Check for numbers

    if (!hasText) {
        alert("Please enter the book name.");
        input.value = "";
        input.focus();
        return;
    }

    if (!hasNumbers) {
        alert("Please enter the chapter.");
        input.value = "";
        input.focus();
        return;
    }

    // If input is valid, create a new li element
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set the li text to the input value and the delete button's text
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Append the delete button to the li
    li.appendChild(deleteButton);

    // Append the li element to the ul
    chapterList.appendChild(li);

    input.value = "";
    input.focus();

    // Add an event listener to the delete button to remove the li when clicked
    deleteButton.addEventListener('click', function() {
        chapterList.removeChild(li);  // Remove the li from the ul
        input.value = "";
        input.focus();
    });

});
