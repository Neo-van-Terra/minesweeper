// DOM - Variablen
let feld = document.getElementsByClassName("feld");


// Den einzelnen Feldern eine linke und rechte Seite zugeordnet
feld.links = false;
feld.rechts = false;

for(let i = 0; i < feld.length; i++){
    feld[i].links = false;
    feld[i].rechts = false;
}
for (let i = 0; i<feld.length; i += 6){
        feld[i].links = true;
}
for (let i = 5; i<feld.length; i += 6){
    feld[i].rechts = true;
}


// Kernregeln beim kleinen Spielfeld
const feldKlein = 36;
const maxBombs = 5;
const minBombs = 2;
let bomben = Math.floor(Math.random()*(maxBombs-minBombs+1))+minBombs;




// Spielfeld vorbereitet
let bombenfeld = Array(bomben).fill("bombe");
for (let i = 0;i<feldKlein-bomben;i++){
    bombenfeld.push("leer");
}

function mischen(meinArray){
    for (let i = 0; i < meinArray.length; i++){
        let neuePos = Math.floor(Math.random()*meinArray.length);
        let temp = meinArray[i];
        meinArray[i] = meinArray[neuePos];
        meinArray[neuePos] = temp;
    } 
}
mischen(bombenfeld)

function spielStart(){
    for (let i= 0; i <feld.length;i++){
        if(bombenfeld[i] == "bombe"){
            feld[i].value = "bombe";
        }
        else {
            feld[i].value ="leer"
        }
        // console.log(feld[i].value);
    }
}

spielStart();


// Die Spielfunktionen:
for (let i = 0; i<feld.length;i++){
    feld[i].addEventListener("click", prufen);
    feld[i].addEventListener("contextmenu", schutzen);

    function schutzen(){
        feld[i].style.backgroundColor="blue";
    }

    let oha = 0;

    function prufen(){
        if (feld[i].value == "bombe"){
            feld[i].style.backgroundColor="red";
        }
        else {
            feld[i].style.backgroundColor="green";
               if(i>=0 && i<feld.length-7){               
                   if (feld[i+7].value =="bombe" && feld[i].rechts === false){
                       oha = oha + 1;
                       feld[i].textContent = oha;
                   }
               }
               if(i>=0 && i<feld.length-6){
                   if (feld[i+6].value =="bombe"){
                       oha = oha + 1;
                       feld[i].textContent = oha;
                   }
               }
               if(i>=0 && i<feld.length-5){
                   if (feld[i+5].value =="bombe" && feld[i].links === false){
                       oha = oha + 1;
                       feld[i].textContent = oha;
                   }
               }
               if(i>=0 && i<feld.length-1){
                   if (feld[i+1].value =="bombe" && feld[i].rechts === false){
                       oha = oha + 1;
                       feld[i].textContent = oha;
                   }
               }
               if(i>0){
                   if (feld[i-1].value =="bombe" && feld[i].links === false){
                       oha = oha + 1;
                       feld[i].textContent = oha;
                   }
                   if(i>4){
                       if (feld[i-5].value =="bombe" && feld[i].rechts === false){
                               oha = oha + 1;
                               feld[i].textContent = oha;
                           }
                       if(i>5){
                           if (feld[i-6].value =="bombe"){
                               oha = oha + 1;
                               feld[i].textContent = oha;
                           }
                           if(i>6){
                               if (feld[i-7].value =="bombe" && feld[i].links === false){
                                   oha = oha + 1;
                                   feld[i].textContent = oha;
                               }
                           }
                       }
                   }
               }
        }
    
    }

}



// Test´s
console.log(bombenfeld,feld[6].oben,feld[6].unten,feld[6].links,feld[6].rechts)