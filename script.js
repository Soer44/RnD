
document.querySelector(".check").addEventListener("change", function() {
	document.querySelector(".btn").disabled = !document.querySelector(".check").checked;
  });