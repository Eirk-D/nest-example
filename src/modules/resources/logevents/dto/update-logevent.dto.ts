import { PartialType } from '@nestjs/swagger';
import { CreateLogeventDto } from './create-logevent.dto';

export class UpdateLogeventDto extends PartialType(CreateLogeventDto) {}
