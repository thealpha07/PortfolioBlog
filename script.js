// Function to show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup(event) {
    // Prevent closing the popup when clicking inside the dialog box
    if (event) {
        event.stopPropagation();
    }
    document.getElementById('popup').style.display = 'none';
}