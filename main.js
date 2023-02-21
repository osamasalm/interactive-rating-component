const btn = document.querySelector("button");
const rating = document.querySelector(".rating-state");
const thank = document.querySelector(".thank-state");
const lis = document.querySelectorAll("li");
const span = document.getElementById("rate-value");

btn.addEventListener("click", function () {
    rating.style.display = "none";
    thank.style.display = "block";
});

lis.forEach(function (e) {
    e.addEventListener("click", function () {
        lis.forEach(function (t) {
            t.classList.remove("active");
        });
        e.classList.add("active");
        span.innerHTML = e.innerHTML;
    });
});