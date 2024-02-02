import React,{useState} from 'react'
import {Card, Button, Form, InputGroup } from 'react-bootstrap';

function AddExpenseForm() {
    const[formData,setFormData] = useState({category:"",description:"",amount:""})
    const handleChange = (event) => {
        const {id,value} = event.target
        setFormData((prev)=>({...prev, [id]: value}))
    }
    const addExpense = (e) => {
        e.preventDefault();
        alert(`Category: ${formData.category}, Description: ${formData.description}, Amount: ${formData.amount}`)
        setFormData({category:"",description:"",amount:""})
    }
    return (
        <Card>
            <Card.Body>
                <Form onSubmit={addExpense}>
                    <Form.Select aria-label="Expense Category" id='category' name="category" value={formData.category} onChange={handleChange}>
                        <option>Expense Category</option>
                        <option value="travel">Travel</option>
                        <option value="food">Food</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="entertainment">Entertainment</option>
                    </Form.Select>
                    
                    <br />

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default"> Expense Description </InputGroup.Text>
                        <Form.Control type="text" id='description' name="description" value={formData.description} placeholder="movie, fuel, restaurant . . . " onChange={handleChange}/>
                    </InputGroup>

                    <br />

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default"> Expense Amount </InputGroup.Text>
                        <Form.Control type="number" id='amount' name="amount" value={formData.amount} onChange={handleChange} />
                    </InputGroup>
                    
                    <br />
            
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default AddExpenseForm