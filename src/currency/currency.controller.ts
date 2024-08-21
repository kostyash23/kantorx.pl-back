import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CurrencyService } from './currency.service'

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  getCurrencies() {
    return this.currencyService.getCurrencies()
  }

  @Post()
  createCurrency(
    @Body()
    data: {
      title: string
      logo: string
      purchase: number
      sell: number
    }
  ) {
    return this.currencyService.createCurrency(data)
  }

  @Put(':id')
  updateCurrency(
    @Param('id') id: string,
    @Body()
    data: { title?: string; logo?: string; purchase?: number; sell?: number }
  ) {
    return this.currencyService.updateCurrency(Number(id), data)
  }

  @Delete(':id')
  deleteCurrency(@Param('id') id: string) {
    return this.currencyService.deleteCurrency(Number(id))
  }
}
