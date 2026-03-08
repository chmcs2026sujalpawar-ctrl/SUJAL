import mongoose from 'mongoose';

const memberSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        trainerName: {
            type: String,
            required: false,
        },
        mobileNo: {
            type: String,
            required: false,
        },
        workoutSplitType: {
            type: String,
            enum: ['beginner', 'intermediate', 'calesthenics'],
            required: true,
        },
        goalType: {
            type: String,
            enum: ['Wt. Loss', 'Wt. gain'],
            required: true,
        },
        initialWeight: {
            type: Number,
            required: true,
        },
        currentWeight: {
            type: Number,
            required: true,
        },
        goalAchieved: {
            type: Boolean,
            default: false,
        },
        membershipType: {
            type: String,
            enum: ['Monthly', 'Yearly', '6 months'],
            required: true,
        },
        workouts: {
            type: String, // Or array of strings, sticking to string for simplicity
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

export const Member = mongoose.model('Member', memberSchema);
