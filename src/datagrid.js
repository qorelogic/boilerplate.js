
import React from 'react'
import ReactDOM from 'react-dom'
import DataGrid from 'react-datagrid'
//import data from '../data/1000'
//var React    = require('react')
//var DataGrid = require('react-datagrid')
//var data     = require('../data/1000') //a data array
/**
 * data is an array with 1000 items, like:
 * [
 * 		{ id: 0, index: 1, firstName: 'John', city: 'London', 'email: jon@gmail.com'},
 * 		{ id: 1, .... }
 * ]
 */
var data = [
 { id: 0,   index: 1, firstName: 'John', lastName: 'McPhereson', city: 'London', email: 'jon@gmail.com'},
 { id: '1', index: 2, firstName: 'John', lastName: 'Bobson', city: 'Boston', email: 'jbobson@gmail.com'},
 { id: '2', index: 3, firstName: 'Bob', lastName: 'Mclaren', city: 'Paris', email: 'bmclaren@ms.com'},
 { id: '3', index: 4, firstName: 'Bob2', lastName: 'Mclaren2', city: 'Paris2', email: 'bmclaren2@ms2.com'}
]

var columns = [
	{ name: 'index', title: '#', width: 50 },
	{ name: 'firstName' },
	{ name: 'lastName'  },
	{ name: 'city' },
	{ name: 'email' }
]

var App = React.createClass({ // 15.x.x
//class App extends React.Component { // 0.15.x
	render: function(){
		return <DataGrid
			idProperty='id'
			dataSource={data}
			columns={columns}
			style={{height: 500}}
			//if you don't want to show a column menu to show/hide columns, use
			//withColumnMenu={false}
		/>
	}
})

//module.exports = App

if(typeof window !== 'undefined') {
  //React.render( // 0.15.x
  ReactDOM.render( // 15.x.x
	<App visible="test" />, 
	document.getElementById('app')
  );
}
