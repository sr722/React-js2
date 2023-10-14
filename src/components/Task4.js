import {useEffect,useState} from "react";
import "./Task4.css";
function Task4()
{
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
    .then((res) => res.json())
    .then((actualData) => {
      setData(actualData.users);
    })
    .catch((err) => {
      console.log(err.message);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return(
    <div className="content">
      <h1>Dummy data</h1>
      <tbody>
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="v2">{item.id}</td>
            <td><img src={item.image} alt="pic" height={50}/></td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.domain}</td>
            <td>{item.ip}</td>
            <td>{item.university}</td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}
export default Task4;