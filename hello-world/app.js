
let response;
const knex = require('knex');

exports.lambdaHandler = async (event, context) => {
    try {
        console.log('knex calling', knex);
        let userName = await knex.greet('Jayaprakash');

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: userName,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
