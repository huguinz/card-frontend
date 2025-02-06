'use strict'

const disciplinas = [
    {nome:'PPDM', icon: 'instagram.png', cor: 'yellow'},
    {nome:'PRO', icon: 'whatsapp.png', cor: 'red'},
    {nome:'PWBE', icon:'youtube.png', cor: 'purple'},
    {nome:'PWFE', icon: 'instagram.png', cor: 'blue'}
]

function criarMenu(disciplina) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${disciplina.cor}`

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)

const produtos = [
    {nome: 'Camisa de Goleiro Corinthians 2024/25', icon: 'corinthians-laranja', cor: '#fc8542'},
    {nome: 'Camisa de Goleiro Corinthians 2024/25 PRO', icon: 'corinthians-azul', cor: '#32b2c9'},
    {nome: 'Camisa Nike Corinthians II 2024/25', icon: 'corinthians-preto', cor: 'black'},
    {nome: 'Camisa Corinthians Treino 2025', icon: 'corinthians-roxa', cor: '#342059'},
    {nome: 'Camisa Corinthians Japão', icon: 'corinthians-bege', cor: '#f9f6e1'}
]