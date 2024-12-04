function saveSettings() {
    const theme = document.querySelector('#theme').value;
    const bgMusic = document.querySelector('#bgMusic').value;
    const welcomeText = document.querySelector('#welcomeText').value;

    const settings = { theme, bgMusic, welcomeText };

    fetch('../manage/settings.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
    })
    .then(response => {
        if (response.ok) alert('Settings saved successfully!');
        else throw new Error('Failed to save settings.');
    })
    .catch(error => alert(error.message));
}