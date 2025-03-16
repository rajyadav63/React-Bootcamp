document.addEventListener("DOMContentLoaded", () => {
  const leftBasketCount = document.querySelector(".basket1 span");
  const rightBasketCount = document.querySelector(".basket2 span");
  const leftButton = document.getElementById("left-btn");
  const rightButton = document.getElementById("right-btn");

  const totalAppleCount = 10;

  let rightBasketAppleCount = 0;
  let leftBasketAppleCount = totalAppleCount - rightBasketAppleCount;

  leftBasketCount.innerText = leftBasketAppleCount;
  rightBasketCount.innerText = rightBasketAppleCount;

  rightButton.addEventListener("click", () => {
    // console.log(leftBasketAppleCount);
    // console.log(rightBasketAppleCount);
    if(leftBasketAppleCount > 0){
        leftBasketAppleCount--;
        leftBasketCount.innerText = leftBasketAppleCount;
        rightBasketAppleCount++;
        rightBasketCount.innerText = rightBasketAppleCount;
    }
    if(rightBasketAppleCount === 10){
        alert("Basket is full")
    }
  });

  leftButton.addEventListener("click", () => {
    if(rightBasketAppleCount > 0){
        leftBasketAppleCount++;
        leftBasketCount.innerText = leftBasketAppleCount;
        rightBasketAppleCount--;
        rightBasketCount.innerText = rightBasketAppleCount;
    }
    if(leftBasketAppleCount === 10){
        alert("Basket is full")
    }
  });
});
