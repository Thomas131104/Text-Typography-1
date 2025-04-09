let bodyElement = document.querySelector("body");
let changeColor = document.querySelector(".changeColor");
let gridItems = document.querySelectorAll(".grid-item");
let isChangeColor = true;

changeColor.addEventListener("click", function() 
{
    if (isChangeColor) {
        Object.assign(bodyElement.style, 
        {
            backgroundColor: "black",  
            color: "white"
        });

        gridItems.forEach(gridItem => 
        {
            Object.assign(gridItem.style, 
            {
                backgroundColor: "black",  
                color: "white"
            });
        });
    } 
    else
    {
        Object.assign(bodyElement.style, 
        {
            backgroundColor: "white",  
            color: "black" 
        });

        gridItems.forEach(gridItem => 
        {
            Object.assign(gridItem.style, 
            {
                backgroundColor: "white",  
                color: "black"
            });
        });
    }
    isChangeColor = !isChangeColor;
});