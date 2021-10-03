import { IsNotEmpty } from 'class-validator';

export class AddDto {
    @IsNotEmpty()
    readonly externalID: string;
}
