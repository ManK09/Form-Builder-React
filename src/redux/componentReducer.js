import arrayMove from 'array-move'
import {Save,Update,Delete,TakefromLocal,SortArray,AddNewForm,DeleteForm, ChangeFormName, SelectSelectedFormdata,
            TakeEntireDataFromLocal,
            UpdateForm,
            CleanSelectedFormData} from './componentTypes'
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
    label:'CheckBox',
    helpertext:'hell',
    options:['one','two']
}
const obj3={
    id:2,
    type:'RadioButton',
    label:'RadioButton',
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
    //data:[a,b],
    data:[],
    selectedformdata:{}
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
            const arr=[...obj.selectedformdata.data,action.payload]
            obj.selectedformdata.data=arr
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
            const arr=[...obj.selectedformdata.data]

            const idx=arr.map(x=>{return x.id}).indexOf(action.payload.id)
            //console.log('idx is',idx)
            arr[idx]=action.payload
            obj.selectedformdata.data=arr
            return obj
        }
        case Delete:{
            const index=action.payload.id //right now id is behaving as index and index is being passed as id in payload but when sort 
            const obj={...state}           //will be added, I will have to first get the id of the element to be deleted and then pass
            const arr=[...obj.selectedformdata.data]        // it and then the index of object with id attribute as the one passed in the payload will
            arr.splice(index,1)             // have to be found and then object at this index wiwll be deleted
            obj.selectedformdata.data=arr                    
            return obj                      //****Igonre the commented written thing, we will delete  the same way,update method 
                                           //is changed*** 
        }
        case DeleteForm:{
            const index=action.payload.id
            const obj={...state}
            const arr=[...obj.data]
            arr.splice(index,1)
            obj.data=arr
            return obj 
        }
        case SelectSelectedFormdata:{
            //const id=action.payload.id
            const obj={...state}
            const arr=[...obj.data]
            const idx=arr.map(x=>{return x.key}).indexOf(action.payload.id)
            //console.log('index is',idx)
            obj.selectedformdata=arr[idx]
            return obj
        }
        case CleanSelectedFormData:{
            //console.log("hiiii")
            const obj={...state}
            obj.selectedformdata={}
            return obj
        }
        case UpdateForm:{
            const obj={...state}
            const arr=[...obj.data]
            const idx=arr.map(x=>{return x.key}).indexOf(action.payload.id)
            arr[idx].data=action.payload.data
            obj.data=arr
            return obj
        }
        case ChangeFormName:{
            const index=action.payload.id
            const obj={...state}
            const arr=[...obj.data]
            arr[index].name=action.payload.name
            obj.data=arr
            return obj
        }
        case TakefromLocal:{
            //console.log('action.payload',action.payload)
            const obj={...state}
            //obj.data.push(...action.payload)
            const arr=[...obj.selectedformdata,...action.payload]
            obj.selectedformdata=arr
            return obj
        }
        case TakeEntireDataFromLocal:{
            const obj={...state}
            const arr=[...obj.data]
            const temparr=[...action.payload]
            //console.log('temparr',temparr)
            temparr.map((y)=>{
                const idx=arr.map(x=>{return x.key}).indexOf(y.key)
                //console.log('idx zaroori wala',idx)
                if(idx===-1)
                {
                   arr.push(y)
                }
            })
            obj.data=arr
            //const arr=[...obj.data,...action.payload]
            //obj.data=arr
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