# Coupon code generator

<!-- Evaluation Criteria:
Functionality: The website should meet the basic functional requirements.
Code Quality: Clean and well-documented code.
Design and Usability: Simple, clear, and user-friendly interface.
Completion: Ability to complete the task within the given timeframe.
 -->

### Install and usage

- Fork the project or download it
- - If you have forked it then clone the project using
- - `git clone "your-repo-link"`
- Go to the directory and either run `npm serve` or use live server extension on vscode to see the website live.

### Structure of the project

This project folder contains

- index.html
- styles.css
- script.js

  The coupon code generating logic is in the `updateCouponPreview()` function .

  - In the fucntion after getting all the input fields, we set up the canvas with a background image. Also setting up the font style and font size
  - Then we generate a coupon code which is made of `The organisation name + a random number`, and then a barcode is generated based on that code with the help of [jsBarcode library](https://lindell.me/JsBarcode/).
  - Then we show the all the input variables and coupon code on the canvas, then we can download the coupon as `png` using the download button.
