import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { FeedbackModule } from './feedback.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-30-159-47.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'tmajdlpwgztgzp',
      password: 'c861fa882d79f5e9ec09f48bebbf5892e79ccae4b141af2e65fb7bf8e3df8559',
      database: 'dd6vfmifs6foj8',
      entities: [Feedback],
      synchronize: true,
      migrationsTableName: 'migrations',
    }),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
