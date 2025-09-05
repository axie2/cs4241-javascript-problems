// create a for input field that does the following
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank


document.body.innerHTML = `
    <form>
        <input type="text">
    </form>
`;

addEventListener("input", event => {
    const h1 = document.createElement("h1");
    h1.textContent = event.target.value;
    document.body.appendChild(h1)
    input.value = "";
})

// I did this problem outside of class, so I was not able to see what my teammates did.
   

