let etatPArtie = false;
let joueurs = ['X', 'O'];

const init = () =>{

    joueur = joueurs[0];
        tabJeux = ["1","2","3","4","5","6","7","8","9"];
        etatPArtie = true;
        z = 0;

        document.querySelector("#btnStart").innerHTML = "Rejouer"
        document.querySelector("#divPlateau").style.display = "block";
        
        for(let i = 1; i < 10 ; i++ ){

            let x = document.createElement("SPAN");
            let t = document.createTextNode("");

            x.id = String(i);
            x.appendChild(t);

            document.querySelector("#plateau").appendChild(x);
        } 

}


const replay = () => {

    document.querySelectorAll('.wrapper>span').forEach(elem => elem.style.backgroundImage = "none");
        document.querySelectorAll('.wrapper>span').forEach(elem => elem.className = ""); 
        document.querySelectorAll('.wrapper>span').forEach(elem => elem.textContent = ""); 

        tabJeux = ["1","2","3","4","5","6","7","8","9"];
        joueur = joueurs[0];
        z = 0;

}


const croixOUrond = (e) => {

    if (joueur === joueurs[0]) {
        if (e.target.className.indexOf('filled') >= 0) {
            //On affiche une alerte
            alert("Case déja joué");
        } else {
            e.target.style.backgroundImage = "url('croix.png')";
            e.target.style.backgroundSize = "contain";
            e.target.className = "filled";
            e.target.textContent = " ";
            joueur = joueurs[1];
        }
    }
    else if (joueur === joueurs[1]) { 
        if (e.target.className.indexOf('filled') >= 0) {
            //On affiche un alerte
            alert("Case déja joué");
        } else {

            e.target.style.backgroundImage = "url(rond.png)";
            e.target.style.backgroundSize = "contain";

            e.target.className = "filled";
            e.target.textContent = "  ";

            joueur = joueurs[0];
        }
    }
    ;

    verif(e);
}


const verif = (e) => {
        
    tabJeux.splice(e.target.id-1, 1, e.target.textContent)
    console.log(tabJeux)
    console.log(z)
    if(z===8){
        alert("Pas de gagnant");
        replay();
    }
    if (tabJeux[0] === tabJeux[1] && tabJeux[0]=== tabJeux[2] || 
        tabJeux[3] === tabJeux[4] && tabJeux[3]=== tabJeux[5] ||
        tabJeux[6] === tabJeux[7] && tabJeux[6]=== tabJeux[8] ||
        tabJeux[0] === tabJeux[3] && tabJeux[0]=== tabJeux[6] ||
        tabJeux[1] === tabJeux[4] && tabJeux[1]=== tabJeux[7] ||
        tabJeux[2] === tabJeux[5] && tabJeux[2]=== tabJeux[8] ||
        tabJeux[0] === tabJeux[4] && tabJeux[0]=== tabJeux[8] ||
        tabJeux[2] === tabJeux[4] && tabJeux[2]=== tabJeux[6]) {
        if (joueur === joueurs[0]) {
            alert('Joeur O Gagne');
            replay();
        } else if (joueur === joueurs[1]) {
            alert('Joeur X Gagne');
            replay();
        }
    }
    z++;
}


document.querySelector("#btnStart").addEventListener("click", () => {
    if(etatPArtie){
        replay();
    }else{
        init();
    }
})


document.querySelector("#plateau").addEventListener("click", croixOUrond)