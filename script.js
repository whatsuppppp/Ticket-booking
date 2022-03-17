const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.Selected");
  const SelectedSeatsCount = selectedSeats.length;
  console.log(SelectedSeatsCount);
  count.innerText = SelectedSeatsCount;
  total.innerText = SelectedSeatsCount * ticketPrice;
}

//movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
