import { IsString } from "class-validator";

export class UpdateAuthorDto{
    @IsString()
    firstname: string;
    @IsString()
    lastname: string;
}