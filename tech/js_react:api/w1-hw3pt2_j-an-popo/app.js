class App extends React.Component{

    state = {
        score: '',
        cataglory: '',
        points: 100, 
        clue: '',
        answer:'',
        reveal: false
    }
   //get random answer here
    getQuestion = () => {
       // this.state.score
        //get url in string form
        fetch ("http://jservice.io/api/random")
        //.then function for fetch
        .then ((response) => {
            return response.json();
        })
        .then((json)=> {
            //json[0] object we want
           // console.log(json[0]);
         //this is printing the answer and question in
         //my console but i now want it on my page   
            
            const data = json[0];
            this.setState({
                category: data.category.title,
                points: data.value, 
                clue: data.question, 
                answer: data.answer,
                reveal: false

            })
        })
        
    }
    decreaseScore = () =>{
        this.setState({
            score: this.state.score - this.state.points,
        })
    }
    increaseScore = () => {
        this.setState({
            score: this.state.score + this.state.points,
        })
    }
    resetScore = () => {
        this.setState({
            score: 0,

        })
    }
    //i need to get the answer on my page here
    //have to use isRevealed to true. take out score: 0,
    getAnswer = () =>{
        this.setState({
         reveal: !this.state.reveal,   

        })
    }
    //is there to be a ! with the this. like !this.?

    //span was added to h2 tag to print the score
    render() {
        return(
        <div className="frame">
                 <h1> Welecome to Jeopardy</h1>
                 <h2><span> Score: </span>{this.state.score}</h2>
        {/* <div className="frame"> */}

        <div className="points">
                <button className= "decrease" onClick = {this.decreaseScore}> Decrease</button>
                <button className= "increase" onClick = {this.increaseScore}> Increase</button>
                <button className= "reset" onClick = {this.resetScore}> Reset </button>
        </div>

                 <h2> Let's Play</h2>
                <button  className= "" onClick = {this.getQuestion}> Get Answer</button>
                
                 <h2><span>Category: </span>{this.state.category}</h2> 
                 <h2><span>Points:</span> {this.state.points}</h2>
                 <h2><span>Clue:</span> {this.state.clue}</h2>


                <button className = "answer" onClick= {this.getAnswer}>Click to Reveal Question </button>

                {this.state.reveal ?<h3>Question: {this.state.answer}</h3>:''
                }
             
         </div>
            )

            //its confusing but the answer is the question and the question is the answer
    }
    
}



ReactDOM.render(<App/>, document.querySelector('#root'));



