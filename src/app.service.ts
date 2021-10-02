import {Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {Link} from "./models/link";
import {InjectModel} from "@nestjs/mongoose";
import * as QRCode from 'qrcode';


@Injectable()
export class AppService {
    constructor(
        @InjectModel(Link.name) private link: Model<Link>,
    ) {
        this.createQR();
    }

    async createQR() {
        QRCode.toDataURL('I am a pony!', function (err, url) {
            console.log(url)
        })
    }
}