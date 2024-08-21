import { Module } from '@nestjs/common'
import { IronController } from './iron.controller'
import { IronService } from './iron.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [IronController],
  providers: [IronService, PrismaService]
})
export class IronModule {}
