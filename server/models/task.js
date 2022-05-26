import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    telNo: Number,
    job: String,
    fitOnType: String,
    note: String,
    items: [String],
    measurement1: String,
    measurement2: String,
    measurement3: String,
});

var task = mongoose.model('task', taskSchema);

export default task;