import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { StatusCodesModule } from './status-codes/status-codes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://amirrafay135:XyImBf1YGtzacNcK@blogcluster.drny97g.mongodb.net/Blog?retryWrites=true&w=majority"
    ),
    UsersModule,
    StatusCodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
