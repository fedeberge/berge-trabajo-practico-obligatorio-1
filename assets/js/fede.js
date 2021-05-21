let linksFalsos = document.querySelectorAll("a.link-falso");

linksFalsos.forEach(link => {
    link.addEventListener("click", ev=> {
        ev.preventDefault();
    })
});