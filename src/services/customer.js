
const {
  create,
  get,
  update,
  delet
} = require("../repos/customer")

const createCustomer = async (data) => {
  let result = null
  try {
    result = await create(data)
  } catch (error) {
    throw new Error(`Error creating customer: ${error.message}`)
  }
  return result
}

const getCustomer = async (filters) => {
  let result = null
  try {
    result = await get(filters)
  } catch (error) {
    throw new Error(`Error get customer: ${error.message}`)
  }
  return result
}

const getCustomerId = async (id) => {
  let result = null
  try {
    result = await getCustomer({
      id: id
    })
  } catch (error) {
    throw new Error(`Error get customer id: ${error.message}`)
  }
  return result
}
const updateCustomer = async (id, data) => {
  let result = null
  try {
    result = await update(id, data)
  } catch (error) {
    throw new Error(`Error update customer: ${error.message}`)
  }
  return result
}

const deleteCustomer = async (id) => {
  let result = null
  try {
    result = await delet(id)
  } catch (error) {
    throw new Error(`Error delete customer: ${error.message}`)
  }
  return result
}

const addCreditCustomer = async (data) => {
  let result = null
  const id = data.id
  delete data.id
  try {
    result = await update(id, data)
  } catch (error) {
    throw new Error(`Error update credit: ${error.message}`)
  }
  return result
}


module.exports = {
  createCustomer,
  getCustomer,
  getCustomerId,
  updateCustomer,
  deleteCustomer,
  addCreditCustomer
}