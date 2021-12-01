import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsdataService } from './eventsdata.service';
import { CreateEventsdatumDto } from './dto/create-eventsdatum.dto';
import { UpdateEventsdatumDto } from './dto/update-eventsdatum.dto';

@Controller('eventsdata')
export class EventsdataController {
  constructor(private readonly eventsdataService: EventsdataService) {}

  @Post()
  create(@Body() createEventsdatumDto: CreateEventsdatumDto) {
    return this.eventsdataService.create(createEventsdatumDto);
  }

  @Get()
  findAll() {
    return this.eventsdataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsdataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventsdatumDto: UpdateEventsdatumDto) {
    return this.eventsdataService.update(+id, updateEventsdatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsdataService.remove(+id);
  }
}
