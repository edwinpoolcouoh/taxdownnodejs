const {
  createCustomer,
  getCustomer,
  getCustomerId,
  updateCustomer,
  deleteCustomer,
  addCreditCustomer
} = require('../../services/customer.js')

const createCustomer = async ({ body }) => {
  let response = null
  try {
    response = await createCustomer(body)
  } catch (err) {
    throw new Error(`Error creating customer: ${err.message}`)
  }
  return response
}

const getCustomer = async (req) => {
  const { query } = req
  let response = null
  try {
    response = await getCustomer(filters = { ...query })
  } catch (err) {
    throw new Error(`Error getting customer: ${err.message}`)
  }
  return response
}

const getCustomerId = async ({ path: { id } }) => {
  let response = null
  try {
    response = await getCustomerId(id)
  } catch (err) {
    throw new Error(`Error getting customer by ID: ${err.message}`)
  }
  return response
}

const updateCustomer = async ({ path: { id }, body }) => {
  let response = null
  try {
    response = await updateCustomer(id, body)
  } catch (err) {
    throw new Error(`Error updating customer: ${err.message}`)
  }
  return response
}

const deleteCustomer = async ({ path: { id } }) => {
  let response = null
  try {
    response = await deleteCustomer(id)
  } catch (err) {
    throw new Error(`Error updating customer: ${err.message}`)
  }
  return response
}

const addCreditCustomer = async ({ body }) => {
  let response = null
  try {
    response = await addCreditCustomer(body)
  } catch (err) {
    throw new Error(`Error updating customer: ${err.message}`)
  }
  return response
}


module.exports = {
  createCustomer,
  getCustomer,
  getCustomerId,
  updateCustomer,
  deleteCustomer,
  addCreditCustomer
}