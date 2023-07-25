async function fetchCatFact() {
    try {
        const catFactRes = await fetch("https://catfact.ninja/fact");
        const catFactJSON = await catFactRes.json();
        const catFact = catFactJSON.fact;
        return catFact;
    }
    catch (error) {
        return ("Error - failed to fetch");
    }
}

async function displayCatFact() {
    const catFact = await fetchCatFact();
    const div = document.getElementById("cat-fact");
    div.innerHTML = catFact;
}

displayCatFact();

//registering the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => {console.log("service worker registered")})
        .catch((err) => {console.log(err)});
}