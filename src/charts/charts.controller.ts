import { Controller, Get } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { Count } from './models/count.interface';

@Controller('v1/charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Get()
  async registrationTypes(): Promise<Count[]> {
    return await this.chartsService.getRegistrationTypeCount();
  }
}
