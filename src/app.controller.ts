import {Controller, Get, Render} from '@nestjs/common';
import {AppService} from "./app.service";

@Controller('')
export class AppController {
    constructor(
        public readonly app: AppService,
    ) {
    }

    @Get()
    @Render('index')
    root() {
        return { message: 'Hello world!' };
    }
}
