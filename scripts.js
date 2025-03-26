document.addEventListener('DOMContentLoaded', () => {
    const nomesCamisas = [
        "Camiseta Básica Branca", "Camiseta Estampada Floral", "Camiseta Listrada Azul",
        "Camiseta Preta Slim Fit", "Camiseta Polo Vermelha", "Camiseta Manga Longa Cinza",
        "Camiseta Esportiva Verde", "Camiseta Casual Bege", "Camiseta Vintage Roxa",
        "Camiseta Oversized Preta", "Camiseta Social Azul Claro", "Camiseta Regata Branca",
        "Camiseta Estampada Geométrica", "Camiseta Polo Azul Marinho", "Camiseta Manga Curta Rosa",
        "Camiseta Básica Verde Militar", "Camiseta Estampada Tropical", "Camiseta Slim Fit Cinza",
        "Camiseta Casual Preta", "Camiseta Social Branca", "Camiseta Manga Longa Azul",
        "Camiseta Polo Verde Escuro", "Camiseta Estampada Abstrata", "Camiseta Básica Vermelha",
        "Camiseta Regata Preta", "Camiseta Oversized Cinza", "Camiseta Vintage Azul",
        "Camiseta Esportiva Vermelha", "Camiseta Manga Curta Amarela", "Camiseta Polo Branca",
        "Camiseta Básica Preta", "Camiseta Estampada Animal Print", "Camiseta Slim Fit Branca",
        "Camiseta Casual Verde", "Camiseta Social Preta", "Camiseta Manga Longa Vermelha",
        "Camiseta Polo Cinza", "Camiseta Estampada Colorida", "Camiseta Básica Azul",
        "Camiseta Regata Azul Marinho", "Camiseta Oversized Branca", "Camiseta Vintage Preta",
        "Camiseta Esportiva Azul Claro", "Camiseta Manga Curta Verde", "Camiseta Polo Rosa",
        "Camiseta Básica Cinza", "Camiseta Estampada Minimalista", "Camiseta Slim Fit Preta",
        "Camiseta Casual Azul", "Camiseta Social Cinza", "Camiseta Manga Longa Branca"
    ];

    const produtos = nomesCamisas.map((nome, i) => ({
        id: i + 1,
        nome: nome,
        preco: (Math.random() * 100 + 20).toFixed(2),
        imagem: `imagens/produto${i + 1}.jpg` // Cada produto terá uma imagem específica
    }));

    const listaProdutos = document.getElementById('lista-produtos');

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;

        listaProdutos.appendChild(produtoDiv);
    });
});

function adicionarAoCarrinho(produtoId) {
    alert(`Produto ${produtoId} adicionado ao carrinho!`);
}
