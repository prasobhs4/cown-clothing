import sections from '../../../Json/HOME-Sections';

const sectionReducer = (state=sections.sections,action) =>  {
    switch (action.type){
        default:
            return state
    } 
   
   }

export default sectionReducer;