import React from 'react';

const PRUrlItem = ({
    diffUrl,
    onClick,
    url,
}) => {
    return (
        <li key={url} onClick={() => onClick(diffUrl)} className="pr-url">
            <a href={url}>{url}</a>
        </li>
    )
}

export default PRUrlItem;