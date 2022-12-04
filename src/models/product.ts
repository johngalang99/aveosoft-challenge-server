import mongoose from 'mongoose';

interface IProduct {
  name: string,
  model: string,
  category: string,
  price: string,
  image: string
}

interface ProductDoc extends mongoose.Document {
  name: string,
  model: string,
  category: string,
  price: string,
  image: string
}
interface productModelInterface extends mongoose.Model<ProductDoc> {
  build(attr: IProduct): ProductDoc
}

const productSchema = new mongoose.Schema({
  name: { type: 'String', required: true },
  model: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true }
})

productSchema.statics.build = (attr: IProduct) => {
  return new Product(attr)
}

const Product = mongoose.model<ProductDoc, productModelInterface>('Product', productSchema)

export { Product }
