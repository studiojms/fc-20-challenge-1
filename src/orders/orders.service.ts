import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.prismaService.order.create({
      data: {
        status: 'PENDING',
        Asset: { connect: { id: createOrderDto.assetId } },
        price: createOrderDto.price,
      },
    });
  }

  async findAll() {
    return this.prismaService.order.findMany({
      include: { Asset: true },
    });
  }
}
