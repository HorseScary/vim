function sleep(ms) { //thanks stackoverflow
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function reveal() {
    await sleep(30000)
    document.getElementById("content").innerHTML = `<a href="end.html">The End</a>`
}