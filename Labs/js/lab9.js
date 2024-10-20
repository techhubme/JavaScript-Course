const NUM1 = 500;
const NUM2 = 600;
const NUM3 = 700;

if(NUM1 > NUM2 && NUM1 > NUM3){
    console.log(`${NUM1} is highest number.`);
}else if(NUM2 > NUM1 && NUM2 > NUM3){
    console.log(`${NUM2} is highest number.`);
}else{
    console.log(`${NUM3} is highest number.`);
}