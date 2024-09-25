import './ResizeBrowser.css'


export const ResizeBrowser = ()=>{

return(
    <div className="back">
        <div className="menulist">
            <ul>
                <li>Menu-item 1</li>
                <li>Menu-item 2</li>
                <li>Menu-item 3</li>
                <li>Menu-item 4</li>

            </ul>
        </div>
        <div className="main">
            <h2>Resize the browser window to see the effect! </h2>
            
            <p>This example shows a menu that will float to the left of the page if the viewport is 480 pixels wide or wider. If the viewport is less than 480 pixels, the menu will be on top of the content.</p>
        </div>

    </div>


)


}