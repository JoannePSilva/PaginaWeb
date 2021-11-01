var viagens = [];
window.onload = function(){
    console.log('Carregando...')
}
geraFormulario();
criaTabela();


    function geraFormulario(){
    var tabela = criaTabela();
        if(tabela){
            document.getElementById("submit").addEventListener("click", criaTabela());
        } return false;

    }
    function criaTabela(){
        let tbody = document.getElementById("corpo_tabela");
        viagens.forEach(v => {
            tbody.innerHTML += "<tr>" + 
            "<td>"+ v["id"] + "</td>"+
            "<td>"+ v["lugar"] +"</td>"+
            "<td>"+ v["estadia"] +"</td>"+
            "<td>"+ v["preco"]+"</td>"+
            "<tr>"
        });
    

}