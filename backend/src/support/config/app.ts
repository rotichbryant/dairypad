import { registerAs } from "@nestjs/config"

export default registerAs('app',() => ({
    env: process.env
}));