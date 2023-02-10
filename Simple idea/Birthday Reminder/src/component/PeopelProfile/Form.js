import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FromStyle.css";
import axios from 'axios'
const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [url, setUrl] = useState('');
  const [isPending, setPending ] =  useState(false)
  const history = useHistory() 

  const handelSubmit = (e) => {

    e.preventDefault();
    setPending(true)
    const data = { name, age, url };
    console.log(name, age, url);

    //- posting data by fetch -//

    // fetch("http://localhost:5000/peopels", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // }).then(() => {
    //   console.log();
    //   setPending(false)
    //   history.push('/')
    // });

     //- posting data by axios666/6666 -//

    axios.post('http://localhost:5000/peopels',{data}).then((res)=> {
      console.log(res)
      setPending(false)
       history.push('/')
    })

  };

  return (
    <>
      <div className="from">
        <form onSubmit={handelSubmit}>
          <label name="name"> Name </label>
          <input
            type="text"
            placeholder="type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>

          <label name="age"> age </label>
          <input
            type="number"
            placeholder="type your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          ></input>

          <label name="url"> url </label>
          <input
            type="url"
            placeholder="type url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          ></input>

          <div>
            {!isPending && <button type="submit">submit</button>}
            { isPending && <button type="submit" disabled>adding data</button>}
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
