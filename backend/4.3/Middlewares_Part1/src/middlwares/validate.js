const validateId = (req, res, next) => {
  const { id } = req.params;
  const idANumber = Number(id);

  if(Number.isNaN(idANumber)) {
    res.status(400).send({message: "ID inválido! Precisa ser um número"});
  } else {
    next();
  }
};

module.exports = validateId;