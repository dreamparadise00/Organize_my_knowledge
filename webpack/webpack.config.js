const path = require('path');
module.exports = {
  mode:'development',
  entry:{
    'xx':'./src/index.js'
  },
  output:{

    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
    
  }
}
