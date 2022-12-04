import { faker } from '@faker-js/faker';
import express, { Request, Response } from 'express';

import { Product } from '../models/product';

const router = express.Router()

router.get('/products', async (req: Request, res: Response) => {
  const products = await Product.find()
  return res.status(200).send(products)
})

router.get('/categories', async (req: Request, res: Response) => {
  const products = await Product.find()
  const categories = [...new Set(products.map(product => product.category))]
  return res.status(200).send(categories)
})

router.get('/products/:id', async (req: Request, res: Response) => {
  const products = await Product.findById(req.params.id)
  return res.status(200).send(products)
})

router.post('/product', async (req: Request, res: Response) => {
  const product = Product.build({
    name: faker.commerce.productName(),
    model: faker.commerce.productAdjective(),
    category: 'laptop',
    price: faker.commerce.price(100, 200, 0, '$'),
    image: faker.image.imageUrl()
  })
  await product.save()
  return res.status(201).send(product)
})

export { router as productRouter }
