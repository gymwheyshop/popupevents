document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');
    const closePopup = document.getElementById('close-popup');

    // Check if the popup should be shown today
    const lastPopupDate = localStorage.getItem('lastPopupDate');
    const today = new Date().toDateString();

    if (lastPopupDate !== today) {
        // Show the popup if it hasn't been shown today
        popupContainer.classList.remove('hidden');
        localStorage.setItem('lastPopupDate', today);

        // Automatically close the popup after 3 seconds (adjust as needed)
        setTimeout(function () {
            popupContainer.classList.add('hidden');
        }, 3000);
    }

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', function () {
        popupContainer.classList.add('hidden');
    });

    // Close the popup when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
            popupContainer.classList.add('hidden');
        }
    });

    // Prevent clicks inside the popup from closing it
    popupContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
