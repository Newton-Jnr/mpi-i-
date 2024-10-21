var rows = document.querySelectorAll("#alarm-list tr");

document.getElementById("alarm").addEventListener("click", function() {
    rows.forEach(function(row) {
      row.style.display = "table-row";
    });
  });
  
document.getElementById("urgent").addEventListener("click", function() {
  rows.forEach(function(row) {
    var checkbox = row.querySelector(".checkbox");
    if (checkbox.dataset.category === "urgent") {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

document.getElementById("normal").addEventListener("click", function() {
  rows.forEach(function(row) {
    var checkbox = row.querySelector(".checkbox");
    if (checkbox.dataset.category === "normal") {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});