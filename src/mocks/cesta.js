import logo from '../../assets/logo.png';

import pedigree from '../../assets/racao/pedigree.jpg'
import granplus from '../../assets/racao/granplus.jpg'
import golden from '../../assets/racao/golden.jpg'
import premier from '../../assets/racao/pedigree.jpeg'

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Ração",
    logo: logo,
    nomeLoja: "Vortex Petshop",
    descricao: "Uma lista com as melhores opções de ração para o nosso querido Zeus",
  },

  itens : {
    titulo: 'Itens da lista',
    lista: [
      {
        nome:'Ração Pedigree',
        imagem: pedigree
      },
      {
        nome: 'Ração Gran Plus',
        imagem: granplus
      },
      {
        nome: 'Ração GoldeN',
        imagem: golden
      },
      {
        nome: 'Ração PremieR',
        imagem: premier
      }
    ]
  }

}

export default cesta;