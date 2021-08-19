// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function iniciaModal (modalID){
    const modal1 = document.getElementById(modalID);
    modal1.classList.add('mostrar');
    modal1.addEventListener('click', (e) => {
        if(e.target.id == modalID){
            modal1.classList.remove('mostrar')
        }
    })
}

const link1 = document.getElementById('link1');
link1.addEventListener('click', function(){
    iniciaModal('modal-agenda')
})
const link2 = document.getElementById('link2');
link2.addEventListener('click', function(){
    iniciaModal('modal-agenda')
})
const link3 = document.getElementById('link3');
link3.addEventListener('click', function(){
    iniciaModal('modal-dicas')
})
const link4 = document.getElementById('link4');
link4.addEventListener('click', function(){
    iniciaModal('modal-dicas')
})
const link5 = document.getElementById('link5');
link5.addEventListener('click', function(){
    iniciaModal('modal-apoiadores')
})
const link6 = document.getElementById('link6');
link6.addEventListener('click', function(){
    iniciaModal('modal-apoiadores')
})



function cadastrar()
{
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val()
    };

    $.post("/Home/Cadastrar", parametros)
        .done(function(){
            $("#frmCadastro").after("<p>Cadastro realizado com sucesso!!</p>");
        })
        .fail(function(){
            $("#frmCadastro").after("<p>Erro ao cadastrar no banco de dados. Tente mais tarde!!</p>");
        });
}

$(document).ready(function()
{
    $("#frmCadastro").submit(
        function(e)
        {
            e.preventDefault();
            cadastrar();
        }
    );
});