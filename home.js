
function toggleParagraph() {
  const button=document.getElementById("butt");
  const para=document.getElementById("para");
  console.log(button)
  console.log(para)
  

  if (para.style.display === "none") {
    para.style.display = "block";
    button.textContent = "Hide";
  } else {
    para.style.display = "none";
    button.textContent = "Show";
  }
}


   

