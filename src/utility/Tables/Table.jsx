import React, { useState } from "react";
import axios from "axios";

const Table = () => {
    const [inputs, setInputs] = useState({})
    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http:localhost/projects/zepto-new-server/index.php', inputs).then(function(response){
            console.log(response.data)
        })
        console.log(inputs)
    }
    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values =>({
            ...values, [name]: value
        }))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                {" "}
                <label>Name: </label>
              </th>
              <td>
                {" "}
                <input
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>Email: </label>
              </th>
              <td>
                {" "}
                <input
                  name="email"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>mobile: </label>
              </th>
              <td>
                {" "}
                <input
                  name="mobile"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Font: </label>
              </th>
              <td>
                {" "}
                <input name="font" type="file" className="file-input w-full max-w-xs" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th></th>
              <td colSpan="2" align="right">
                {" "}
                <button type="submit" className="btn btn-primary mt-2">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
