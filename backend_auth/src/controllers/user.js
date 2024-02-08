const connection = require('../models/index')

let handleGetAllUsers = (req, res) => {
    try {
        let query = 'SELECT * FROM sign_up'
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(501).json([{
                    "Error": err.sqlMessage
                }]);;
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
        let id = req.query.id;
        let query = `SELECT * FROM Persons WHERE PersonID = ${id}`
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(501).json([{
                    "Error": err.sqlMessage
                }]);;
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


        //change is column name closed/08-02-2024.

        let query = ` INSERT INTO sign_up (username, email,password,verify_password) 
        VALUES("${data.username}","${data.email}", "${data.password}" , "${data.verify_password}")
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

let userLogin=(req,res)=>{
      try {

          let username=req.query.username
          let password = req.query.password
          let query = ` SELECT id FROM sign_up where email ="${username}" and password ="${password}";`
          connection.query(query, (err, results) => {
              if (err) {
                  return res.status(501).json([{
                      "Error": err.sqlMessage
                  }]);;
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

let handleUserDeleteById = (req, res) => {
    try {

        let id = Number(req.params.id)
        let query = ` DELETE FROM Persons WHERE PersonID = ${id}`
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                return res.status(501).json([{
                    "Error": err.sqlMessage
                }]);;
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



module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUserDeleteById,
    setUsers,
    userLogin
}