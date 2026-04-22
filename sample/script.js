function showSection(id) {

    document.querySelectorAll('.card').forEach(s => {
        s.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar button').forEach(btn => {
        btn.classList.remove('active');
    });

    event.target.classList.add('active');
}

function showSection(id){
    document.querySelectorAll('.card').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function toggleMenu(element){
    element.parentElement.classList.toggle("active");
}

/* button */
function goBack() {
    window.location.href = "index.html"; // balik sa welcome page
}
