import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useState, useEffect } from 'react';
import next from './../next.json'
const Next = () =>  {
  const [data, setData] = useState([]);

  useEffect(() => {
    const mock = new MockAdapter(axios);
    mock.onGet('./next.json').reply(200, next);

    const fetchData = async () => {
      const response = await axios.get('./next.json');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.id} - {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Next