 const products = [
        { name: "Laptop", category: "electronics" },
        { name: "Headphones", category: "electronics" },
        { name: "Smartphone", category: "electronics" },
        { name: "T-Shirt", category: "clothing" },
        { name: "Jeans", category: "clothing" },
        { name: "Jacket", category: "clothing" },
        { name: "Novel Book", category: "books" },
        { name: "History Book", category: "books" },
        { name: "Smartwatch", category: "electronics" },
        { name: "Hoodie", category: "clothing" }
    ];

    const list = document.getElementById("productList");
    const allBtn = document.getElementById("allBtn");
    const elecBtn = document.getElementById("elecBtn");
    const clothBtn = document.getElementById("clothBtn");
    const searchInput = document.getElementById("search");

    function displayProducts(arr) {
        list.innerHTML = "";
        arr.forEach(p => {
            const li = document.createElement("li");
            li.textContent = p.name + " (" + p.category + ")";
            list.appendChild(li);
        });
    }

    displayProducts(products);

    allBtn.addEventListener("click", () => {
        displayProducts(products);
        searchInput.value = "";
    });

    elecBtn.addEventListener("click", () => {
        const filtered = products.filter(p => p.category === "electronics");
        displayProducts(filtered);
        searchInput.value = "";
    });

    clothBtn.addEventListener("click", () => {
        const filtered = products.filter(p => p.category === "clothing");
        displayProducts(filtered);
        searchInput.value = "";
    });

    searchInput.addEventListener("input", () => {
        const key = searchInput.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(key));
        displayProducts(filtered);
    });