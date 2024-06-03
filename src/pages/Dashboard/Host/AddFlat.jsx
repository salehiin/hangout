import { useState } from "react";
import AddFlatForm from "../../../components/Form/AddFlatForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utilities";


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
            const floorNo = form.floorNo.value
            const blockName = form.blockName.value
            const apartmentNo = form.apartmentNo.value
            const category = form.category.value
            const guest = form.guest.value
            const beds = form.beds.value
            const baths = form.baths.value
            const description = form.description.value
            const rent = form.rent.value
            const to = dates.endDate
            const from = dates.startDate
            const image = form.image.files[0]
            const ownerInfo = {
                name: user?.displayName,
                image: user?.photoURL,
                email: user?.email,
            }
            
            try{
                const image_url = await imageUpload(image)
                const flatData ={
                    title, location, floorNo, blockName, apartmentNo, category, guest, to, from, ownerInfo, beds, baths, description, rent, image: image_url,

                }


                console.table(flatData)

            }catch(err){
                console.log(err)
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