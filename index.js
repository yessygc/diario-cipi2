require('./server');
require('dotenv').config();
const { 
    environmentsUtils: { validateRequiredEnvs },
} = require('./utils');

const requiredEnvs = ['PORT'];

validateRequiredEnvs(requiredEnvs);

// {} []