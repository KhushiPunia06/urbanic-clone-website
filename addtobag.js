
document.addEventListener("DOMContentLoaded", function() {
    var addToBagButton = document.getElementById("add-to-bag");
    addToBagButton.addEventListener("click", function() {
      // Get the dress information
      var dressImage = document.querySelector("img").src;
      var dressPrice = document.querySelector("h1").textContent;
  
      // Create an object to store the dress information
      var dress = {
        image: dressImage,
        price: dressPrice
      };
  
      // Get the existing bag items from local storage
      var bagItems = JSON.parse(localStorage.getItem("bag")) || [];
  
      // Check if the dress is already in the bag
      var isDressInBag = bagItems.some(function(item) {
        return item.image === dress.image && item.price === dress.price;
      });
  
      if (isDressInBag) {
        Toastify({
          text: "This dress is already in your bag.",
          duration: 3000,
          gravity: "top",
          close: true
        }).showToast();
      } else {
        // Add the dress to the bag array
        bagItems.push(dress);
  
        // Store the updated bag back in local storage
        localStorage.setItem("bag", JSON.stringify(bagItems));
  
        Toastify({
          text: "Dress added to bag!",
          duration: 3000,
          gravity: "top",
          close: true
        }).showToast();
      }
    });
  });
  














