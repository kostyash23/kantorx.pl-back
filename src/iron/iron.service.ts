import { Injectable } from '@nestjs/common'

import { Iron } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class IronService {
  constructor(private prisma: PrismaService) {}

  async createIron(data: { purchase: number; sell: number }): Promise<Iron> {
    return this.prisma.iron.create({
      data
    })
  }

  async getAllIron(): Promise<Iron[]> {
    return this.prisma.iron.findMany({
      orderBy: {
        createdAt: 'asc' // Сортування від найстарішого до найновішого
      }
    })
  }

  async getIronById(id: number): Promise<Iron> {
    return this.prisma.iron.findUnique({
      where: { id }
    })
  }

  async updateIron(
    id: number,
    data: { purchase?: number; sell?: number }
  ): Promise<Iron> {
    return this.prisma.iron.update({
      where: { id },
      data
    })
  }

  async deleteIron(id: number): Promise<Iron> {
    return this.prisma.iron.delete({
      where: { id }
    })
  }
}
