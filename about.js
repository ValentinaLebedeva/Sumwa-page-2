
const tabButtonsABout = document.querySelectorAll(".menu-text");

const aboutColumns = document.querySelectorAll(".about-column");

tabButtonsABout.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", function () {
        const columnSelector = currentBtn.getAttribute("data-tab");
        const currectColumn = document.querySelector(columnSelector);

        tabButtonsABout.forEach(function (item) {
            item.classList.remove("menu-text--active");

        })

        aboutColumns.forEach(function (item) {
            item.classList.add("hidden");
        })

        currentBtn.classList.add("menu-text--active")
        currectColumn.classList.remove("hidden");
    });
});