import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { ClientsModule } from './clients/clients.module';
import { CitiesModule } from './cities/cities.module';
import { StatesModule } from './states/states.module';
import { LocationsModule } from './locations/locations.module';
import { LogeventsModule } from './logevents/logevents.module';
import { EventsdataModule } from './eventsdata/eventsdata.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    UsersModule,
    DevicesModule,
    ClientsModule,
    CitiesModule,
    StatesModule,
    LocationsModule,
    LogeventsModule,
    EventsdataModule,
    TodosModule,
  ],
})
export class ResourcesModule {}
