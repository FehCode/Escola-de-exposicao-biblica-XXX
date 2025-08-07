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
  title: "Fundamentos da Exposição Bíblica",
  description: "Aprenda os princípios básicos para interpretar e expor textos bíblicos de forma eficaz.",
  lessons: [
    {
      id: 1,
      title: "Introdução à Exposição Bíblica",
      content: `
        <h2>O que é Exposição Bíblica?</h2>
        <p>A exposição bíblica é o processo de extrair o significado original de um texto bíblico e aplicá-lo de forma relevante ao contexto atual. É uma abordagem sistemática que busca compreender o que o autor original pretendia comunicar.</p>
        
        <h3>Princípios Fundamentais</h3>
        <ul>
          <li><strong>Contexto Histórico:</strong> Entender o ambiente cultural e histórico em que o texto foi escrito</li>
          <li><strong>Contexto Literário:</strong> Considerar o gênero literário e a estrutura do texto</li>
          <li><strong>Contexto Teológico:</strong> Relacionar o texto com a mensagem geral da Bíblia</li>
          <li><strong>Aplicação Prática:</strong> Conectar o significado original com a vida contemporânea</li>
        </ul>
        
        <h3>Por que a Exposição é Importante?</h3>
        <p>A exposição bíblica adequada nos protege de:</p>
        <ul>
          <li>Interpretações errôneas baseadas em preconceitos pessoais</li>
          <li>Aplicações inadequadas que não respeitam o contexto original</li>
          <li>Uso de textos bíblicos fora de contexto</li>
          <li>Subjetivismo que pode distorcer a mensagem bíblica</li>
        </ul>
      `,
      duration: 15
    },
    {
      id: 2,
      title: "O Contexto Histórico",
      content: `
        <h2>Entendendo o Contexto Histórico</h2>
        <p>O contexto histórico é fundamental para uma interpretação correta da Bíblia. Cada livro foi escrito em um momento específico da história, para um público específico, com propósitos específicos.</p>
        
        <h3>Elementos do Contexto Histórico</h3>
        <ul>
          <li><strong>Autor:</strong> Quem escreveu o texto e qual sua relação com os destinatários</li>
          <li><strong>Destinatários:</strong> Para quem o texto foi escrito e quais suas necessidades</li>
          <li><strong>Data:</strong> Quando o texto foi escrito e quais eventos históricos influenciaram</li>
          <li><strong>Local:</strong> Onde o texto foi escrito e qual o ambiente cultural</li>
          <li><strong>Propósito:</strong> Por que o texto foi escrito e qual problema pretendia resolver</li>
        </ul>
        
        <h3>Exemplo Prático: Gálatas</h3>
        <p>Paulo escreveu Gálatas para combater a influência dos judaizantes que insistiam que os gentios convertidos deveriam seguir a lei mosaica. Entender este contexto histórico é essencial para interpretar corretamente passagens como Gálatas 2:16.</p>
        
        <h3>Ferramentas para Estudo Histórico</h3>
        <ul>
          <li>Comentários bíblicos que abordam o contexto histórico</li>
          <li>Dicionários bíblicos e enciclopédias</li>
          <li>Estudos sobre arqueologia bíblica</li>
          <li>História do Antigo e Novo Testamento</li>
        </ul>
      `,
      duration: 20
    },
    {
      id: 3,
      title: "Gêneros Literários Bíblicos",
      content: `
        <h2>Reconhecendo os Gêneros Literários</h2>
        <p>A Bíblia contém diversos gêneros literários, cada um com suas próprias características e regras de interpretação. Reconhecer o gênero é essencial para uma interpretação adequada.</p>
        
        <h3>Principais Gêneros Bíblicos</h3>
        
        <h4>Narrativa</h4>
        <p>Histórias que relatam eventos passados. Exemplos: Gênesis, Êxodo, Evangelhos, Atos.</p>
        <ul>
          <li>Buscar o propósito teológico da narrativa</li>
          <li>Identificar personagens principais e suas motivações</li>
          <li>Reconhecer padrões literários e estruturas</li>
        </ul>
        
        <h4>Poesia</h4>
        <p>Textos poéticos com linguagem figurada. Exemplos: Salmos, Provérbios, Cantares.</p>
        <ul>
          <li>Prestar atenção ao paralelismo hebraico</li>
          <li>Reconhecer metáforas e símbolos</li>
          <li>Considerar o contexto emocional e devocional</li>
        </ul>
        
        <h4>Profecia</h4>
        <p>Mensagens de Deus através de profetas. Exemplos: Isaías, Jeremias, Ezequiel.</p>
        <ul>
          <li>Distinguir entre profecia condicional e incondicional</li>
          <li>Reconhecer cumprimentos históricos e futuros</li>
          <li>Considerar o contexto histórico do profeta</li>
        </ul>
        
        <h4>Epístolas</h4>
        <p>Cartas escritas para comunidades específicas. Exemplos: Romanos, Coríntios, Efésios.</p>
        <ul>
          <li>Identificar o problema ou situação que motivou a carta</li>
          <li>Reconhecer a estrutura argumentativa</li>
          <li>Distinguir entre ensino geral e específico</li>
        </ul>
      `,
      duration: 25
    },
    {
      id: 4,
      title: "Princípios de Interpretação",
      content: `
        <h2>Princípios Hermenêuticos Fundamentais</h2>
        <p>A hermenêutica bíblica é a ciência da interpretação bíblica. Seguir princípios sólidos nos ajuda a evitar erros de interpretação.</p>
        
        <h3>Princípio da Claridade</h3>
        <p>A Bíblia é clara em suas doutrinas essenciais. O que é necessário para a salvação é apresentado de forma clara e compreensível.</p>
        
        <h3>Princípio da Analogia da Fé</h3>
        <p>As Escrituras interpretam as Escrituras. Passagens difíceis devem ser interpretadas à luz de passagens mais claras sobre o mesmo assunto.</p>
        
        <h3>Princípio do Contexto</h3>
        <p>Um texto fora do contexto é um pretexto. Sempre considerar o contexto imediato, o contexto do livro e o contexto bíblico geral.</p>
        
        <h3>Princípio da Progressão da Revelação</h3>
        <p>Deus revelou sua verdade progressivamente ao longo da história. O Novo Testamento esclarece e completa o Antigo Testamento.</p>
        
        <h3>Princípio da Aplicação</h3>
        <p>Toda interpretação deve levar à aplicação. O estudo bíblico não é apenas acadêmico, mas deve transformar vidas.</p>
        
        <h3>Armadilhas Comuns a Evitar</h3>
        <ul>
          <li><strong>Allegorização excessiva:</strong> Buscar significados ocultos em detrimento do sentido literal</li>
          <li><strong>Isolamento de textos:</strong> Interpretar versículos isoladamente</li>
          <li><strong>Anacronismo:</strong> Aplicar conceitos modernos a textos antigos</li>
          <li><strong>Eisegese:</strong> Colocar no texto o que não está lá</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 5,
      title: "Ferramentas de Estudo Bíblico",
      content: `
        <h2>Ferramentas Essenciais para o Expositor</h2>
        <p>O expositor bíblico precisa de ferramentas adequadas para realizar um estudo profundo e preciso das Escrituras.</p>
        
        <h3>Traduções Bíblicas</h3>
        <ul>
          <li><strong>Traduções Literais:</strong> NVI, ARA, NAA - preservam a estrutura original</li>
          <li><strong>Traduções Dinâmicas:</strong> NTLH, BLH - priorizam a compreensão</li>
          <li><strong>Traduções Parafraseadas:</strong> A Mensagem - para estudo devocional</li>
        </ul>
        
        <h3>Dicionários e Enciclopédias</h3>
        <ul>
          <li>Dicionários bíblicos para definições de termos</li>
          <li>Enciclopédias para informações históricas e culturais</li>
          <li>Atlas bíblicos para localização geográfica</li>
          <li>Manuais de arqueologia bíblica</li>
        </ul>
        
        <h3>Comentários Bíblicos</h3>
        <ul>
          <li><strong>Comentários Exegéticos:</strong> Foco no texto original</li>
          <li><strong>Comentários Devocionais:</strong> Foco na aplicação prática</li>
          <li><strong>Comentários Históricos:</strong> Foco no contexto histórico</li>
        </ul>
        
        <h3>Concordâncias e Léxicos</h3>
        <ul>
          <li>Concordâncias para encontrar ocorrências de palavras</li>
          <li>Léxicos para estudo do hebraico e grego</li>
          <li>Dicionários de teologia bíblica</li>
        </ul>
        
        <h3>Recursos Digitais</h3>
        <ul>
          <li>Software bíblico (Logos, Accordance)</li>
          <li>Sites de estudo bíblico</li>
          <li>Aplicativos móveis</li>
          <li>Bibliotecas digitais</li>
        </ul>
      `,
      duration: 20
    },
    {
      id: 6,
      title: "Estrutura de uma Exposição",
      content: `
        <h2>Como Estruturar uma Exposição Bíblica</h2>
        <p>Uma exposição bem estruturada segue uma progressão lógica que ajuda os ouvintes a compreender e aplicar a mensagem bíblica.</p>
        
        <h3>Elementos de uma Exposição Eficaz</h3>
        
        <h4>1. Introdução</h4>
        <ul>
          <li>Capturar a atenção dos ouvintes</li>
          <li>Estabelecer a relevância do texto</li>
          <li>Apresentar o tema principal</li>
          <li>Conectar com a vida dos ouvintes</li>
        </ul>
        
        <h4>2. Contextualização</h4>
        <ul>
          <li>Apresentar o contexto histórico</li>
          <li>Explicar o contexto literário</li>
          <li>Estabelecer o contexto teológico</li>
          <li>Conectar com a narrativa bíblica maior</li>
        </ul>
        
        <h4>3. Exposição do Texto</h4>
        <ul>
          <li>Ler o texto com expressão</li>
          <li>Explicar o significado original</li>
          <li>Identificar palavras-chave e conceitos</li>
          <li>Mostrar a estrutura e progressão do pensamento</li>
        </ul>
        
        <h4>4. Aplicação</h4>
        <ul>
          <li>Conectar o texto com a vida contemporânea</li>
          <li>Oferecer aplicações práticas</li>
          <li>Desafiar os ouvintes à ação</li>
          <li>Mostrar como o texto transforma vidas</li>
        </ul>
        
        <h4>5. Conclusão</h4>
        <ul>
          <li>Resumir os pontos principais</li>
          <li>Reafirmar a aplicação central</li>
          <li>Convidar à resposta</li>
          <li>Conectar com o próximo passo</li>
        </ul>
      `,
      duration: 25
    },
    {
      id: 7,
      title: "Aplicação Prática",
      content: `
        <h2>Da Teoria à Prática</h2>
        <p>A exposição bíblica não é apenas um exercício acadêmico, mas uma ferramenta para transformar vidas através da aplicação da Palavra de Deus.</p>
        
        <h3>Princípios de Aplicação</h3>
        
        <h4>1. Fidelidade ao Texto</h4>
        <p>A aplicação deve fluir naturalmente do texto, não ser imposta a ele. O que o texto originalmente significava deve determinar como aplicamos hoje.</p>
        
        <h4>2. Relevância Contemporânea</h4>
        <p>Conectar o mundo antigo com o mundo moderno, mostrando como os princípios bíblicos se aplicam aos desafios atuais.</p>
        
        <h4>3. Especificidade</h4>
        <p>Oferecer aplicações específicas e práticas, não apenas generalidades. Como este texto se aplica ao casamento, trabalho, relacionamentos, etc.</p>
        
        <h4>4. Transformação</h4>
        <p>A aplicação deve visar a transformação do coração e da vida, não apenas o conhecimento intelectual.</p>
        
        <h3>Tipos de Aplicação</h3>
        <ul>
          <li><strong>Doutrinária:</strong> O que este texto nos ensina sobre Deus, Cristo, salvação, etc.</li>
          <li><strong>Ética:</strong> Como este texto nos orienta em questões morais</li>
          <li><strong>Devocional:</strong> Como este texto alimenta nossa vida espiritual</li>
          <li><strong>Pastoral:</strong> Como este texto nos ajuda a cuidar de outros</li>
          <li><strong>Evangelística:</strong> Como este texto nos ajuda a compartilhar o evangelho</li>
        </ul>
        
        <h3>Exemplo Prático: Filipenses 4:6-7</h3>
        <p>"Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus."</p>
        
        <ul>
          <li><strong>Aplicação Doutrinária:</strong> Deus é acessível e responde às orações</li>
          <li><strong>Aplicação Ética:</strong> A ansiedade é incompatível com a confiança em Deus</li>
          <li><strong>Aplicação Devocional:</strong> A oração com ação de graças traz paz</li>
          <li><strong>Aplicação Pastoral:</strong> Como ajudar outros a lidar com a ansiedade</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 8,
      title: "Conclusão e Próximos Passos",
      content: `
        <h2>Integrando os Princípios</h2>
        <p>Chegamos ao final deste curso fundamental sobre exposição bíblica. Agora você tem as ferramentas básicas para começar a praticar a exposição bíblica de forma mais eficaz.</p>
        
        <h3>Resumo dos Princípios Aprendidos</h3>
        <ul>
          <li><strong>Contexto é fundamental:</strong> Sempre considere o contexto histórico, literário e teológico</li>
          <li><strong>Gêneros importam:</strong> Cada gênero literário tem suas próprias regras de interpretação</li>
          <li><strong>Ferramentas são essenciais:</strong> Use as ferramentas adequadas para um estudo profundo</li>
          <li><strong>Estrutura facilita:</strong> Uma exposição bem estruturada é mais eficaz</li>
          <li><strong>Aplicação transforma:</strong> O objetivo final é a transformação de vidas</li>
        </ul>
        
        <h3>Próximos Passos Recomendados</h3>
        <ol>
          <li><strong>Pratique regularmente:</strong> Dedique tempo diário ao estudo bíblico pessoal</li>
          <li><strong>Use as ferramentas:</strong> Familiarize-se com comentários, dicionários e outros recursos</li>
          <li><strong>Estude em comunidade:</strong> Participe de grupos de estudo bíblico</li>
          <li><strong>Continue aprendendo:</strong> Considere cursos mais avançados sobre hermenêutica</li>
          <li><strong>Compartilhe o conhecimento:</strong> Ensine outros o que você aprendeu</li>
        </ol>
        
        <h3>Recursos Adicionais</h3>
        <ul>
          <li>Livros sobre hermenêutica bíblica</li>
          <li>Cursos sobre línguas bíblicas (hebraico e grego)</li>
          <li>Workshops de pregação expositiva</li>
          <li>Mentoria com expositores experientes</li>
        </ul>
        
        <h3>Compromisso Final</h3>
        <p>Lembre-se: a exposição bíblica não é apenas uma técnica, mas um chamado para ser fiel à Palavra de Deus e usá-la para transformar vidas. Que este curso seja apenas o começo de uma jornada de aprendizado contínuo e crescimento na graça e no conhecimento de nosso Senhor Jesus Cristo.</p>
      `,
      duration: 15
    }
  ]
}

const questions = [
  {
    id: 1,
    question: "Qual é o objetivo principal da exposição bíblica?",
    options: [
      "Memorizar versículos bíblicos",
      "Extrair o significado original e aplicá-lo ao contexto atual",
      "Criar novas interpretações da Bíblia",
      "Defender posições teológicas específicas"
    ],
    correctAnswer: 1,
    explanation: "A exposição bíblica busca extrair o significado original do texto e aplicá-lo de forma relevante ao contexto atual."
  },
  {
    id: 2,
    question: "Qual elemento NÃO faz parte do contexto histórico?",
    options: [
      "O autor do texto",
      "Os destinatários originais",
      "A data de composição",
      "O número de capítulos do livro"
    ],
    correctAnswer: 3,
    explanation: "O número de capítulos é uma característica editorial moderna, não um elemento do contexto histórico original."
  },
  {
    id: 3,
    question: "Qual gênero literário é caracterizado por linguagem figurada e paralelismo?",
    options: [
      "Narrativa",
      "Poesia",
      "Profecia",
      "Epístola"
    ],
    correctAnswer: 1,
    explanation: "A poesia bíblica, especialmente nos Salmos, é caracterizada por linguagem figurada e paralelismo hebraico."
  },
  {
    id: 4,
    question: "O que significa o princípio da 'Analogia da Fé'?",
    options: [
      "As Escrituras interpretam as Escrituras",
      "A fé é necessária para entender a Bíblia",
      "Cada pessoa interpreta a Bíblia de forma única",
      "A Bíblia deve ser interpretada alegoricamente"
    ],
    correctAnswer: 0,
    explanation: "O princípio da Analogia da Fé significa que as Escrituras interpretam as Escrituras."
  },
  {
    id: 5,
    question: "Qual é a melhor abordagem para estudar um texto bíblico?",
    options: [
      "Ler apenas uma tradução",
      "Usar múltiplas traduções e ferramentas de estudo",
      "Confiar apenas na interpretação pessoal",
      "Seguir apenas um comentário específico"
    ],
    correctAnswer: 1,
    explanation: "Usar múltiplas traduções e ferramentas de estudo permite uma compreensão mais completa e precisa do texto."
  },
  {
    id: 6,
    question: "Qual elemento NÃO deve estar presente na introdução de uma exposição?",
    options: [
      "Capturar a atenção dos ouvintes",
      "Estabelecer a relevância do texto",
      "Apresentar o tema principal",
      "Dar todas as respostas do sermão"
    ],
    correctAnswer: 3,
    explanation: "A introdução deve preparar o terreno, não dar todas as respostas."
  },
  {
    id: 7,
    question: "Qual é o objetivo principal da aplicação bíblica?",
    options: [
      "Demonstrar conhecimento teológico",
      "Transformar vidas através da Palavra",
      "Convencer outros de uma posição",
      "Cumprir requisitos acadêmicos"
    ],
    correctAnswer: 1,
    explanation: "O objetivo principal da aplicação é transformar vidas, não apenas transmitir conhecimento intelectual."
  },
  {
    id: 8,
    question: "Qual tipo de aplicação foca em como o texto nos orienta em questões morais?",
    options: [
      "Aplicação doutrinária",
      "Aplicação ética",
      "Aplicação devocional",
      "Aplicação pastoral"
    ],
    correctAnswer: 1,
    explanation: "A aplicação ética foca em como o texto bíblico nos orienta em questões morais e comportamentais."
  },
  {
    id: 9,
    question: "O que significa 'eisegese'?",
    options: [
      "Interpretação correta da Bíblia",
      "Colocar no texto o que não está lá",
      "Estudo do contexto histórico",
      "Aplicação prática da Bíblia"
    ],
    correctAnswer: 1,
    explanation: "Eisegese é o erro de colocar no texto bíblico significados que não estão presentes no texto original."
  },
  {
    id: 10,
    question: "Qual princípio hermenêutico afirma que a Bíblia é clara em suas doutrinas essenciais?",
    options: [
      "Princípio da Analogia da Fé",
      "Princípio da Claridade",
      "Princípio do Contexto",
      "Princípio da Progressão da Revelação"
    ],
    correctAnswer: 1,
    explanation: "O Princípio da Claridade afirma que a Bíblia é clara em suas doutrinas essenciais."
  },
  {
    id: 11,
    question: "Qual elemento é mais importante na contextualização de um texto?",
    options: [
      "A data atual",
      "O contexto histórico original",
      "As opiniões modernas",
      "As tradições da igreja"
    ],
    correctAnswer: 1,
    explanation: "O contexto histórico original é fundamental para entender o que o autor pretendia comunicar."
  },
  {
    id: 12,
    question: "Qual gênero literário é caracterizado por cartas escritas para comunidades específicas?",
    options: [
      "Narrativa",
      "Poesia",
      "Profecia",
      "Epístolas"
    ],
    correctAnswer: 3,
    explanation: "As epístolas são cartas escritas para comunidades específicas, como as cartas de Paulo."
  },
  {
    id: 13,
    question: "Qual é a função principal da conclusão em uma exposição?",
    options: [
      "Apresentar novos temas",
      "Resumir pontos principais e convidar à resposta",
      "Explicar o contexto histórico",
      "Fazer aplicações detalhadas"
    ],
    correctAnswer: 1,
    explanation: "A conclusão deve resumir os pontos principais da exposição e convidar os ouvintes a uma resposta apropriada."
  },
  {
    id: 14,
    question: "Qual tipo de aplicação foca em como o texto alimenta nossa vida espiritual?",
    options: [
      "Aplicação doutrinária",
      "Aplicação ética",
      "Aplicação devocional",
      "Aplicação evangelística"
    ],
    correctAnswer: 2,
    explanation: "A aplicação devocional foca em como o texto bíblico alimenta e fortalece nossa vida espiritual pessoal."
  },
  {
    id: 15,
    question: "Qual é o próximo passo mais importante após completar este curso?",
    options: [
      "Memorizar todos os princípios",
      "Praticar regularmente o estudo bíblico",
      "Ensinar imediatamente outros",
      "Buscar apenas conhecimento acadêmico"
    ],
    correctAnswer: 1,
    explanation: "A prática regular do estudo bíblico é essencial para desenvolver as habilidades de exposição bíblica aprendidas."
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