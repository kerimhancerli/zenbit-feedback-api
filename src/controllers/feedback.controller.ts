import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Feedback } from '../entities/feedback.entity';
import { FeedbackService } from '../services/feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async createFeedback(@Res() response, @Body() feedback: Feedback) {
    console.log(feedback);
    const newFeedback = await this.feedbackService.createFeedback(feedback);
    return response.status(HttpStatus.CREATED).json({
      newFeedback,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const feedbacks = await this.feedbackService.findAll();
    return response.status(HttpStatus.OK).json({
      feedbacks,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const feedback = await this.feedbackService.findOne(id);
    return response.status(HttpStatus.OK).json({
      feedback,
    });
  } 
}
