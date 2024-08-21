import { Module } from '@nestjs/common'
import { CurrencyService } from './currency.service'
import { CurrencyController } from './currency.controller'
import { PrismaModule } from 'src/prisma.model'

@Module({
  imports: [PrismaModule],
  providers: [CurrencyService],
  controllers: [CurrencyController]
})
export class CurrencyModule {}
