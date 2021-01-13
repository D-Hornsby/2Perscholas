// console.table(products)


//state can only be updated using the function "SetState"
//this.state variable expression this.state.name-of-property:

class App extends React.Component {

      state = {
        products: products, 
        name:'',
        price: 0,
        description: 'Describe this item'
      }

      handleChange = (event) => {
          console.log(this.state.value)
          this.setState({ [event.value.id]: event.target.value })
      }

      handelSubmit = (event)=>{
        event.preventDefault()

        const newItem = {
          name: this.state.name,
          price: this.state.price, 
          description: this.state.description
        }
        this.setState({
          products: [ newItem, ...this.state.product],
          name: '',
          price: 0,
          description: 'Describe this item'
        })
        
      }

                
         render () {
           
            return (
              <div>
                 <h1> Big Time Shopping </h1>

                 <form>
                   <label htmlFor='name'>Name</label>
                   <input type ="text" value={this.state.name}
                                        onChange={this.handleChange}
                                        id="name"
                                        placeholder='name of product'/>
                 <br/>
                 <label htmlFor='price'></label>
                   <input type ="number" value={this.state.name}
                                        onChange={this.handleChange}
                                        id="price"/>
                                    
                 <br/>
                 <label htmlFor='description'></label>
                   <input type ="textarea" value={this.state.name}
                                        onChange={this.handleChange}
                                        id="description" />
                                      
                 <br/>

                 
                 </form>
                 
                  <input 
                  type="text" 
                  value={this.state.value}
                  onChange = {this.handleChange}
                />
                 <ul>

                {this.state.products.map(product => {
            
                    return (

                      <li>{product.name} 
                          {product.price}</li>
                          )
                   })
                }
                </ul>
                </div>
            )
          }
        }     



    //dont need a return statement if its one line but es5 needs the return statement

        ReactDOM.render( <App/>, 
    document.querySelector('.container') 
        );









    

// {
//     itemName: 'jar of stuff',
//     description: 'imagine butter stuff', 
//     price: '6.99'
// }



// class Stiff extends React.Component {
//     render () {
//       return (
//       <div stuff= 'stuff'>
//         <h5>Reviews</h5>
//         </div> 
//       )
// }}

// class App extends React.Component {
//     render () {
//       return (
//         <div className= 'app'>
//           <all the components />
          
//          </div>
//       )
//     }
// }


