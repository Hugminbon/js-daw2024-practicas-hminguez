function tablaCadena(){
    
    var cadena = document.getElementById("cadena").value.toUpperCase();
    
       for (let i = 0; i < cadena.length; i++) {
           setTimeout(function(){document.getElementById("hola").innerHTML += "<td>"+cadena.charAt(i)+"</td>"}, i *1000)
           
       }
        
   }