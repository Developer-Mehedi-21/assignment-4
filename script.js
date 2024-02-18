console.log('connected')

function newFunction() {
  let couponCodes = document.getElementById('NEW15')
  let exactCoupon = couponCodes.innerText
  let Coupon = document.getElementById('applyButton');
  const couponInput = document.getElementById('couponInput');
  const couponCode = couponInput.value;
  Coupon = couponCode;



  if (Coupon === exactCoupon) {
    let couponInputField = document.getElementById('couponField')
    couponInputField = couponInputField.classList.add('hidden')
  }
  else {
    alert('Invalid Coupon!');
  }

}