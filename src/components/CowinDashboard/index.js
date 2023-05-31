import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import VaccinationCoverage from '../VaccinationCoverage'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
    vaccineData: [],
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const statuscode = await response.statuscode
    console.log(statuscode)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      last7DaysVaccination: data.last_7_days_vaccination,
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }
    this.setState({vaccineData: updatedData, isLoading: false})
  }

  render() {
    const {vaccineData, isLoading} = this.state

    return (
      <div className="dashboard-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo-styling"
          />
          <h3 className="cowin-heading">Co-WIN</h3>
        </div>
        <h3 className="cowin-side-heading">CoWIN Vaccination in India</h3>
        <div>
          {isLoading ? (
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          ) : (
            <VaccinationCoverage data={vaccineData} />
          )}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
