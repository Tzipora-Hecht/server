import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professional } from '../entities/professional';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(Professional)
    private readonly professionalRepository: Repository<Professional>,
  ) {}

  async findAllProfessional(): Promise<Professional[]> {
    console.log("by");
    return await this.professionalRepository.find();
  }

  // async findOne(id: number): Promise<Professional> {
  //   return await this.professionalRepository.findOneBy();
  // }

  async createProfessional(professional: Professional): Promise<Professional> {
    return await this.professionalRepository.save(professional);
  }


  async updateProfessional(id: string,professional:Professional): Promise<any> {
     await this.professionalRepository.update(id,professional)
  }

  async deleteprofessional(professional:Professional): Promise<Professional>{
    return await this.professionalRepository.remove(professional)
  }
}
