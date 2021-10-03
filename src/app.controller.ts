import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {AppService} from "./app.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {AddDto} from "./dto/app.dto";

@Controller('api')
export class AppController {
    constructor(
        public readonly app: AppService,
    ) {
    }

    @Get()
    async get() {
        const result = await this.app.get();
        return {status: !!result, result}
    }

    @Post('add')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: any, @Body() body: AddDto) {
        const result = await this.app.add(file, body);
        return {status: !!result, result}
    }

    @Get('file/:externalID')
    async getByExternalID(@Param('externalID') externalID: number) {
        const result = await this.app.getByExternalID(externalID);
        return {status: !!result, result}
    }

    @Post('qr/:externalID')
    async createQRByExternalID(@Param('externalID') externalID: number) {
        const result = await this.app.createQRByExternalID(externalID);
        return {status: !!result, result}
    }
}
