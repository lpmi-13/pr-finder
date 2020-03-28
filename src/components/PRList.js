import React, { useEffect, useState} from 'react';
import axios from 'axios';

import PRUrlItem from './PRUrlItem';

const REQUEST_URL = 'https://api.github.com/search/issues?q=label:pr-review-request+is:pr+state:open&sort=created&order=asc'

const PRList = () => {

    const [PRs, setPRs] = useState([]);
    const fetchData = async () => {
      const result = await axios(
        REQUEST_URL
      );
      console.log(result.data.items);
      setPRs(result.data.items);
    };

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <ul className="pr-list">
          {PRs.length === 0 && <div>no data yet...</div>}
          {PRs.map(item => (
            <PRUrlItem url={item.html_url} />
          ))}
        </ul>
    );
}

export default PRList;
