import { IsString } from "class-validator";

export class CreateAuthorDto{
    @IsString()
    firstname: string;
    @IsString()
    lastname: string;
}