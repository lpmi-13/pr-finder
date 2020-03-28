import React from 'react';

const PRUrlItem = ({
    url,
}) => {
    return (
        <li key={url} className="pr-url">
            <a href={url}>{url}</a>
        </li>
    )
}

export default PRUrlItem;