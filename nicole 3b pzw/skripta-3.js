//JS DOM

function provjeri(){
    let ime = document.forms[0].elements[0].value;

    let prezime = document.forms[0].elements[1].value;

    let razred = document.getElementById("razred").value;

    let škola = document.forms[0].elements[3].value;

    let grad = document.getElementById("grad").value;

alert(ime + " " + prezime + " " + razred + " " + škola + " " + grad );
}
