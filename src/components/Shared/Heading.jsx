import PropTypes from 'prop-types'
const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className='text-2xl font-bold text-blue-300'>{title}</div>
      <div className='font-light text-neutral-500 mt-2 text-yellow-500'>Flat No. {subtitle}</div>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
}

export default Heading
