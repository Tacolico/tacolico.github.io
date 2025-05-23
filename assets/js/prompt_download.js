document.getElementById('downloadLink').addEventListener('click', function(event) {
    const confirmed = confirm("Do you want to download this file?");
    if (!confirmed) {
      event.preventDefault(); // Cancel the download
    }
});
