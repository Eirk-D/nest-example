import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogeventsService } from './logevents.service';
import { CreateLogeventDto } from './dto/create-logevent.dto';
import { UpdateLogeventDto } from './dto/update-logevent.dto';

@Controller('logevents')
export class LogeventsController {
  constructor(private readonly logeventsService: LogeventsService) {}

  @Post()
  create(@Body() createLogeventDto: CreateLogeventDto) {
    return this.logeventsService.create(createLogeventDto);
  }

  @Get()
  findAll() {
    return this.logeventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logeventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogeventDto: UpdateLogeventDto) {
    return this.logeventsService.update(+id, updateLogeventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logeventsService.remove(+id);
  }
}
