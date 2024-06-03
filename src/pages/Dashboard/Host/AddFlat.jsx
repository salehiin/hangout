import { useState } from "react";
import AddFlatForm from "../../../components/Form/AddFlatForm";
import useAuth from "../../../hooks/useAuth";


const AddFlat = () => {
    const {user} = useAuth()

    const [dates, setDates] = useState({
            startDate: new Date(),
            endDate: null,
            key: 'selection'
          })

          // Date range handler
          const handleDates = item =>{
            console.log(item)
            setDates(item.selection)
          }

        //   Form handler
        const handleSubmit = async e => {
            e.preventDefault()
            const form = e.target
            const title = form.title.value
            const location = form.location.value
            // const floorNo = form.floorNo.value
            // const blockName = form.blockName.value
            // const apartmentNo = form.apartmentNo.value
            const category = form.category.value
            // const guests = form.guests.value
            // const beds = form.beds.value
            // const baths = form.baths.value
            // const description = form.description.value
            // const rent = form.rent.value
            const to = ''
            const from = ''
            const apartmentImage = form.apartmentImage.files[0]
            const ownerInfo = {
                name: user?.displayName,
                image: user?.photoURL,
                email: user?.email,
            }
            
        }

    return (
        <div>
            <h1>Add Flat Page...</h1>
            {/* Form */}
            <AddFlatForm 
            dates={dates} 
            handleDates={handleDates}
            handleSubmit={handleSubmit}
            ></AddFlatForm>
        </div>
    );
};

export default AddFlat;

// d-2 v-2 09:12