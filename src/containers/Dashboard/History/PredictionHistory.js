import React from 'react';

const PredictionHistory = () => {
    return (
        <table className="table table-bordered table-hover">
            <thead className="text-info">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Action</th>
                <th scope="col">Date</th>
                <th scope="col">IP Address</th>
                <th scope="col">Browser Environment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>91%</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>79%</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>61%</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PredictionHistory;