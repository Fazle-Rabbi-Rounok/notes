document.querySelectorAll(".folder-name").forEach(folder => {
    folder.addEventListener("click", () => {
        const contents = folder.nextElementSibling;
        if (contents) {
            contents.style.display = contents.style.display === "block" ? "none" : "block";
            folder.classList.toggle("open");
        }
    });
});
