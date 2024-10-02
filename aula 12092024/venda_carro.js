automovel = prompt("digite o tipo de automóvelque vc deseja comprar")

switch(automovel) {
    case "hatch":
        console.log("comprar efetuada com sucesso");
        break

    case "sedan":
    case "motocicleta":
    case "caminhonete":
        console.log("tem certeza que nao prefere esre modelo?")
        break 
    default :
    console.log("nao trabalhamos com este tipode automovel aqui")    

}