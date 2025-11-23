 const images = [
        "https://i.pinimg.com/736x/de/25/5a/de255ab243004edeeb62cfad64a31b0f.jpg",
        "https://i.pinimg.com/1200x/ff/06/2a/ff062a4ee4971a6a6e8fd54c28eeb917.jpg",
        "https://i.pinimg.com/1200x/1e/58/40/1e5840958893d2fc325c6b8d5af93ab8.jpg",
        "https://i.pinimg.com/1200x/55/73/5b/55735b1132e37201ece4769be36b6ce1.jpg",
        "https://i.pinimg.com/736x/54/4b/31/544b311fd0bf14e68e055f0051f0b8c0.jpg"
    ];

    let index = 0;
    const img = document.getElementById("carouselImage");
    const box = document.getElementById("carouselBox");

    img.src = images[index];

    function updateImage() {
        img.src = images[index];
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateImage();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateImage();
    });

    let slide = setInterval(() => {
        index = (index + 1) % images.length;
        updateImage();
    }, 3000);

    box.addEventListener("mouseenter", () => {
        clearInterval(slide);
    })

    box.addEventListener("mouseleave", () => {
        slide = setInterval(() => {
            index = (index + 1) % images.length;
            updateImage();
        }, 3000);
    });