
const heartButton = document.getElementById("heartButton");
const heartScreen = document.getElementById("heartScreen");
const flowerScreen = document.getElementById("flowerScreen");

heartButton.addEventListener("click", function() {
    heartScreen.classList.add("hidden");
    flowerScreen.classList.remove("hidden");
});