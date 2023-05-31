import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'
import VaccinationByAge from '../VaccinationByAge'

const VaccinationByGender = props => {
  const {data} = props
  const {vaccinationByGender} = data

  return (
    <div>
      <div>
        <h3>Vaccination by gender</h3>
        <PieChart width={1000} height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </div>
      <VaccinationByAge data={data} />
    </div>
  )
}

export default VaccinationByGender
