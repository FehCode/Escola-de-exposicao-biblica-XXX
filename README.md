# Sistema de Ensino de Exposição Bíblica

Um aplicativo full stack completo para ensinar Exposição Bíblica através de cursos estruturados e interativos.

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Banco de Dados**: SQLite com Prisma ORM
- **Autenticação**: NextAuth.js
- **UI Components**: shadcn/ui
- **Ícones**: Lucide React

## ✨ Funcionalidades

### Para Estudantes
- 📚 Acesso a cursos estruturados sobre Exposição Bíblica
- 📖 Lições em formato de texto com conteúdo rico
- 📊 Acompanhamento de progresso
- 🔍 Busca e filtros de cursos
- 👤 Perfil personalizado

### Para Instrutores
- 🎓 Criação e gerenciamento de cursos
- 📝 Adição de lições com conteúdo markdown
- 👥 Visualização de alunos inscritos
- 📈 Acompanhamento de progresso dos alunos

### Para Administradores
- 👨‍💼 Gerenciamento completo de usuários
- 🏫 Controle de cursos e lições
- 📊 Relatórios e estatísticas
- ⚙️ Configurações do sistema

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd app_crm
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"
```

4. **Configure o banco de dados**
```bash
npx prisma generate
npx prisma db push
```

5. **Popule o banco com dados iniciais**
```bash
npx tsx src/scripts/seed.ts
```

6. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

7. **Acesse o aplicativo**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 👥 Usuários de Teste

Após executar o seed, você pode fazer login com:

### Administrador
- **Email**: admin@exposicaobiblica.com
- **Senha**: admin123

### Instrutor
- **Email**: instructor@exposicaobiblica.com
- **Senha**: admin123

### Estudante
- **Email**: student@exposicaobiblica.com
- **Senha**: admin123

## 📚 Cursos Disponíveis

### 1. Fundamentos da Exposição Bíblica (Iniciante)
- **Duração**: 2h 30min
- **Lições**: 3 módulos
- **Conteúdo**: Introdução à exposição bíblica, gêneros literários, contexto histórico

### 2. Gêneros Literários Bíblicos (Intermediário)
- **Duração**: 4h 15min
- **Lições**: 1 módulo (expandível)
- **Conteúdo**: Narrativas bíblicas, poesia hebraica, interpretação de gêneros

### 3. Exposição de Textos Difíceis (Avançado)
- **Duração**: 6h 45min
- **Lições**: 1 módulo (expandível)
- **Conteúdo**: Técnicas para interpretar passagens complexas

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API Routes
│   ├── auth/              # Páginas de autenticação
│   ├── courses/           # Páginas de cursos
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   └── navigation.tsx    # Componente de navegação
├── lib/                  # Utilitários e configurações
│   ├── auth.ts           # Configuração NextAuth
│   ├── prisma.ts         # Cliente Prisma
│   └── utils.ts          # Utilitários gerais
└── scripts/              # Scripts utilitários
    └── seed.ts           # População do banco de dados
```

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run build            # Build para produção
npm run start            # Inicia servidor de produção

# Banco de dados
npx prisma studio        # Abre interface do Prisma Studio
npx prisma db push       # Sincroniza schema com banco
npx prisma generate      # Gera cliente Prisma

# Scripts
npx tsx src/scripts/seed.ts  # Popula banco com dados iniciais
```

## 🎨 Personalização

### Cores e Tema
O projeto usa Tailwind CSS com tema personalizado. Para modificar as cores, edite:
- `tailwind.config.ts` - Configuração do Tailwind
- `src/app/globals.css` - Variáveis CSS

### Componentes
Os componentes UI são baseados em shadcn/ui. Para adicionar novos componentes:
```bash
npx shadcn@latest add [component-name]
```

## 📝 Adicionando Conteúdo

### Criando um Novo Curso
1. Acesse como instrutor
2. Use a API `/api/courses` para criar cursos
3. Adicione lições via `/api/courses/[courseId]/lessons`

### Criando Lições
As lições suportam markdown para formatação rica:
- **Títulos**: `# Título`, `## Subtítulo`
- **Listas**: `- Item`, `1. Item numerado`
- **Ênfase**: `**negrito**`, `*itálico*`
- **Código**: `` `código` ``

## 🔒 Segurança

- Senhas são criptografadas com bcrypt
- Autenticação via NextAuth.js
- Controle de acesso baseado em roles
- Validação de dados em todas as APIs

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras Plataformas
- **Railway**: Suporte nativo a SQLite
- **Netlify**: Configuração manual necessária
- **DigitalOcean**: App Platform

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas:
- Abra uma issue no GitHub
- Entre em contato via email

---

**Desenvolvido com ❤️ para o ensino da Palavra de Deus**
