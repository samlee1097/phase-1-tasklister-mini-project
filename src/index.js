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
  
  const newOptionLow = document.createElement("option");
  newOptionLow.value = "Low";
  newOptionLow.textContent = "Low";

  const newOptionMedium = document.createElement("option");
  newOptionMedium.value = "Medium";
  newOptionMedium.textContent = "Medium";

  const newOptionHigh = document.createElement("option");
  newOptionHigh.value = "High";
  newOptionHigh.textContent = "High";

  newSelect.append(newOptionLow, newOptionMedium, newOptionHigh);
  document.querySelector("#new-task-description").after(newSelect);


  let timeArray = ["12:00AM"];
  for (let j = 1; j < 12; j++){
    timeArray.push(`${j}:00AM`);
  };

  let finalTime = timeArray.concat(timeArray.map(x=>`${x.slice(0,-2)}PM`)).slice(5);


  const timeStart = document.createElement("select");
  const timeEnd = document.createElement("select");
  timeStart.id = "time-start";
  timeEnd.id = "time-end";
  document.querySelector("#list").before(timeStart);
  document.querySelector("#list").before(timeEnd);

  //Creating time table 
  finalTime.forEach(function(time) {
    const hourBlock = document.createElement("tr");
    const hourBlockText = document.createElement("td");
    hourBlock.id = `${time}`;
    hourBlockText.textContent = `${time}`;
    hourBlock.append(hourBlockText);
    document.querySelector('#last-line').before(hourBlock);

    //Creating the start time-selector list
    const newStartOption = document.createElement("option");
    newStartOption.value = `${time}`;
    newStartOption.textContent = `${time}`;
    timeStart.append(newStartOption);

    //Creating the end time-selector list
    const newEndOption = document.createElement("option");
    newEndOption.value = `${time}`;
    newEndOption.textContent = `${time}`;
    timeEnd.append(newEndOption);
  });
});