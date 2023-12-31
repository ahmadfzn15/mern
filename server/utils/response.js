const response = (status, data, message, res) => {
     return res.status(status).json({
          status: status,
          data: data,
          message: message
     })
}

const error = (status, error, message, res) => {
     return res.status(status).json({
          status: status,
          error: error,
          message: message
     })
}

module.exports = { response, error}