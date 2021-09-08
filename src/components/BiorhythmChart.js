import { LineChart, ResponsiveContainer, XAxis, Line, Tooltip } from 'recharts';
import React from 'react';
import { calculateBiorhythmSeries } from '../calculation';
import dayjs from 'dayjs';

function BiorhythmChart({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31);
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date" />
                <Line type="monotone" dataKey="physical" stroke="blue"/>
                <Line type="monotone" dataKey="emotional" stroke="red"/>
                <Line type="monotone" dataKey="intellectual" stroke="green"/>
            </LineChart>
        </ResponsiveContainer>
    
    );
}

export default BiorhythmChart;




