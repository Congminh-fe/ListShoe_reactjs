import React, {Component} from 'react'

export default class Cart_Detail extends Component {
    render() {
        const {viewShoeDetail} = this.props;
        return (
            <div>
                <img src={
                        viewShoeDetail.image
                    }
                    alt=""/>
            </div>
        )
    }
}
