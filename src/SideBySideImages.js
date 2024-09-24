
import './SideBySideImages.css'


export const SideBySideImages = ()=>{
return (

<div className="container">
    <h2>Images Side by Side</h2>
    <p>Float images side by side:</p>


    <div className="box">
        <div className="one">
            <img src="falafel.jpeg" alt="falafel" />
        </div>
        <div className="two">
            <img src="falafel.jpeg" alt="falafel" />
        </div>
        <div class="three">
            <img src="falafel.jpeg" alt="falafel" />
        </div>


    </div>
    <div>
        <p>Note that we also use the clearfix hack to take care of the layout flow, and that we add the box-sizing property to make sure that the image container doesn't break due to extra padding. Try to remove this code to see the effect.</p>
    </div>



</div>




)



}