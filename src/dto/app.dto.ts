import { IsNotEmpty } from 'class-validator';

export class AddDto {
    @IsNotEmpty()
    readonly externalID: number;

    @IsNotEmpty()
    readonly title: string;
}
