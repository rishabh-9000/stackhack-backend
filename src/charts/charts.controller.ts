import { Controller, Get } from '@nestjs/common';
import { ChartsService } from './charts.service';

@Controller('v1/charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Get()
  async registrationTypes(): Promise<any> {
    const response = await this.chartsService.getRegistrationTypeCount();

    const finalResponse: any = [];
    response.forEach(item => {
      const x: any = {};
      x.label = item._id;
      x.value = item.count;
      finalResponse.push(x);
    });

    return finalResponse;
  }
}
