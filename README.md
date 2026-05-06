# 🛍️ Axios React Native - FakeStore App

Aplicativo mobile para listar produtos da [FakeStore API](https://fakestoreapi.com/), com busca em tempo real, navegação entre telas e listagem otimizada com `FlatList`.

---

## ✅ Requisitos Funcionais (RF)

1. **Listar produtos** – Buscar e exibir todos os produtos disponíveis na API.
2. **Buscar produtos** – Filtrar produtos pelo título através de um campo de texto.
3. **Navegar para detalhes** – Ao tocar em um card, abrir tela com informações completas do produto.
4. **Exibir detalhes do produto** – Mostrar imagem, título, categoria, preço e descrição.

---

## ⚙️ Requisitos Não Funcionais (RNF)

1. **Performance** – Uso de `FlatList` para renderização eficiente da lista.
2. **Sem dependências extras** – Navegação implementada apenas com estado local do React.
3. **Responsividade** – Layout flexível que se adapta a diferentes tamanhos de tela.
4. **Tratamento de erros** – Bloco `try/catch` na requisição da API com log no console.

---

## 🎨 Prototipagem & Style Guide

### Cores (Hexadecimal)

| Uso | Cor | Hexadecimal |
|-----|-----|-------------|
| Fundo principal | Cinza claro | `#F5F5F5` |
| Fundo do card | Branco | `#FFFFFF` |
| Texto principal | Cinza escuro | `#333333` |
| Texto secundário | Cinza médio | `#666666` |
| Preço / destaque | Verde | `#2ecc71` |
| Borda do input | Cinza borda | `gray` |

### Tipografia

- **Títulos principais** (`Text` com `title`): 22px, negrito, cor `#333`
- **Título do produto**: 18px, semi-negrito, cor `#333`
- **Categoria**: 14px, cor `#888`
- **Preço**: 16px, negrito, cor `#2ecc71`
- **Descrição detalhada**: 14px, cor `#444`, line-height 20px

### Componentes principais

| Componente | Descrição | Estilos aplicados |
|-----------|-----------|------------------|
| **Botão (Card clicável)** | `TouchableOpacity` envolvendo `View` | `activeOpacity=0.7` |
| **Card** | Container arredondado com sombra | `width: 300px, height: 350px, borderRadius: 8, elevation: 3` |
| **Input** | Campo de busca | `width: 70%, height: 40, borderRadius: 10, borderWidth: 1` |
| **FlatList** | Lista otimizada de produtos | `contentContainerStyle` com flex wrap |

---

## 📂 Configuração e Estrutura de Pastas

axios-react-native/
├── App.js # Ponto de entrada
├── src/
│ ├── components/
│ │ └── Card.jsx # Componente de card do produto
│ ├── screens/
│ │ ├── HomeScreen.js # Tela principal (lista + busca)
│ │ └── DetailsScreen.js # Tela de detalhes do produto
│ ├── routes/
│ │ └── AppNavigator.js # Navegação manual (estado local)
│ ├── services/
│ │ └── api.js # Configuração do Axios
│ └── styles/
│ └── styles.js # Estilos globais
├── assets/ # Ícones e splash
├── package.json
└── app.json
