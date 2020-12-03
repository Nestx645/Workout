function spin() {
    number = Math.floor(Math.random() * 6);
    if (number==1) {
        zone = document.getElementById("result_spin");
        texte = "120 pull up";
        zone.innerText = texte;
    }if(number==2) {
        zone = document.getElementById("result_spin");
        texte = "20 push up x10";
        zone.innerText = texte;
    }
    if (number==3) {
        zone = document.getElementById("result_spin");
        texte = "Tabata Plank";
        zone.innerText = texte;
    }if (number==4) {
        zone = document.getElementById("result_spin");
        texte = "50 D.U.";
        zone.innerText = texte;
    }if (number==5) {
        zone = document.getElementById("result_spin");
        texte = "3min of Jumping jack";
        zone.innerText = texte;
    }
}
function change_background(couleur) {
    zone = document.getElementById("body1");
    zone.style.background=couleur;
    zone_exercise =document.getElementById("exercise");
    zone_exercise.innerText = ""
    zone_text = document.getElementById("result_spin");
    texte = "Cliquez sur spin pour enlever l'image";
    zone_text.innerText = texte;
}
function normal_background(couleur) {
    zone = document.getElementById("body1");
    zone.style.background=couleur;
    zone_exercise =document.getElementById("exercise");
    zone_exercise.innerText = "Do your sport !"
}
