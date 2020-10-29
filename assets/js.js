let etatPArtie = false;
let joueurs = ['X', 'O'];
let compteur = 0;

const init = () =>{

    joueur = joueurs[0];
    tabJeux = ["1","2","3","4","5","6","7","8","9"];
    etatPArtie = true;
    compteur = 0;

    document.querySelector("#btnStart").innerHTML = "Rejouer"
    document.querySelector("#divPlateau").style.display = "block";h1Div
    document.querySelector("#h1Div").style.display = "block";
    for(let i = 1; i < 10 ; i++ ){

        let x = document.createElement("SPAN");
        let t = document.createTextNode("");

        x.id = String(i);
        x.appendChild(t);
        x.classList.add("case");

        document.querySelector("#plateau").appendChild(x);
    }

}

const replay = () => {

    document.querySelectorAll('.wrapper>span').forEach(elem => elem.style.backgroundImage = "none");
    document.querySelectorAll('.wrapper>span').forEach(elem => elem.className = "");
    document.querySelectorAll('.wrapper>span').forEach(elem => elem.textContent = "");
    document.querySelector("#id01").style.display = "none";
    document.querySelector("#h1Div").innerHTML = "Au joueur X de jouer"
    

    tabJeux = ["1","2","3","4","5","6","7","8","9"];
    joueur = joueurs[0];
    compteur = 0;

}


const croixOUrond = (e) => {

    if(e.target.id == "plateau"){
        console.log("T'as clické sur le plateau")
        return false;
    }else{
        if (e.target.className.indexOf("filled") >= 0){
            alert("Case déja joué");
        }else{
            if (joueur === joueurs[0]) {
                e.target.style.backgroundImage = "url(./assets/croix.png)";
                e.target.style.backgroundSize = "contain";
                e.target.className = "filled";
                e.target.textContent = " ";

                joueur = joueurs[1];

                document.querySelector("#h1Div").innerHTML = "Au joueur 0 de jouer"
                console.log("X a joué")
            }
            else{
                if (joueur === joueurs[1]) {
                    e.target.style.backgroundImage = "url(./assets/rond.png)";
                    e.target.style.backgroundSize = "contain";
                    e.target.className = "filled";
                    e.target.textContent = "  ";
        
                    joueur = joueurs[0];

                    document.querySelector("#h1Div").innerHTML = "Au joueur X de jouer"
                    console.log("0 a joué")     
                }
            } 
            verif(e);
        }
    }
}


const verif = async (e) => {
    console.log(compteur)
    tabJeux.splice(e.target.id-1, 1, e.target.textContent)
    if (tabJeux[0] === tabJeux[1] && tabJeux[0]=== tabJeux[2] ||
        tabJeux[3] === tabJeux[4] && tabJeux[3]=== tabJeux[5] ||
        tabJeux[6] === tabJeux[7] && tabJeux[6]=== tabJeux[8] ||
        tabJeux[0] === tabJeux[3] && tabJeux[0]=== tabJeux[6] ||
        tabJeux[1] === tabJeux[4] && tabJeux[1]=== tabJeux[7] ||
        tabJeux[2] === tabJeux[5] && tabJeux[2]=== tabJeux[8] ||
        tabJeux[0] === tabJeux[4] && tabJeux[0]=== tabJeux[8] ||
        tabJeux[2] === tabJeux[4] && tabJeux[2]=== tabJeux[6]) {
        if (joueur === joueurs[0]) {
            document.querySelector("#h2Modal").innerHTML = "Bravo joueur O";
            document.querySelector("#h1Div").innerHTML = "";
            document.querySelector("#img").src= await majImg();
            document.querySelector("#id01").style.display = "block";

        } else if (joueur === joueurs[1]) {
            document.querySelector("#h2Modal").innerHTML = "Bravo joueur X";
            document.querySelector("#h1Div").innerHTML = "";
            document.querySelector("#img").src = await majImg();
            document.querySelector("#id01").style.display = "block";

        }
    }
    if(compteur > 7){
        console.log(compteur)
        document.querySelector("#h2Modal").innerHTML = "Pas de gagnant";
        document.querySelector("#img").src = await majImg();
        document.querySelector("#id01").style.display = "block";
    }
    compteur++;

}


const majImg = async () => {
    try {
        let url = await fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp=>resp.json())
        .then(json=>json[0].url);
        if(url){
            console.log(url)
            return url;
        }
    } catch (error) {
        return error;
    }
}

document.querySelector("#btnStart").addEventListener("click", () => {
    if(etatPArtie){
        replay();
        console.log("Rejouer")
    }else{
        init();
        console.log("Init")
    }
})

document.querySelector("#btnReplay").addEventListener("click", replay);

document.querySelector("#plateau").addEventListener("click", croixOUrond);
