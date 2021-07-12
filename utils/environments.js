module.exports = {
    validateRequireEnvs: (requiredEnvs) => {
        for (const requiredEnv of requiredEnvs) {
            if(!process.env[requiredEnv]) throw new Error(`${requiredEnv} must be defined on this .env file`)
        }
    }
};

// {} []