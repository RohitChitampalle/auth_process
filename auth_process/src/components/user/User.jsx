import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import LogOut from '../auth/LogOut';
function User() {

  const token = localStorage.getItem('token');
  console.log(token)
  const [selectedOption, setSelectedOption] = useState('');
  let [load, setLoad] = useState(true)
  let [data, setData] = useState([])
  let [book_list, setBookList] = useState()
  let { id } = useParams()

  let handlchange = (e) => {
    let value = e.target.value

    console.log("handle change", value)
    setSelectedOption(value)

  }
  var getUserBookListById = async () => {
    try {

      if (id === "") {
        alert("Please enter username & password")
      }
      if (id === undefined) {
        alert(`User id is ${id}`)
      }
      else {

        // http://localhost:8011/api/user/login?username=chitampalle813@gmail.com&password=ramnam
        const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/book/user/bookList/${id}`, { headers: { Authorization: token } });

        console.log('Response User Book list:', response.data.message);
        let response_data = response.data

        if (response_data === undefined) {
          console.log("data is not present")
        } else {

          setData(response_data)
        }
        // console.log()

      }
    } catch (error) {
      console.log('Error:', error);
      console.log('Error message:', error.response.data.message);


    } finally {
      setTimeout(() => { setLoad(false) }, 2000); // Set loading to false when the request is complete, regardless of success or failure
    }
  }

  let addBook = async () => {
    try {

      let formData = new FormData()
      formData.append("user_id", id)
      formData.append("book_id", selectedOption)


      // http://localhost:8011/api/user/login?username=chitampalle813@gmail.com&password=ramnam
      const response = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/book/set/user/books`, formData, { headers: { Authorization: token } });

      console.log('Response User Book set to user:', response.data);
      getUserBookListById()


    } catch (error) {
      console.error('Error:', error);
    }


  }


  let delete_book = async (book_id) => {
    try {

      let formData = new FormData()
      formData.append("user_id", parseInt(id))
      formData.append("book_id", book_id)


      // http://localhost:8011/api/user/login?username=chitampalle813@gmail.com&password=ramnam
      const response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/book/delete`,{method:"DELETE",headers:{'contenten-Type':'application/json'},body:formData});

      console.log('After delete  response:', response.data);
      getUserBookListById()


    } catch (error) {
      console.error('Error:', error);
    }

  }



  useEffect(() => {



    let get_book_list = async () => {
      try {
        // http://localhost:8011/api/user/login?username=chitampalle813@gmail.com&password=ramnam
        const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/book/book_list`, { headers: { Authorization: token } });

        // console.log('Response User Book list:', response.data);
        let response_data = response.data
        setBookList(response_data)

      }
      catch (error) {
        console.error('Error:', error);
      }

    }

    getUserBookListById()
    get_book_list()
  }, [])


  console.log(id)
  console.log(data)
  console.log("book lists :", book_list)
  return (
    <>
      {load ? (<p>Loading..</p>) : (

        <>

          {data === undefined ? <>

            <div><h2> user data is not present</h2></div>
          </> : <>
            <div>{data.map((d, i) => {
              console.log("data id's", d.book_id)
              return (
                <><li key={d.book_id}>{d.book_name}  <button onClick={() => { delete_book(d.book_id) }}>Delete </button></li> </>
              )
            })}</div>
          </>}




          {/*------------error handling-----------  */}

          {book_list === undefined ? <>

            <div><h2> user data is not present</h2></div>

          </> : <>
            <div>
              <select value={selectedOption} onChange={handlchange} id="">

                <option value="" disabled>Select Books..</option>


                {book_list.map((list, index) => {
                  return (<>
                    <option value={list.book_id}>{list.book_name}</option></>)
                })}
              </select>

              <button onClick={addBook}>add</button>
            </div>


            <LogOut />
          </>}



        </>
      )}
    </>
  )
}

export default User;