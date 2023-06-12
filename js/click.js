const googleIcon = document.getElementById('google-icon');
const appleIcon = document.getElementById('apple-icon');

googleIcon.addEventListener('mouseover', function() {
    googleIcon.src = "./img/google2.png";
});

googleIcon.addEventListener('mouseout', function() {
    googleIcon.src = "./img/google.png";
});

appleIcon.addEventListener('mouseover', function() {
    appleIcon.src = "./img/apple2.png";
});

appleIcon.addEventListener('mouseout', function() {
    appleIcon.src = "./img/apple.png";
});