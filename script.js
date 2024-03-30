function search() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let names = document.querySelectorAll(".border li");

    names.forEach(name => {
        let nameText = name.textContent.toLowerCase();
        if (nameText.includes(searchInput)) {
            name.classList.remove("d-none");
        } else {
            name.classList.add("d-none");
        }
    });
}

document.getElementById("search").addEventListener("input", search);
