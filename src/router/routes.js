const {
  customer
} = require('./events/index.js')

module.exports = {
  GET: {
    "CUSTOMER": {
      event: customer.getCustomer,
      roles: [],
      public: false,
    },
    "CUSTOMER-ID": {
      event: customer.getCustomerId,
      roles: [],
      public: false,
    },
  },
  POST: {
    'ADD-CREDIT': {
      event: customer.addCreditCustomer,
      roles: [],
      public: false
    },
    'CUSTOMER': {
      event: customer.createCustomer,
      roles: [],
      public: false
    }
  },
  PUT: {
    'CUSTOMER-CREATE': {
      event: customer.updateCustomer,
      roles: [],
      public: false
    }
  },
  DELETE: {
    "CUSTOMER": {
      event: customer.deleteCustomer,
      roles: [],
      public: false
    }
  }
}