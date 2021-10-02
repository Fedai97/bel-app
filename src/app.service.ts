import {Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {File} from "./models/file";
import {InjectModel} from "@nestjs/mongoose";
import * as QRCode from 'qrcode';

const fs = require('fs');


@Injectable()
export class AppService {
    constructor(
        @InjectModel(File.name) private fileModel: Model<File>,
    ) {
        // this.createQR();
    }

    async addFile(file) {
        console.log('result --> ', file);
        if (!file || file?.fieldname !== 'file' || !file?.mimetype?.includes('pdf')) return null;

        const create = new this.fileModel({
            externalID: 1,
            base64: file?.buffer?.toString('base64')
        });
        return create.save();
    }

    async getFileByExternalID(externalID: number) {
        const file = await this.fileModel.findOne({externalID});
        // let buff = new Buffer(file.base64, 'base64');

        return file;
    }

    async createQRByExternalID(externalID: number) {
        return QRCode.toDataURL(`http://localhost:20010/api/file/${externalID}`);
    }
}