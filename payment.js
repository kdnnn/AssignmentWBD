document.addEventListener('DOMContentLoaded', function () {
    // Your code here


    const cardNumberInput = document.getElementById('cardNum');

    cardNumberInput.addEventListener('input', function () {
        // Remove any non-numeric characters
        const cleanedValue = this.value.replace(/\D/g, '');

        // Add dashes after every 4 digits
        const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1-');

        this.value = formattedValue;
    });
    const expiryDateInput = document.getElementById('exDate');

    expiryDateInput.addEventListener('input', function () {
        // Remove any non-numeric characters
        const cleanedValue = this.value.replace(/\D/g, '');

        // Format as MM/YY with a slash after the first 2 digits
        if (cleanedValue.length >= 2) {
            const formattedValue = cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2);
            this.value = formattedValue;
        } else {
            this.value = cleanedValue;
        }
    });
})
