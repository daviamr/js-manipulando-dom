const paragraph = document.getElementById("texto");
const trono = document.querySelector("section>div");
paragraph.innerText = "Clique no trono";

trono.onclick = function () {
  paragraph.innerText = "O inverno está acabando";
  paragraph.style.color = "#F00000";
}
