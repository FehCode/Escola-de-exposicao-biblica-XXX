"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, 
  BookOpen, 
  Trophy, 
  Clock, 
  Calendar,
  Edit,
  Save,
  X,
  Award,
  Target,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

interface UserProgress {
  courseId: string
  courseTitle: string
  progress: number
  completedLessons: number
  totalLessons: number
  lastAccessed: string
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string
  isUnlocked: boolean
}

export default function ProfilePage() {
  const { data: session } = useSession()
  const [isEditing, setIsEditing] = useState(false)
  const [userProgress, setUserProgress] = useState<UserProgress[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [stats, setStats] = useState({
    totalCourses: 0,
    completedCourses: 0,
    totalLessons: 0,
    completedLessons: 0,
    totalTime: 0,
    currentStreak: 0
  })

  useEffect(() => {
    if (session) {
      fetchUserData()
    }
  }, [session])

  const fetchUserData = async () => {
    try {
      // Simular dados do usuário
      setUserProgress([
        {
          courseId: "1",
          courseTitle: "Fundamentos da Exposição Bíblica",
          progress: 75,
          completedLessons: 6,
          totalLessons: 8,
          lastAccessed: "2024-01-15"
        },
        {
          courseId: "2",
          courseTitle: "Gêneros Literários Bíblicos",
          progress: 30,
          completedLessons: 2,
          totalLessons: 10,
          lastAccessed: "2024-01-10"
        },
        {
          courseId: "3",
          courseTitle: "Exposição de Textos Difíceis",
          progress: 0,
          completedLessons: 0,
          totalLessons: 12,
          lastAccessed: "2024-01-05"
        }
      ])

      setAchievements([
        {
          id: "1",
          title: "Primeiro Passo",
          description: "Complete sua primeira lição",
          icon: "🎯",
          unlockedAt: "2024-01-01",
          isUnlocked: true
        },
        {
          id: "2",
          title: "Estudante Dedicado",
          description: "Complete 5 lições",
          icon: "📚",
          unlockedAt: "2024-01-10",
          isUnlocked: true
        },
        {
          id: "3",
          title: "Mestre da Palavra",
          description: "Complete um curso inteiro",
          icon: "🏆",
          unlockedAt: "",
          isUnlocked: false
        },
        {
          id: "4",
          title: "Consistência",
          description: "Estude por 7 dias consecutivos",
          icon: "🔥",
          unlockedAt: "",
          isUnlocked: false
        }
      ])

      setStats({
        totalCourses: 3,
        completedCourses: 0,
        totalLessons: 30,
        completedLessons: 8,
        totalTime: 12.5,
        currentStreak: 5
      })
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const formatTime = (hours: number) => {
    return `${Math.floor(hours)}h ${Math.round((hours % 1) * 60)}min`
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Faça login para acessar seu perfil
            </h1>
            <Link href="/auth/signin">
              <Button>Entrar</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="" alt={session.user?.name || ""} />
                <AvatarFallback className="text-lg">
                  {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {session.user?.name || "Usuário"}
                </h1>
                <p className="text-gray-600">{session.user?.email}</p>
                <p className="text-sm text-gray-500">
                  Membro desde {formatDate("2024-01-01")}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
              {isEditing ? "Cancelar" : "Editar Perfil"}
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cursos Inscritos</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <p className="text-xs text-muted-foreground">
                {stats.completedCourses} completos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lições Completas</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedLessons}</div>
              <p className="text-xs text-muted-foreground">
                de {stats.totalLessons} lições
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo de Estudo</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatTime(stats.totalTime)}</div>
              <p className="text-xs text-muted-foreground">
                tempo total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência Atual</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.currentStreak}</div>
              <p className="text-xs text-muted-foreground">
                dias consecutivos
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="progress">Progresso</TabsTrigger>
            <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Meu Progresso nos Cursos</CardTitle>
                <CardDescription>
                  Acompanhe seu progresso em cada curso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userProgress.map((course) => (
                  <div key={course.courseId} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{course.courseTitle}</h3>
                      <Badge variant="secondary">
                        {course.progress}% completo
                      </Badge>
                    </div>
                    <Progress value={course.progress} className="mb-2" />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>
                        {course.completedLessons} de {course.totalLessons} lições
                      </span>
                      <span>
                        Último acesso: {formatDate(course.lastAccessed)}
                      </span>
                    </div>
                    <div className="mt-3">
                      <Link href={`/courses/${course.courseId}`}>
                        <Button size="sm" variant="outline">
                          Continuar Curso
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Conquistas</CardTitle>
                <CardDescription>
                  Desbloqueie conquistas conforme seu progresso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border ${
                        achievement.isUnlocked
                          ? "bg-green-50 border-green-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-medium">{achievement.title}</h3>
                          <p className="text-sm text-gray-600">
                            {achievement.description}
                          </p>
                          {achievement.isUnlocked && (
                            <p className="text-xs text-green-600 mt-1">
                              Desbloqueado em {formatDate(achievement.unlockedAt)}
                            </p>
                          )}
                        </div>
                        {achievement.isUnlocked && (
                          <Award className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Perfil</CardTitle>
                <CardDescription>
                  Gerencie suas informações pessoais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      defaultValue={session.user?.name || ""}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={session.user?.email || ""}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                {isEditing && (
                  <div className="flex space-x-2">
                    <Button>
                      <Save className="h-4 w-4 mr-2" />
                      Salvar Alterações
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancelar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 