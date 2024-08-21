import { Injectable } from '@nestjs/common'
import { Monet } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class MonetService {
  constructor(private prisma: PrismaService) {}

  async createMonet(data: { purchase: number; sell: number }): Promise<Monet> {
    return this.prisma.monet.create({
      data
    })
  }

  async getAllMonet(): Promise<Monet[]> {
    return this.prisma.monet.findMany({
      orderBy: {
        createdAt: 'asc' // Сортування від найстарішого до найновішого
      }
    })
  }

  async getMonetById(id: number): Promise<Monet> {
    return this.prisma.monet.findUnique({
      where: { id }
    })
  }

  async updateMonet(
    id: number,
    data: { purchase?: number; sell?: number }
  ): Promise<Monet> {
    return this.prisma.monet.update({
      where: { id },
      data
    })
  }

  async deleteMonet(id: number): Promise<Monet> {
    return this.prisma.monet.delete({
      where: { id }
    })
  }
}
