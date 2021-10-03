import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class File extends Document {
    @Prop({type: String, required: true, createIndexes: true})
    externalID: string;

    @Prop({type: String})
    base64: string;
}

export const FileSchema = SchemaFactory.createForClass(File);