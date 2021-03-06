import {Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {File} from "./models/file";
import {InjectModel} from "@nestjs/mongoose";
import * as QRCode from 'qrcode';

@Injectable()
export class AppService {
    constructor(
        @InjectModel(File.name) private fileModel: Model<File>,
    ) {
    }

    async add(file, body) {
        if (!file || file?.fieldname !== 'file' || !file?.mimetype?.includes('pdf')) return null;

        const create = new this.fileModel({
            externalID: body.externalID,
            base64: file?.buffer?.toString('base64')
        });
        return create.save();
    }

    async get(){
        return this.fileModel.find();
    }

    async getByExternalID(externalID: string) {
        return this.fileModel.findOne({externalID});
    }

    async createQRByExternalID(externalID: string) {
        return QRCode.toDataURL(`https://bel-app-web.herokuapp.com/file/${externalID}`);
    }

    async deleteByID(id){
        return this.fileModel.deleteOne({_id: id});
    }
}