// make a button that, when clicked, creates a new
// button, and then deletes the original button.
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure
// that each button is different.

function generateRandomText() {
    const charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomText += charset[randomIndex];
    }

    return randomText;
}

document.body.innerHTML = `
    <button>${generateRandomText()}</button>
`;

addEventListener("click", (event) => {
    document.body.innerHTML = `
        <button>${generateRandomText()}</button>
    `;
});

// I did this problem outside of class, so I was not able to see what my teammates did.
   