var ListService = [
    {id:1,Company: "Honda", Service:"Provide Service for Honda Motor", Contact: "Nakayama", Phonenumber:"089-2232-1213"},
    {id:2,Company: "Toyota", Service:"Provide Service for Toyota Motor", Contact: "Nakano", Phonenumber:"089-3322-4455"},
    {id:3,Company: "Ford", Service:"Provide Service for Ford Motor", Contact: "Jack", Phonenumber:"089-7788-9900"}
];

function LoadTable()
{
    

    let listButton =
    [
        {button:"Edit"},
        {button:"Remove"},
    ];

    // GenerateTable Function
    function generateTableHead(table, data)
    {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
    
    // Generate Data
    function GenerateTable(table,data)
    {   let n = 0;
        for (let element of data) {
            n++;
            let row = table.insertRow();
            row.id = n;
            for (key in element) 
            {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
            }
            listButton.forEach(element => {
                
                let cellButton = row.insertCell();
                let button = document.createElement('input');
                button.type = "button";
                button.value = element.button;
                button.id = element.button + n;
                if(element.button == "Remove")
                {
                    button.onclick = function(){Remove(row.id)};
                }
                else if(element.button == "Edit")
                {
                    button.onclick = function(){Update(row.id)};
                }
                cellButton.appendChild(button);
            });
        }        
    }

    
    
   // Create table
   let table = document.getElementById("MotorService");
   let Header = Object.keys(ListService[0]);
   generateTableHead(table,Header);
   GenerateTable(table,ListService);
}

function Remove(rowId)
    {
        let row = document.getElementById(rowId);
        // Remove row
        row.parentNode.removeChild(row);
        let key = rowId;
        ListService.splice(ListService.findIndex(({id}) => id == key),1);
        console.log(ListService);
    }
    
    
    
    function Update(rowId)
    {
        let row = document.getElementById(rowId);
        let key = rowId;
        let tableColumn = row.querySelectorAll("td");
        for(let i = 0; i < tableColumn.length; i++)
        {
            const td = tableColumn[i]
            const text = td.lastChild.textContent; 
            const input = document.createElement('input');
            input.size = Math.max(text.length / 4 * 4, 4);
            input.value = text;
            if(td.firstChild.type == "button")
            {
                if(td.firstChild.value == "Edit" && !document.getElementById("Save" + rowId))
                {
                    const Savebutton = document.createElement("input");
                    Savebutton.type = 'button';
                    Savebutton.value = "Save";
                    Savebutton.id = "Save" + rowId;
                    Savebutton.onclick = function(){Save(rowId)};
                    td.appendChild(Savebutton);
                    document.getElementById("Edit" + rowId).hidden = true;
                }
                continue;
            }
            document.getElementById("Edit" + rowId).hidden = true;
            if(document.getElementById("Save" + rowId))
            {
                document.getElementById("Save" + rowId).hidden = false;
            }
            input.id = "Input" + key.toString() + i.toString();
            input.type = 'text';
            td.innerHTML = ' ';             
            td.appendChild(input);
        }
    }

    function Save(rowId)
    {
        const row =  document.getElementById(rowId); 
        const tdList = row.querySelectorAll("td");
        let key = rowId;
        const edit = [];
        // inside your for loop
        for (let index = 0; index < tdList.length-2; index++) 
        {
            console.log("Input" + key.toString() +index.toString());
            let element = document.getElementById("Input" + key.toString() +(index).toString());
            if (!element) {
               console.warn('no element with id ' + "Input" + key.toString() +(index).toString());
               continue;
            }
            edit[index] = element.value;
            if (edit[index] == "") {
              alert("You must not keep textboxes empty");
              var empty = true;
            }
        }
        
           if (!empty) {
            for (let index = 0; index < tdList.length-2; index++) {
                tdList[index].removeChild(tdList[index].children[0]);
                var text = document.createTextNode(edit[index]);
                tdList[index].appendChild(text);
                let index2 = ListService.findIndex(item => item.id === parseInt(key));
                switch (index) {
                    case 0:
                        ListService[index2].id = parseInt(edit[index]);
                        break;
                    case 1:
                        ListService[index2].Company = edit[index];
                        break;
                    case 2:
                        ListService[index2].Service = edit[index];
                        break;
                    case 3:
                        ListService[index2].Contact = edit[index];
                        break;
                    case 4:
                        ListService[index2].Phonenumber = edit[index];
                        break;
                    default:
                        break;
                }  
            }
            console.log(ListService);
            document.getElementById("Edit" + rowId).hidden = false;
            document.getElementById("Save" + rowId).hidden = true;
        }
        
    }

///追加
function Addrow()
{
    let listButton =
    [
        "Edit",
        "Remove",
    ];
        let table = document.getElementById("MotorService");
        let row = table.querySelectorAll("tr");
        let rowlenght = row.length;
        let sampleData = [row.length,"", "",  "", ""];
        let insertrow = table.insertRow(rowlenght);
        insertrow.id = rowlenght;
        for (let i = 0; i < sampleData.length ; i++) {
            let cell = insertrow.insertCell();
            let text = document.createTextNode(sampleData[i]);
            cell.appendChild(text); 
        }
        for(let i = 0; i < listButton.length; i++)
        {
            let cellButton = insertrow.insertCell();
            let button = document.createElement('input');
            button.type = "button";
            button.value = listButton[i];
            button.id = listButton[i] + insertrow.id; 
            if (listButton[i] === "Remove") {
                button.onclick = function () { Remove(insertrow.id); }; 
            } else if (listButton[i] === "Edit") {
                button.onclick = function () { Update(insertrow.id); }; 
            }
            cellButton.appendChild(button);
        } 
        let newListEntry = { id: sampleData[0], Company: sampleData[1], Service: sampleData[2], Contact: sampleData[3], Phonenumber: sampleData[4] };  
        //Add to listservice
        ListService.push(newListEntry);
        console.log(ListService);
}




