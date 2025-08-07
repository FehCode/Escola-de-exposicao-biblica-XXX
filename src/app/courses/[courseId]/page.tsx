"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CourseRedirectPage({ params }: { params: Promise<{ courseId: string }> }) {
  const router = useRouter()

  useEffect(() => {
    const handleRedirect = async () => {
      const { courseId } = await params
      
      // Mapear os IDs dos cursos para as páginas corretas
      const courseMapping: { [key: string]: string } = {
        "course-1": "/courses/1",
        "course-2": "/courses/2", 
        "course-3": "/courses/3"
      }

      const targetPage = courseMapping[courseId]
      if (targetPage) {
        router.replace(targetPage)
      } else {
        // Se não encontrar o curso, redirecionar para a página de cursos
        router.replace("/courses")
      }
    }

    handleRedirect()
  }, [params, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Carregando curso...</p>
      </div>
    </div>
  )
} 