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

let handleSetBooks = (req, res) => {
   try {
       let data = req.body;


       //change is column name closed/08-02-2024.

       let query = ` INSERT INTO add_books (user_id, book_id,book_name) 
        VALUES("${data.user_id}","${data.book_id}", "${data.book_name}")
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

let handleGetBooksById = (req, res) => {
    try {
        let id = Number(req.params.id);
        let query = `Select book_name from add_books where user_id= ${id}`
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


// let handleGetAllBookList = (req, res) => {
//     try {
//         let query = 'select * from Book_Store;'
//         connection.query(query, (err, results) => {
//             if (err) {

//                 return res.status(501).json([{
//                     "Error": err.sqlMessage
//                 }]);
//             }
//             //    console.log('Query results:', results);
//             return res.status(201).json(results)
//         });

//     } catch (error) {
//         // console.log()
//         return res.status(501).json([{
//             "Error Name": error.name,
//             "Error Message": error.message
//         }])
//     }

// }

// let handleGetAllBookList = (req, res) => {
//     try {
//         let query = 'select * from Book_Store;'
//         connection.query(query, (err, results) => {
//             if (err) {

//                 return res.status(501).json([{
//                     "Error": err.sqlMessage
//                 }]);
//             }
//             //    console.log('Query results:', results);
//             return res.status(201).json(results)
//         });

//     } catch (error) {
//         // console.log()
//         return res.status(501).json([{
//             "Error Name": error.name,
//             "Error Message": error.message
//         }])
//     }

// }let handleGetAllBookList = (req, res) => {
//     try {
//         let query = 'select * from Book_Store;'
//         connection.query(query, (err, results) => {
//             if (err) {

//                 return res.status(501).json([{
//                     "Error": err.sqlMessage
//                 }]);
//             }
//             //    console.log('Query results:', results);
//             return res.status(201).json(results)
//         });

//     } catch (error) {
//         // console.log()
//         return res.status(501).json([{
//             "Error Name": error.name,
//             "Error Message": error.message
//         }])
//     }

// }
module.exports={
    handleGetAllBookList,
    handleGetBooksById,
    handleSetBooks
}