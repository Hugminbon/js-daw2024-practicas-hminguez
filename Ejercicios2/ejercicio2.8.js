let data = [

    {name: "Nacho", telephone: "966112233", age:40},
    {name: "Ana", telephone: "911223344", age:35},
    {name: "Maria", telephone: "611998877", age:15},
    {name: "Laura", telephone: "633663366", age:17}
];

data.push({name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", telephone: "633232323", age: 37});

console.log(data);



    data.sort(function (a1, a2) {
        return a1.age - a2.age;
        });



console.log(data);

data.sort(function (name1, name2) {
    if(name1.name < name2.name) return -1;
        
    
    });

console.log(data);

console.log(data.filter(function(num) {
    return num.age >= 30; 
    }));