import { Injectable } from '@nestjs/common';
import { CreateLogeventDto } from './dto/create-logevent.dto';
import { UpdateLogeventDto } from './dto/update-logevent.dto';

@Injectable()
export class LogeventsService {
  create(createLogeventDto: CreateLogeventDto) {
    return 'This action adds a new logevent';
  }

  findAll() {
    return `This action returns all logevents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logevent`;
  }

  update(id: number, updateLogeventDto: UpdateLogeventDto) {
    return `This action updates a #${id} logevent`;
  }

  remove(id: number) {
    return `This action removes a #${id} logevent`;
  }
}
