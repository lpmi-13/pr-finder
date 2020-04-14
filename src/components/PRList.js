import React, { useEffect, useState} from 'react';
import axios from 'axios';

import PRUrlItem from './PRUrlItem';

const REQUEST_URL = 'https://api.github.com/search/issues?q=label:pr-review-request+is:pr+state:open&sort=created&order=asc'

const PRList = () => {

    const [PRs, setPRs] = useState([]);

    // grab this on page load
    const fetchData = async () => {
      const result = await axios(
        REQUEST_URL
      );
      setPRs(result.data.items);
    };

    // get the PRs with the right label on page load
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <ul className="pr-list">
          {PRs.length === 0 && <div className="no-data">no data yet...</div>}
          {PRs.map(item => (
            <PRUrlItem key={item.html_url} url={item.html_url} diffUrl={item.pull_request.diff_url} />
          ))}
        </ul>
    );
}

export default PRList;
