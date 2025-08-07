"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  Trophy
} from "lucide-react"
import Link from "next/link"

const courseContent = {
  title: "Gêneros Literários Bíblicos",
  description: "Explore os diferentes gêneros literários da Bíblia e como interpretá-los corretamente.",
  lessons: [
    {
      id: 1,
      title: "Introdução aos Gêneros Literários",
      content: `
        <h2>O que são Gêneros Literários?</h2>
        <p>Os gêneros literários são categorias ou tipos de escrita que compartilham características similares. A Bíblia contém diversos gêneros literários, cada um com suas próprias convenções e regras de interpretação.</p>
        
        <h3>Por que os Gêneros são Importantes?</h3>
        <ul>
          <li><strong>Interpretação Correta:</strong> Cada gênero deve ser interpretado segundo suas próprias regras</li>
          <li><strong>Compreensão Adequada:</strong> Evita interpretações errôneas baseadas em gêneros incorretos</li>
          <li><strong>Respeito ao Autor:</strong> Honra a intenção original do autor bíblico</li>
          <li><strong>Hermenêutica Sólida:</strong> Base para uma interpretação bíblica consistente</li>
        </ul>
        
        <h3>Principais Categorias de Gêneros</h3>
        <ul>
          <li><strong>Narrativa:</strong> Histórias e relatos históricos</li>
          <li><strong>Poesia:</strong> Textos poéticos e líricos</li>
          <li><strong>Profecia:</strong> Mensagens proféticas e apocalípticas</li>
          <li><strong>Epístolas:</strong> Cartas e correspondências</li>
          <li><strong>Sabedoria:</strong> Literatura sapiencial e proverbial</li>
          <li><strong>Lei:</strong> Códigos legais e regulamentações</li>
        </ul>
      `,
      duration: 20
    },
    {
      id: 2,
      title: "Narrativa Bíblica",
      content: `
        <h2>Entendendo a Narrativa Bíblica</h2>
        <p>A narrativa é o gênero literário mais comum na Bíblia. Inclui histórias, biografias, relatos históricos e narrativas teológicas que comunicam verdades através de eventos e personagens.</p>
        
        <h3>Características da Narrativa Bíblica</h3>
        <ul>
          <li><strong>Estrutura:</strong> Apresentação, conflito, clímax, resolução</li>
          <li><strong>Personagens:</strong> Protagonistas, antagonistas, personagens secundários</li>
          <li><strong>Cenário:</strong> Tempo, lugar e contexto histórico</li>
          <li><strong>Enredo:</strong> Sequência de eventos que formam a história</li>
          <li><strong>Tema:</strong> Mensagem central que a narrativa comunica</li>
        </ul>
        
        <h3>Exemplos de Narrativa Bíblica</h3>
        <ul>
          <li><strong>Gênesis:</strong> Criação, patriarcas, história de José</li>
          <li><strong>Êxodo:</strong> Libertação do Egito, peregrinação no deserto</li>
          <li><strong>Evangelhos:</strong> Vida, morte e ressurreição de Jesus</li>
          <li><strong>Atos:</strong> História da igreja primitiva</li>
        </ul>
        
        <h3>Princípios de Interpretação</h3>
        <ul>
          <li>Identificar o propósito teológico da narrativa</li>
          <li>Reconhecer padrões literários e estruturas</li>
          <li>Considerar o contexto histórico e cultural</li>
          <li>Buscar a mensagem central, não apenas detalhes</li>
          <li>Evitar alegorização excessiva</li>
        </ul>
      `,
      duration: 25
    },
    {
      id: 3,
      title: "Poesia Bíblica",
      content: `
        <h2>A Beleza da Poesia Bíblica</h2>
        <p>A poesia bíblica é caracterizada por linguagem figurada, paralelismo hebraico e expressão emocional. É encontrada principalmente nos Salmos, mas também em outras partes da Bíblia.</p>
        
        <h3>Características da Poesia Bíblica</h3>
        <ul>
          <li><strong>Paralelismo:</strong> Repetição de ideias em estruturas paralelas</li>
          <li><strong>Linguagem Figurada:</strong> Metáforas, símiles, personificação</li>
          <li><strong>Expressão Emocional:</strong> Louvor, lamento, confiança, arrependimento</li>
          <li><strong>Estrutura Quiasmática:</strong> Padrões A-B-B-A de organização</li>
          <li><strong>Hipérbole:</strong> Exagero para enfatizar pontos</li>
        </ul>
        
        <h3>Tipos de Paralelismo</h3>
        <ul>
          <li><strong>Sinônimo:</strong> Segunda linha repete a ideia da primeira (Sl 19:1)</li>
          <li><strong>Antítese:</strong> Segunda linha contrasta com a primeira (Pv 10:1)</li>
          <li><strong>Sintético:</strong> Segunda linha completa a primeira (Sl 1:1-2)</li>
          <li><strong>Climático:</strong> Segunda linha intensifica a primeira (Sl 29:1)</li>
        </ul>
        
        <h3>Exemplos de Poesia Bíblica</h3>
        <ul>
          <li><strong>Salmos:</strong> Oração, louvor, lamento, sabedoria</li>
          <li><strong>Cantares:</strong> Poesia de amor e romance</li>
          <li><strong>Lamentações:</strong> Lamento pela destruição de Jerusalém</li>
          <li><strong>Jó:</strong> Poesia sapiencial e filosófica</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 4,
      title: "Profecia Bíblica",
      content: `
        <h2>O Mundo da Profecia Bíblica</h2>
        <p>A profecia bíblica é um gênero complexo que inclui mensagens de julgamento, esperança, consolo e revelação do futuro. Os profetas eram porta-vozes de Deus para seu povo.</p>
        
        <h3>Características da Profecia</h3>
        <ul>
          <li><strong>Mensagem Divina:</strong> Palavra de Deus através de profetas</li>
          <li><strong>Contexto Histórico:</strong> Situação específica que motivou a profecia</li>
          <li><strong>Linguagem Figurada:</strong> Símbolos, visões, metáforas</li>
          <li><strong>Dimensão Temporal:</strong> Passado, presente e futuro</li>
          <li><strong>Propósito Pastoral:</strong> Chamado ao arrependimento e esperança</li>
        </ul>
        
        <h3>Tipos de Profecia</h3>
        <ul>
          <li><strong>Profecia Condicional:</strong> Depende da resposta do povo (Jr 18:7-10)</li>
          <li><strong>Profecia Incondicional:</strong> Cumprimento garantido (Is 9:6-7)</li>
          <li><strong>Profecia de Julgamento:</strong> Advertências sobre consequências</li>
          <li><strong>Profecia de Esperança:</strong> Promessas de restauração</li>
          <li><strong>Profecia Messiânica:</strong> Sobre o Messias vindouro</li>
        </ul>
        
        <h3>Princípios de Interpretação</h3>
        <ul>
          <li>Considerar o contexto histórico original</li>
          <li>Distinguir entre cumprimento histórico e escatológico</li>
          <li>Reconhecer linguagem figurada e símbolos</li>
          <li>Buscar o propósito pastoral da mensagem</li>
          <li>Relacionar com o cumprimento em Cristo</li>
        </ul>
      `,
      duration: 35
    },
    {
      id: 5,
      title: "Epístolas e Cartas",
      content: `
        <h2>As Cartas do Novo Testamento</h2>
        <p>As epístolas são cartas escritas para comunidades específicas ou indivíduos, abordando problemas, ensinando doutrina e oferecendo orientação pastoral. São a principal fonte de teologia sistemática do Novo Testamento.</p>
        
        <h3>Características das Epístolas</h3>
        <ul>
          <li><strong>Estrutura:</strong> Saudação, ação de graças, corpo, conclusão</li>
          <li><strong>Contexto Específico:</strong> Escritas para situações particulares</li>
          <li><strong>Linguagem Argumentativa:</strong> Desenvolvimento lógico de ideias</li>
          <li><strong>Orientação Pastoral:</strong> Aplicação prática da doutrina</li>
          <li><strong>Linguagem Figurada:</strong> Metáforas e ilustrações</li>
        </ul>
        
        <h3>Tipos de Epístolas</h3>
        <ul>
          <li><strong>Epístolas Paulinas:</strong> Romanos, Coríntios, Gálatas, etc.</li>
          <li><strong>Epístolas Gerais:</strong> Tiago, Pedro, João, Judas</li>
          <li><strong>Epístolas Pastorais:</strong> 1-2 Timóteo, Tito</li>
          <li><strong>Epístolas de Cativeiro:</strong> Efésios, Filipenses, Colossenses, Filemom</li>
        </ul>
        
        <h3>Princípios de Interpretação</h3>
        <ul>
          <li>Identificar o problema ou situação que motivou a carta</li>
          <li>Reconhecer a estrutura argumentativa</li>
          <li>Distinguir entre ensino geral e específico</li>
          <li>Considerar o contexto cultural e histórico</li>
          <li>Buscar aplicações universais em ensinos específicos</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 6,
      title: "Literatura Sapiencial",
      content: `
        <h2>A Sabedoria da Literatura Bíblica</h2>
        <p>A literatura sapiencial busca transmitir sabedoria prática para a vida diária. Inclui provérbios, reflexões filosóficas e conselhos práticos baseados na observação da vida e na revelação divina.</p>
        
        <h3>Características da Literatura Sapiencial</h3>
        <ul>
          <li><strong>Natureza Prática:</strong> Foco na aplicação da sabedoria</li>
          <li><strong>Observação da Vida:</strong> Baseada na experiência humana</li>
          <li><strong>Linguagem Figurada:</strong> Metáforas, símiles, comparações</li>
          <li><strong>Estrutura Paralela:</strong> Contrastes e comparações</li>
          <li><strong>Fundamento Teológico:</strong> Sabedoria baseada no temor do Senhor</li>
        </ul>
        
        <h3>Livros Sapienciais</h3>
        <ul>
          <li><strong>Provérbios:</strong> Máximas práticas para a vida</li>
          <li><strong>Jó:</strong> Reflexão sobre o sofrimento e a justiça</li>
          <li><strong>Eclesiastes:</strong> Reflexão sobre o sentido da vida</li>
          <li><strong>Cantares:</strong> Poesia de amor e relacionamento</li>
          <li><strong>Salmos Sapienciais:</strong> Salmos que ensinam sabedoria</li>
        </ul>
        
        <h3>Princípios de Interpretação</h3>
        <ul>
          <li>Reconhecer a natureza geral dos provérbios</li>
          <li>Considerar o contexto cultural</li>
          <li>Distinguir entre promessas e princípios</li>
          <li>Buscar o princípio universal por trás do específico</li>
          <li>Relacionar com a sabedoria de Cristo</li>
        </ul>
      `,
      duration: 25
    },
    {
      id: 7,
      title: "Lei e Códigos Legais",
      content: `
        <h2>A Lei na Bíblia</h2>
        <p>A lei bíblica inclui códigos legais, regulamentações e instruções que governavam a vida do povo de Israel. Embora não sejamos mais obrigados pela lei mosaica, ela revela o caráter de Deus e princípios morais permanentes.</p>
        
        <h3>Tipos de Lei Bíblica</h3>
        <ul>
          <li><strong>Lei Moral:</strong> Princípios éticos permanentes (Decálogo)</li>
          <li><strong>Lei Cerimonial:</strong> Rituais e sacrifícios (Levítico)</li>
          <li><strong>Lei Civil:</strong> Regulamentações para a sociedade israelita</li>
          <li><strong>Lei de Pureza:</strong> Regras sobre limpeza e santidade</li>
        </ul>
        
        <h3>Características da Lei</h3>
        <ul>
          <li><strong>Revelação do Caráter de Deus:</strong> Mostra o que Deus valoriza</li>
          <li><strong>Proteção do Povo:</strong> Preserva a saúde e bem-estar</li>
          <li><strong>Separação:</strong> Distingue Israel das nações</li>
          <li><strong>Preparação:</strong> Prepara para a vinda de Cristo</li>
          <li><strong>Educação:</strong> Ensina sobre pecado e necessidade de redenção</li>
        </ul>
        
        <h3>Princípios de Interpretação</h3>
        <ul>
          <li>Distinguir entre lei moral, cerimonial e civil</li>
          <li>Buscar o princípio por trás da regulamentação</li>
          <li>Considerar o contexto histórico e cultural</li>
          <li>Relacionar com o cumprimento em Cristo</li>
          <li>Aplicar princípios morais permanentes</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 8,
      title: "Apocalipse e Literatura Apocalíptica",
      content: `
        <h2>O Gênero Apocalíptico</h2>
        <p>A literatura apocalíptica usa linguagem altamente simbólica para revelar verdades sobre o presente e o futuro. É encontrada principalmente em Daniel e Apocalipse, mas também em outras partes da Bíblia.</p>
        
        <h3>Características da Literatura Apocalíptica</h3>
        <ul>
          <li><strong>Linguagem Simbólica:</strong> Números, cores, animais, objetos</li>
          <li><strong>Visões e Sonhos:</strong> Revelações através de experiências sobrenaturais</li>
          <li><strong>Dualismo:</strong> Contraste entre bem e mal, presente e futuro</li>
          <li><strong>Determinismo:</strong> Deus controla o curso da história</li>
          <li><strong>Esperança Escatológica:</strong> Foco na vitória final de Deus</li>
        </ul>
        
        <h3>Elementos Simbólicos Comuns</h3>
        <ul>
          <li><strong>Números:</strong> 7 (perfeição), 12 (povo de Deus), 666 (imperfeição)</li>
          <li><strong>Cores:</strong> Branco (pureza), vermelho (sangue), preto (luto)</li>
          <li><strong>Animais:</strong> Cordeiro (Cristo), leão (poder), dragão (Satanás)</li>
          <li><strong>Objetos:</strong> Espada (palavra), candelabro (igreja), trono (autoridade)</li>
        </ul>
        
        <h3>Princípios de Interpretação</h3>
        <ul>
          <li>Reconhecer a natureza simbólica da linguagem</li>
          <li>Buscar o significado histórico e escatológico</li>
          <li>Considerar o contexto de perseguição e sofrimento</li>
          <li>Relacionar símbolos com o resto da Escritura</li>
          <li>Focar na mensagem central de esperança e vitória</li>
        </ul>
      `,
      duration: 35
    },
    {
      id: 9,
      title: "Parábolas e Linguagem Figurada",
      content: `
        <h2>As Parábolas de Jesus</h2>
        <p>As parábolas são histórias breves que ilustram verdades espirituais através de situações da vida cotidiana. Jesus usou parábolas extensivamente para ensinar sobre o reino de Deus.</p>
        
        <h3>Características das Parábolas</h3>
        <ul>
          <li><strong>Histórias Simples:</strong> Baseadas na vida cotidiana</li>
          <li><strong>Um Ponto Principal:</strong> Cada parábola tem uma mensagem central</li>
          <li><strong>Linguagem Figurada:</strong> Usa comparações e analogias</li>
          <li><strong>Convite à Reflexão:</strong> Requer interpretação e aplicação</li>
          <li><strong>Revelação Progressiva:</strong> Verdades escondidas para alguns</li>
        </ul>
        
        <h3>Tipos de Parábolas</h3>
        <ul>
          <li><strong>Parábolas do Reino:</strong> Sobre a natureza do reino de Deus</li>
          <li><strong>Parábolas de Julgamento:</strong> Sobre responsabilidade e consequências</li>
          <li><strong>Parábolas de Graça:</strong> Sobre o amor e perdão de Deus</li>
          <li><strong>Parábolas de Discipulado:</strong> Sobre seguir a Cristo</li>
        </ul>
        
        <h3>Princípios de Interpretação</h3>
        <ul>
          <li>Identificar o contexto histórico e cultural</li>
          <li>Buscar o ponto principal da parábola</li>
          <li>Evitar alegorização excessiva</li>
          <li>Considerar a audiência original</li>
          <li>Aplicar a mensagem central à vida atual</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 10,
      title: "Integrando os Gêneros",
      content: `
        <h2>Aplicando o Conhecimento dos Gêneros</h2>
        <p>Agora que estudamos os principais gêneros literários da Bíblia, é importante aprender a integrar esse conhecimento para uma interpretação mais precisa e rica das Escrituras.</p>
        
        <h3>Princípios de Integração</h3>
        <ul>
          <li><strong>Identificação do Gênero:</strong> Sempre identificar o gênero antes de interpretar</li>
          <li><strong>Aplicação das Regras:</strong> Usar as regras apropriadas para cada gênero</li>
          <li><strong>Contexto Múltiplo:</strong> Considerar contexto histórico, literário e teológico</li>
          <li><strong>Harmonia Bíblica:</strong> Buscar consistência com toda a Escritura</li>
          <li><strong>Aplicação Prática:</strong> Conectar interpretação com vida cristã</li>
        </ul>
        
        <h3>Exemplos Práticos</h3>
        <ul>
          <li><strong>Salmos + Narrativa:</strong> Como os salmos iluminam eventos históricos</li>
          <li><strong>Profecia + Evangelhos:</strong> Como profecias se cumprem em Cristo</li>
          <li><strong>Lei + Graça:</strong> Como a lei prepara para o evangelho</li>
          <li><strong>Parábolas + Epístolas:</strong> Como parábolas ilustram doutrina</li>
        </ul>
        
        <h3>Benefícios da Abordagem por Gêneros</h3>
        <ul>
          <li>Interpretação mais precisa e contextualizada</li>
          <li>Maior apreciação pela riqueza literária da Bíblia</li>
          <li>Respeito pela intenção original dos autores</li>
          <li>Base sólida para pregação e ensino</li>
          <li>Proteção contra interpretações errôneas</li>
        </ul>
        
        <h3>Próximos Passos</h3>
        <p>Continue praticando a identificação e interpretação dos gêneros literários. Use comentários que abordem questões de gênero e participe de estudos bíblicos que considerem essas distinções. Lembre-se: o objetivo não é apenas conhecimento acadêmico, mas uma compreensão mais profunda da Palavra de Deus para transformação de vidas.</p>
      `,
      duration: 20
    }
  ]
}

const questions = [
  {
    id: 1,
    question: "Qual é o gênero literário mais comum na Bíblia?",
    options: [
      "Poesia",
      "Narrativa",
      "Profecia",
      "Epístolas"
    ],
    correctAnswer: 1,
    explanation: "A narrativa é o gênero literário mais comum na Bíblia, incluindo histórias, biografias e relatos históricos."
  },
  {
    id: 2,
    question: "O que caracteriza o paralelismo sinônimo na poesia hebraica?",
    options: [
      "A segunda linha contrasta com a primeira",
      "A segunda linha repete a ideia da primeira",
      "A segunda linha completa a primeira",
      "A segunda linha intensifica a primeira"
    ],
    correctAnswer: 1,
    explanation: "No paralelismo sinônimo, a segunda linha repete a ideia da primeira com palavras diferentes."
  },
  {
    id: 3,
    question: "Qual tipo de profecia depende da resposta do povo?",
    options: [
      "Profecia incondicional",
      "Profecia condicional",
      "Profecia messiânica",
      "Profecia apocalíptica"
    ],
    correctAnswer: 1,
    explanation: "A profecia condicional depende da resposta do povo - se se arrependerem, o julgamento pode ser evitado."
  },
  {
    id: 4,
    question: "Qual é a estrutura típica de uma epístola do Novo Testamento?",
    options: [
      "Introdução, conclusão, corpo",
      "Saudação, ação de graças, corpo, conclusão",
      "Tema, desenvolvimento, aplicação",
      "Problema, solução, resultado"
    ],
    correctAnswer: 1,
    explanation: "As epístolas seguem a estrutura: saudação, ação de graças, corpo da carta e conclusão."
  },
  {
    id: 5,
    question: "Qual livro é um exemplo de literatura sapiencial?",
    options: [
      "Gênesis",
      "Salmos",
      "Provérbios",
      "Isaías"
    ],
    correctAnswer: 2,
    explanation: "Provérbios é um exemplo clássico de literatura sapiencial, contendo máximas práticas para a vida."
  },
  {
    id: 6,
    question: "Qual tipo de lei bíblica inclui rituais e sacrifícios?",
    options: [
      "Lei moral",
      "Lei cerimonial",
      "Lei civil",
      "Lei de pureza"
    ],
    correctAnswer: 1,
    explanation: "A lei cerimonial inclui rituais, sacrifícios e práticas religiosas específicas."
  },
  {
    id: 7,
    question: "O que o número 7 representa na literatura apocalíptica?",
    options: [
      "Imperfeição",
      "Perfeição",
      "Julgamento",
      "Graça"
    ],
    correctAnswer: 1,
    explanation: "Na literatura apocalíptica, o número 7 representa perfeição e completude."
  },
  {
    id: 8,
    question: "Qual característica NÃO é típica das parábolas de Jesus?",
    options: [
      "Histórias simples baseadas na vida cotidiana",
      "Um ponto principal",
      "Linguagem figurada",
      "Múltiplos pontos principais"
    ],
    correctAnswer: 3,
    explanation: "As parábolas têm um ponto principal, não múltiplos pontos principais."
  },
  {
    id: 9,
    question: "Qual gênero literário usa linguagem altamente simbólica?",
    options: [
      "Narrativa",
      "Epístolas",
      "Literatura apocalíptica",
      "Literatura sapiencial"
    ],
    correctAnswer: 2,
    explanation: "A literatura apocalíptica usa linguagem altamente simbólica para comunicar verdades espirituais."
  },
  {
    id: 10,
    question: "Qual princípio é fundamental para interpretar qualquer gênero literário?",
    options: [
      "Alegorização",
      "Identificação do gênero",
      "Interpretação literal",
      "Aplicação direta"
    ],
    correctAnswer: 1,
    explanation: "Identificar o gênero literário é fundamental antes de aplicar as regras apropriadas de interpretação."
  },
  {
    id: 11,
    question: "Qual livro contém principalmente poesia bíblica?",
    options: [
      "Gênesis",
      "Salmos",
      "Atos",
      "Apocalipse"
    ],
    correctAnswer: 1,
    explanation: "O livro de Salmos contém principalmente poesia bíblica com paralelismo hebraico."
  },
  {
    id: 12,
    question: "Qual característica é típica da literatura sapiencial?",
    options: [
      "Foco na história",
      "Natureza prática",
      "Linguagem profética",
      "Estrutura epistolar"
    ],
    correctAnswer: 1,
    explanation: "A literatura sapiencial tem natureza prática, focando na aplicação da sabedoria na vida diária."
  },
  {
    id: 13,
    question: "Qual elemento NÃO é característico das epístolas?",
    options: [
      "Contexto específico",
      "Linguagem argumentativa",
      "Orientação pastoral",
      "Linguagem altamente simbólica"
    ],
    correctAnswer: 3,
    explanation: "As epístolas não usam linguagem altamente simbólica, mas linguagem mais direta e argumentativa."
  },
  {
    id: 14,
    question: "Qual princípio é importante para interpretar parábolas?",
    options: [
      "Buscar múltiplos significados",
      "Identificar o ponto principal",
      "Alegorizar cada detalhe",
      "Ignorar o contexto histórico"
    ],
    correctAnswer: 1,
    explanation: "Para interpretar parábolas, é importante identificar o ponto principal da história."
  },
  {
    id: 15,
    question: "Qual benefício principal de estudar gêneros literários?",
    options: [
      "Memorizar mais versículos",
      "Interpretação mais precisa e contextualizada",
      "Criar novas doutrinas",
      "Ignorar o contexto histórico"
    ],
    correctAnswer: 1,
    explanation: "O benefício principal é uma interpretação mais precisa e contextualizada da Bíblia."
  }
]

export default function CoursePage() {
  const [currentLesson, setCurrentLesson] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(new Set())
  const [activeTab, setActiveTab] = useState("content")

  const currentLessonData = courseContent.lessons.find(lesson => lesson.id === currentLesson)
  const progress = ((currentLesson - 1) / courseContent.lessons.length) * 100

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
      setCompletedQuestions(prev => new Set([...prev, currentQuestion]))
      setShowExplanation(true)
    }
  }

  const handleNextLesson = () => {
    if (currentLesson < courseContent.lessons.length) {
      setCurrentLesson(currentLesson + 1)
      setActiveTab("content")
    }
  }

  const handlePreviousLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1)
      setActiveTab("content")
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setCompletedQuestions(new Set())
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/courses" className="text-blue-600 hover:text-blue-800 mb-2 inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos Cursos
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">{courseContent.title}</h1>
              <p className="text-gray-600 mt-2">{courseContent.description}</p>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="mb-2">
                Lição {currentLesson} de {courseContent.lessons.length}
              </Badge>
              <div className="text-sm text-gray-500">
                <Clock className="h-4 w-4 inline mr-1" />
                {currentLessonData?.duration} min
              </div>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Lições</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {courseContent.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => {
                        setCurrentLesson(lesson.id)
                        setActiveTab("content")
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        currentLesson === lesson.id
                          ? "bg-blue-100 text-blue-900 border border-blue-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{lesson.title}</span>
                        {currentLesson > lesson.id && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {lesson.duration} min
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Conteúdo</TabsTrigger>
                <TabsTrigger value="quiz">Exercícios</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{currentLessonData?.title}</CardTitle>
                    <CardDescription>
                      Lição {currentLesson} de {courseContent.lessons.length}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: currentLessonData?.content || "" }}
                    />
                    
                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={handlePreviousLesson}
                        disabled={currentLesson === 1}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Lição Anterior
                      </Button>
                      
                      <Button
                        onClick={handleNextLesson}
                        disabled={currentLesson === courseContent.lessons.length}
                      >
                        Próxima Lição
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quiz" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Exercícios de Fixação</CardTitle>
                    <CardDescription>
                      Teste seu conhecimento sobre o curso
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {currentQuestion < questions.length ? (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Questão {currentQuestion + 1} de {questions.length}
                          </span>
                          <span className="text-sm text-gray-600">
                            Pontuação: {score}/{completedQuestions.size}
                          </span>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">
                            {questions[currentQuestion].question}
                          </h3>

                          <RadioGroup
                            value={selectedAnswer?.toString() || ""}
                            onValueChange={(value: string) => setSelectedAnswer(parseInt(value))}
                          >
                            {questions[currentQuestion].options.map((option, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value={index.toString()}
                                  id={`option-${index}`}
                                  disabled={showExplanation}
                                />
                                <Label
                                  htmlFor={`option-${index}`}
                                  className={`flex-1 cursor-pointer ${
                                    showExplanation
                                      ? index === questions[currentQuestion].correctAnswer
                                        ? "text-green-600 font-medium"
                                        : selectedAnswer === index
                                        ? "text-red-600 font-medium"
                                        : ""
                                      : ""
                                  }`}
                                >
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>

                          {showExplanation && (
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-medium text-blue-900 mb-2">Explicação:</h4>
                              <p className="text-blue-800">
                                {questions[currentQuestion].explanation}
                              </p>
                            </div>
                          )}

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              onClick={() => {
                                setCurrentQuestion(Math.max(0, currentQuestion - 1))
                                setSelectedAnswer(null)
                                setShowExplanation(false)
                              }}
                              disabled={currentQuestion === 0}
                            >
                              Questão Anterior
                            </Button>

                            <Button
                              onClick={showExplanation ? () => {
                                setCurrentQuestion(currentQuestion + 1)
                                setSelectedAnswer(null)
                                setShowExplanation(false)
                              } : handleNextQuestion}
                              disabled={selectedAnswer === null}
                            >
                              {showExplanation ? "Próxima Questão" : "Verificar Resposta"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Quiz Concluído!</h3>
                        <p className="text-gray-600 mb-4">
                          Sua pontuação: {score} de {questions.length}
                        </p>
                        <p className="text-sm text-gray-500 mb-6">
                          {score >= questions.length * 0.7 
                            ? "Parabéns! Você demonstrou excelente compreensão do material."
                            : "Continue estudando para melhorar sua compreensão."
                          }
                        </p>
                        <Button onClick={resetQuiz}>
                          Fazer Quiz Novamente
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
} 