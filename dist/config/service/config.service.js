"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
class ConfigService {
    constructor(filePath) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }
    get(key) {
        return this.envConfig[key];
    }
    createMongooseOptions() {
        return {
            uri: this.envConfig['MONGODB_URI'],
        };
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map