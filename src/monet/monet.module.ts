import { Module } from '@nestjs/common'
import { MonetController } from './monet.controller'
import { MonetService } from './monet.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [MonetController],
  providers: [MonetService, PrismaService]
})
export class MonetModule {}
