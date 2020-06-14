/* @jsx drawer.createElement */

import drawer from '../drawer/drawer';

class Page extends drawer.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Valik"
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('update', prevProps, prevState);
    }

    render(){
        return(
            <div>
                <h1 onClick={this.props.changeOpen}>Hello Ivan</h1>
            </div>
        )
    }
}

export default Page;