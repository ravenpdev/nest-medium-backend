import { DatabaseModule } from '@app/common/database';
import { Module } from '@nestjs/common';
import { User, UserSchema } from './models/user.schema';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
