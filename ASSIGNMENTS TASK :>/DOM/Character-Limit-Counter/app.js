const textBox = document.querySelector("#textBox");
    let counter = document.querySelector("#counter");
    const limit = 200;
    counter.textContent += limit;

    textBox.addEventListener("input", () => {
        const used = textBox.value.length;
        const left = limit - used;
        counter.textContent = "Characters left: " + left;

        if (left > 60) {
            counter.style.color = "green";
        }
        else if (left > 20) {
            counter.style.color = "orange";
        }
        else {
            counter.style.color = "red";
        }

        if (used > limit) {
            textBox.value = textBox.value.substring(0, limit);
        }
    });