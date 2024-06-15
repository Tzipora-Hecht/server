import { Controller, Get } from '@nestjs/common';
import {  ProfessionalService } from '../services/professional.service'
import { Professional } from '../entities/professional';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Get()
  async getAllProfessionals(): Promise<Professional[]> {
    console.log("hi");
    return this.professionalService.findAll();
  }
}
