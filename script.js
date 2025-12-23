function buyNow(product, price) {
  const msg =
    "Hello, I want to buy:\n\n" +
    "Product: " + product + "\n" +
    "Price: ₹" + price + "\n\n" +
    "Please share payment details.";

  const url =
    "https://wa.me/91XXXXXXXXXX?text=" +
    encodeURIComponent(msg);

  window.open(url, "_blank");
}
