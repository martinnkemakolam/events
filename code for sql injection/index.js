{
// a quick heads up these are just dummy codes
// code with a bad query 
const { error } = require('console')

const { Pool } = require('pg').Pool

const Pool = new Pool({
    user: '//',
    host: '//',
    database: '//',
    port: 5432
})

const getInfo = (_request, response) =>{
    Pool.query(`SELECT * FROM user_info ORDER BY id ASC`, (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}

const getInfoByCity = (request, response) => {
    const city = parseInt(request.params.city)
    Pool.query(`SELECT * FROM user_info WHERE city = ${[city]}`, (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}
}
// fixing the bad query

{
// code with a good query
const { error } = require('console')

const { Pool } = require('pg').Pool

const Pool = new Pool({
    user: '//',
    host: '//',
    database: '//',
    port: 5432
})

const getInfo = (_request, response) =>{
    Pool.query(`SELECT * FROM user_info ORDER BY id ASC`, (error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}

const getInfoByCity = (request, response) => {
    const city = parseInt(request.params.city)
    Pool.query(`SELECT * FROM user_info WHERE city = $1`, [city],(error, result)=>{
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}

}