function isValid() {
    // Check if the miles driven and gallons used inputs are both filled in.
    const milesDriven = document.getElementById("miles").value;
    const gallonsUsed = document.getElementById("gallons").value;
  
    if (milesDriven === "" || gallonsUsed === "") {
      // Display an error message.
      document.getElementById("miles").placeholder = "Please enter the miles driven.";
      document.getElementById("gallons").placeholder = "Please enter the gallons used.";
      return false;
    }
  
    // Check if the miles driven and gallons used inputs are numbers.
    try {
      Number(milesDriven);
      Number(gallonsUsed);
    } catch (error) {
      // Display an error message.
      document.getElementById("miles").placeholder = "Please enter a valid number for the miles driven.";
      document.getElementById("gallons").placeholder = "Please enter a valid number for the gallons used.";
      return false;
    }
  
    return true;
  }
  
  function main() {
    // Check if the form data is valid.
    if (!isValid()) {
      return;
    }
  
    // Calculate the MPG.
    const milesDriven = document.getElementById("miles").value;
    const gallonsUsed = document.getElementById("gallons").value;
    const mpg = calculateMPG(milesDriven, gallonsUsed);
  
    // Display the results.
    displayResults(mpg);
  }
  
  function displayResults(milesPerGallon) {
    // Display the MPG result in a textbox.
    const mpg = document.getElementById("mpg");
    mpg.value = milesPerGallon;
  }
  
  function calculateMPG(milesDrive, gallonsUsed) {
    // Calculate the MPG.
    const milesPerGallon = milesDrive / gallonsUsed;
  
    // Return the MPG as a number.
    return milesPerGallon;

  }

// Add a click event listener to the Calculate MPG button
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", main);
  
  //TODO: Create a function that Clears all the form textboxes
  
  //TODO: Add a function to Miles Driven and Gallons of gas used to clear out the inputs
  //      They can clear out both textboxes or just the textbox that triggers the double click event
  
  function clearForm() {
    // Clear the values of all the form inputs.
    document.getElementById("miles").value = "";
    document.getElementById("gallons").value = "";
    document.getElementById("mpg").value = "";
  }

  function clearMilesDriven() {
    // Clear the value of the Miles Driven input field.
    document.getElementById("miles").value = "";
}

  function clearGallonsUsed() {
    // Clear the value of the Gallons Used input field.
    document.getElementById("gallons").value = "";
}
