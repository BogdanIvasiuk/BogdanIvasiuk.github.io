document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed');
    loadModule('header', 'modules/header.html');
    loadModule('sidebar', 'modules/sidebar.html');
    loadModule('footer', 'modules/footer.html');
});

function loadModule(elementId, url) {
    console.log(`Loading module: ${url} into ${elementId}`);
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            console.log(`Loaded module: ${url}`);
        })
        .catch(error => console.error('Error loading module:', error));
}
