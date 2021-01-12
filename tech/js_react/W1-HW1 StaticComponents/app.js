// ReactDOM.render( <h1>Commence Dashboard Creation!</h1>, 
//   document.querySelector('main') );
// class Header extends React.Component {
//   render () {
//     return (
//       <h1> Dashboard </h1>
//     )
//   }
// }

class Sidebar extends React.Component {
  render () {
    return (
      <div className= 'sidebar'>
        <h4>DASHBOARD</h4>
        <h4>WIDGET</h4>
        <h4>REVIEWS</h4>
        <h4>CUSTOMERS</h4>
        <h4>ONLINE ANALYSIS</h4>
        <h4>SETTINGS</h4>
      </div>
    )
  }
}

//im trying to group these for a styling idea
//at this point i have lost some styling
//ok almost all styling now...
//so i took out the divs grouping the first 3 componets it worked but not the way i thought
//want the side bar in the grid now
class Reviews extends React.Component {
  render () {
    return (
      <div className= 'reviews'>
        <h5>Reviews</h5>
        <h1>1,281</h1>
      </div>
      )
    }  
  }      
class AverageRating extends React.Component {
  render () {
    return (
      <div className= 'averageRating'>
        <h5>Average Rating</h5>
        <h1>4.6</h1>
      </div>
    )
  }
}
class SentimentAnalysis extends React.Component {
  render () {
    return (
      <div className= 'sentimentAnalysis'>
        <h5>Sentiment Analysis</h5>
            <h5>960</h5>
            <h5>122</h5>
            <h5>321</h5>
      </div>
    )
  }
}
class WebVisitors extends React.Component {
  render () {
    return (
      <div className= 'webVisitors'>
        <h5>Web Visitors</h5>
        <h1>821</h1>
        
      </div>
    )
  }
}

class App extends React.Component {
    render () {
      return (
        <div className= 'app'>
          <Sidebar />
          <Reviews />
          <AverageRating />
          <SentimentAnalysis />
          <WebVisitors />
         </div>
      )
    }
}


ReactDOM.render( <App />, 
    document.querySelector('.container') );





















  
