let productos = [ 
    { nombre: "Laptop", categoria: "Electrónica", precio: 1500 }, 
    { nombre: "Silla", categoria: "Muebles", precio: 100 },
    { nombre: "Cargador", categoria: "Electrónica", precio: 50 }
     ];


        function buscarProducto(producto, nombreProducto){

            return productos.filter(function(producto){
                if(producto.nombre === nombreProducto){
                    return true;  
                }
                return false;  
            });



           

            
            
        
        }
            

console.log(buscarProducto(productos, "Laptop"));  
console.log(buscarProducto(productos, "Silla"));