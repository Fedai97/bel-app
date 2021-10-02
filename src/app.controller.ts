import {Body, Controller, Get, Param, Post, Render, UploadedFile, UseInterceptors} from '@nestjs/common';
import {AppService} from "./app.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('api')
export class AppController {
    constructor(
        public readonly app: AppService,
    ) {
    }

    @Post('appPDF')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: any) {
        const result = await this.app.addFile(file);
        return {status: !!result, result}
    }

    @Get('file/:externalID')
    async getFileByExternalID(@Param('externalID') externalID: number) {
        const result = await this.app.getFileByExternalID(externalID);
        return {status: !!result, result}
    }

    @Post('qr/:externalID')
    async createQRByExternalID(@Param('externalID') externalID: number) {
        const result = await this.app.createQRByExternalID(externalID);
        return {status: !!result, result}
    }
}
