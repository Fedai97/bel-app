import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class Link extends Document {
    @Prop({type: Number})
    externalID: number;

    @Prop({type: String})
    pdfLink: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);