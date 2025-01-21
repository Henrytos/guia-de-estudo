# Plano de Estudos para Desenvolvedor Full-Stack TypeScript

Este plano é destinado a quem deseja se tornar um desenvolvedor full-stack TypeScript, abrangendo back-end, front-end e boas práticas de desenvolvimento. Cada semana está organizada com tópicos diários para otimizar seu tempo de estudo de 4 horas por dia, 5 dias por semana.

---

## Semana 1: Fundamentos Avançados de TypeScript
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | ✅ Tipagem Avançada               | Estudo de `keyof`, `typeof` e Mapped Types.                             | [TypeScript Handbook: Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html) |
| 2   | ✅ Generics                       | Aprender a criar funções e classes genéricas.                           | [Generics in TypeScript](https://www.typescriptlang.org/docs/handbook/2/generics.html) |
| 3   | Manipulação de Definições de Tipos | Uso de pacotes com definições em `@types` e personalização de tipos.    | [Defining Types in TS](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) |
| 4   | Namespaces e Módulos           | Organização de código com namespaces e ES modules.                      | [Modules in TS](https://www.typescriptlang.org/docs/handbook/modules.html) |
| 5   | ✅ Projeto Prático                | Criar um gerenciador de tarefas CLI com TypeScript, usando boas práticas. | Faça com base nos estudos acima.             |

---

## Semana 2: Front-end com Next.js e TanStack Query
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | ✅ Introdução ao TanStack Query   | Gerenciamento de dados com caching e invalidação.                        | [TanStack Query Docs](https://tanstack.com/query/v4) |
| 2   | ✅ Consumo de APIs REST e GraphQL | Usar TanStack Query para consumir APIs com autenticação.                 | [GraphQL with React Query](https://tanstack.com/query/v4/docs/react/examples/graphql) |
| 3   | Autenticação com NextAuth.js   | Configurar login com Google, GitHub e credenciais próprias.              | [NextAuth.js Docs](https://next-auth.js.org/) |
| 4   | ✅ Manipulação de Formulários     | Usar React Hook Form com validação via Zod.                              | [React Hook Form Docs](https://react-hook-form.com/) |
| 5   | ✅ Projeto Prático                | Criar um dashboard com autenticação e consumo de APIs.                   | Faça com base nos estudos acima.             |

---

## Semana 3: Tailwind, shadcn/ui e Animações
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | ✅ Introdução ao Tailwind CSS     | Estilização com utilitários e personalização de temas.                   | [Tailwind Docs](https://tailwindcss.com/docs) |
| 2   | ✅ shadcn/ui                      | Uso de componentes reutilizáveis e acessíveis.                          | [shadcn/ui Docs](https://ui.shadcn.dev/) |
| 3   | Introdução ao Framer Motion    | Criar animações e transições interativas.                                | [Framer Motion Docs](https://www.framer.com/motion/) |
| 4   | Componentização e Boas Práticas | Criar componentes reusáveis e modularizados.                            | [Reusing Components](https://reactjs.org/docs/components-and-props.html) |
| 5   | Projeto Prático                | Criar uma landing page animada e responsiva.                             | Faça com base nos estudos acima.             |

---

## Semana 4: Back-end com NestJS e Prisma
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | Configuração Básica do NestJS  | Configurar um projeto do zero com CLI do NestJS.                         | [NestJS Docs](https://docs.nestjs.com/) |
| 2   | Autenticação com Passport e JWT | Configurar rotas seguras com tokens JWT.                                 | [JWT Auth](https://docs.nestjs.com/security/authentication) |
| 3   | Relacionamentos Complexos no Prisma | Trabalhar com `@relation` e consultas avançadas.                       | [Prisma Relations](https://www.prisma.io/docs) |
| 4   | Guards e Interceptors          | Garantir segurança e interceptação de dados nas rotas.                   | [Guards in NestJS](https://docs.nestjs.com/guards) |
| 5   | Projeto Prático                | Criar uma API com autenticação, roles e Prisma.                          | Faça com base nos estudos acima.             |

---

## Semana 5: Deploy e Infraestrutura
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | Introdução ao Docker           | Containerização de aplicações com Docker.                                | [Docker Docs](https://docs.docker.com/) |
| 2   | CI/CD com GitHub Actions       | Automação de build, testes e deploy.                                     | [GitHub Actions Docs](https://docs.github.com/actions) |
| 3   | Deploy no Vercel e Render      | Deploy de front-end e back-end em serviços gerenciados.                  | [Vercel](https://vercel.com/) e [Render](https://render.com/) |
| 4   | Infraestrutura como Código (IaC)| Usar Terraform para gerenciar recursos de cloud.                         | [Terraform Docs](https://www.terraform.io/docs) |
| 5   | Projeto Prático                | Deploy completo de um sistema full-stack.                                | Combine os estudos acima.                     |

---

## Semana 6: WebSockets e Tempo Real
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | Introdução ao WebSocket         | Comunicação bidirecional com Socket.IO ou ws.                            | [Socket.IO Docs](https://socket.io/)          |
| 2   | Implementando Chats             | Criar um chat com autenticação e mensagens em tempo real.                | Use os aprendizados anteriores.               |
| 3   | WebSockets com NestJS           | Usar WebSockets em uma API NestJS.                                       | [WebSocket in NestJS](https://docs.nestjs.com/websockets/gateways) |
| 4   | Eventos no Front-end            | Gerenciar eventos em tempo real com React e TanStack Query.              | Combine com Tailwind.                         |
| 5   | Projeto Prático                 | Criar um sistema de notificações em tempo real.                          | Faça com base nos estudos acima.             |

---

## Semana 7: Testes Automatizados
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | Testes Unitários com Vitest     | Escrever testes para funções e classes.                                 | [Vitest Docs](https://vitest.dev/)            |
| 2   | Testes de Integração            | Criar testes que validam a comunicação entre partes do sistema.          | Use APIs do NestJS.                           |
| 3   | Testes de Front-end com Cypress | Testar interfaces e fluxos de usuário.                                  | [Cypress Docs](https://www.cypress.io/)       |
| 4   | Cobertura de Testes             | Garantir qualidade com cobertura de código.                              | Use ferramentas como `nyc`.                  |
| 5   | Projeto Prático                 | Criar uma suíte de testes completa para um sistema já existente.         | Combine os estudos acima.                     |

---

## Semana 8: GraphQL e Performance
| Dia | Tópico                          | Descrição                                                                | Fonte de Referência                           |
|-----|--------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
| 1   | Introdução ao GraphQL           | Estrutura de consultas e criação de schemas.                            | [GraphQL Docs](https://graphql.org/)          |
| 2   | Apollo Server                   | Implementar APIs GraphQL com Apollo Server.                             | [Apollo Docs](https://www.apollographql.com/) |
| 3   | Otimização de Consultas         | Usar DataLoader para evitar N+1 queries.                                | [DataLoader](https://www.npmjs.com/package/dataloader) |
| 4   | Cache no Front-end              | Integrar GraphQL com Apollo Client no front-end.                        | [Apollo Client Docs](https://www.apollographql.com/docs/react/) |
| 5   | Projeto Prático                 | Criar uma API GraphQL e consumir no front-end com caching eficiente.     | Combine os aprendizados da semana.            |

---

## Semana 9: Performance e Escalabilidade

| Dia | Tópico                             | Descrição                                                              | Fonte de Referência                |
|-----|------------------------------------|------------------------------------------------------------------------|------------------------------------|
| 1   | Estratégias de Cache               | Implementar cache no back-end com Redis.                               | [Redis Docs](https://redis.io/docs/) |
| 2   | SSR e ISR no Next.js               | Diferenciar Server-Side Rendering (SSR) de Incremental Static Regeneration (ISR). | [Next.js Docs](https://nextjs.org/docs) |
| 3   | Paginação de Dados em Grande Escala | Criar paginação eficiente para APIs REST/GraphQL.                      | [REST Pagination Guide](https://restfulapi.net/) |
| 4   | Técnicas de Lazy Loading           | Carregar componentes e dados sob demanda no front-end.                 | [Lazy Loading Next.js](https://nextjs.org/docs/advanced-features/dynamic-import) |
| 5   | Projeto Prático                    | Otimizar uma aplicação existente para melhorar tempo de resposta e uso de memória. | Faça com base nos estudos acima.   |

---

## Semana 10: Real-time e WebSockets

| Dia | Tópico                            | Descrição                                                              | Fonte de Referência                |
|-----|-----------------------------------|------------------------------------------------------------------------|------------------------------------|
| 1   | Introdução a WebSockets           | Entender como criar conexões em tempo real com socket.io.              | [Socket.IO Docs](https://socket.io/docs/) |
| 2   | Implementação de WebSockets no NestJS | Configurar eventos e gateways no back-end com NestJS.                  | [NestJS WebSockets](https://docs.nestjs.com/websockets/gateways) |
| 3   | WebSockets no Front-end com Next.js | Consumir dados em tempo real e exibir atualizações ao usuário.         | [Socket.IO Front-end](https://socket.io/docs/client-api/) |
| 4   | Casos de Uso: Notificações em Tempo Real | Implementar notificações e chats em tempo real.                        | Faça com base nos estudos acima.   |
| 5   | Projeto Prático                   | Criar uma aplicação de chat ou feed com atualizações em tempo real.    | Faça com base nos estudos acima.   |

---

## Semana 11: Aprofundamento em DevOps

| Dia | Tópico                            | Descrição                                                              | Fonte de Referência                |
|-----|-----------------------------------|------------------------------------------------------------------------|------------------------------------|
| 1   | Configuração de Pipelines CI/CD   | Criar pipelines completas para deploy automatizado.                   | [GitHub Actions CI/CD](https://docs.github.com/en/actions) |
| 2   | Gerenciamento de Secrets          | Configurar variáveis sensíveis com .env e serviços como AWS Secrets Manager. | [AWS Secrets Manager Docs](https://aws.amazon.com/secrets-manager/) |
| 3   | Deploy em AWS com Elastic Beanstalk | Realizar deploy de uma aplicação em Elastic Beanstalk.                 | [AWS Elastic Beanstalk Docs](https://aws.amazon.com/elasticbeanstalk/) |
| 4   | Configuração de Logs e Monitoramento | Integrar Sentry ou Datadog para logs e alertas.                        | [Datadog Monitoring](https://www.datadoghq.com/) |
| 5   | Projeto Prático                   | Criar pipeline CI/CD e deploy automático de uma aplicação full-stack.  | Faça com base nos estudos acima.   |

---

## Semana 12: Consolidando Conhecimentos e Projeto Final

| Dia | Tópico                            | Descrição                                                              | Fonte de Referência                |
|-----|-----------------------------------|------------------------------------------------------------------------|------------------------------------|
| 1   | Revisão dos Conceitos Fundamentais | Revisar TypeScript, Next.js, NestJS e Prisma.                          | Reveja materiais usados até agora. |
| 2   | Boas Práticas no Desenvolvimento  | Consolidar DDD, Clean Code e boas práticas de versionamento.           | [Clean Code Book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) |
| 3   | Projeto Final: Planejamento       | Planejar um projeto full-stack, incluindo requisitos e arquitetura.    | Baseado em seus aprendizados.      |
| 4   | Projeto Final: Implementação      | Implementar o back-end do projeto com NestJS e Prisma.                 | Faça com base nos estudos acima.   |
| 5   | Projeto Final: Implementação      | Implementar o front-end com Next.js, Tailwind e shadcn/ui.             | Faça com base nos estudos acima.   |


## Considerações Finais
Este plano fornece uma base sólida para desenvolvimento full-stack TypeScript. Construa projetos práticos ao longo do caminho para consolidar os conceitos aprendidos e fortalecer seu portfólio. 🚀
