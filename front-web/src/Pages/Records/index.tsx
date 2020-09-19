import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatDate } from './helpers';
import Pagination from './Pagination';
import './styles.css';
import { RecordsResponse } from './types';
import Filters from '../../Components/Filters'

const BASE_URL = 'https://sds1-jeansantos.herokuapp.com';

const Records = () => {

    
    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {

        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then(response => setRecordsResponse(response.data));

    }, [activePage]);

    const handlerPageChange = (index: number) => {
        setActivePage(index);
    }

    return (
        <div className="page-container">

            <Filters link="/charts" linkText= "VER GRÁFICO"/>
           
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GENÊRO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>

                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlataform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Pagination
                activepage={activePage}
                goToPage={handlerPageChange}
                totalPages={recordsResponse?.totalPages}


            />
        </div>
    );

}



export default Records;



