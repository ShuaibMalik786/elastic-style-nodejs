import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
export declare class ConfigService implements MongooseOptionsFactory {
    private readonly envConfig;
    constructor(filePath: string);
    get(key: string): string;
    createMongooseOptions(): MongooseModuleOptions;
}
