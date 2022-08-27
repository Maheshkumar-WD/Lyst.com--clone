import { Button, Container, Input, Select, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Demoapi = () => {
    const initialData={
        prdocutId:"",
        name:"",
        category:"",
        brand:"",
        gender:"",
        price:"",
        stockquantity:"",
        image:"",
        discount:null
    }

    const [formdata,setFormData] = useState(initialData)

    const handChange=(e)=>{
        const {name,value} =e.target;
        const currentdata={
            ...formdata,[name]:value
        }
        setFormData(currentdata)
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        axios({
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             data: JSON.stringify(formdata),
            url:"https://lyst-db-constructweek.herokuapp.com/prdoucts",
        }).then(res=>{
            console.log(res)
            formdata("")
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div>
        <form onSubmit={(e)=>handlesubmit(e)}>
            <Container>
                <Stack>
                <Input onChange={(e)=>handChange(e)}  value={formdata.name} name="name" type="text" placeholder="name"/>
                <Input onChange={(e)=>handChange(e)}  value={formdata.category} name='category' type="text" placeholder="category"/>
                <Input onChange={(e)=>handChange(e)}  value={formdata.brand}name='brand' type="text" placeholder='brand' />
                <Input onChange={(e)=>handChange(e)}  value={formdata.gender} name='gender' type="text" placeholder="gender"/>
                <Input onChange={(e)=>handChange(e)}  value={formdata.price} name='price' type="Number" placeholder="price"/>
                <Input onChange={(e)=>handChange(e)}  value={formdata.stockquantity} name='stockquantity' type="Number" placeholder="stockquantity"/>
                <Input onChange={(e)=>handChange(e)}  value={formdata.image} name='image' type="text" placeholder="image"/>
                <Input onChange={(e)=>handChange(e)}  value={formdata.discount} name='discount' type="Number" placeholder="discount"/>
                <Button  colorScheme="teal" type="submit" >Add product</Button>
                </Stack>
            </Container>
        </form>
    </div>
  )
}

export default Demoapi