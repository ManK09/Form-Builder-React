import {Save,Update,Delete,TakefromLocal,SortArray,AddNewForm,DeleteForm, ChangeFormName, SelectSelectedFormdata,
        TakeEntireDataFromLocal,
        UpdateForm,
        CleanSelectedFormData} from './componentTypes'

export const saveData = (objectDetails) =>{
    return{
        type:Save,
        payload:objectDetails
    }
}


export const changeData = (objectDetails) =>{  //here objectDetails should contain an index of the object in the array to be updated
    //console.log(objectDetails)
    return{
        type:Update,
        payload:objectDetails
    }
}

export const updateFormData=(objectDetails)=>{
    return{
        type:UpdateForm,
        payload:objectDetails
    }
}
export const clearSelectedForm=(objectDetails)=>{
    return{
        type:CleanSelectedFormData,
        payload:objectDetails
    }
}
export const deleteData= (objectDetails)=>{ //here objectDetails should contain an index of the object in the array to be deleted
    return{
        type:Delete,
        payload:objectDetails
    }
}

export const localData=(objectArray)=>{
    return{
        type:TakefromLocal,
        payload:objectArray
    }
}

export const entirelocalData=(objectArray)=>{
    return{
        type:TakeEntireDataFromLocal,
        payload:objectArray
    }
}

export const changePosition =(indexes) =>{
    return{
        type:SortArray,
        payload:indexes
    }
}

export const addNewForm = (objectDetails)=>{
    //console.log("hhaye")
    return{
    type:AddNewForm,
    payload:objectDetails
    }
}
export const deleteForm=(objectDetails)=>{
    return{
        type:DeleteForm,
        payload:objectDetails
        }
}


export const changeName=(objectDetails)=>{
    return{
        type:ChangeFormName,
        payload:objectDetails
    }
}

export const selectForm=(objectDetails)=>{
    //console.log('hiii',objectDetails)
    return{
        type:SelectSelectedFormdata,
        payload:objectDetails
    }
}

// export const fetchComponents =()=>{
//     return (dispatch) =>{
//         const str=window.localStorage.getItem('data')
//         const x=JSON.parse(str)
//     }
// }



export default saveData






// export const saveCheckBox = (objectdetails) =>{
//     return{
//         type:CheckBox,
//         payload:objectdetails
//     }
// }


// export const saveRadioButton = (objectdetails) =>{
//     return{
//         type:RadioButton,
//         payload:objectdetails
//     }
// }


// export const saveDropDown = (objectdetails) =>{
//     return{
//         type:DropDown,
//         payload:objectdetails
//     }
// }

// export const saveHorizontalLine = (objectdetails) =>{
//     //console.log(objectdetails)
//     return{
//         type:HorizontalLine,
//         payload:objectdetails
//     }
// }

// export const saveLineBreak = (objectdetails) =>{
//     return{
//         type:LineBreak,
//         payload:objectdetails
//     }
// }

// export default saveCheckBox