const navHeaderLinks = document.querySelectorAll(".navigation__nav a")
const navFooterLinks = document.querySelectorAll("footer nav a")
const navToggle = document.querySelector(".navigation input")
const navIcon = document.querySelector(".navigation__icon-box ")

console.log(navToggle)
navHeaderLinks.forEach(el => el.addEventListener("click", () => {
    if (navToggle.checked) {
        navIcon.click()
    }
}));

navFooterLinks.forEach(el => el.addEventListener("click", event => {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
    console.log(targetId)
}));