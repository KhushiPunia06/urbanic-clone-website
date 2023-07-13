function addToWishlist(dressName, dressImage) {
    var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push({ name: dressName, image: dressImage });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.location.href = "wishlist.html";
}


