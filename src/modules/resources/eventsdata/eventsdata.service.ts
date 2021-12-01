import { Injectable } from '@nestjs/common';
import { CreateEventsdatumDto } from './dto/create-eventsdatum.dto';
import { UpdateEventsdatumDto } from './dto/update-eventsdatum.dto';

@Injectable()
export class EventsdataService {
  create(createEventsdatumDto: CreateEventsdatumDto) {
    return 'This action adds a new eventsdatum';
  }

  findAll() {
    return `This action returns all eventsdata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventsdatum`;
  }

  update(id: number, updateEventsdatumDto: UpdateEventsdatumDto) {
    return `This action updates a #${id} eventsdatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventsdatum`;
  }
}
