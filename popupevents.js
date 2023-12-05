document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup-container');
    const closePopup = document.getElementById('close-popup');

    // Check if the popup should be shown today
    const lastPopupDate = localStorage.getItem('lastPopupDate');
    const today = new Date().toDateString();

    if (lastPopupDate !== today) {
        // Show the popup if it hasn't been shown today
        popupContainer.classList.remove('hidden');
        localStorage.setItem('lastPopupDate', today);
    }

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', function () {
        popupContainer.classList.add('hidden');
    });
});
