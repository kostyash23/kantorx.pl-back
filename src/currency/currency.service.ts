import { Injectable } from '@nestjs/common'
import { Currency } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CurrencyService {
  constructor(private prisma: PrismaService) {}

  async getCurrencies(): Promise<Currency[]> {
    return this.prisma.currency.findMany({
      orderBy: {
        createdAt: 'asc' // Сортування від найстарішого до найновішого
      }
    })
  }

  async createCurrency(data: {
    title: string
    logo: string
    purchase: number
    sell: number
  }): Promise<Currency> {
    return this.prisma.currency.create({
      data
    })
  }

  async updateCurrency(
    id: number,
    data: { title?: string; logo?: string; purchase?: number; sell?: number }
  ): Promise<Currency> {
    return this.prisma.currency.update({
      where: { id },
      data
    })
  }

  async deleteCurrency(id: number): Promise<Currency> {
    return this.prisma.currency.delete({
      where: { id }
    })
  }
}
