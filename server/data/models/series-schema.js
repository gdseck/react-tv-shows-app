import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const SeriesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: mongoose.Types.ObjectId
  },
  title: String,
  year: String,
  creators: [ String ],
  image: String,
  rating: Number
})

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: mongoose.Types.ObjectId
  },
  name: String
})

export const Show = mongoose.model('Show', SeriesSchema)
export const User = mongoose.model('User', UserSchema)

export const shows = () => {
  return Show.find({})
}

export const showById = id => {
  return Show.find({ _id: id })
}

export const filteredShows = filter => {
  const re = new RegExp(filter, 'i')
  return Show.find({
    $or: [ { title: re }, { year: re }, { creators: { $in: [ re ] } } ]
  })
}

export const updateShowRating = (id, rating) => {
  console.log()
  return Show
    .update({ _id: id }, { $set: { rating: rating } }, { upsert: true })
}
