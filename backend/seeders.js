import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/user.js'
import products from './data/products.js'
import User from './models/userModal.js'
import Order from './models/orderModal.js'
import Product from './models/productModal.js'
import connectDB from './config/config.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data Imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.bold)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.bold)
    process.exit(1)
  }
}

if (process.argv[2] === '-d' ? destroyData() : importData());
