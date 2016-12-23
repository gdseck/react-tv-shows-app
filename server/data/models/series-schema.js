import mongoose from 'mongoose'

const SeriesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true,
    default: mongoose.Types.ObjectId
  },
  title: String,
  year: String,
  creators: [String]
})

const Series = mongoose.model('Series', SeriesSchema)

export const findAllSeries = () => {
  console.log('hallokidoki')
  return new Promise((resolve, reject) => {
    Series.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

export const findFilteredSeries = (filter) => {
  const re = new RegExp(filter, 'i')
  return new Promise((resolve, reject) => {
    Series.find({ $or: [
      {
        title: re
      },
      {
        year: re
      },
      {
        creators:
          {
            $in: [re]
          }
      }
    ]})
  })
}

export default Series
