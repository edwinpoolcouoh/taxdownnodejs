//Aqui se declaria todo el valor

const create = async (data) => {
  let result = null
  try {
    // aqui iria la logica para crear un cliente en la base de datos
    result = {
      statusCode: 201,
      message: "Customer created successfully",
    }
  } catch (error) {
    throw new Error(`Error creating customer: ${error.message}`)
  }
  return result
}

const get = async (data) => {
  let result = null
  try {
    // aqui iria la logica para crear un cliente en la base de datos
    result = {
      statusCode: 200,
      message: "Customer get successfully",
    }
  } catch (error) {
    throw new Error(`Error get customer: ${error.message}`)
  }
  return result
}

const update = async (data) => {
  let result = null
  try {
    // aqui iria la logica para crear un cliente en la base de datos
    result = {
      statusCode: 200,
      message: "Customer update successfully",
    }
  } catch (error) {
    throw new Error(`Error update customer: ${error.message}`)
  }
  return result
}

const delet = async (data) => {
  let result = null
  try {
    // aqui iria la logica para crear un cliente en la base de datos
    result = {
      statusCode: 200,
      message: "Customer delet successfully",
    }
  } catch (error) {
    throw new Error(`Error delet customer: ${error.message}`)
  }
  return result
}

module.exports = {
  create,
  get,
  update,
  delet
}