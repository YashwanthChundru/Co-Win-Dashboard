import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import VaccinationByGender from '../VaccinationByAge'
import './index.css'

const VaccinationCoverage = props => {
  const {data} = props
  const {last7DaysVaccination} = data
  const DataFormatter = number => {
    if (number > 0.1) {
      return `${(number / 0.1).toString()}k`
    }
    return number.toString()
  }
  return (
    <div>
      <div>
        <h3>Vaccination Coverage</h3>

        <BarChart
          data={last7DaysVaccination}
          margin={{
            top: 5,
          }}
          width={1000}
          height={300}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="30%" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="30%" />
        </BarChart>
      </div>
      <VaccinationByGender data={data} />
    </div>
  )
}

export default VaccinationCoverage
