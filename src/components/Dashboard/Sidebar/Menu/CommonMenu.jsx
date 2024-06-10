import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const CommonMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Announcements' address='add-flat' />
      
    </>
  )
}

export default CommonMenu