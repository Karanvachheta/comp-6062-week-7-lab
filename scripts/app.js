let element = document.querySelector("#userInput");
element.addEventListener('input', function()
{
    let num = Number(element.value)
    if(num>=10 || num<=-10)
    {
        alert("The number should be between -10 and 10");
        if (num>=10) {num--};
        if (num<=-10) {num++};
    };
}
);

let fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

fruitName = document.querySelector('#fruitName');
fruitColor  = document.querySelector('#fruitColor');
fruitTaste  = document.querySelector('#fruitTaste');

fruitName.innerHTML = `Name: ${fruit.name}`;
fruitColor.innerHTML = `Color: ${fruit.color}`;
fruitTaste.innerHTML = `Taste: ${fruit.taste}`;