// @flow

/**
 * Module dependencies.
 */
import mongoose from 'mongoose'

const Schema = mongoose.Schema

/**
 * Review Schema
 */
const ReviewSchema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank',
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: 'Review is required',
  },
  content: {
    type: String,
    trim: true,
    required: 'Content cannot be blank',
  },
  category: {
    type: String,
    enum: [
      'Currently doing business with company',
      'Have done business with company',
      'Discussed business with company',
      'General',
      'Other',
    ],
    required: 'Please select a category',
  },
  anonymous: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: true,
  },
  organization: {
    type: Schema.ObjectId,
    ref: 'Organization',
    required: 'Organization is required',
  },
})

export default ReviewSchema
