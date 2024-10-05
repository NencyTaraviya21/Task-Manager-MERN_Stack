import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({

    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
    },
    dueDate: {
        type: Date,
        set: function(v) {
            return new Date(v.setHours(0, 0, 0, 0));
        },
        get: function(v) {
            return v ? new Date(v).toLocaleDateString('en-GB') : v;
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }

});

TaskSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

TaskSchema.set('toJSON', { getters: true });

const Task = mongoose.model('Task',TaskSchema);
export default Task;   