import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  create(createAssetDto: CreateAssetDto) {
    console.log({ createAssetDto });
    return this.prismaService.asset.create({
      data: createAssetDto,
    });
  }

  findAll() {
    return this.prismaService.asset.findMany();
  }
}
