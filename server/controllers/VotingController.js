const db = require('../../database/models');

class VotingController {

  static async store(req, res) {
    const { id_punto, favor, abstencion, contra } = req.body;
    try {
      if (!validaDB (id_punto, favor, abstencion, contra)) {
        throw 'no id_punto'
      }

      res.json({
        success: true
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error interno del servidor.'
      });
    }
  }

  static async update(req, res) {
    const { id_punto, favor, abstencion, contra } = req.body;
    try {
      if (!validaDB (id_punto, favor, abstencion, contra)) {
        throw 'no id_punto'
      }
      res.json({
        success: true
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error interno del servidor.'
      });
    }
  }

 
}

function validaDB (id_punto, favor, abstencion, contra ) {
  //console.log(id_punto, favor, abstencion, contra)
  if (!id_punto || !favor || !abstencion || !contra) {
    return false
  }
  
  return id_punto >= 1 && favor >= 0 && abstencion >= 0 && contra >= 0 
}

module.exports = VotingController;