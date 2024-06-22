const Fault = require('../models/fault.model');


/**
 * Create a user
 * @param {Object} faultrBody
 * @returns {Promise<User>}
 */
const createFault = async (faultBody) => {
    console.log(faultBody)
    return Fault.create(faultBody);
  };

const getFaultBytenantId = async (id) => {
return Fault.find({tenantId:id});
};

module.exports = {
createFault,
getFaultBytenantId,
};