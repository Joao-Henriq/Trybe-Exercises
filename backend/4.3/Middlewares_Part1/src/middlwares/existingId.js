const teams = require('./teams');
const existingId = (req, res, next) => {
  const { id } = req.params;
  if(teams.some((team) => team.id === Number(id))) {
    next();
  } else {
    res.status(400).json({message: 'error 404 do existing'});
  }
};

module.exports = existingId;