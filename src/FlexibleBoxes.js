import './FlexibleBoxes.css'
export const FlexibleBoxes = ()=>{

    return (
<div className="flex-container">

        <h1>Flexible Boxes</h1>

        <div className="boxes">

           <div class="box1">
              Box 1 - This is some text to make sure that the content gets really tall. This is some text to make sure that the content gets really tall.
           </div>
           <div class="box2">Box 2 - My height will follow Box 1.</div>
        </div>
        <div className="clear">
        <p>Try to resize the browser window to see the flexible layout.</p>
        <p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 or earlier versions.</p>
       </div>



</div>




    )



}