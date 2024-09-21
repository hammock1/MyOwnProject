import './ClearFix.css'

export const ClearFix = ()=>{

return(
  <div className="container">
    <h2>Without Clearfix</h2>
    <p>This image is floated to the right. It is also taller than the element containing it, so it overflows outside of its container:</p>
    <div>
        <img src="falafel.jpeg" alt="Pineapple"/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
    </div>
    <h2>With New Modern Clearfix</h2>
    <p>Add the clearfix hack to the containing element, to fix this problem:</p>
    <div class="clearfix">
        <img src="falafel.jpeg" alt="Pineapple"/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
    </div>

  </div>




)



}