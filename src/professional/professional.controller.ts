import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import {  ProfessionalService } from './professional.service'
import { Professional } from './professional';
import { promises } from 'dns'
import { Request } from 'express';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Get()
  async getAllProfessionals(): Promise<Professional[]> {
    console.log("hi");
    return this.professionalService.findAllProfessional();
  }


  @Post()
  async addProfessional(@Req() request: Request): Promise<Professional> {
    // console.log("body",request)
    return this.professionalService.createProfessional(request.body);
  }

  @Put(':id')
  async updateProfessional(@Req() request: Request,@Param('id') id: string):Promise<any>{
    console.log("id",)
    console.log("body",request.body)
    await this.professionalService.updateProfessional(id,request.body)
  }


  @Delete()
  async deleteProfessional(@Req() request: Request): Promise<Professional>{
    return await this.professionalService.deleteprofessional(request.body)
  }
}


