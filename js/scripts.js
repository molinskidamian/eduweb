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

(function () {
    const wrapper = document.querySelector(".slider-inner");
    const courses = document.querySelectorAll(".last-lern--course");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    let steps = 0;

    function width(numItems, itemWidth) {
        return numItems.length * itemWidth.offsetWidth;
    }

    console.log(
        `Szerokość kursów: ${courses[0].offsetWidth * courses.length}px`
    );

    btnNext.addEventListener("click", () => {
        console.log("next");
        // wrapper.scrollLeft += 280;

        const countSteps = (wrapper, item) => {
            return;
        };

        if (
            steps <=
            courses.length * courses[0].offsetWidth - wrapper.offsetWidth
        ) {
            // steps += 325;
            steps += 376;
            courses.forEach((cours) => {
                cours.style.cssText =
                    // "transform: translateX(`${move px}`); transition: .3s transform ease";
                    // `transform: translateX(-${steps}px); transition: .3s transform ease-in-out`;
                    `transform: translateX(-${steps}px); transition: .3s transform ease-in-out`;
            });
        }
    });

    btnPrev.addEventListener("click", () => {
        console.log("prev");
        // wrapper.scrollLeft -= 280;
        // steps = 0;
        if (steps > 0) {
            steps -= 325;
        }
        courses.forEach((cours) => {
            cours.style.cssText =
                // "transform: translateX(`${move px}`); transition: .3s transform ease";
                `transform: translateX(-${steps}px); transition: .3s transform ease`;
        });
        // steps = 0;
    });
})();
