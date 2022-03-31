exp = (req,res,next) =>{
    const jwt = require('jsonwebtoken');
    const fs = require('fs');
    
    const PRIVATE_KEY = fs.readFileSync('KEY_FILE.pem');
    
    class JwtHelper {
    
        algorithm = 'RS256';
    
        /**
         * 
         * @param {*} algorithm 
         * @returns 
         */
        setAlgorithm(algorithm) {
            this.algorithm = algorithm;
            return this;
        }
    
        /**
         * 
         * @param {*} payload 
         * @returns 
         */
        generateToken(payload) {
            return new Promise((resolve, reject) => {
                try {
                    const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: this.algorithm });
                    resolve(token);
                } catch (error) {
                    reject(error);
                }
            });
        }
    
        /**
         * 
         * @param {*} token 
         * @returns 
         */
        verifyToken(token) {
            return new Promise((resolve, reject) => {
                try {
                    jwt.verify(token, PRIVATE_KEY, { algorithms: [this.algorithm] }, (err, decoded) => {
                        if (!err) {
                            resolve(decoded);
                        } else {
                            reject(err)
                        }
                    });
                } catch (error) {
                    reject(error);
                }
            });
        }
    }
}