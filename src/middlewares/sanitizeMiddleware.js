const { encode } = require('html-entities');

module.exports = (req, res, next) => {
    if (req.body) {
        for (const key in req.body) {
          if (typeof req.body[key] === 'string') {
            // Sanitize từng giá trị trong body
            req.body[key] = encode(req.body[key]);
          
             
        }
        
        }
      }
   
   
    
  next(); // Tiếp tục middleware
};
