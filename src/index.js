document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('submit', () => {
    //Creating the new list item
    const newListElement = document.createElement("li"); 
    const newTaskInfo = document.querySelector("#new-task-description").value;
    newListElement.textContent = `${newTaskInfo} `;
    newListElement.className = document.getElementById('priority-level').value;

    //Coloring the text of the task
    if (newListElement.className === 'Low'){
      newListElement.style.color = "green";
    } else if (newListElement.className === 'Medium'){
      newListElement.style.color = "orange";
    } else {
      newListElement.style.color = "red";
    }
    
    //Task button to remove
    const newButton = document.createElement("button");
    newButton.textContent = "x";
    newListElement.append(newButton); //Puts button inside a li element
    newButton.addEventListener('click', () => newListElement.remove()); //Removes task 

    //Puts li element inside ul
    document.querySelector('#tasks').append(newListElement); 
    event.preventDefault();
  });

  //Creating the priority list
  const newSelect = document.createElement("select");
  newSelect.id = "priority-level";
  
  const newOptgroup = document.createElement("optgroup");
  newOptgroup.label = "Priority";

  const newOptionLow = document.createElement("option");
  newOptionLow.value = "Low";
  newOptionLow.textContent = "Low";

  const newOptionMedium = document.createElement("option");
  newOptionMedium.value = "Medium";
  newOptionMedium.textContent = "Medium";

  const newOptionHigh = document.createElement("option");
  newOptionHigh.value = "High";
  newOptionHigh.textContent = "High";

  newOptgroup.append(newOptionLow, newOptionMedium, newOptionHigh);
  newSelect.append(newOptgroup);
  document.querySelector("#new-task-description").after(newSelect);
});
