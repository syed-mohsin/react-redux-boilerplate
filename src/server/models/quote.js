// @flow

/**
 * Module dependencies.
 */
import mongoose from 'mongoose'
import mongooseCurrency from 'mongoose-currency'

const Schema = mongoose.Schema

/**
 * Load Currency type to the Mongoose Schema types
 */
mongooseCurrency.loadType(mongoose)

const Currency = mongoose.Types.Currency

/**
 * Price Review Schema
 */
const PriceReviewSchema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  quoteDate: {
    type: Date,
    required: 'Quote date is required.',
  },
  deliveryDate: {
    type: Date,
    required: 'Delivery date is required.',
  },
  stcPower: {
    type: Number,
    required: 'Wattage is required',
  },
  price: {
    type: Currency,
    min: 0,
    max: 100000000,
    required: 'Unit price for quote is required',
  },
  leadTime: {
    type: String,
    enum: ['0-2', '2-4', '4-6', '6-10', '10-14', '>14'],
    required: 'Please enter a lead time',
  },
  manufacturer: {
    type: String,
    required: 'Please select a brand',
  },
  quantity: {
    type: String,
    enum: ['0kW-100kW', '101kW-500kW', '501kW-1MW', '>1MW'],
    required: 'Please specify a quantity',
  },
  panelType: {
    type: String,
    enum: ['Poly', 'Mono', 'CIGS', 'CdTe', 'other'],
    required: 'Please specify panel type',
  },
  includesShipping: {
    type: Boolean,
    required: 'Please specify if shipping was included',
  },
  shippingLocation: {
    type: String,
    enum: ['Asia/Australia', 'Africa', 'Europe', 'North America', 'South America'],
  },
  incoterm: {
    type: String,
    enum: ['EXW', 'FCA', 'FAS', 'FOB', 'CPT', 'CFR', 'CIF', 'CIP', 'DAT', 'DAP', 'DDP', 'Not Sure'],
    required: 'Please specify Incoterm',
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

export default PriceReviewSchema
