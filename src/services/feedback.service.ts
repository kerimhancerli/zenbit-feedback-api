import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Feedback } from '../entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) { }

  findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }

  findOne(id: FindOneOptions<Feedback>): Promise<Feedback> {
    return this.feedbackRepository.findOne(id);
  }

  createFeedback(feedback: Feedback): Promise<Feedback> {
    return this.feedbackRepository.save(feedback);
  }
}
