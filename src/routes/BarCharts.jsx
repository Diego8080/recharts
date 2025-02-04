import '../components/Recharts.css'
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar} from 'recharts'


const data = [
  { day: 'Monday', pageviews: 1000, visitors: 300},
  { day: 'Tuesday', pageviews: 1500, visitors: 500},
  { day: 'Wednesday', pageviews: 2000, visitors: 800},
  { day: 'Thursday', pageviews: 3000, visitors: 1200},
  { day: 'Friday', pageviews: 2500, visitors: 1000},
  { day: 'Saturday', pageviews: 2000, visitors: 700},
  { day: 'Sunday', pageviews: 1800, visitors: 600},
  
];

const BarCharts = () => {


const barColors = ['#8884d8', '#82ca9d']  

const barCustomization = {
  barSize: 30,
  radius: [ 5, 5, 0, 0],
  label: { position: 'top'},

}

  return (
    <div className='main-container'>

        <h1>Bar Charts</h1>
              <BarChart width = {1024} height= {600} data = {data}>
              <XAxis dataKey = "day" />
              <YAxis />
              <CartesianGrid strokeDasharray = "3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey = "pageviews" fill = {barColors[0]} {...barCustomization} />
                <Bar dataKey = "visitors" fill = {barColors[1]} {...barCustomization} />
        
              </BarChart>
    </div>
  )
}

export default BarCharts;