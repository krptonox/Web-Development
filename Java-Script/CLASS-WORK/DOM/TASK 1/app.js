function startTransformation() {
  const title = document.getElementById("title");

  // change background fast
  let flash = setInterval(() => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "red" ? "black" : "red";
  }, 100); // 0.1 second flashing

  // after 5 sec change text & stop flashing
  setTimeout(() => {
    clearInterval(flash); // stop flashing
    document.body.style.backgroundColor = "black"; // final bg color
    title.innerText = "Berserk"; // final text
    title.style.color = "white"; // make it visible
  }, 5000);
}
