import { Injectable } from "@nestjs/common";
// import { Flower } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class FlowersService {
    constructor(private readonly prisma: PrismaService) {}

    findAll() {
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
}
