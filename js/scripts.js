(function () {
    // roll-up/down menu
    let showMenu = false;
    const items = document.querySelectorAll(".main-nav--item");
    const subMenu = document.querySelector(".main-nav--item > ul");

    items[0].addEventListener("click", function () {
        console.log("click");

        if (showMenu === false) {
            console.log("false");
            subMenu.classList.add("main-nav--sub-menu");
            showMenu = true;
        } else if (showMenu === true) {
            console.log("true");
            showMenu = false;
            subMenu.classList.remove("main-nav--sub-menu");
        }
    });
})();

(function () {
    // promo close
    const promo = document.querySelector(".promo");
    const promoClose = document.querySelector(".promo-close");

    promoClose.addEventListener("click", () => {
        console.log("click");
        promo.style.display = "none";
    });
})();
