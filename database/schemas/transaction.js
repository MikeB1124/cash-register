import {Schema, model, models} from 'mongoose'


const TransactionSchema = new Schema({
  orderId:  String,
  items: [{
    category: String,
    price: Number,
    tax: Number,
    total: Number,
    taxable: Boolean
  }],
  status: String,
  tax:   Number,
  total: Number,
  date: { type: Date, default: Date.now },
});

const Transaction = models.Transaction || model("Transaction", TransactionSchema)

export default Transaction