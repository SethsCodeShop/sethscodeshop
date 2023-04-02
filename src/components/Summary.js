import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import WithAuthenticationRequired from './withAuthenticationRequired';

const Summary = () => {

  const [summary, setSummary] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getSummary = async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/summary`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': true
        }
      });
      setSummary(response.data);
    };

    getSummary();
  }, [getAccessTokenSilently]);

  return (
    <section>
      <h2 className="mb-3">Summary</h2>
      <p>{summary}</p>
    </section>
  );
};

export default Summary;
