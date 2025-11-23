const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    const btn = document.getElementById("nextBtn");

    function getJoke() {
        btn.disabled = true;
        setup.textContent = "Loading joke...";
        punchline.textContent = "";

        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            setup.textContent = `"${data.setup}"`;
            punchline.textContent = `"${data.punchline}"`;
            btn.disabled = false;
        })
        .catch(() => {
            setup.textContent = "Failed to load joke.";
            punchline.textContent = "";
            btn.disabled = false;
        });
    }

    btn.addEventListener("click", getJoke);

    getJoke();