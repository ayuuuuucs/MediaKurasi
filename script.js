let audio = document.getElementById("bgm");

function startGame() {
    window.location.href = "./splash.html";
}
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("splash").classList.add("hidden");
    }, 3000);
});


function toggleDropdown(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
