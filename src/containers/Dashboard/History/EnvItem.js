import React from 'react';

const EnvItem = (props) => {
    const country = props.env.split("IP_COUNTRY=")[1].split(" ")[0];
    const os = props.env.split("User_AGENT=")[1].split(" ")[0] + ' ' + props.env.match(/(\(.*?\))/g)[0];
    return (
        <td>{country + ' ' + os}</td>
    )
}

export default EnvItem;