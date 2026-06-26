const editor = document.getElementById("editor");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const strike = document.getElementById("strike");

let syncing = false;

// Send current editor content
function sendUpdate(action = "typing") {
    if (syncing) return;

    parent.postMessage({
        type: "FORMAT_SYNC",
        action: action,
        html: editor.innerHTML
    }, "*");
}

// Sync typing
editor.addEventListener("input", () => {
    sendUpdate("typing");
});

// Bold
bold.addEventListener("click", () => {
    document.execCommand("bold");
    sendUpdate("bold");
});

// Italic
italic.addEventListener("click", () => {
    document.execCommand("italic");
    sendUpdate("italic");
});

// Strike
strike.addEventListener("click", () => {
    document.execCommand("strikeThrough");
    sendUpdate("strikeThrough");
});

// Receive updates
window.addEventListener("message", (event) => {

    if (event.data.type !== "FORMAT_SYNC") return;

    syncing = true;
    editor.innerHTML = event.data.html;
    syncing = false;

});