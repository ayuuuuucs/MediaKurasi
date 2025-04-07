document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Gagal memuat navbar:", error));
});

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".dropdown-item").forEach(item => {
//         item.addEventListener("click", function (event) {
//             event.preventDefault();

//             let kelas = this.textContent.trim(); 
//             if (kelas === "Kelas10") {
//                 window.location.href = "kelas10.html";
//             } else if (kelas === "Kelas 11") {
//                 window.location.href = "kelas11.html";
//             } else if (kelas === "Kelas 12") {
//                 window.location.href = "kelas12.html";
//             }
//         });
//     });

//     let homeButton = document.querySelector(".nav-link.active"); 
//     if (homeButton) {
//         homeButton.addEventListener("click", function (event) {
//             event.preventDefault();
//             window.location.href = "landing.html"; 
//         });
//     }
// });