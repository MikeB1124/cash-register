export async function postTransaction(transaction){
    const response = await fetch("/api/transactions", {
      method:"POST",
      body: JSON.stringify({transaction}),
      headers: {
        "Content-Type": "application/json"
      },
    })
    const data = await response.json()
  }

export async function getTransactions(){
    const response = await fetch("/api/transactions", {
      method:"GET",
    })
    const data = await response.json()
    console.log(data)
  }