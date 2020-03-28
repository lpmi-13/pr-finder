import React, { useEffect, useState} from 'react';
import axios from 'axios';

import PRUrlItem from './PRUrlItem';
import DiffModal from './DiffModal';

const REQUEST_URL = 'https://api.github.com/search/issues?q=label:pr-review-request+is:pr+state:open&sort=created&order=asc'

const PRList = () => {

    const showDiffModal = ({ diffUrl }) => {
        // setDiffUrl(diffUrl);
        setShowModal(true);
    }

    const hideDiffModal = () => setShowModal(false);

    const [PRs, setPRs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [diff, setDiff] = useState();
    const [diffUrl, setDiffUrl] = useState(null)

    // grab the diff and set it in state
    const fetchDiff = async (diffUrl) => {
        console.log(diffUrl)
      const result = await axios(
        diffUrl
      );
      console.log(result.data);
      setDiff(result.data);
    };

    // grab this on page load
    const fetchData = async () => {
      const result = await axios(
        REQUEST_URL
      );
      console.log(result.data.items);
      setPRs(result.data.items);
    };

    // only grab this when the diffUrl changes
    // useEffect(() => {
        // fetchDiff(diffUrl)
        // setShowModal(true)
    // }, [diffUrl])

    // get the PRs with the right label on page load
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <ul className="pr-list">
          {showModal && <DiffModal onClickModal={hideDiffModal} diff={diff} />}
          {!showModal && PRs.length === 0 && <div className="no-data">no data yet...</div>}
          {!showModal && PRs.map(item => (
            <PRUrlItem url={item.html_url} />
          ))}
        </ul>
    );
}

export default PRList;
