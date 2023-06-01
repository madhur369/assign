import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://63fead88370fe830d9d71604.mockapi.io/formData');
            if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='main'>
            <div className="container">
                <div className='dasbord'>
                    <h2>Dashboard</h2>
                    {data.length > 0 ? (
                        data.map((data) => {
                            return (
                                <table className='table table-dark table-striped'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        })

                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
