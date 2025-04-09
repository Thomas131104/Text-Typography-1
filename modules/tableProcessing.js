let checkboxes = document.querySelectorAll("input[type='checkbox']"); 
let button = document.getElementById("done");
let table = document.getElementById("table");

button.addEventListener("click", () => 
{
    let finalTableName = "";
    
    checkboxes.forEach(checkbox => 
    {
        if (checkbox.checked) 
        {
            finalTableName += (checkbox.value + " "); 
        }
    });
    
    table.className = finalTableName.trim()
});
