import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@exposicaobiblica.com' },
    update: {},
    create: {
      email: 'admin@exposicaobiblica.com',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Criar usuário instrutor
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@exposicaobiblica.com' },
    update: {},
    create: {
      email: 'instructor@exposicaobiblica.com',
      name: 'Professor Silva',
      password: hashedPassword,
      role: 'INSTRUCTOR',
    },
  })

  // Criar usuário estudante
  const student = await prisma.user.upsert({
    where: { email: 'student@exposicaobiblica.com' },
    update: {},
    create: {
      email: 'student@exposicaobiblica.com',
      name: 'João Silva',
      password: hashedPassword,
      role: 'STUDENT',
    },
  })

  // Criar curso 1: Fundamentos da Exposição Bíblica
  const course1 = await prisma.course.upsert({
    where: { id: 'course-1' },
    update: {},
    create: {
      id: 'course-1',
      title: 'Fundamentos da Exposição Bíblica',
      description: 'Aprenda os princípios básicos para interpretar e expor textos bíblicos de forma eficaz. Este curso aborda os fundamentos essenciais da hermenêutica bíblica e técnicas de exposição.',
      duration: 150, // 2h 30min
      level: 'BEGINNER',
      isPublished: true,
    },
  })

  // Lições do curso 1
  const lesson1_1 = await prisma.lesson.create({
    data: {
      title: 'Introdução à Exposição Bíblica',
      content: `# Introdução à Exposição Bíblica

## O que é Exposição Bíblica?

A exposição bíblica é o processo de extrair o significado original de um texto bíblico e aplicá-lo de forma relevante ao contexto atual. É uma forma de pregação que se concentra na interpretação cuidadosa e na apresentação clara da Palavra de Deus.

## Objetivos da Exposição Bíblica

1. **Interpretação Precisa**: Entender o que o texto significava originalmente
2. **Aplicação Relevante**: Conectar a verdade bíblica com a vida atual
3. **Comunicação Clara**: Apresentar a mensagem de forma compreensível

## Princípios Fundamentais

### 1. Contexto é Tudo
- Contexto histórico
- Contexto cultural
- Contexto literário
- Contexto teológico

### 2. A Escritura Interpreta a Escritura
- Usar passagens relacionadas
- Considerar o ensino bíblico como um todo
- Evitar contradições

### 3. Aplicação Prática
- Conectar com a vida real
- Oferecer orientação prática
- Manter relevância contemporânea

## Benefícios da Exposição Bíblica

- **Precisão Doutrinária**: Evita interpretações errôneas
- **Relevância**: Conecta com questões atuais
- **Autoridade**: Baseia-se na autoridade da Escritura
- **Transformação**: Promove mudança de vida

No próximo módulo, exploraremos os diferentes tipos de gêneros literários bíblicos e como interpretá-los adequadamente.`,
      order: 1,
      duration: 30,
      courseId: course1.id,
    },
  })

  const lesson1_2 = await prisma.lesson.create({
    data: {
      title: 'Gêneros Literários Bíblicos',
      content: `# Gêneros Literários Bíblicos

## Por que os Gêneros Importam?

Cada gênero literário na Bíblia tem suas próprias convenções e regras de interpretação. Entender o gênero é essencial para uma interpretação correta.

## Principais Gêneros Bíblicos

### 1. Narrativa Histórica
**Exemplos**: Gênesis, Êxodo, Evangelhos, Atos

**Características**:
- Conta eventos históricos
- Apresenta personagens e suas ações
- Tem um enredo com início, meio e fim
- Usa diálogos e descrições

**Como Interpretar**:
- Identificar o propósito da narrativa
- Observar padrões e repetições
- Notar contrastes e comparações
- Buscar o significado teológico

### 2. Poesia
**Exemplos**: Salmos, Provérbios, Cânticos

**Características**:
- Linguagem figurada e metafórica
- Paralelismo hebraico
- Uso de imagens e símbolos
- Expressão emocional

**Como Interpretar**:
- Identificar o tipo de paralelismo
- Reconhecer figuras de linguagem
- Considerar o contexto emocional
- Buscar o significado literal por trás da metáfora

### 3. Lei
**Exemplos**: Levítico, Deuteronômio

**Características**:
- Comandos diretos
- Estabelece padrões de comportamento
- Revela o caráter de Deus
- Aponta para Cristo

**Como Interpretar**:
- Distinguir entre lei moral, cerimonial e civil
- Buscar o princípio subjacente
- Considerar o contexto histórico
- Aplicar através da lente do Novo Testamento

### 4. Profecia
**Exemplos**: Isaías, Jeremias, Apocalipse

**Características**:
- Linguagem apocalíptica
- Uso de símbolos e imagens
- Mistura de passado, presente e futuro
- Foco na soberania de Deus

**Como Interpretar**:
- Identificar o contexto histórico
- Reconhecer cumprimentos
- Distinguir entre literal e simbólico
- Buscar o significado teológico

### 5. Epístolas (Cartas)
**Exemplos**: Romanos, Coríntios, Efésios

**Características**:
- Escritas para situações específicas
- Argumentação lógica
- Instrução doutrinária
- Aplicação prática

**Como Interpretar**:
- Identificar o problema ou questão
- Seguir o argumento do autor
- Distinguir entre cultural e universal
- Aplicar princípios atemporais

## Exercício Prático

Leia Salmo 23 e identifique:
1. O tipo de paralelismo usado
2. As figuras de linguagem presentes
3. O significado emocional
4. A aplicação para hoje

No próximo módulo, aprenderemos sobre o contexto histórico e cultural.`,
      order: 2,
      duration: 45,
      courseId: course1.id,
    },
  })

  const lesson1_3 = await prisma.lesson.create({
    data: {
      title: 'Contexto Histórico e Cultural',
      content: `# Contexto Histórico e Cultural

## A Importância do Contexto

O contexto histórico e cultural é fundamental para a interpretação bíblica. Sem ele, corremos o risco de aplicar incorretamente as verdades bíblicas.

## Elementos do Contexto Histórico

### 1. Contexto Geográfico
**Exemplos**:
- Jerusalém como centro religioso
- Mar da Galileia para pesca
- Deserto para provação

**Como Aplicar**:
- Pesquisar mapas bíblicos
- Entender a geografia da época
- Considerar distâncias e relevo

### 2. Contexto Político
**Exemplos**:
- Domínio romano nos tempos de Jesus
- Reino dividido de Israel
- Exílio babilônico

**Como Aplicar**:
- Estudar a história política
- Entender as relações de poder
- Considerar as implicações para o texto

### 3. Contexto Religioso
**Exemplos**:
- Judaísmo do primeiro século
- Religiões cananéias
- Sincretismo religioso

**Como Aplicar**:
- Pesquisar práticas religiosas
- Entender crenças contemporâneas
- Identificar contrastes e confrontos

### 4. Contexto Cultural
**Exemplos**:
- Costumes de casamento
- Práticas de hospitalidade
- Hierarquias sociais

**Como Aplicar**:
- Estudar costumes da época
- Entender valores culturais
- Aplicar princípios universais

## Ferramentas de Pesquisa

### 1. Comentários Bíblicos
- Fornecem contexto histórico
- Explicam costumes culturais
- Apresentam diferentes interpretações

### 2. Dicionários Bíblicos
- Definem termos técnicos
- Explicam conceitos culturais
- Fornecem informações históricas

### 3. Atlas Bíblicos
- Mostram geografia antiga
- Ilustram rotas e viagens
- Contextualizam eventos

### 4. Arqueologia Bíblica
- Confirma eventos históricos
- Ilustra costumes antigos
- Fornece evidências materiais

## Exemplo Prático: João 4

**Contexto Histórico**:
- Jesus viaja pela Samaria
- Judeus e samaritanos eram inimigos
- Mulher samaritana no poço ao meio-dia

**Contexto Cultural**:
- Mulheres não conversavam com estranhos
- Judeus evitavam samaritanos
- Poço era local de encontro social

**Aplicação**:
- Jesus quebra barreiras culturais
- Evangelho é para todos os povos
- Deus busca adoradores em espírito e verdade

## Exercício

Escolha uma passagem bíblica e pesquise:
1. O contexto histórico
2. O contexto cultural
3. Como isso afeta a interpretação
4. Como aplicar hoje

No próximo módulo, aprenderemos sobre princípios de hermenêutica.`,
      order: 3,
      duration: 40,
      courseId: course1.id,
    },
  })

  // Criar curso 2: Gêneros Literários Bíblicos
  const course2 = await prisma.course.upsert({
    where: { id: 'course-2' },
    update: {},
    create: {
      id: 'course-2',
      title: 'Gêneros Literários Bíblicos',
      description: 'Explore os diferentes gêneros literários da Bíblia e aprenda como interpretá-los corretamente. Este curso aprofunda a compreensão de narrativas, poesia, profecia e epístolas.',
      duration: 255, // 4h 15min
      level: 'INTERMEDIATE',
      isPublished: true,
    },
  })

  // Lições do curso 2
  const lesson2_1 = await prisma.lesson.create({
    data: {
      title: 'Narrativas Bíblicas',
      content: `# Narrativas Bíblicas

## Características das Narrativas

As narrativas bíblicas são histórias que revelam a verdade sobre Deus, a humanidade e o relacionamento entre eles. Elas não são apenas histórias, mas teologia em forma de história.

## Elementos da Narrativa

### 1. Personagens
- **Protagonistas**: Personagens principais
- **Antagonistas**: Oponentes
- **Personagens secundários**: Apoio à trama
- **Deus**: Sempre presente, mesmo quando não mencionado

### 2. Enredo
- **Exposição**: Contexto inicial
- **Conflito**: Problema ou desafio
- **Clímax**: Ponto de virada
- **Resolução**: Solução ou conclusão

### 3. Cenário
- **Tempo**: Quando a história acontece
- **Lugar**: Onde a história acontece
- **Contexto**: Circunstâncias históricas

## Como Interpretar Narrativas

### 1. Identificar o Propósito
- Que verdade sobre Deus é revelada?
- Que princípio é ensinado?
- Como isso se relaciona com a história da salvação?

### 2. Observar Padrões
- Repetições de palavras ou frases
- Contrastes entre personagens
- Paralelos com outras narrativas

### 3. Notar Detalhes
- Diálogos revelam caráter
- Ações mostram valores
- Resultados demonstram princípios

## Exemplo: A História de José (Gênesis 37-50)

### Contexto
- José, filho favorito de Jacó
- Vendido como escravo pelos irmãos
- Elevado no Egito
- Reconciliado com a família

### Propósito Teológico
- **Soberania de Deus**: Deus usa o mal para o bem
- **Providência**: Deus está no controle
- **Perdão**: Poder transformador do perdão
- **Plano Redentor**: Preservação do povo de Deus

### Aplicação
- Confiar na soberania de Deus
- Praticar perdão
- Reconhecer o plano maior de Deus

## Exercício Prático

Leia a história de Rute e identifique:
1. Os personagens principais
2. O conflito central
3. Como Deus age na história
4. O propósito teológico
5. Aplicação para hoje

No próximo módulo, estudaremos a poesia hebraica.`,
      order: 1,
      duration: 50,
      courseId: course2.id,
    },
  })

  // Criar curso 3: Exposição de Textos Difíceis
  const course3 = await prisma.course.upsert({
    where: { id: 'course-3' },
    update: {},
    create: {
      id: 'course-3',
      title: 'Exposição de Textos Difíceis',
      description: 'Técnicas avançadas para expor passagens complexas e controversas da Bíblia. Aprenda a lidar com textos difíceis de forma responsável e teologicamente sólida.',
      duration: 405, // 6h 45min
      level: 'ADVANCED',
      isPublished: true,
    },
  })

  // Lições do curso 3
  const lesson3_1 = await prisma.lesson.create({
    data: {
      title: 'Identificando Textos Difíceis',
      content: `# Identificando Textos Difíceis

## O que Torna um Texto Difícil?

Um texto bíblico pode ser considerado "difícil" por várias razões. Identificar a natureza da dificuldade é o primeiro passo para uma interpretação adequada.

## Tipos de Dificuldades

### 1. Dificuldades Textuais
**Problemas**:
- Variantes manuscritas
- Palavras obscuras ou raras
- Textos corrompidos
- Lacunas no texto

**Soluções**:
- Consultar diferentes traduções
- Usar comentários técnicos
- Estudar crítica textual
- Reconhecer limitações

### 2. Dificuldades Históricas
**Problemas**:
- Eventos não confirmados arqueologicamente
- Números aparentemente exagerados
- Cronologias conflitantes
- Costumes estranhos

**Soluções**:
- Pesquisar evidências arqueológicas
- Considerar gêneros literários
- Entender hiperboles antigas
- Distinguir entre literal e simbólico

### 3. Dificuldades Culturais
**Problemas**:
- Costumes estranhos ao mundo moderno
- Valores culturais diferentes
- Práticas que parecem injustas
- Linguagem ofensiva

**Soluções**:
- Estudar contexto cultural
- Identificar princípios universais
- Separar cultural do atemporal
- Aplicar com sensibilidade

### 4. Dificuldades Teológicas
**Problemas**:
- Aparentes contradições
- Doutrinas complexas
- Mistérios divinos
- Tensões teológicas

**Soluções**:
- Estudar teologia sistemática
- Reconhecer paradoxos legítimos
- Aceitar mistérios
- Manter humildade

## Exemplos de Textos Difíceis

### 1. Josué 6:17-21 - Destruição de Jericó
**Dificuldade**: Aparente genocídio divino

**Contexto**:
- Guerra santa no Antigo Testamento
- Juízo divino sobre pecado
- Preservação de Raabe e família

**Princípio**: Deus é justo e misericordioso

### 2. Salmo 137:9 - Bebês contra rochas
**Dificuldade**: Violência aparente

**Contexto**:
- Poesia de lamento
- Linguagem hiperbólica
- Expressão de dor nacional

**Princípio**: Deus ouve o clamor dos oprimidos

### 3. 1 Timóteo 2:12 - Mulheres no ministério
**Dificuldade**: Aparente discriminação

**Contexto**:
- Situação específica em Éfeso
- Problemas com falsos mestres
- Princípio de ordem na igreja

**Princípio**: Aplicar com sabedoria cultural

## Ferramentas para Textos Difíceis

### 1. Comentários Especializados
- Comentários técnicos
- Comentários pastorais
- Comentários históricos

### 2. Dicionários e Enciclopédias
- Definições precisas
- Contexto histórico
- Informações culturais

### 3. Estudos de Palavras
- Significado original
- Uso no contexto
- Desenvolvimento semântico

### 4. Teologia Sistemática
- Doutrinas relacionadas
- Harmonia bíblica
- Princípios teológicos

## Exercício

Escolha um texto difícil e:
1. Identifique o tipo de dificuldade
2. Pesquise o contexto
3. Consulte comentários
4. Formule uma interpretação responsável

No próximo módulo, aprenderemos técnicas específicas de interpretação.`,
      order: 1,
      duration: 60,
      courseId: course3.id,
    },
  })

  console.log('✅ Seed concluído com sucesso!')
  console.log('Usuários criados:', { admin, instructor, student })
  console.log('Cursos criados:', { course1, course2, course3 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 