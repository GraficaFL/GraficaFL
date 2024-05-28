// Exemplo de dados de produtos
const produtos = [
    {
      nome: "Cartão de Visita",
      descricao: "Cartão de visita personalizado",
      imagem: "cartao_visita.jpg",
      preco: 50.00
    },
    {
      nome: "Panfleto",
      descricao: "Panfleto colorido",
      imagem: "panfleto.jpg",
      preco: 100.00
    },
    {
      nome: "Banner",
      descricao: "Banner promocional",
      imagem: "banner.jpg",
      preco: 200.00
    }
  ];
  
  // Função para exibir os produtos na página
  function exibirProdutos() {
    const produtosContainer = document.getElementById('produtos-container');
  
    produtos.forEach(produto => {
      const produtoDiv = document.createElement('div');
      produtoDiv.classList.add('produto');
  
      produtoDiv.innerHTML = `
        <img src="imagens/${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p>R$ ${produto.preco.toFixed(2)}</p>
      `;
  
      produtosContainer.appendChild(produtoDiv);
    });
  }
  
  // Chamar a função para exibir os produtos
  exibirProdutos();
  