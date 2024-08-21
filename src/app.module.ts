import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CurrencyModule } from './currency/currency.module'
import { PrismaService } from './prisma.service'
import { IronModule } from './iron/iron.module';
import { MonetModule } from './monet/monet.module';

@Module({
  imports: [CurrencyModule, IronModule, MonetModule],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
