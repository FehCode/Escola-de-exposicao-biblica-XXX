import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: "Não autorizado" },
        { status: 401 }
      )
    }

    const progress = await prisma.progress.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        lesson: {
          include: {
            course: true
          }
        }
      }
    })

    return NextResponse.json(progress)
  } catch (error) {
    console.error("Erro ao buscar progresso:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: "Não autorizado" },
        { status: 401 }
      )
    }

    const { lessonId, completed } = await request.json()

    if (!lessonId) {
      return NextResponse.json(
        { error: "ID da lição é obrigatório" },
        { status: 400 }
      )
    }

    const progress = await prisma.progress.upsert({
      where: {
        userId_lessonId: {
          userId: session.user.id,
          lessonId
        }
      },
      update: {
        completed,
        completedAt: completed ? new Date() : null
      },
      create: {
        userId: session.user.id,
        lessonId,
        completed,
        completedAt: completed ? new Date() : null
      }
    })

    return NextResponse.json(progress)
  } catch (error) {
    console.error("Erro ao atualizar progresso:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
} 