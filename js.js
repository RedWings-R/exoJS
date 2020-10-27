let tabP1 = [];
let tabP2 = [];

let etatPArtie = false;
let playerTurn = true;







document.querySelector("#btnStart").addEventListener("click", () => {
    if(etatPArtie === true){
        tabP1 = [];
        tabP2 = [];

        b1.style.backgroundImage = "none";
        b2.style.backgroundImage = "none";
        b3.style.backgroundImage = "none";
        b4.style.backgroundImage = "none";
        b5.style.backgroundImage = "none";
        b6.style.backgroundImage = "none";
        b7.style.backgroundImage = "none";
        b8.style.backgroundImage = "none";
        b9.style.backgroundImage = "none";
        
    }else{
        document.querySelector("#btnStart").innerHTML = "Relancer la partie"
        document.querySelector("#plateau").style.display = "block";
        etatPArtie = true;
    }

})


// const croixOUrond = () => {
//     if(playerTurn === true){
//         document.querySelector("#b1").style.backgroundImage = "url('croix.png')";
//         document.querySelector("#b1").style.backgroundSize = "contain";
//     }else{

//     }
// }


document.querySelector("#b1").addEventListener("click", croixOUrond());
document.querySelector("#b2").addEventListener("click", croixOUrond());
document.querySelector("#b3").addEventListener("click", croixOUrond());
document.querySelector("#b4").addEventListener("click", croixOUrond());
document.querySelector("#b5").addEventListener("click", croixOUrond());
document.querySelector("#b6").addEventListener("click", croixOUrond());
document.querySelector("#b7").addEventListener("click", croixOUrond());
document.querySelector("#b8").addEventListener("click", croixOUrond());
document.querySelector("#b9").addEventListener("click", croixOUrond());


// b1.style.backgroundImage = "url('rond.png')";
//     b1.style.backgroundSize = "contain";






let plateau = document.querySelector("#plateau");