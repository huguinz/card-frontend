'use strict'

const disciplinas = [
    {nome:'PPDM', icon: 'instagram.png'},
    {nome:'PRO', icon: 'whatsapp.png'},
    {nome:'PWBE', icon:'youtube.png'},
    {nome:'PWFE', icon: 'instagram.png'},
    {nome:'PPDM', icon: 'instagram.png'},
    {nome:'PRO', icon: 'whatsapp.png'},
    {nome:'PWBE', icon:'youtube.png'},
    {nome:'PWFE', icon: 'instagram.png'}
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

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)