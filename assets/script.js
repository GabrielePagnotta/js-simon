// creo un array:
let array_1 = [];
let array_2 = [];
let show = document.getElementById('display');
let i = 0




// creo una funzione che mi dia un numero random:
function casual_number(num){
   let x = Math.floor(Math.random() * num)
   return x
}

 //  creo un timer e una funzione che stampa i numeri
 for (let i = 0; i < 5; i++) {
    casual_number()
    array_1.push(casual_number(20));
    show.innerHTML=`i numeri sono: ${array_1}`

} 
 setTimeout(display_info,1000);
 setTimeout(input,2000);
    

    function display_info(){
       
        show.innerHTML=""
        
    }

    


    // l'utente inserisce i numeri
    

    function input(){
        for (let i = 0;i < 5; i++) {
            let numbers = parseInt(prompt(`inserisci il numero ${i + 1}`))
            array_2.push(numbers);

            // controllo la condizione
            if (numbers != array_1[i]) {
                alert("hai perso")
                show = document.getElementById('display').innerText = "hai perso la partita";
                break;
                
            }

            else if(numbers == array_1[i]){
                alert("giusto");
                show = document.getElementById('display').innerText = "hai vinto";
                
            }

    }
    
    }

   
        
    

   



    
