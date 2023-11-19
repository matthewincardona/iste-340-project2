import React from 'react'
import PeopleModal from './PeopleModal'

const PeopleGroup=({title, pepGroupObj})=>{

    return(
        <>
            <h4>{title}</h4>
            <div className="peopleList">
                {pepGroupObj.map((p)=>
                    <div className="peopleListItem" key={p.username}>
                        <img src={p.imagePath}/>
                        <PeopleModal {...p}/>
                    </div>
                )}
            </div>
        </>
    )   
}
export default PeopleGroup