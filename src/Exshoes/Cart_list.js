import React, {Component} from 'react'
import Cart_Items from './Cart_Items';

export default class Cart_list extends Component {
    render() {
        const {cartData, handleViewDetail, handleCartAdd} = this.props;
        return (
            <div className="row"
                style={
                    {rowGap: 40}
            }>
                {
                cartData.map((data) => {
                    return <Cart_Items itemData ={data}
                        handleViewDetail={handleViewDetail}
                        handleCartAdd={handleCartAdd}/>
                })
            } </div>
        )
    }
}
