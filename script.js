let celDoc = document.getElementById("CelId");
celDoc.addEventListener("input", function () {
  let fetchUserValue1 = this.value;
  let res1 = (fetchUserValue1 * 9) / 5 + 32;

  if (!Number.isInteger(res1)) {
    res1 = res1.toFixed(4);
  }

  fahDoc.value = res1;
});

let fahDoc = document.getElementById("FahId");
fahDoc.addEventListener("input", function () {
  let fetchUserValue2 = this.value;
  let res2 = ((fetchUserValue2 - 32) * 5) / 9;

  if (!Number.isInteger(res2)) {
    res2 = res2.toFixed(4);
  }

  celDoc.value = res2;
});
