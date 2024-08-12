const recommendations = {
    action: ["Mad Max: Fury Road", "Die Hard", "The Dark Knight"],
    comedy: ["Superbad", "Step Brothers", "The Grand Budapest Hotel"],
    drama: ["The Shawshank Redemption", "Forrest Gump", "The Godfather"],
    horror: ["The Conjuring", "Get Out", "Hereditary"]
};

document.getElementById("recommend-button").addEventListener("click", function() {
    const genre = document.getElementById("genre").value;
    const movies = recommendations[genre];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    document.getElementById("recommendation").textContent = `We recommend: ${randomMovie}`;
});
