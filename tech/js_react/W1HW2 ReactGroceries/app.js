class App extends React.Component {
    state = {
        groceries: groceries,

        item:'',
        brand:'',
        units:'',
        quantity:''
        
    }
    handleChange = (event) => {
        console.log(this.state.value)
        this.setState({[event.target.id]: event.target.value})
            
            }
        
    handleSubmit = (event)=>{
        event.preventDefault()
    
    
    
    const newItem = {
        item: this.state.item,
        brand: this.state.brand,
        units: units,
        quantity: 0,
        isPurchased: false



    }
        this.setState({

                groceries : [ newItem, ...this.state.groceries ],
                item:'',
                brand:'',
                units:''
            }

        )
     }

    render() {

        return (
               
        <div>
                
              <h2>Grocerie List</h2>

            <form onSubmit= {this.handleSubmit}>
                <lable htmlFor="item">Item</lable> 
                <input 
                type='text'
                value = {this.state.item} 
                onChange= {this.handleChange}  
                id= 'item' 

                />

            <br />

            
                <lable htmlFor="brand">Brand</lable>
                <input
                type='text' 
                value = {this.state.brand}
                onChange= {this.handleChange} 
                id="brand" 

                />
            <br />

                <lable htmlFor="units" >Units</lable>
                <input
                type='text' 
                value = {this.state.units}
                onChange= {this.handleChange}
                id="units"
                />
                
            <br />
            <input type='submit'/>
            </form>

            <ul>
                <div>
                    <h2>Preview grocerie list:</h2>
                    <h3>{this.state.item}</h3>
                    <h3>{this.state.brand}</h3>
                    <h3>{this.state.units}</h3>
                </div>
            </ul>

        </div>)
    }

}



const groceries = [
    {
        item: 'Soda',
        brand: 'Sprite',
        units: '2 liters',
        quantity: 1,
        isPurchased: false
    }, {
        item: 'Chips',
        brand: 'Pringles',
        units: '3 oz',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Cookies',
        brand: 'Thin Oreos',
        units: '16 oz',
        quantity: 1,
        isPurchased: true
    }
]

ReactDOM.render(<App/>, document.querySelector('.container'))



/* <input type="checkbox" onChange={this.handleChange} id="cb"/>
                <label for="checkBox">Paid</label> */
