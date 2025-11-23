    const cityInput = document.getElementById("cityInput");
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
    const btn = document.getElementById("getWeather");

    const API_KEY = "eb8fc9cc7fa244f59ac153000251701";

    async function fetchWeather() {
        const city = cityInput.value.trim();
        resultDiv.textContent = "";
        errorDiv.textContent = "";

        if (city === "") {
            errorDiv.textContent = "Please enter a city name.";
            return;
        }

        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            const data = await response.json();

            const temp = data.current.temp_c;
            const humidity = data.current.humidity;
            const condition = data.current.condition.text;

            resultDiv.innerHTML = `
                <p><strong>Temperature:</strong> ${temp}°C</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Condition:</strong> ${condition}</p>
            `;
        } catch (err) {
            errorDiv.textContent = "Invalid city or unable to fetch data.";
        }
    }

    btn.addEventListener("click", fetchWeather);