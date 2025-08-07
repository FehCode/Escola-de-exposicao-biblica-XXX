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
  title: "Exposição de Textos Difíceis",
  description: "Técnicas avançadas para expor passagens complexas e controversas da Bíblia.",
  lessons: [
    {
      id: 1,
      title: "Introdução aos Textos Difíceis",
      content: `
        <h2>O Desafio dos Textos Difíceis</h2>
        <p>Textos difíceis são passagens bíblicas que apresentam desafios de interpretação devido à complexidade linguística, cultural, histórica ou teológica.</p>
        
        <h3>Por que Existem Textos Difíceis?</h3>
        <ul>
          <li><strong>Distância Cultural:</strong> Diferenças entre o mundo bíblico e o contemporâneo</li>
          <li><strong>Complexidade Linguística:</strong> Idiomas antigos com nuances perdidas</li>
          <li><strong>Contexto Histórico:</strong> Situações específicas que não se repetem</li>
          <li><strong>Desenvolvimento Doutrinário:</strong> Progressão da revelação bíblica</li>
        </ul>
      `,
      duration: 25
    },
    {
      id: 2,
      title: "Métodos de Análise",
      content: `
        <h2>Abordagens Sistemáticas</h2>
        <p>Para lidar eficazmente com textos difíceis, é necessário seguir métodos sistemáticos de análise.</p>
        
        <h3>Método Gramático-Histórico</h3>
        <ul>
          <li><strong>Análise Gramatical:</strong> Estrutura das frases e palavras</li>
          <li><strong>Análise Histórica:</strong> Contexto histórico-cultural</li>
          <li><strong>Análise Literária:</strong> Gênero e estrutura literária</li>
          <li><strong>Análise Teológica:</strong> Relação com outras doutrinas</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 3,
      title: "Textos Aparentemente Contraditórios",
      content: `
        <h2>Resolvendo Aparentes Contradições</h2>
        <p>Muitas vezes, passagens bíblicas parecem contradizer-se mutuamente. Essas aparentes contradições são oportunidades para aprofundar nossa compreensão.</p>
        
        <h3>Princípios para Resolver Contradições</h3>
        <ul>
          <li><strong>Presunção de Harmonia:</strong> A Bíblia não se contradiz</li>
          <li><strong>Análise Contextual:</strong> Considerar contexto específico</li>
          <li><strong>Desenvolvimento Doutrinário:</strong> Progressão da revelação</li>
          <li><strong>Perspectivas Diferentes:</strong> Autores com enfoques distintos</li>
        </ul>
      `,
      duration: 35
    },
    {
      id: 4,
      title: "Textos de Difícil Aplicação",
      content: `
        <h2>Aplicando Textos Desafiadores</h2>
        <p>Alguns textos bíblicos apresentam comandos ou ensinos que parecem difíceis de aplicar no contexto contemporâneo.</p>
        
        <h3>Princípios de Aplicação</h3>
        <ul>
          <li><strong>Distinguir entre Lei e Graça:</strong> Cristo cumpriu a lei</li>
          <li><strong>Buscar Princípios Universais:</strong> Por trás de regulamentações específicas</li>
          <li><strong>Considerar Desenvolvimento Doutrinário:</strong> Progressão da revelação</li>
          <li><strong>Aplicar com Sabedoria:</strong> Considerar contexto cultural</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 5,
      title: "Linguagem Figurada Complexa",
      content: `
        <h2>Interpretando Linguagem Figurada</h2>
        <p>A Bíblia usa extensivamente linguagem figurada, incluindo metáforas, símiles, símbolos e alegorias.</p>
        
        <h3>Tipos de Linguagem Figurada</h3>
        <ul>
          <li><strong>Metáforas:</strong> Comparações implícitas</li>
          <li><strong>Símiles:</strong> Comparações explícitas com "como"</li>
          <li><strong>Símbolos:</strong> Objetos que representam conceitos</li>
          <li><strong>Alegorias:</strong> Histórias com significado simbólico</li>
        </ul>
      `,
      duration: 35
    },
    {
      id: 6,
      title: "Textos de Contexto Específico",
      content: `
        <h2>Entendendo Contextos Únicos</h2>
        <p>Muitos textos bíblicos foram escritos para situações específicas que não se repetem.</p>
        
        <h3>Estratégias de Interpretação</h3>
        <ul>
          <li>Estudar o contexto histórico-cultural</li>
          <li>Identificar o problema ou situação original</li>
          <li>Buscar princípios universais</li>
          <li>Considerar o desenvolvimento doutrinário</li>
          <li>Aplicar com sabedoria ao contexto atual</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 7,
      title: "Desenvolvimento Doutrinário",
      content: `
        <h2>A Progressão da Revelação</h2>
        <p>A Bíblia revela a verdade de Deus progressivamente ao longo da história.</p>
        
        <h3>Princípios do Desenvolvimento Doutrinário</h3>
        <ul>
          <li><strong>Revelação Progressiva:</strong> Deus revelou sua verdade gradualmente</li>
          <li><strong>Cumprimento em Cristo:</strong> Jesus é o clímax da revelação</li>
          <li><strong>Continuidade e Descontinuidade:</strong> Algumas coisas continuam, outras mudam</li>
          <li><strong>Harmonia Bíblica:</strong> Toda a Bíblia aponta para Cristo</li>
        </ul>
      `,
      duration: 35
    },
    {
      id: 8,
      title: "Textos Controversos",
      content: `
        <h2>Lidando com Controvérsias</h2>
        <p>Alguns textos bíblicos geram controvérsias significativas entre cristãos.</p>
        
        <h3>Princípios para Lidar com Controvérsias</h3>
        <ul>
          <li>Humildade intelectual</li>
          <li>Compromisso com a autoridade bíblica</li>
          <li>Busca por harmonia bíblica</li>
          <li>Consideração de múltiplas perspectivas</li>
          <li>Foco no essencial</li>
        </ul>
      `,
      duration: 40
    },
    {
      id: 9,
      title: "Ferramentas Avançadas",
      content: `
        <h2>Recursos para Estudo de Textos Difíceis</h2>
        <p>O estudo de textos difíceis requer ferramentas especializadas.</p>
        
        <h3>Ferramentas Importantes</h3>
        <ul>
          <li><strong>Léxicos:</strong> Dicionários de hebraico e grego</li>
          <li><strong>Concordâncias:</strong> Para encontrar ocorrências de palavras</li>
          <li><strong>Comentários Especializados:</strong> Análises detalhadas</li>
          <li><strong>Arqueologia Bíblica:</strong> Descobertas arqueológicas</li>
          <li><strong>Teologia Sistemática:</strong> Organização doutrinária</li>
        </ul>
      `,
      duration: 30
    },
    {
      id: 10,
      title: "Aplicação Prática",
      content: `
        <h2>Colocando em Prática</h2>
        <p>O estudo de textos difíceis não é apenas um exercício acadêmico, mas uma ferramenta para melhorar nossa pregação, ensino e vida cristã.</p>
        
        <h3>Aplicação na Pregação</h3>
        <ul>
          <li>Preparar sermões que lidem honestamente com dificuldades</li>
          <li>Apresentar múltiplas perspectivas quando apropriado</li>
          <li>Focar na aplicação prática</li>
          <li>Manter humildade sobre áreas de incerteza</li>
        </ul>
      `,
      duration: 25
    },
    {
      id: 11,
      title: "Estudos de Caso",
      content: `
        <h2>Analisando Textos Difíceis Específicos</h2>
        <p>Vamos aplicar os princípios aprendidos a alguns textos difíceis específicos.</p>
        
        <h3>Exemplos de Estudos</h3>
        <ul>
          <li><strong>1 Timóteo 2:11-15:</strong> Questões sobre mulheres na igreja</li>
          <li><strong>Romanos 9-11:</strong> Predestinação e livre arbítrio</li>
          <li><strong>Apocalipse 20:</strong> Milênio e escatologia</li>
        </ul>
      `,
      duration: 40
    },
    {
      id: 12,
      title: "Conclusão e Próximos Passos",
      content: `
        <h2>Integrando o Conhecimento</h2>
        <p>Chegamos ao final deste curso sobre exposição de textos difíceis. Agora você tem ferramentas e métodos para abordar passagens complexas.</p>
        
        <h3>Resumo dos Princípios</h3>
        <ul>
          <li>Abordagem sistemática e metodológica</li>
          <li>Importância do contexto histórico-cultural</li>
          <li>Necessidade de ferramentas especializadas</li>
          <li>Valor da humildade intelectual</li>
          <li>Compromisso com a autoridade bíblica</li>
        </ul>
      `,
      duration: 20
    }
  ]
}

const questions = [
  {
    id: 1,
    question: "Qual é a principal razão para a existência de textos difíceis na Bíblia?",
    options: [
      "Erros dos autores bíblicos",
      "Distância cultural e linguística",
      "Falta de clareza divina",
      "Traduções inadequadas"
    ],
    correctAnswer: 1,
    explanation: "A distância cultural e linguística entre o mundo bíblico e o contemporâneo é a principal razão."
  },
  {
    id: 2,
    question: "Qual método de análise foca na estrutura das frases e palavras?",
    options: [
      "Método histórico",
      "Método gramático-histórico",
      "Método contextual",
      "Método teológico"
    ],
    correctAnswer: 1,
    explanation: "O método gramático-histórico inclui análise gramatical da estrutura das frases e palavras."
  },
  {
    id: 3,
    question: "Qual princípio é fundamental para resolver aparentes contradições?",
    options: [
      "Presunção de erro bíblico",
      "Presunção de harmonia",
      "Ignorar as dificuldades",
      "Escolher uma passagem"
    ],
    correctAnswer: 1,
    explanation: "A presunção de harmonia é fundamental - a Bíblia não se contradiz."
  },
  {
    id: 4,
    question: "Qual estratégia é mais importante para aplicar textos de difícil aplicação?",
    options: [
      "Ignorar o texto",
      "Aplicar literalmente",
      "Buscar princípios universais",
      "Modificar o texto"
    ],
    correctAnswer: 2,
    explanation: "Buscar princípios universais por trás de regulamentações específicas é a estratégia mais importante."
  },
  {
    id: 5,
    question: "Qual tipo de linguagem figurada usa comparações explícitas com 'como'?",
    options: [
      "Metáforas",
      "Símiles",
      "Símbolos",
      "Alegorias"
    ],
    correctAnswer: 1,
    explanation: "Símiles são comparações explícitas que usam palavras como 'como'."
  },
  {
    id: 6,
    question: "Qual princípio é essencial para interpretar textos de contexto específico?",
    options: [
      "Ignorar o contexto",
      "Aplicar literalmente",
      "Estudar o contexto histórico-cultural",
      "Modificar o texto"
    ],
    correctAnswer: 2,
    explanation: "Estudar o contexto histórico-cultural é essencial para interpretar textos de contexto específico."
  },
  {
    id: 7,
    question: "Qual conceito é central no desenvolvimento doutrinário?",
    options: [
      "Revelação estática",
      "Revelação progressiva",
      "Revelação aleatória",
      "Revelação confusa"
    ],
    correctAnswer: 1,
    explanation: "A revelação progressiva é central - Deus revelou sua verdade gradualmente."
  },
  {
    id: 8,
    question: "Qual atitude é mais importante ao lidar com controvérsias?",
    options: [
      "Dogmatismo",
      "Humildade intelectual",
      "Indiferença",
      "Confrontação"
    ],
    correctAnswer: 1,
    explanation: "A humildade intelectual é essencial ao lidar com controvérsias bíblicas."
  },
  {
    id: 9,
    question: "Qual ferramenta é mais útil para análise semântica?",
    options: [
      "Concordâncias",
      "Estudos de palavras",
      "Gramáticas",
      "Comentários"
    ],
    correctAnswer: 1,
    explanation: "Estudos de palavras são mais úteis para análise semântica detalhada."
  },
  {
    id: 10,
    question: "Qual princípio é mais importante na aplicação prática?",
    options: [
      "Ignorar dificuldades",
      "Focar na aplicação prática",
      "Manter discussão acadêmica",
      "Evitar aplicação"
    ],
    correctAnswer: 1,
    explanation: "Focar na aplicação prática é mais importante que manter discussões puramente acadêmicas."
  },
  {
    id: 11,
    question: "Qual estratégia é melhor para lidar com textos aparentemente contraditórios?",
    options: [
      "Escolher um lado",
      "Buscar complementaridade",
      "Ignorar as passagens",
      "Modificar o texto"
    ],
    correctAnswer: 1,
    explanation: "Buscar complementaridade em vez de contradição é a melhor estratégia."
  },
  {
    id: 12,
    question: "Qual ferramenta é mais útil para questões textuais?",
    options: [
      "Concordâncias",
      "Manuscritos",
      "Comentários",
      "Dicionários"
    ],
    correctAnswer: 1,
    explanation: "Manuscritos são mais úteis para resolver questões textuais e variantes."
  },
  {
    id: 13,
    question: "Qual princípio é fundamental para interpretar linguagem figurada?",
    options: [
      "Alegorizar tudo",
      "Buscar o ponto principal",
      "Ignorar símbolos",
      "Interpretar literalmente"
    ],
    correctAnswer: 1,
    explanation: "Buscar o ponto principal da comparação é fundamental para interpretar linguagem figurada."
  },
  {
    id: 14,
    question: "Qual abordagem é melhor para controvérsias doutrinárias?",
    options: [
      "Dogmatismo",
      "Consideração de múltiplas perspectivas",
      "Ignorar diferenças",
      "Confrontação"
    ],
    correctAnswer: 1,
    explanation: "Considerar múltiplas perspectivas respeitadas é melhor que dogmatismo."
  },
  {
    id: 15,
    question: "Qual é o objetivo final do estudo de textos difíceis?",
    options: [
      "Satisfação intelectual",
      "Glorificar a Deus e edificar a igreja",
      "Ganhar debates",
      "Criar controvérsias"
    ],
    correctAnswer: 1,
    explanation: "O objetivo final é glorificar a Deus, edificar a igreja e transformar vidas."
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