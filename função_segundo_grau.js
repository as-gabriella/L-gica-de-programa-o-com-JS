// Função para resolver uma equação de segundo grau 
// ax²+bx+c
function resolverEquacaoSegundoGrau(a,b,c) 
{ 
    //Passo 1: Calcular o delta 
    //O delta nos ajuda a determinar o número de soluções reais:)    
let delta = b*b-4*a*c 

//Passo2: Verificar se o delta é negativo, zero ou positivo 
if(delta<0){
 //se o delta for menor <0, a equação não tem soluções reais
 console.log("A equação não tem soluções reais")}
 else if(delta===0){
    //se ele for igual a zero, a equação tem raízes iguais
    let x = -b/(2*a)
    console.log("A equação tem uma solução real, x= ", x)   
}  
else{
    //se delta or positivo,a equação tem duas soluções diferentes
    let x1 = (-b+Math.sqrt(delta)/(2*a))
    let x2 = (-b-Math.sqrt(delta)/(2*a))
console.log("A equação tem duas raízes:",x1, "e", x2)

}
} 
resolverEquacaoSegundoGrau(8,-5,7)




