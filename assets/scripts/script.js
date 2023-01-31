//input 
const inputArr = inputObjArr.map((ele)=> 
{
    return getInputType(ele);
});

const inputDiv = document.getElementById("inputDiv");

inputArr.forEach((inputTag)=>
{
    inputDiv.appendChild(inputTag);
});

//button
const button = document.createElement("button");
button.id = "saveBtn";
button.innerText = "save";
inputDiv.appendChild(button);

//table

const tableDiv = document.getElementById("tableDiv");
const table = createTable();
tableDiv.appendChild(table);

button.addEventListener("click", addDataInTable);

