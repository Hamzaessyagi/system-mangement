
  const selectAll = document.getElementById("select-all");
  const checkboxes = document.querySelectorAll(".select-user");

  selectAll.addEventListener("change", () => {
    checkboxes.forEach(cb => cb.checked = selectAll.checked);
  });

