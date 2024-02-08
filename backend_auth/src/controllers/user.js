const connection = require('../models/index')

let handleGetAllUsers = (req, res) => {
    try {
        let query = 'SELECT * FROM sign_up'
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return;
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


let handleGetUserById = (req, res) => {
    try {
        let id = req.params.id;
        let query = `SELECT * FROM Persons WHERE PersonID = ${id}`
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return;
            }
            //    console.log('Query results:', results);
            return res.status(201).json(results)
        });

    } catch (error) {
        return [{
            "Error": error
        }]
    }


}

let setUsers = (req, res) => {
    try {
        let data = req.body;

        let query = ` INSERT INTO sign_up (first_name,last_name, email,password,verify_password) 
        VALUES("${data.first_name}", "${data.last_name}", "${data.email}", "${data.password}" , "${data.verify_password}")
        `
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(501).json([{
                    "Error": err.sqlMessage
                }]);
            }
            //    console.log('Query results:', results);
            return res.status(201).json({
                "status": "data inserted successFul",
                "id": results.lastIndexOf
            })
        });

    } catch (error) {
        return [{
            "Error": error
        }]
    }
}
let handleUserDeleteById = (req, res) => {
    try {

        let id = Number(req.params.id)
        let query = ` DELETE FROM Persons WHERE PersonID = ${id}`
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return;
            }
            //    console.log('Query results:', results);
            return res.status(201).json({
                "status": "data deleted successFul",
                "Affected_Row": results.affectedRows
            })
        });


    } catch (error) {
        return [{
            "Error": error
        }]
    }


}


let handleGetAllBookList=()=>{
     try {
         let query = 'select * from Book_Store;'
         connection.query(query, (err, results) => {
             if (err) {
                 console.error('Error querying database:', err);
                 return;
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

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    setUsers,
    handleUserDeleteById,
    handleGetAllBookList
}