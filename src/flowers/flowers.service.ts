import { Injectable } from "@nestjs/common";
// import { Flower } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { FlowersCreateDto } from "./flowers.dto";
import { ConfigService } from "@nestjs/config";
import { EnumAppMode } from "src/types";

@Injectable()
export class FlowersService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly configService: ConfigService
    ) {}

    findAll() {
        console.log(this.configService.get<EnumAppMode>("MODE"));
        return this.prisma.flower.findMany();
        // return [
        //     {
        //         name: "Rose",
        //         color: "Red",
        //         price: 100,
        //     },
        //     {
        //         name: "Lily",
        //         color: "White",
        //         price: 150,
        //     },
        //     {
        //         name: "Tulip",
        //         color: "Yellow",
        //         price: 200,
        //     },
        // ];
    }
    create(dto: FlowersCreateDto) {
        return this.prisma.flower.create({ data: dto });
    }
}
