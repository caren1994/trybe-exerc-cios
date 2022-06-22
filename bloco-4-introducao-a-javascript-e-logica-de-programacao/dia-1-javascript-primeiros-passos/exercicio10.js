const custop = 40;
const valorv = 85;
let lucro;

if(custop < 0 || valorv <0){
    console.log('valor não possível');
}else {
    lucro=valorv-custop * 1.20;
    console.log(lucro * 1000);
    

}
