import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps: true})
export class File extends Document {
    @Prop({type: Number})
    externalID: number;

    @Prop({type: String})
    base64: string;
}

export const FileSchema = SchemaFactory.createForClass(File);