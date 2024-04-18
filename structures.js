function printArray1(){

    const array = [2,'hello',34];
    
    array.forEach(element=>document.write(element));

}

function printArray2(){

    const array = new Array();
    array[0]=21;
    array[1]='hello';
    
    array.map(element=>document.write(element));

}

function printArray3(){

   const array = new Array(29,'hello',87);

   array.forEach(element=>document.write(element));

}

function printArrayPush(){

    const array = [29,47];

    /*
    push modifica l'Array originario
    senza ritornarne uno differente
    */
    array.push(50,87,'hello');

    array.forEach((element)=>{document.write(element)});

}

function printArrayPop(){

    const array = [29,67,54];

    /*
    pop modifica l'Array originario
    senza ritornarne uno differente
    */
    array.pop();

    array.forEach(element=>document.write(element));
}

function printArrayTransformation(){

    const array=[21,22];

    array.map(element=>document.write(element*2));

}

function printArraySpread(){


    const array1 = [10,20];
    const array2 = [30,40];

    // merge array1 e array2
    const array3 = [...array1,...array2];

    array3.forEach(element=>document.write(element));
}

function printArrayDestructuring(){

   const array = [89,97];
   
   const[a,b]=array;

   console.log(a);
   console.log(b)

   const arrayNew = [97,98,99];
   const[c,,d]= arrayNew;
   console.log(c);
   console.log(d)

}

function printMap(){

 const mapNumbers= new Map();
 mapNumbers.set(1,'hello1');
 mapNumbers.set(2,'hello2');
 mapNumbers.set(3,'hello3');
 mapNumbers.set(4,'hello4');

 mapNumbers.forEach(element=>document.write(element));

 const[a,b,c,d]=mapNumbers;
 console.log(a);


}

function printSet(){


    const numbersSet = new Set();
    numbersSet.add(67);
    numbersSet.add(69);
    numbersSet.add(80);

    numbersSet.forEach(element=>document.write(element));
}