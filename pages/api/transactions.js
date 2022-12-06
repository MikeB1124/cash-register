// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../database/connection"
import Transaction from "../../database/schemas/transaction"

export default async function handler(req, res) {
  connectMongo().catch(error => console.error(error))

  if(req.method == "GET"){
    let transactions = await Transaction.find()
    res.send(transactions)
  }else if(req.method == "POST"){
    await Transaction.create(req.body.transaction)

  }
}
