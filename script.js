function navigateTo(page) {
    window.location.href = page;

    // Highlight the active button
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(buttonId).classList.add('active');
}