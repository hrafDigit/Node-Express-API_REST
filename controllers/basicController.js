const basicController = {};
// Empty object

//Normal JSON output
basicController.get = (req, res) => {
  res.json({
    message: 'Welcome to our API!'
  });
  console.log('API root accessed');
};

module.exports = basicController;

console.log('');
console.log('Executing Controller: basicController.js ...');