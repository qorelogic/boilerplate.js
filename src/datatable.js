
import React from 'react'
import ReactDOM from 'react-dom'

var DataTable = React.createClass({ // 15.x.x
//class Profile extends React.Component { // 0.15.x
  render: function() { // 15.x.x
  //render() { // 0.15.x
    // http://stackoverflow.com/questions/22876978/loop-inside-react-jsx
    var numrows = 100;
    var rows = [];
    for (var i=0; i < numrows; i++) {
        rows.push(<ObjectRow key={i} name="Jeff" age={i} bio="test" i={i} />);
    }
    
    return (
      <div>
        <table>
	 <thead>
          <tr>
        <th>Name:</th>
        <th>Age:</th>
        <th>Bio:</th>
          </tr>
         </thead>
	<tbody>
      {rows}
	</tbody>
        </table>
      </div>
    );
  }
}); // 15.x.x
//} // 0.15.x
  
var ObjectRow = React.createClass({ // 15.x.x
//class ObjectRow extends React.Component { // 0.15.x
  render: function() { // 15.x.x
  //render() { // 0.15.x
    var {
      key,
      name,
      age,
      bio,
      i,
    } = this.props;
    //console.log(this)
    return (
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{bio}-{i}</td>
      </tr>
    );
  }
}); // 15.x.x
//} // 0.15.x

if(typeof window !== 'undefined') {
  //React.render( // 0.15.x
  ReactDOM.render( // 15.x.x
	<DataTable />, 
	document.getElementById('app')
  );
}