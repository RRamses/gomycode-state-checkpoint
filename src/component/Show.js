import theman from "./../theman.JPG"


export const Show = ({data}) =>{

return(
<div className='bigbox'>
    <div  className="box1" >
    
        <h2> MON NOM EST :{data.person.fullName}</h2>
            <hr></hr>
        <h2> QUELQUES MOTS SUR MOI: {data.person.bio}</h2>
            <hr></hr>
        <h2> MA PROFFESSION EST: {data.person.profession}</h2>
    </div>
    <div className='box2'> 
            <img src={theman}  id="img" />
    </div>
</div> 
)

}