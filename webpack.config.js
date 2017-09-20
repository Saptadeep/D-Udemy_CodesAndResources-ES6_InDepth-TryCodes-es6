module.exports = {

  entry: ['./app/index.js'],
  //Start from here
  output: {
    	path: './build', //Create one single bundle here 
    	filename: 'bundle.js'
  		//Recall that the INDEX.HTML refers to this 'bundle.js' file
	}
}