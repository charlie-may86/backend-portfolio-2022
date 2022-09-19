const db = require('../../data/db-config')

module.exports = {
    getResults,
    // addResult
}



function getResults() {
    return db('chess').select('username', 'time')
}

// function addResult(result) {
//     const [id] = await db('chess').insert(result, 'result_id')
// }