import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { MonetService } from './monet.service'

@Controller('monet')
export class MonetController {
  constructor(private readonly monetService: MonetService) {}

  @Post()
  createMonet(@Body() data: { purchase: number; sell: number }) {
    return this.monetService.createMonet(data)
  }

  @Get()
  getAllMonet() {
    return this.monetService.getAllMonet()
  }

  @Get(':id')
  getMonetById(@Param('id') id: number) {
    return this.monetService.getMonetById(id)
  }

  @Put(':id')
  updateMonet(
    @Param('id') id: number,
    @Body() data: { purchase?: number; sell?: number }
  ) {
    return this.monetService.updateMonet(+id, data)
  }

  @Delete(':id')
  deleteMonet(@Param('id') id: number) {
    return this.monetService.deleteMonet(+id)
  }
}
