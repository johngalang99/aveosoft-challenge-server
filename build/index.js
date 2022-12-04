"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const product_1 = require("./routes/product");
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb+srv://admin:admin@batch139.kdoph.mongodb.net/Aveosoft', {}, () => console.log('connected to database'));
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use(product_1.productRouter);
const PORT = process.env.PORT || 8080;
app.listen(config_1.config.server.port, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
