
//changed from handleChange to itemChange trying to fix. it did nothing. 
//i took out the first grocerie: on line 8...no change
//i changed soda to true so it didnt stay in my list box
//i added the map inside ul tags
//now my items work but my brand units and quantity still do not. 
//changed units in render to look like others and it didnt matter stayed the same
//i voied i wanted my imput boxes to line up so it was suggested i do div 1 and div 2 to fix
//div change did some things...so i changed it back for now but noted ...


class App extends React.Component {
    state = {
        groceries,

        item:'',
        brand:'',
        units:'',
        quantity:''
        
    }
    
    itemChange = (event) => {
        console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value})
            
            }
        
    submit = (event)=>{
        event.preventDefault()
        // thid.setState?

        console.log('submit');
    
    const item = {
        item: this.state.item,
        brand: this.state.brand,
        units: this.state.units,
        quantity: this.state.quantity,
        isPurchased: false
    }

    

    //taking item out of line 'groceries' rebroke it. can i add them all
    //yes but it made no change

        this.setState({

                groceries : [ item, ...this.state.groceries ],
                item:'',
                brand:'',
                units:'',
                quantity:''
            }
        )
     }



    render() {

        return ( <div>
                
              <h2>Grocerie List</h2>

            <form onSubmit= {this.submit}>
            
      
                <lable htmlFor="item"></lable> 
                <input id='item' 

                type='text'
                value = {this.state.item} 
                onChange= {this.itemChange}  
                placeholder= 'ITEM'
                item= '' 
                />

            <br />

            
                <label htmlFor="brand"></label>
                <input id='brand'
                type='text' 
                value = {this.state.brand}
                onChange= {this.itemChange} 
                brand=''
                placeholder= 'BRAND'
               
                />
            <br />
                
                <label htmlFor="units" ></label>
                <input id="units" onChange= {this.itemChange} type='text' 
                placeholder='UNITS'
                value = {this.state.units}></input>
                
                
                
            <br />

            <label htmlFor="quantity" ></label>
                <input id='quantity'
                type='text' 
                value = {this.state.quantity}
                onChange= {this.itemChange}
                item=''
                placeholder='QUANTITY'
                />

                <br />
                <br/>
                

            {/* <input type='submit'/> */}
            <button>Add to List</button>
            <br/>
            <br/>
            <button>Reset</button>
            <br/>
            <br/>

            {/* <input type="reset" value="Reset"></input> */}

            </form>

            <div>
            <ul>
            {
                this.state.groceries.map((grocery)=>
                !grocery.isPurchased?<li> 
                    {grocery.item}
                <ul>{grocery.brand}</ul>
                <ul>{grocery.units}</ul>
                <ul>{grocery.quantity}</ul>
                
                </li>: '')//maybe here
                
            }</ul>
            

               </div>

        </div>)
        
    }

}



const groceries = [
    {
        item: 'Soda',
        brand: 'Sprite',
        units: '2 liters',
        quantity: 1,
        isPurchased: true
    },
     {
        item: 'Chips',
        brand: 'Pringles',
        units: '3 oz',
        quantity: 1,
        isPurchased: true
    },
     {
        item: 'Cookies',
        brand: 'Thin Oreos',
        units: '16 oz',
        quantity: 1,
        isPurchased: true
    }
]



  
   



ReactDOM.render(<App/>, document.querySelector(".container"))



/* <input type="checkbox" onChange={this.handleChange} id="cb"/>
                <label for="checkBox">Paid</label> */
