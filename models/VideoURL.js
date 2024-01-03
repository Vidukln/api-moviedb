import mongoose from 'mongoose'

const videoURLSchema = mongoose.Schema({
    movieID:{
        type: String,
        required: true,
    },
    videoID:{
        type: String,
        required: true,
    }
})

const VideoURL = mongoose.model('VideoURL',videoURLSchema)

export default VideoURL
