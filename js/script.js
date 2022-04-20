// Pierre = 0 , Feuille = 1, Ciseaux = 2
const choix = ["Pierre","Feuille","Ciseaux"];

// fonction random;
function randomz(){
    let out=""
    out= Math.floor(Math.random()*3);
    return out;
}

// appel de la function 
/*ramdomz()*/


// fonction jeu qui renvoie e,v,d en cas de egale,victoire et defaite
function jeu(joueur,ordi){

    // Premier if
    if(joueur===ordi){
        return "e";
    }

    // 2ieme if
    if(joueur===0){ 
        if(ordi===2){
            return "v"; //
        }
        else{
            return "d";
        }
    }

    // 3ieme if
    if(joueur===1){ 
        if(ordi===0){
            return "v"; 
        }
        else{
            return "d";
        }
    }

    // dernier if
    if(joueur===2){ 
        if(ordi===1){
            return "v"; 
        }
        else{
            return "d";
        }
    }
}

/* Partie DOM */
//Nous allons recuperer ou (inserer) des valeurs se trouvant dans des balises

let win = document.getElementById("vict");
let loss = document.getElementById("def");
let draw = document.getElementById("draw");
let reset = document.getElementById("btn-reset");

// Recuperation/Insertion des balises de l'historique

let hist_win = document.getElementById("hist-vict");
let hist_loss = document.getElementById("hist-def");
let hist_draw = document.getElementById("hist-draw");

//Je vais placer un (ecouteur) sur chaque elements ayant une class .imag

// Declaration d'une variable
let ls_img = document.querySelectorAll(".imag");

ls_img.forEach((element,keys) => {
    element.addEventListener('click',() =>{
        //window.alert(keys);
        console.log(jeu(keys,randomz()));
        count(jeu(keys,randomz()));
    })
});

//Creation d'une fonction de comptage
function count(result){

    if(result ==='v'){
        win.textContent=Number(win.textContent)+1;
        localStorage.setItem('victoire',win.textContent);
        localStorage.setItem("victoire",Number(vic)+Number(win.textContent));
    }
    else if(result==='d'){
        loss.textContent=Number(loss.textContent)+1;
        localStorage.setItem('defaite',loss.textContent);
        localStorage.setItem("defaite",Number(def)+Number(loss.textContent));
 
    }
    else{
        draw.textContent=Number(draw.textContent)+1;
        localStorage.setItem('null',draw.textContent);
        localStorage.setItem("null",Number(egal)+Number(draw.textContent));
 
    }
};

let vic = localStorage.getItem('victoire');
let def = localStorage.getItem('defaite');
let egal = localStorage.getItem('null');

// Recupere et vérifie si la clé existe du localstorage pour l'historique
hist_win.textContent = localStorage.getItem('victoire');
hist_loss.textContent = localStorage.getItem('defaite');
hist_draw.textContent = localStorage.getItem('null');

/* clear storage */
reset.addEventListener('click', () => {
    win.textContent = localStorage.clear('victoire');
    loss.textContent = localStorage.clear('defaite');
    draw.textContent = localStorage.clear('null');
    location.reload();
})

 
// let kikou = localStorage.getItem('victoire');
//  localStorage.getItem('defaite');
//  localStorage.getItem('null');

//  localStorage.setItem("victoire",Number(kikou)+Number(win.textContent));
    
    
    
    
    

// sans forEach

// let img1 = document.querySelector(".imag:nth-of-type(1)");
// let img2 = document.querySelector(".imag:nth-of-type(2)");
// let img3 = document.querySelector(".imag:nth-of-type(3)");

// img1.addEventListener('click', () => {
//     console.log('img1');,
// });
// img2.addEventListener('click', () => {
//     console.log('img1');
// });
// img3.addEventListener('click', () => {
//     console.log('img1');
// });


let img = document.querySelectorAll(".imag");   

img.forEach((value,key) => {
    value.addEventListener('click', () =>{
        document.getElementById("test").textContent = value.children[0].alt;
    })
});