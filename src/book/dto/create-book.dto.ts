import { IsBoolean, IsString } from "class-validator"

export class CreateBookDto{
    @IsString()
    title: string;
    @IsBoolean()
    isAvailable: boolean;
}