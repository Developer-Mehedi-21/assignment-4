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


// --- Click to the navbar button to go to buy ticket section ---//

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

  allSeats.forEach(function (kbd) {
    const seatId = kbd.innerText.toLowerCase();
    kbd.id = seatId;

    kbd.addEventListener('click', function () {
      kbd.style.backgroundColor = '#37e610';

      // --- increase the number o ticket ---//

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

      // --- disable all the seats to be selected once you reached to 4 selected seats--//

      

    });
  })
}

// calling the dunction above ---
setSeatId()