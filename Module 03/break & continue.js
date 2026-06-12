for(let i = 1; i < 10; i++){
    if(i==5){
       break;
    }
    console.log(i);   
}

//Practice even number
for(let r=1; r<=100; r++){
    if(r%2 == 0){
        console.log("even number -", r); 
    }else{
        continue;
    }
}

//Practice odd number
for(let j=1; j<=100; j++){
    if(j%2 == 0){
        continue; 
    }else{
        console.log("Odd number -", j);
        
    }
}

//practice 
for(let k=1; k<=100; k++){
    if(k%2 == 0){
        console.log("even number -", k);
        break; 
    }else{
        continue;
    }
}