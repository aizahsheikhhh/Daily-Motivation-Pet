async function fetchAll() {
    getDog();
    getAdvice();
}

async function getDog() {
    const img = document.getElementById('dog-image');
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        img.src = data.message;
    } catch (e) {
        console.log("Dog photo failed to load.");
    }
}

async function getAdvice() {
    const text = document.getElementById('advice-text');
    try {
        // We add a timestamp to the URL to prevent the browser from caching the same advice
        const response = await fetch('https://api.adviceslip.com/advice?' + new Date().getTime());
        const data = await response.json();
        text.innerText = `"${data.slip.advice}"`;
    } catch (e) {
        text.innerText = "Be kind to yourself today.";
    }
}

// Load everything when the page opens
fetchAll();
