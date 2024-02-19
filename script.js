console.log('connected')

// function newFunction() {
//   let couponCodes = document.getElementById('NEW15')
//   let exactCoupon = couponCodes.innerText
//   let Coupon = document.getElementById('applyButton');
//   const couponInput = document.getElementById('couponInput');
//   const couponCode = couponInput.value;
//   Coupon = couponCode;



//   if (Coupon === exactCoupon) {
//     let couponInputField = document.getElementById('couponField')
//     couponInputField = couponInputField.classList.add('hidden')
//   }
//   else {
//     alert('Your Coupon is Invalid!');
//   }

// }

console.log('connected');

document.getElementById('goAndBuyBtn').addEventListener('click', function () {
  const divToView = document.getElementById('buyYourTicket');
  divToView.scrollIntoView({ behavior: "smooth" });
})

// --- Click to the get started button to go to buy ticket section ---//

document.getElementById('getSartedBtn').addEventListener('click', function () {
  const divToView = document.getElementById('buyYourTicket');
  divToView.scrollIntoView({ behavior: "smooth" });
})

// --- set seat's id with their inner texts ---//

function setSeatId() {
  const allSeats = document.querySelectorAll('.kbd');
  let selectedSeatsCount = 0;  // Variable to keep track of selected seats

  allSeats.forEach(function (kbd) {
    const seatId = kbd.innerText.toLowerCase();
    kbd.id = seatId;

    kbd.addEventListener('click', function () {
      if (selectedSeatsCount < 4) {
        kbd.style.backgroundColor = '#37e610';
        kbd.style.color = '#FFFFFF';

        const currentTicketCountElement = document.getElementById('ticketCount');
        const currentTicketCountText = currentTicketCountElement.innerText;
        const currentTicketCount = parseInt(currentTicketCountText);
        const ticketCount = currentTicketCount + 1;
        currentTicketCountElement.innerText = ticketCount;

        // --- decrease the number of available seats ---//

        const currentSeatElement = document.getElementById('seatCount');
        const currentSeatCountText = currentSeatElement.innerText;
        const currentSeatCount = parseInt(currentSeatCountText);
        const seatCount = currentSeatCount - 1;
        currentSeatElement.innerText = seatCount;

        // --- increase the price of of total price ---//

        const currentTotalPriceElement = document.getElementById('totalPrice');
        const currentTotalPriceText = currentTotalPriceElement.innerText;
        const currentTotalPrice = parseInt(currentTotalPriceText);
        const totalPrice = currentTotalPrice + 550;
        currentTotalPriceElement.innerText = totalPrice;

        // add new row once i click to the seat ---//

        const tableBody = document.querySelector('#table tbody')

        const newRow = document.createElement('tr');
        newRow.appendChild(createTableCell(seatId.toUpperCase()));
        newRow.appendChild(createTableCell('Business'));
        newRow.appendChild(createTableCell('550'));
        tableBody.appendChild(newRow);

        function createTableCell(content) {
          var Column = document.createElement('td');
          Column.textContent = content;
          return Column;
        }

        selectedSeatsCount++;

        // Check if the maximum seat limit is reached
        if (selectedSeatsCount === 4) {
          disableAllSeats();
        }
      }
    });
  });

  // Function to disable all seats
  function disableAllSeats() {
    allSeats.forEach(function (kbd) {
      kbd.removeEventListener('click', clickHandler);
      kbd.classList.add('disabled');
    });
  }
}

// calling the function above ---
setSeatId();


// --- Set Disable-Enable function to the next button---//

function checkInput() {
  const inputField = document.getElementById('phoneInput');
  const nextButton = document.getElementById('nextButton');

  if (!isNaN(parseInt(inputField.value))) {
    nextButton.removeAttribute('disabled');
  } else {
    nextButton.setAttribute('disabled', 'true');
  }
}
