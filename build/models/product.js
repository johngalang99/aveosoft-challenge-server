"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: { type: 'String', required: true },
    model: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
});
productSchema.statics.build = (attr) => {
    return new Product(attr);
};
const Product = mongoose_1.default.model('Product', productSchema);
exports.Product = Product;
