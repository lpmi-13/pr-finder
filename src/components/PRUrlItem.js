import React from 'react';

const PRUrlItem = ({
    diffUrl,
    url,
}) => {
    return (
        <li className="pr-url">
            <a href={url}>{url}</a>
        </li>
    )
}

export default PRUrlItem;