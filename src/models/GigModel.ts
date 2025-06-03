// src/models/UserModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IGig extends Document {
    title: string;
    description: string;
    budget: number;
    tags: string[];
}

const GigSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        budget: { type: Number, required: true },
        tags: { type: [String], default: [] },
    },
    { timestamps: true }
);

export default mongoose.model<IGig>('Gig', GigSchema);
