function getInputType(object)
{
    const { key , type , id } = object;

    // console.log(key ,type, id);
    let input = null;

    switch(type)
    {
        case NUMBER:
        case STRING:
        case DATE:
            input = document.createElement('input');
            input.type = type;
            input.name= key;
            input.id = id;
            
            break;
        case BOOLEAN:

            input = document.createElement('select');
            input.name = key;
            input.id  = id;

            const choice = 
            {
                option1 : "true",
                option2 : "false"
            }

            for (let idx of Object.keys(choice))
            {
                let choosen = document.createElement("option");
                choosen.value = choice[idx];
                choosen.text = choosen.value;
                input.append(choosen);
            }

            break;
    }

const inputTagDiv  = document.createElement("div");
    //label 
    if (input)
    {
        const inputlabel = document.createElement("label");
    
        inputlabel.setAttribute("for",id);
        inputlabel.innerText = key;
        inputTagDiv.append(inputlabel);
        inputTagDiv.append(input);
    }

    return inputTagDiv;
}

function createTable()
{
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    for (let {key} of inputObjArr)
    {
        const th = document.createElement("th");
        th.textContent = key;
        thead.appendChild(th);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

function getDataFromInput()
{
    const data = [];
    for (let {id, type} of inputObjArr)
    {
        const tag = document.getElementById(`${id}`);
        if (type == BOOLEAN){
            let choice = document.getElementById(`${id}`);
            data.push(choice.value);
            choice.val = '';
        }
        else
        {
            if (tag.value)
            {
                data.push(tag.value);
                tag.value = '';
            }
        }
    }
    return data;
}

function addDataInTable()
{
     const data = getDataFromInput();
        // console.log(data);
        const  dataSize = data.length;
        const inputSize = inputObjArr.length;
        if (dataSize != inputSize)
        {
            alert("Pura bhar na bhai");
        }
        else
        {
            if(confirm("do you wanna add the data to the table"))
            {
                const entry = document.querySelector("#tableDiv table tbody");
                const tr = document.createElement("tr");
                
                for (let idx of data)
                {
                    const td = document.createElement("td");
                    td.innerText =idx;
                    tr.appendChild(td);
                }
                entry.append(tr);
            }
        }
}