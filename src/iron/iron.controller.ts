import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { IronService } from './iron.service'

@Controller('iron')
export class IronController {
  constructor(private readonly ironService: IronService) {}

  @Post()
  createIron(@Body() data: { purchase: number; sell: number }) {
    return this.ironService.createIron(data)
  }

  @Get()
  getAllIron() {
    return this.ironService.getAllIron()
  }

  @Get(':id')
  getIronById(@Param('id') id: number) {
    return this.ironService.getIronById(id)
  }

  @Put(':id')
  updateIron(
    @Param('id') id: number,
    @Body() data: { purchase?: number; sell?: number }
  ) {
    return this.ironService.updateIron(+id, data)
  }

  @Delete(':id')
  deleteIron(@Param('id') id: number) {
    return this.ironService.deleteIron(+id)
  }
}
