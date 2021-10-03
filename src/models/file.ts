import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class File extends Document {
    @Prop({type: Number, required: true, createIndexes: true})
    externalID: number;

    @Prop({type: String})
    title: string;

    @Prop({type: String})
    base64: string;
}

export const FileSchema = SchemaFactory.createForClass(File);