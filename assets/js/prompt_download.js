document.getElementById('downloadLink').addEventListener('click', function(event) {
    const confirmed = confirm("Confirme descarga");
    if (!confirmed) {
      event.preventDefault(); // Cancel the download
    }
});
