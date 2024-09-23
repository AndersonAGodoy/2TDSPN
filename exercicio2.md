# Exercício 2: Gerenciamento de Tarefas Simples com Categorias e Navegação

## Objetivo:
Criar um aplicativo de gerenciamento de tarefas simples em que o usuário pode classificar tarefas em diferentes categorias. Utilize `useContext` para compartilhar a categoria selecionada e implemente navegação entre as telas de categorias e tarefas usando **React Navigation**.

## Passos:

1. **Setup do Projeto:**
   - Crie um novo projeto React Native.
   - Defina um contexto (`TaskCategoryContext`) para compartilhar a categoria ativa entre os componentes.
   - Configure o **React Navigation** com Stack Navigator.

2. **Tela de Seleção de Categoria:**
   - Crie uma tela onde o usuário pode escolher uma categoria (e.g., Trabalho, Pessoal, Estudo).
   - Ao selecionar uma categoria, navegue para a tela de gerenciamento de tarefas.
   - Use `useContext` para salvar a categoria ativa.

3. **Tela de Gerenciamento de Tarefas:**
   - Crie uma segunda tela que mostra as tarefas da categoria selecionada.
   - Utilize `useState` para gerenciar a lista de tarefas.
   - Utilize `AsyncStorage` para salvar as tarefas associadas a cada categoria e carregá-las ao iniciar o app.
   - Permita adicionar e remover tarefas.

4. **Navegação e Contexto:**
   - Utilize `useEffect` para carregar as tarefas da categoria ativa ao entrar na tela de tarefas.
   - O `useContext` deve fornecer a categoria ativa e uma função para alterá-la.

## Requisitos:
- Usar **React Navigation** com duas telas: uma para a seleção de categorias e outra para o gerenciamento de tarefas.
- Usar `useContext` para compartilhar a categoria ativa entre as telas.
- Salvar as tarefas no `AsyncStorage` e carregar os dados na inicialização do app.

## Dicas:
- Use `navigation.navigate()` para trocar de telas.
- O `useContext` deve fornecer tanto a categoria ativa quanto uma função para alterá-la.

---
