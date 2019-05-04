import React, { Fragment } from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    myInput = React.createRef();
    
    goToStore = (event) => {
        //1. stop form from submitting
        event.preventDefault();
        //2. get text from input
        console.log(this);
        //3. change the page to /store/whater-they-entered
    }

 
    render() {
        return (       
            <form className="store-selector" onSubmit={this.goToStore}>
            {/* BLOCK COMMENT EXAMPLE CANT PUT ADJACENT */}
                <h2>Please Enter A Store</h2>

                <input type="text"
                ref={this.myInput} 
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()}
                />
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;