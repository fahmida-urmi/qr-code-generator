document.addEventListener("DOMContentLoaded", () => {
    const qrTextInput = document.getElementById("qrText");
    const generateBtn = document.getElementById("generateBtn");
    const qrCodeContainer = document.getElementById("qrCodeContainer");

    generateBtn.addEventListener("click", () => {
        console.log("Button clicked!"); // Debugging: Check if button is working

        const text = qrTextInput.value.trim();
        if (text) {
            // Show the QR code container
            qrCodeContainer.classList.remove("hidden");

            // Clear previous QR code before generating a new one
            qrCodeContainer.innerHTML = "";

            // Generate the QR code
            new QRCode(qrCodeContainer, {
                text: text,
                width: 200,
                height: 200
            });

            console.log("QR Code generated successfully!"); // Debugging message
        } else {
            alert("Please enter some text or URL to generate a QR code.");
        }
    });
});
