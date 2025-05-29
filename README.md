A aplicação é um gerenciador de contatos desenvolvido em React Native, permitindo que os usuários adicionem, visualizem, editem e excluam contatos. A estrutura da aplicação é organizada em componentes, cada um responsável por uma parte específica da interface do usuário e da lógica de negócios.
Tecnologias Utilizadas
1.	React Native: Framework utilizado para desenvolver a aplicação móvel, permitindo a criação de aplicativos nativos para iOS e Android usando JavaScript e React.
2.	Firebase: Plataforma de desenvolvimento de aplicativos que fornece uma variedade de serviços, incluindo:
•	Firestore: Banco de dados NoSQL em tempo real utilizado para armazenar e sincronizar dados de contatos.
3.	React Navigation: Biblioteca utilizada para gerenciar a navegação entre diferentes telas da aplicação, permitindo uma experiência de usuário fluida.
4.	Styled Components: Para estilização dos componentes, utilizando o sistema de estilos do React Native.
Estrutura de Diretórios
VerifyOpen In EditorRunCopy code
1/src
2  /pages
3    /sobre
4      - index.js (Home)
5      - cadastro.js (Adicionar Contato)
6      - ContactDetails.js (Detalhes do Contato)
7  - firebaseConnection.js (Configuração do Firebase)
Funcionalidades de CRUD
A aplicação implementa as funcionalidades de CRUD (Criar, Ler, Atualizar e Deletar) da seguinte forma:
1.	Criar (Create):
•	A funcionalidade de adicionar um novo contato é implementada na tela Sobre (ou cadastro.js).
•	O usuário preenche um formulário com nome, telefone e e-mail.
•	Ao clicar no botão "Salvar", os dados são enviados para o Firestore usando a função addDoc do Firebase.
2.	Ler (Read):
•	A tela principal (Home ou ContactListScreen) exibe uma lista de contatos armazenados no Firestore.
•	A lista é atualizada em tempo real usando onSnapshot, que escuta as alterações na coleção de contatos e atualiza a interface do usuário automaticamente.
3.	Atualizar (Update):
•	Ao clicar em um contato na lista, o usuário é levado à tela de detalhes (ContactDetails.js).
•	Nesta tela, os dados do contato são exibidos em campos editáveis.
•	O usuário pode modificar as informações e clicar no botão "Salvar", que utiliza a função updateDoc do Firebase para atualizar os dados no Firestore.
4.	Deletar (Delete):
•	Na tela de detalhes do contato, há um botão "Excluir Contato".
•	Ao clicar, um alerta de confirmação é exibido.
•	Se o usuário confirmar, a função deleteDoc do Firebase é chamada para remover o contato do Firestore.
Conclusão
A aplicação de gerenciamento de contatos é uma solução simples e eficaz para armazenar e gerenciar informações de contatos. Utilizando tecnologias modernas como React Native e Firebase, a aplicação oferece uma experiência de usuário fluida e responsiva, com funcionalidades de CRUD implementadas de forma eficiente. A estrutura modular da aplicação facilita a manutenção e a expansão futura, permitindo a adição de novas funcionalidades conforme necessário.
