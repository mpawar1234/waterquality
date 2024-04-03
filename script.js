document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("location-form");
    const infoSection = document.getElementById("info-section");
    const newsSection = document.getElementById("news-section");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const locationInput = document.getElementById("location-input").value;

        // change krna he  water quality information based on location
        const waterQualityData = simulateWaterQualityFetch(locationInput);
        displayWaterQualityInfo(waterQualityData);

        // esko bhi  change krna h related news based on water quality
        const relatedNewsData = simulateRelatedNewsFetch();
        displayRelatedNews(relatedNewsData);
    });

    function simulateWaterQualityFetch(location) {
        // replace with actual data fetch
        return {
            generalRating: "Safe",
            demographics: {
                children: "Safe",
                pregnantWomen: "Safe",
                elderly: "Safe"
            },
            recommendations: "Drink plenty of water!"
        };
    }

    function displayWaterQualityInfo(data) {
        infoSection.innerHTML = `
            <p><strong>General Water Quality Rating:</strong> ${data.generalRating}</p>
            <p><strong>Water Quality for Children:</strong> ${data.demographics.children}</p>
            <p><strong>Water Quality for Pregnant Women:</strong> ${data.demographics.pregnantWomen}</p>
            <p><strong>Water Quality for Elderly:</strong> ${data.demographics.elderly}</p>
            <p><strong>Recommendations:</strong> ${data.recommendations}</p>
        `;
        infoSection.style.display = "block";
    }

    function simulateRelatedNewsFetch() {
        // replace with actual data fetch (ek ka hi fee kr dena bs)
        return [
            { title: "New Study Finds Link Between Water Quality and Health Risks", link: "#" },
            { title: "Government Implements Stricter Regulations for Water Treatment", link: "#" }
        ];
    }

    function displayRelatedNews(data) {
        const newsList = document.getElementById("related-news");
        newsList.innerHTML = "";
        data.forEach(item => {
            const newsItem = document.createElement("div");
            newsItem.innerHTML = `<a href="${item.link}">${item.title}</a>`;
            newsList.appendChild(newsItem);
        });
        newsSection.style.display = "block";
    }
});
