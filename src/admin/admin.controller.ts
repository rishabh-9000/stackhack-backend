import { Controller, Post, Body } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';
import { Admin } from './models/admin.interface';
import { AdminService } from './admin.service';

@Controller('v1/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async login(@Body() payload: AdminDto): Promise<Admin> {
    const response = await this.adminService.login(payload);

    return response;
  }
}
