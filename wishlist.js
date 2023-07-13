function removeItem(index) {
    var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
  }

  function displayWishlist() {
    var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    var wishlistElement = document.getElementById("wishlist");
    if (wishlistElement) {
      wishlistElement.innerHTML = ""; // Clear existing wishlist
      if (wishlist.length === 0) {
        wishlistElement.textContent = "No items in wishlist";
      } else {
        for (var i = 0; i < wishlist.length; i++) {
          var listItem = document.createElement("li");

          var imgElement = document.createElement("img");
          imgElement.src = wishlist[i].image;
          imgElement.alt = wishlist[i].name;
          listItem.appendChild(imgElement);

          var dressName = document.createElement("span");
          dressName.textContent = wishlist[i].name;
          listItem.appendChild(dressName);

          var removeButton = document.createElement("button");
          removeButton.textContent = "Remove";
          removeButton.onclick = (function (index) {
            return function () {
              removeItem(index);
            };
          })(i);
          listItem.appendChild(removeButton);

          wishlistElement.appendChild(listItem);
        }
      }
    }
  }











   

















