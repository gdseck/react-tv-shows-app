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
  creators: [String]
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

export const getListOfShows = () => {
  console.log('-- getting all shows')
  return new Promise((resolve, reject) => {
    Show.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

export const getShowById = (id) => {
  console.log('-- getting show by id ', id)
  return new Promise((resolve, reject) => {
    Show.find({id: id}).exec((err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

export const getUser = () => {
  console.log('-- fetching user')
  return new Promise((resolve, reject) => {
    User.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

export const findFilteredSeries = (filter) => {
  const re = new RegExp(filter, 'i')
  return new Promise((resolve, reject) => {
    Show.find({ $or: [
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
