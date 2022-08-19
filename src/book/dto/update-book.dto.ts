import { IsBoolean, IsString } from "class-validator"

export class UpdateBookDto{
    @IsString()
    title: string;
    @IsBoolean()
    isAvailable: boolean;
}