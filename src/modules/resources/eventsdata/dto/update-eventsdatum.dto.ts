import { PartialType } from '@nestjs/swagger';
import { CreateEventsdatumDto } from './create-eventsdatum.dto';

export class UpdateEventsdatumDto extends PartialType(CreateEventsdatumDto) {}
