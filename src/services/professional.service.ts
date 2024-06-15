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

  async findAll(): Promise<Professional[]> {
    console.log("by");
    return await this.professionalRepository.find();
  }

//   async findOne(id: number): Promise<Professional> {
//     return await this.professionalRepository.findOne(id);
//   }

  async createUser(professional: Professional): Promise<Professional> {
    return await this.professionalRepository.save(professional);
  }
}
