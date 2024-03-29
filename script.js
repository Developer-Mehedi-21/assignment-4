console.log('connected')


document.getElementById('goAndBuyBtn').addEventListener('click', function () {
  const divToView = document.getElementById('buyYourTicket');
  divToView.scrollIntoView({ behavior: "smooth" });
})

document.getElementById('search').addEventListener('click', function () {
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
  const nameInput = document.getElementById('nameInput');
  const nextButton = document.getElementById('nextButton');
  const isNameNotEmpty = nameInput.value.trim() !== '';

  if (!isNaN(parseInt(inputField.value)) && isNameNotEmpty) {
    nextButton.removeAttribute('disabled');
  } else {
    nextButton.setAttribute('disabled', 'true');
  }
}


function checkCoupon() {
  const CouponinputField = document.getElementById('couponInput');
  const isCouponFieldNotEmpty = CouponinputField.value.trim() !== '';

  if (isCouponFieldNotEmpty) {
    applyButton.removeAttribute('disabled');
  } else {
    applyButton.setAttribute('disabled', 'true');
  }
}


function Couponcheck() {
  let new15Coupon = document.getElementById('NEW15');
  let new15CouponText = new15Coupon.innerText;
  const coupleCoupon = 'Couple 20';
  let Coupon = document.getElementById('applyButton');
  const couponInput = document.getElementById('couponInput');
  const couponCode = couponInput.value;
  Coupon = couponCode;

  // total price ---//

  const totalPriceElement = document.getElementById('totalPrice');
  const totalPrice = totalPriceElement.innerText;

  // discount for new15--//

  const discountedprice = totalPrice * 0.85;
  let grandTotalPrice = discountedprice;
  const discountedprice2 = totalPrice * 0.80;
  let grandTotalPrice2 = discountedprice2;


  if (Coupon === new15CouponText) {
    let couponInputField = document.getElementById('couponField')
    couponInputField.classList.add('hidden')
    document.getElementById('grandTotalPrice').innerText = grandTotalPrice

  }

  else if (Coupon === coupleCoupon) {
    let couponInputField = document.getElementById('couponField')
    couponInputField.classList.add('hidden')
    document.getElementById('grandTotalPrice').innerText = grandTotalPrice2
  }

  else {
    alert('Your Coupon is Invalid!');
  }

}
