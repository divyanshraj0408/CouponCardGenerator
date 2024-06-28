document.addEventListener("DOMContentLoaded", function () {
  updateCouponPreview();
});

function updateCouponPreview() {
  const orgName = document.getElementById("orgName").value;
  const deal = document.getElementById("deal").value;
  const expiryDate = document.getElementById("expiryDate").value;

  const canvas = document.getElementById("couponCanvas");
  const context = canvas.getContext("2d");
  const backgroundImage = new Image();
  backgroundImage.src = "background.jpg";

  backgroundImage.onload = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    context.fillStyle = "#000";
    context.font = "20px Open Sans";
    context.fillText("Congratulations 🎉", 20, 30);

    context.font = "16px Arial";
    const string =
      `${orgName.toUpperCase().replaceAll(/\s/g, "")}` +
      Math.round(Math.random() * 10000);
    if (orgName) {
      context.fillText(
        `You won a coupon from ${orgName.toUpperCase()}.`,
        20,
        70
      );
      context.fillText(`${string}`, 450, 190);
    }
    if (orgName) {
      const barcodeCanvas = document.createElement("canvas");
      JsBarcode(barcodeCanvas, string, {
        format: "CODE128",
        width: 1,
        height: 50,
        displayValue: false,
      });
      context.drawImage(barcodeCanvas, 450, 100);
    }
    if (deal)
      context.fillText(`Which gives you ${deal.toUpperCase()}.`, 20, 110);
    if (expiryDate)
      context.fillText(`Grab the deals till ${expiryDate}`, 20, 150);
    const downloadButton = document.getElementById("downloadCoupon");
    if (orgName && deal && expiryDate) {
      downloadButton.style.display = "block";
    } else {
      downloadButton.style.display = "none";
    }
  };
}

function downloadCoupon() {
  const canvas = document.getElementById("couponCanvas");
  const link = document.createElement("a");
  link.download = "coupon.png";
  link.href = canvas.toDataURL();
  link.click();
}
