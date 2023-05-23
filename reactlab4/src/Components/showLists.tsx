import React, { useEffect, useState } from 'react';
import Expense from '../Model/Expence';
import { getItemsFromServer } from '../Service/dataService';
import ExpenseTracker from './ExpenseTracker';

function showList() {
    const [Items, setItems] = useState<Expense[]>([]);
    const [showForm, setShowForm] = useState<Boolean>(false);


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getItemsFromServer();
                setItems(data)
            }
            catch (error: any) {
                console.log(error);
            }
        };
        fetchItems();
    },[showForm]

    );
    const success=() => {
        setShowForm(false);
    }
    const cancel=() => {
        setShowForm(false);
    }
    return (
        <>
            <header id="page-header">Expense Tracker</header>
            <button id="addButton" onClick={() => setShowForm(true)}>
                Add
            </button>
            {
                showForm && (
                    <div className="form">
                        <ExpenseTracker onTrue={cancel} onClose={success}></ExpenseTracker>
                    </div>
                )
            }
            <>
                <div id="use-Inline header-color">Date</div>
                <div id="use-Inline header-color">Product Purchased</div>
                <div id="use-Inline header-color">Price</div>
                <div id="use-Inline header-color">Payee</div>

            </>
            {
                Items && Items.map((eachItem, index) => (
                    <div key={index}>
                        <div id="use-Inline ">{eachItem.setDate}</div>
                        <div id="use-Inline header-color">{eachItem.product}</div>
                        <div id="use-Inline header-color">{eachItem.price}</div>
                        <div id="use-Inline header-color">{eachItem.payeeName}</div>

                    </div>
                ))
            }
        </>

    )
}

export default showList