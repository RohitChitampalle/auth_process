const connection = require('../models/index')

//changes in book list api
let handleGetAllBookList = (req, res) => {
    try {
        let query = 'select * from Book_Store;'
        connection.query(query, (err, results) => {
            if (err) {

                return res.status(501).json([{
                    "Error": err.sqlMessage
                }]);
            }
            //    console.log('Query results:', results);
            return res.status(201).json(results)
        });

    } catch (error) {
        // console.log()
        return res.status(501).json([{
            "Error Name": error.name,
            "Error Message": error.message
        }])
    }

}

module.exports={
    handleGetAllBookList
}