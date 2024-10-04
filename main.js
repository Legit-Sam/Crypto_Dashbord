const themeBtn = document.querySelector(".nav__theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    localStorage.setItem("currentTheme", 'dark-theme')

    } else {
        themeBtn.innerHTML = '<i class="uil uil-moon"></i>';

    localStorage.setItem("currentTheme", '')
}
})

document.body.className = localStorage.getItem("currentTheme")
if (document.body.classList.contains("dark-theme")) {
    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
localStorage.setItem("currentTheme", 'dark-theme')

} else {
    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';

localStorage.setItem("currentTheme", '')
}

const sideBar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".sidebar__close-btn");
const opneSidebarBtn = document.querySelector(".nav__menu-btn");

opneSidebarBtn.addEventListener("click", () => {
    sideBar.style.display = "flex";
})


closeSidebar.addEventListener("click", () => {
    sideBar.style.display = "none";
})

const chart = document.querySelector("#chart").getContext('2d');


new Chart(chart, {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

        datasets: [
            {
                label: "BTC",
                data: [
                    10000, 9500, 11000, 11500, 12000, 10500, 13000, 12500, 14000, 13500, 15000, 14500
                ],
                borderColor: "red",
                borderWidth: 2
            },
            {
                label: "ETH",
                data: [
                    2000, 2100, 2300, 2500, 2700, 2600, 2800, 3000, 3200, 3300, 3400, 3500
                ],
                borderColor: "blue",
                borderWidth: 2
            },
            {
                label: "EURO",
                data: [
                    1500, 1600, 1550, 1700, 1800, 1850, 1900, 1950, 2000, 2100, 2200, 2300
                ],
                borderColor: "green",
                borderWidth: 2
            }
        ]
        

    },
    options: {
        responsive: true
    }
})