import { useEffect, useState } from "react";
import Nav from './Nav'
function MyApp(props) {

  useEffect(()=>
  {
    fetch('')
  })


  return (
    <>
    <Nav/>
      <button type="button" class="btn btn-success">
        Add Product
      </button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button type="button" class="btn btn-primary" >view</button>
              <button type="button" class="btn btn-success" >Edit</button>
              <button type="button" class="btn btn-danger" >delet</button>

            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default MyApp;
