// toggle nav

document.querySelector("#nav-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("open");
});

// smooth scrolling

document.querySelector(".nav-links").querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const container = document.querySelector("." + this.getAttribute("href").split("#")[1] + "-container");
        const yPos = container.offsetTop - document.querySelector(".page-header").offsetHeight;
        window.scrollTo({
            top: yPos,
            behavior: "smooth"
        });
        // take off the open class for nav links
        if (document.querySelector(".nav-links").classList.contains("open")) {
            document.querySelector(".nav-links").classList.remove("open");
        };
    });
});
