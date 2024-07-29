# Forge Database

Este repositório é responsável pelo armazenamento e automação de scripts relacionados aos bancos de dados da nossa aplicação. Os processos são automatizados e seguem um fluxo de trabalho estruturado para garantir a integridade e a consistência dos dados. 🚀

## Branches

- **`development`**: Gerencia o banco de dados **FRG000**. Aqui são realizadas as integrações e testes antes de promover mudanças para produção. 🛠️
- **`master`**: Gerencia o banco de dados **FRG001**. Esta branch é o ponto de produção e deve refletir o estado estável do banco de dados. 🌟

## Nomeclatura de Branches

Para garantir uma organização eficiente, utilize a seguinte nomenclatura para novas branches:

- **`feature/xxx`**: Para novas funcionalidades ou melhorias. ✨
- **`bugfix/xxx`**: Para correções de bugs. 🐛

Substitua `xxx` por uma descrição concisa da tarefa.

## Fluxo de Trabalho

1. **Criação de Branches**: Antes de fazer qualquer alteração, crie uma nova branch a partir de `development` usando a nomenclatura apropriada (`feature/xxx` ou `bugfix/xxx`). 🌱

2. **Desenvolvimento**: Faça as alterações necessárias na nova branch. Teste e valide as mudanças localmente. 🧪

3. **Pull Request (PR)**:
   - Crie um Pull Request para integrar suas alterações na branch `development`. 📤
   - A branch `development` deve ser revisada e aprovada por pelo menos um membro da equipe antes de ser integrada. ✅
   
4. **Integração com Master**:
   - Após as mudanças serem integradas e testadas em `development`, crie um novo Pull Request para integrar essas alterações na branch `master`. 📈
   - A branch `master` também deve ser revisada e aprovada por pelo menos um membro da equipe antes de ser atualizada. ✔️

5. **Deploy**:
   - Uma vez que as mudanças foram integradas e aprovadas na branch `master`, elas estarão prontas para serem implantadas no ambiente de produção. 🚀

## Restrições de Branch

- **`development`** e **`master`** são branches restritas. Alterações diretas nessas branches não são permitidas. 🔒
- Toda alteração deve passar pelo fluxo de Pull Request descrito acima. 🔄

## Contribuição

Para contribuir com o projeto, siga as etapas descritas no fluxo de trabalho e abra um Pull Request com uma descrição detalhada das mudanças realizadas. 🤝
