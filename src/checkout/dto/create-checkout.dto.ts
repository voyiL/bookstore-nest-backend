import { IsNumber, IsString } from "class-validator";

export class CreateCheckoutDto {
    @IsString()
    firstname: string;
    @IsString()
    lastname: string;
    @IsNumber()
    bookId: number;
}