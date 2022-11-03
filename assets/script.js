// creo un array:
let array_1 = [];
let show = document.getElementById('display')




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
 setTimeout(display_info,3000);
    

    function display_info(){
       
        show.innerHTML=""
        
    }


    // l'utente inserisce i numeroi
    setTimeout(input_utente, 4000);

    function input_utente(){
        for (let i = 0; i < 5; i++) {
            let input= parseInt(prompt("inserisci il numero"))
            
        }
        
    }

    console.log(input_utente())

    
   



   

    

  
    

    
   

    

   






    
        
