
# Documentação do Projeto

## Visão Geral
Este projeto é uma aplicação React para exibir um menu de pratos com seus detalhes. Ele utiliza componentes React funcionais e a biblioteca Reactstrap para estilização baseada no Bootstrap. O projeto apresenta os pratos em um layout de cartões e permite que o usuário visualize os detalhes de cada prato, incluindo seus comentários.

---

## Componentes

### MenuComponent.js
Este componente é responsável por:
- Renderizar uma lista de pratos no formato de cartões.
- Gerenciar o estado do prato selecionado.
- Passar o prato selecionado para o componente `DishDetail`.

#### Principais funções:
- Atualizar o estado com o prato selecionado.
- Renderizar a lista de pratos utilizando um mapeamento.

#### Dependências:
- React
- Reactstrap (`Card`, `CardImg`, `CardImgOverlay`, `CardTitle`)

---

### DishdetailComponent.js
Este componente é responsável por:
- Exibir os detalhes de um prato selecionado.
- Listar os comentários relacionados ao prato.

#### Principais funções:
- Renderizar os detalhes do prato.
- Exibir os comentários associados ao prato.

#### Dependências:
- React
- Reactstrap (`Card`, `CardImg`, `CardBody`, `CardTitle`, `CardText`)

---

### dishes.js
Este arquivo contém os dados mockados dos pratos, incluindo:
- `id`: Identificador único.
- `name`: Nome do prato.
- `image`: Caminho da imagem.
- `category`: Categoria do prato.
- `label`: Rótulo adicional (ex.: "Hot", "New").
- `price`: Preço do prato.
- `description`: Descrição do prato.
- `comments`: Lista de comentários com identificador, avaliação, comentário, autor e data.

---

## Biblioteca Utilizada
- **React**: Para a criação de componentes reutilizáveis.
- **Reactstrap**: Para componentes estilizados baseados no Bootstrap.

---

## O que foi feito
1. Configuração de componentes React para exibir uma lista de pratos.
2. Implementação de seleção e exibição de detalhes de pratos.
3. Exibição de comentários associados a cada prato.
4. Uso de Reactstrap para criar um layout responsivo e estilizado.
