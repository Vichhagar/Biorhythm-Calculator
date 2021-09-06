import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { calculateBiorhythms } from "../calculation";

function BiorhythmChart({birthDate, targetDate}) {
  const {Physical, Emotional, Intellectual} = calculateBiorhythms(birthDate, targetDate);
  
  // Demo Data
  const data = [
    { 
      targetDate: 'A', 
      physical: 0, 
      emotional: 0, 
      intellectual: 0,
    },
    {
      targetDate: 'B', 
      physical: Physical.toFixed(2), 
      emotional: Emotional.toFixed(2), 
      intellectual: Intellectual.toFixed(2),
    },
    { 
      targetDate: 'C', 
      physical: 0, 
      emotional: 0, 
      intellectual: 0,
    },
  ]
    return (
      <ResponsiveContainer width="100%" height="50%">
        <LineChart width={500} height={500} data={data} margin={{ top: 50, right: 30, left: 0, bottom: 5}}>
          <CartesianGrid stroke="#ccc"/>
          <XAxis dataKey="targetDate"/>
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="physical" stroke="#bd3939" />
          <Line type="monotone" dataKey="emotional" stroke="#6cad0e" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="intellectual" stroke="#4ca3dd" />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  export default BiorhythmChart;
