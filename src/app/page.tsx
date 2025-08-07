import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Aprenda{" "}
            <span className="text-blue-600">Exposição Bíblica</span>
            <br />
            de Forma Estruturada
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubra os princípios fundamentais da exposição bíblica através de cursos 
            interativos e conteúdo rico em conhecimento teológico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="text-lg px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Cursos
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Conteúdo Estruturado</CardTitle>
              <CardDescription>
                Cursos organizados em lições progressivas para facilitar o aprendizado
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Aprenda no Seu Ritmo</CardTitle>
              <CardDescription>
                Estude quando e onde quiser, com progresso salvo automaticamente
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Comunidade Ativa</CardTitle>
              <CardDescription>
                Conecte-se com outros estudantes e compartilhe experiências
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cursos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comece sua jornada de aprendizado com nossos cursos mais populares
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Curso 1 */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Iniciante</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  2h 30min
                </div>
              </div>
              <CardTitle className="text-xl">Fundamentos da Exposição Bíblica</CardTitle>
              <CardDescription>
                Aprenda os princípios básicos para interpretar e expor textos bíblicos de forma eficaz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  1.2k alunos
                </div>
                <Link href="/courses/1">
                  <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
                    Ver Curso
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Curso 2 */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Intermediário</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  4h 15min
                </div>
              </div>
              <CardTitle className="text-xl">Gêneros Literários Bíblicos</CardTitle>
              <CardDescription>
                Explore os diferentes gêneros literários da Bíblia e como interpretá-los corretamente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  856 alunos
                </div>
                <Link href="/courses/2">
                  <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
                    Ver Curso
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Curso 3 */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Avançado</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  6h 45min
                </div>
              </div>
              <CardTitle className="text-xl">Exposição de Textos Difíceis</CardTitle>
              <CardDescription>
                Técnicas avançadas para expor passagens complexas e controversas da Bíblia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  432 alunos
                </div>
                <Link href="/courses/3">
                  <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
                    Ver Curso
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link href="/courses">
            <Button size="lg" variant="outline">
              Ver Todos os Cursos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Junte-se a milhares de estudantes que já estão aprendendo exposição bíblica
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Começar Gratuitamente
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
