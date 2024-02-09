const mysql = require('mysql2/promise');

async function executeQueries(req, res) {
    try {
        // Create a MySQL connection pool
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });


                let data = req.body;
        // Query 1
        const [result1] = await pool.query(`select book_name from Book_Store where book_id = ${data.book_id};`);

        // console.log("result 1 pool",result1 )

        // Process result1 or do something else...

        // Query 2 using a value from result1
        const [result2] = await pool.query(` INSERT INTO add_books (user_id, book_id,book_name) 
        VALUES("${data.user_id}", "${data.book_id}", "${result1[0].book_name}")
        `);

        // console.log("result 2 pool", result2)



        // Process result2 or do something else...

        // Close the connection pool when done
        pool.end();

        return result2.affectedRows

        // Continue with other code...
    } catch (error) {
        console.error('Error executing queries:', error);
    }
}

module.exports=executeQueries