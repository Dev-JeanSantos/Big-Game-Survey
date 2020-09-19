import React, { useState, useEffect } from 'react';
import Filters from '../../Components/Filters';
import './styles.css';
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';
import axios from 'axios';
import {buildBarSeries, getGenderChartData, getPlatformChartData} from './helpers'

type PieCharData = {
    labels: string[];
    series: number[];
}


type BarCharData = {
    x: string;
    y: number;
}

const initialPieData = {
    labels: [],
    series: []
}
const BASE_URL = 'https://sds1-jeansantos.herokuapp.com';

const Charts = () => {
    //Estados
    const [barCharData, setBarCharData] = useState<BarCharData[]>([]);
    const [platformData, setPlatformaData] = useState<PieCharData>(initialPieData);
    const [genderData, setGenderData] = useState<PieCharData>(initialPieData);

    useEffect(() => {
        async function getData(){
            const recordResponse = await axios.get(`${BASE_URL}/records`);
            const gamesResponse = await axios.get(`${BASE_URL}/games`);
            
            const barData = buildBarSeries(gamesResponse.data, recordResponse.data.content);
            setBarCharData(barData);
            
            const platformCharData = getPlatformChartData(recordResponse.data.content);
            setPlatformaData(platformCharData);

            const genderCharData = getGenderChartData(recordResponse.data.content);
            setGenderData(genderCharData);
        }
        getData();

    }, [])

    return(
        <div className="page-container">

            <Filters link="/records" linkText= "VER TABELAS"/>   
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title"> Jogos mais votados</h1>
                    <div className="games-container">                    
                        <Chart
                            options = {barOptions}
                            type="bar"
                            width="900"
                            height="650"
                            series={[{data: barCharData }]}
                        /> 
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className= "chart-title">
                            Plataformas
                        </h2>
                        <Chart 
                            options={{...pieOptions, labels: platformData?.labels }}
                            type= "donut"
                            series= {platformData?.series}
                            width = "350"
                        />                        
                    </div>
                    <div className="gender-chart">
                        <h2 className ="chart-title">
                            Gêneros
                        </h2> 
                        <Chart 
                            options={{...pieOptions, labels: genderData?.labels }}
                            type= "donut"
                            series= {genderData?.series}
                            width = "350"
                        />                       
                    </div>
                </div>
            </div>  
        </div>
    )

}

export default Charts;