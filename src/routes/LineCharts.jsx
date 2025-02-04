//import { containerClasses } from '@mui/material';
import '../components/Recharts.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


const data = [
  { day: 'Monday', pageviews: 1000, visitors: 300},
  { day: 'Tuesday', pageviews: 1500, visitors: 500},
  { day: 'Wednesday', pageviews: 2000, visitors: 800},
  { day: 'Thursday', pageviews: 3000, visitors: 1200},
  { day: 'Friday', pageviews: 2500, visitors: 1000},
  { day: 'Saturday', pageviews: 2000, visitors: 700},
  { day: 'Sunday', pageviews: 1800, visitors: 600},
  
];

const LineCharts = () => {

const lineColors = ['#8884d8', '#82ca9d']  
 

const lineCustomization = {

  strokeWidth: 2,
  dot: {r:4},
  activeDot: {r:8}
}


return (

    <div className='main-container'>
    <h1>Line Charts</h1>
      <LineChart width={1024} height={600} data={data}>
        <XAxis dataKey = 'day' />
        <YAxis />
        <CartesianGrid strokeDasharray = "3 3" />
        <Tooltip />
        <Legend />
        <Line type = 'monotone' dataKey = "pageviews" stroke = {lineColors[0]} {...lineCustomization} />
        <Line type = 'monotone' dataKey = "visitors" stroke = {lineColors[1]} {...lineCustomization} />


      </LineChart>
      </div>

)
}

export default LineCharts;