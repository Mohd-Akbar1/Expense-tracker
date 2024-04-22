
import React, { useState } from 'react'
import './expense.css'
import { MdDeleteForever } from "react-icons/md";

const ExpenseTracker = () => {
    const [balance,setbalance]=useState('')
    const [netbalance,setnetbalance]=useState(0)
    const [Amount,setAmount]=useState(0)
    const [Transaction,setTransactions]=useState([])
    const [description,setdescription]=useState('')
    const [expense,setexpense]=useState(0)

    const handleClick=(e)=>{
        if(description=='') return alert('enter the description')
       const num=parseInt(balance)
        if (isNaN(num)) {
            alert('Please enter a valid amount.');
            return;
        }
        
       
        
        setTransactions(prev=>([...prev,{description,balance}]))
        setbalance('')
        setdescription('')
       
        
        if(num<0){
            setexpense(expense-parseInt(num))
        }else{
            setAmount(Amount+parseInt(num))
        }
       
        console.log(Transaction)
       


    }
   const handleDelete=(idx)=>{
    const updatedTransactions = [...Transaction];
   
    updatedTransactions.splice(idx, 1);
  
    setTransactions(updatedTransactions);
   }


    return (
    <div className='expense'>
        <h1>Expense Tracker</h1>
   
        <div className="balance">
            <div className='last'>
            <p style={{color:'green'}}>Income:${Amount}</p>
            </div>
            
            <div>
            <p style={{color:'red'}}>Expense:-${expense}</p>
            </div>
         
        </div>
        <div className="expenses">
            <p>Add expense</p>
       
           <div className="inputs">
                <div className='inputbox'>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Enter description...' />
                </div>
                <div className="inputbox">
                <label htmlFor="expense">Expense</label>
                <input type="number" id="expense" value={balance}  onChange={(e)=>setbalance(e.target.value) } placeholder='Enter amount' />

                </div>
                
                <div className="butoons">
                <button  onClick={handleClick}>Add </button>
                </div>
            </div>
       
        </div>
        <div className="listContainer">
            {Transaction.map((list,idx)=>(
                <div className="mainList" key={idx} >
                    <h4 className='desc'>{list.description}   </h4>
                    <span className='balanceList'> {list.balance}$</span>
                    <MdDeleteForever className='icon' onClick={()=>handleDelete(idx)} />
                    
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default ExpenseTracker
