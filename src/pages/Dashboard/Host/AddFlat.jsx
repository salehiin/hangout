import { useState } from "react";
import AddFlatForm from "../../../components/Form/AddFlatForm";


const AddFlat = () => {
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

// d-2 p-2 09:12