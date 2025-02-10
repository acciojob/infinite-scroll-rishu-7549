// Function to add list items
function addListItems(count) {
  const ol = document.getElementById("infi-list");
  const currentItemCount = ol.children.length;
  
  for (let i = 1; i <= count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${currentItemCount + i}`;
    ol.appendChild(li);
  }
}

// Initial load of 10 items
addListItems(10);

// Event listener for infinite scrolling
const ol = document.getElementById("infi-list");
ol.addEventListener('scroll', function() {
  if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight) {
    // Add 2 more items when scrolled to the bottom
    addListItems(2);
  }
});