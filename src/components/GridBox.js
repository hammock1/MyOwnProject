import './GridBox.css'

export const GridBox = ()=>{

return(
 <div className="container">
    <h2>Grid of Boxes</h2>
    <p>Float boxes side by side:</p>
    <div className="box">
        <div className="one">
            <p>Some text inside the box.</p>
        </div>
        <div className="two">
            <p>Some text inside the box.</p>  
        </div>
        <div className="three">
           <p>Some text inside the box.</p>
        </div>


    </div>
   
    <p><strong>Note:</strong> Here, we use the clearfix 
    hack to take care of the layout flow. 
    We also use the box-sizing property to make sure 
    that the box doesn't break due to extra padding.
     Try to remove this code to see the effect.
     </p>
     





 </div>



)






}