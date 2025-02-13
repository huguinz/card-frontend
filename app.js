'use strict';

const produtos = [
    { nome: 'Camisa azul', preço: '256,49', descricao: 'Camisa de Goleiro Corinthians 2024/25 PRO', icon: 'corinthians-azul', cor: '#32b2c9' },
    { nome: 'Camisa preta', preço: '664,99', descricao: 'Camisa Nike Corinthians II 2024/25', icon: 'corinthians-preta', cor: 'black' },
    { nome: 'Camisa roxa', preço: '265,99', descricao: 'Camisa Corinthians Treino 2025', icon: 'corinthians-roxa', cor: '#342059' },
    { nome: 'Camisa bege', preço: '359,99', descricao: 'Camisa Corinthians Japão', icon: 'corinthians-bege', cor: '#ceccbd' }
];

function criarCard(produto) {
    const lista = document.getElementById('navegacao')

    const card = document.createElement('div')
    card.classList.add('product-card')

    const border = document.createElement('div')
    border.classList.add('card-border')
    border.style.background = `linear-gradient(to right, ${produto.cor}, #fff)`

    const titulo = document.createElement('h3')
    titulo.textContent = produto.nome.toUpperCase()
    titulo.style.color = produto.cor

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao

    const imagem = document.createElement('img')
    imagem.src = `./img/${produto.icon}.webp`
    imagem.alt = produto.nome

    const preco = document.createElement('p')
    preco.classList.add('price')
    preco.textContent = produto.preço

    const tamanhos = document.createElement('div')
    tamanhos.classList.add('sizes');
    ['P', 'M', 'G', 'GG'].forEach(tamanho => {
        const span = document.createElement('span')
        span.textContent = tamanho
        tamanhos.appendChild(span)
    });

    const botao = document.createElement('button')
    botao.classList.add('buy-button')
    botao.textContent = "Adicionar ao Carrinho"
    botao.style.background = produto.cor

    card.appendChild(border)
    card.appendChild(titulo)
    card.appendChild(descricao)
    card.appendChild(imagem)
    card.appendChild(preco)
    card.appendChild(tamanhos)
    card.appendChild(botao)

    lista.appendChild(card)
}

produtos.forEach(criarCard)
