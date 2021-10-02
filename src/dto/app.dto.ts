import { IsNotEmpty } from 'class-validator';
import {Prop} from "@nestjs/mongoose";

export class ContractAddDto {
    @IsNotEmpty()
    readonly contract: string;
}

export class TransactionAddDto{
    readonly tokenID: string;
    readonly type: string;
    readonly from: string;
    readonly to: string;
    readonly hash: string;
    readonly amount: string;
    readonly date: string;
}

export class StatisticAddDto{
    contractAddress: string;
    contractName: string;
    contractSymbol: string;
    contractCreatedDate: string;
    tokenID: string;
    tokenImageUrl: string;
    tokenName: string;
    tokenCreatorAddress: string;
    tokenCreatedDate: string;
    eventName: string;
    eventTransactionHash: string;
    eventCreatedDate: string;
    eventArgument: any;
}