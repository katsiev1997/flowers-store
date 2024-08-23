import { Injectable } from "@nestjs/common";

@Injectable()
export class FlowersService {
    findAll() {
        return [
            {
                name: "Rose",
                color: "Red",
                price: 100,
            },
            {
                name: "Lily",
                color: "White",
                price: 150,
            },
            {
                name: "Tulip",
                color: "Yellow",
                price: 200,
            },
        ];
    }
}
