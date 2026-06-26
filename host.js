const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");
const log = document.getElementById("log");
const syncStatus=document.getElementById("syncStatus");

// Allow messages only from the same origin
const ALLOWED_ORIGIN = window.location.origin;

// Add entry to event log
function addLog(source, destination, action) {
    const time = new Date().toLocaleTimeString();

    const entry = document.createElement("div");
    entry.className = "log-item";

    entry.innerHTML = `
        <strong>${time}</strong> :
        ${source} ➜ ${destination}
        <span style="color:#007bff;">(${action})</span>
    `;

    log.prepend(entry);
}
function flashSync(){

    syncStatus.classList.add("show");

    setTimeout(()=>{

        syncStatus.classList.remove("show");

    },600);

}

window.addEventListener("message", (event) => {

    // Security Check
    if (event.origin !== ALLOWED_ORIGIN) return;

    const data = event.data;

    if (!data || data.type !== "FORMAT_SYNC") return;

    // Message from Frame A
    if (event.source === frame1.contentWindow) {

        addLog("Frame A", "Frame B", data.action);

        frame2.contentWindow.postMessage(
            data,
            ALLOWED_ORIGIN
        );
        flashSync();

    }

    // Message from Frame B
    else if (event.source === frame2.contentWindow) {

        addLog("Frame B", "Frame A", data.action);

        frame1.contentWindow.postMessage(
            data,
            ALLOWED_ORIGIN
        );
        flashSync();

    }

});