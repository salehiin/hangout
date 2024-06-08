import { Chart } from 'react-google-charts'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../Shared/LoadingSpinner'



 const options = {
  title: 'Rents Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
const SalesLineChart = ({data}) => {
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setTimeout(()=> setLoading(false), 500)
    }, [])

  return (
    <>
    {loading?(<LoadingSpinner smallHeight></LoadingSpinner>): (
        data.length > 1 ? <Chart chartType='LineChart' width='100%' data={data} options={options} /> :<><LoadingSpinner smallHeight></LoadingSpinner>
        <p className='text-center'>No data available for this section!!!</p>
        </>
    )}
        
    </>
    
  )
}

SalesLineChart.propTypes={
    data: PropTypes.array,
}

export default SalesLineChart