function enterSite() {
    document.getElementById('landing').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('landing').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-content').classList.add('fade-in');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
