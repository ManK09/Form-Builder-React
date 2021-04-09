import arrayMove from 'array-move'
import {Save,Update,Delete,TakefromLocal,SortArray,AddNewForm,DeleteForm} from './componentTypes'
import { nanoid } from 'nanoid'


const obj1={
    id:0,
    type:'CheckBox',
    label:'CheckBox',
    helpertext:'hello',
    options:[{value:"three"},{value:"four"}]
}
const obj2={
    id:1,
    type:'CheckBox',
    label:'CheckBoxRadio',
    helpertext:'hell',
    options:['one','two']
}
const obj3={
    id:2,
    type:'LineBreak',
    label:'LineBreak',
    helpertext:'hell',
    options:['one','two']
}
const a={
    key:nanoid(),
    name:'form1',
    data:[obj1,obj2]
}
const b={
    key:nanoid(),
    name:'form2',
    data:[obj3,obj2]
}


const initialState={
    data:[a,b],
    selectedformdata:[]
}
//{data:[]}
//dragarea, droparea

// data:[{
//     id:"",
//     data:[]
// },
// {

// }]

const componentReducer=(state=initialState,action)=>{
    switch(action.type){
        case Save:{
            const obj={...state}
            const arr=[...obj.selectedformdata,action.payload]
            obj.selectedformdata=arr
            //console.log(obj)
            //{...state,[...data,action.payload]}
            //const arr=[...state,action.payload]
            //console.log('arr',arr)
            return obj
        }
        case Update:{
            //const index=action.payload.id   //right now id is behaving as index but when sort feature will be added, I will have to
            //console.log('heyef',index)    // find the index of the object with id as action.payload.id and then update the element
            
            const obj={...state}            // at that place
            const arr=[...obj.selectedformdata]

            const idx=arr.map(x=>{return x.id}).indexOf(action.payload.id)
            //console.log('idx is',idx)
            arr[idx]=action.payload
            obj.selectedformdata=arr
            return obj
        }
        case Delete:{
            const index=action.payload.id //right now id is behaving as index and index is being passed as id in payload but when sort 
            const obj={...state}           //will be added, I will have to first get the id of the element to be deleted and then pass
            const arr=[...obj.selectedformdata]        // it and then the index of object with id attribute as the one passed in the payload will
            arr.splice(index,1)             // have to be found and then object at this index wiwll be deleted
            obj.selectedformdata=arr                    
            return obj                      //****Igonre the commented written thing, we will delete  the same way,update method 
                                           //is changed*** 
        }
        // case DeleteForm:{
        //     c
        // }

        case TakefromLocal:{
            //console.log('action.payload',action.payload)
            const obj={...state}
            //obj.data.push(...action.payload)
            const arr=[...obj.selectedformdata,...action.payload]
            obj.selectedformdata=arr
            return obj
        }
        case SortArray:{
            //console.log('aalll',action.payload)
            const obj={...state}
            const a=[...obj.selectedformdata]
            //console.log('a is',a,action.payload.oldIdx,action.payload.newIdx, typeof action.payload.oldIdx)
            const arr=arrayMove(a,action.payload.oldIdx,action.payload.newIdx)
            obj.selectedformdata=arr
            return obj
        }
        case AddNewForm:{
            const obj={...state}
            const arr=[...obj.data,action.payload]
            obj.data=arr
            return obj
        }
        default: return state
    }
}

export default componentReducer



// case CheckBox:{
        //     const obj={...state}
        //     const arr=[...obj.data,action.payload]
        //     obj.data=arr
        //     //console.log(obj)
        //     //{...state,[...data,action.payload]}
        //     //const arr=[...state,action.payload]
        //     //console.log('arr',arr)
        //     return obj
        // }
        // case RadioButton:{
        //     const obj={...state}
        //     const arr=[...obj.data,action.payload]
        //     obj.data=arr
        //     return obj
        // }
        // case DropDown:{
        //     const obj={...state}
        //     const arr=[...obj.data,action.payload]
        //     obj.data=arr
        //     return obj
        // }
        // case HorizontalLine:{
        //     const obj={...state}
        //     const arr=[...obj.data,action.payload]
        //     obj.data=arr
        //     return obj
        // }
        // case LineBreak:{
        //     const obj={...state}
        //     const arr=[...obj.data,action.payload]
        //     obj.data=arr
        //     return obj
        // }