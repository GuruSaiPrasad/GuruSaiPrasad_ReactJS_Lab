
import React, { useState } from "react";
import { postItemstoServer } from "../Service/dataService";


type Props={
    onTrue:any,
    onClose:any
}
function ExpenseTracker({onTrue,onClose}:Props) {

    function setDefaultDate(){
        const date=new Date();
        return(
            `${date.getFullYear()}-${("0"+ (date.getMonth()+1)).slice(-2)}-${("0"+ (date.getDate()+1)).slice(-2)}`
        )
    }
    const [payeeName, setPayeeName] = useState("");
    const [product, setProductName] = useState("");
    const [price,setPriceName] = useState(0);
    const [setDate,setSetDate] = useState(setDefaultDate());


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const finalItem=[payeeName,product,price,setDate];
    const data=await postItemstoServer(finalItem);
    onTrue();
    }

    function setPayee(event: React.ChangeEvent<HTMLSelectElement>) {
        setPayeeName(event.target.value);
    }

    function setProduct(event: React.ChangeEvent<HTMLInputElement>) {
        setProductName(event.target.value);
    }

    function setPrice(event: React.ChangeEvent<HTMLInputElement>) {
        setPriceName(parseInt(event.target.value));
    }

    
    function settingDate(event: React.ChangeEvent<HTMLInputElement>) {
        setSetDate(event.target.value);
    }
    return (
        <>
            <section>
                <header>
                    <h1>Add New Item</h1>
                    <p>Read the below instruction proceeding:</p>
                    <br />
                    Make sure you fill all the details where * is marked
                </header>
                <form onSubmit={handleSubmit}>
                    <article>
                        <p>Name</p>
                        <select name="name" id="name" required value={payeeName} onChange={setPayee}>
                            <option value="" defaultChecked>Choose</option>
                            <option value="Rahul" >Ramesh</option>
                            <option value="Ramesh" >Rahul</option>
                        </select>
                    </article>
                    <article>
                        <p>Product Purchased</p>
                        <input type="text" name="product" id="product" value={product} onChange={setProduct} />
                    </article>
                    <article>
                        <p>Price</p>
                        <input type="number" name="price" id="price" value={price} onChange={setPrice} />
                    </article>
                    <article>
                        <p>Date</p>
                        <input type="date" name="date" id="date" value={setDate} onChange={settingDate} />
                    </article>
                    <button className="form-button" onClick={close}>close</button>
                    <button className="form-button" onClick={onTrue}>Submit</button>

                </form>
            </section>
        </>
    )
}

export default ExpenseTracker