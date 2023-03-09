import * as actions from './actionTypes'

export const bugAdded  = (description,trueFalse)=>(
      
    {
    
    type: actions.BUG_ADDED,
    payload : {
        description:description,
        resolved:trueFalse
    }
})
export const bugRemoved = (id)=>(
    {
        type: actions.BUG_REMOVED,
        payload:{
            id:id
        }
    }
)
export const toggleHamBurgerOff = (val)=>(
    {
        type:actions.TOGGLE_YES_NO,
        payload:val
    })

export const toggleYesNoAction = (val)=>({
    type:actions.TOGGLE_YES_NO,
    payload:val
})

export const aboutInsertForm = (obj)=>({
    type:actions.ABOUT_INSERT_FORM,
    payload:obj
})
export const changeCategory = (obj)=>({
    type:actions.DETAILPAGE_CHANGE_CATEGORY,
    payload:obj
})
