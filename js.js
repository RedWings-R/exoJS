let tabP1 = [];
let tabP2 = [];

let etatPArtie = false;
let playerTurn = true;







document.querySelector("#btnStart").addEventListener("click", () => {
    if(etatPArtie === true){
        tabP1 = [];
        tabP2 = [];
        document.querySelectorAll('.wrapper>span').forEach(elem => elem.style.backgroundImage = "none"); 
    }else{
        document.querySelector("#btnStart").innerHTML = "Relancer la partie"
        document.querySelector("#divPlateau").style.display = "block";
        etatPArtie = true;
        for(let i = 1; i < 10 ; i++ ){
            var x = document.createElement("SPAN");
            x.id = String(i);
            var t = document.createTextNode("This is a span element.");
            x.appendChild(t);
            document.querySelector("#plateau").appendChild(x);
        } 
    }
})

const croixOUrond = () => {
    if(playerTurn === true){
        document.querySelector("#b1").style.backgroundImage = "url('croix.png')";
        document.querySelector("#b1").style.backgroundSize = "contain";
    }else{

    }
}


// b1.style.backgroundImage = "url('rond.png')";
//     b1.style.backgroundSize = "contain";

