"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const faker_1 = require("@faker-js/faker");
const express_1 = __importDefault(require("express"));
const product_1 = require("../models/product");
const router = express_1.default.Router();
exports.productRouter = router;
router.get('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.Product.find();
    return res.status(200).send(products);
}));
router.get('/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.Product.find();
    const categories = [...new Set(products.map(product => product.category))];
    return res.status(200).send(categories);
}));
router.get('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.Product.findById(req.params.id);
    return res.status(200).send(products);
}));
router.post('/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = product_1.Product.build({
        name: faker_1.faker.commerce.productName(),
        model: faker_1.faker.commerce.productAdjective(),
        category: 'laptop',
        price: faker_1.faker.commerce.price(100, 200, 0, '$'),
        image: faker_1.faker.image.imageUrl()
    });
    yield product.save();
    return res.status(201).send(product);
}));
