import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';

export class ConfigService implements MongooseOptionsFactory {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.envConfig['MONGODB_URI'],
    };
  }

}