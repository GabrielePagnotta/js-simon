// creo un array:
let array_1 = [];
let show = document.getElementById('display')


// creo una funzione che mi dia un numero random:
function casual_number(num){
   let x = Math.floor(Math.random() * num)
   return x
}

 //  creo un timer per la funzione display_info

 setTimeout(display_info,5000);

    // creo una funzione che stampa i numeri nell array

    function display_info(){

        for (let i = 0; i < 5; i++) {
            casual_number()
            array_1.push(casual_number(20));
            show.innerHTML=`i numeri sono: ${array_1}`
    
        }
    }

    
   

    

   






    
        
