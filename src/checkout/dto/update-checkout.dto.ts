import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Author } from "src/author/entity/author.entity";
import { ManyToOne, OneToMany } from "typeorm";
import { Checkout } from "../entity/checkout.entity";

export class UpdateCheckoutDto {
    @IsNumber()
    id: number;
    @IsString()
    firstname: string;
    @IsString()
    lastname: string;
    @IsNumber()
    bookId: number;
}