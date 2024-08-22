import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CurrencyModule } from './currency/currency.module'
import { PrismaService } from './prisma.service'
import { IronModule } from './iron/iron.module';
import { MonetModule } from './monet/monet.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    CurrencyModule,
    IronModule,
    MonetModule,
    ConfigModule.forRoot({
      isGlobal: true // Дозволяє використовувати ConfigModule у всьому додатку
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
