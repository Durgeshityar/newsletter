import mongoose from 'mongoose'
import { driver, createAstraUri } from 'stargate-mongoose'

export const connectDb = async () => {
  try {
    const uri = createAstraUri(
      process.env.ASTRA_DB_API_ENDPOINT!,
      process.env.ASTRA_DB_APPLICATION_TOKEN!
    )

    // check if there is an existing connection or not
    if (mongoose.connection.readyState !== 0) {
      // disconnect if exists
      await mongoose.disconnect()
    }

    mongoose.set('autoCreate', true)
    mongoose.setDriver(driver)

    await mongoose
      .connect(uri, { isAstra: true })
      .then(() => {
        console.log('connected')
      })
      .catch((r) => {
        console.log(r)
      })
  } catch (error) {
    console.log(error)
  }
}
