
  document.addEventListener("DOMContentLoaded", function() {
    var bagItemsContainer = document.getElementById("cart-items");
  
    // Get the bag items from local storage
    var bagItems = JSON.parse(localStorage.getItem("bag"));
  
    // Check if there are items in the bag
    if (bagItems && bagItems.length > 0) {
      // Iterate over the bag items
      bagItems.forEach(function(dress, index) {
        // Create a div element for each dress item
        var dressDiv = document.createElement("div");
        dressDiv.classList.add("bag-item");
  
        // Create an image element for the dress image
        var image = document.createElement("img");
        image.src = dress.image;
        dressDiv.appendChild(image);
  
        // Create a heading element for the dress price
        var price = document.createElement("h3");
        price.textContent = dress.price;
        dressDiv.appendChild(price);
  
        // Create a button element for removing the dress
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
          removeItem(index);
        };
        dressDiv.appendChild(removeButton);
  
        // Append the dress item div to the bag items container
        bagItemsContainer.appendChild(dressDiv);
      });
    } else {
      // Display a message when the bag is empty
      bagItemsContainer.textContent = "Your bag is empty.";
    }
  });
  
  function removeItem(index) {
    var bagItems = JSON.parse(localStorage.getItem("bag")) || [];
    bagItems.splice(index, 1);
    localStorage.setItem("bag", JSON.stringify(bagItems));
    displayBagItems();
  }
  
  function displayBagItems() {
    var bagItemsContainer = document.getElementById("cart-items");
    bagItemsContainer.innerHTML = ""; // Clear existing bag items
    var bagItems = JSON.parse(localStorage.getItem("bag")) || [];
  
    if (bagItems.length === 0) {
      bagItemsContainer.textContent = "Your bag is empty.";
    } else {
      bagItems.forEach(function(dress, index) {
        var dressDiv = document.createElement("div");
        dressDiv.classList.add("bag-item");
  
        var image = document.createElement("img");
        image.src = dress.image;
        dressDiv.appendChild(image);
  
        var price = document.createElement("h3");
        price.textContent = dress.price;
        dressDiv.appendChild(price);
  
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
          removeItem(index);
        };
        dressDiv.appendChild(removeButton);
  
        bagItemsContainer.appendChild(dressDiv);
      });
    }
  }
  
  function openCheckoutPage() {
    window.open("checkout.html", "_blank");
  }
  
 








  
              
  














