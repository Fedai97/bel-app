import {Module} from '@nestjs/common';
import {
    ConfigModule,
    ConfigService,
} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {Link, LinkSchema} from "./models/link";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ConfigService,
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URL'),
                useFindAndModify: false,
            }),
            inject: [ConfigService],
        }),
        MongooseModule.forFeatureAsync([
            {
                name: Link.name,
                useFactory: () => {
                    return LinkSchema;
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [
        AppService,
    ],
})
export class AppModule {
}
