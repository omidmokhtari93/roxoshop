import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper'
import Navbar from '../Navigation/Navbar';
import Slidermenu from '../Navigation/Slidermenu/Slidermenu';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderShow: false
        }
    }

    handleShowSlider = type => {
        type == 'open'
        ? this.setState({ sliderShow: true })
        : this.setState({ sliderShow: false })
    }

    render() {
        return (
            <Wrapper>
                <Slidermenu
                    show={this.state.sliderShow}
                    handleClose={this.handleShowSlider} />
                <Navbar sliderShow={this.handleShowSlider}/>
                <main className="container">
                    {this.props.children}
                </main>
            </Wrapper >
        )
    }

}



export default Layout;