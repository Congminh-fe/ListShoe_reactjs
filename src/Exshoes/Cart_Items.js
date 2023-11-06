import React, {Component} from 'react'

export default class Cart_Items extends Component {
    render() {
        const {itemData, handleViewDetail, handleCartAdd} = this.props;
        return (
            <div className="col-3 ">
                <img src={
                        itemData.image
                    }
                    alt=""
                    className='w-100'/>
                <h5 style={
                        {
                            height: 80,
                            fontSize: 18
                        }
                    }
                    className='text-sm-left'>
                    {
                    itemData.name
                }</h5>
                <p className='font-weight-bold'>
                    {
                    itemData.price
                }
                    $</p>
                <div className="row">
                    <div className="col-12 mb-3">
                        <button onClick={
                                () => {
                                    handleCartAdd(itemData)
                                }
                            }
                            className='btn btn-dark w-100'>
                            Add to cart</button>
                    </div>
                    <div className="col-12">
                        <button onClick={
                                () => {
                                    handleViewDetail(itemData)
                                }
                            }
                            className='btn btn-success w-100'>View</button>
                    </div>
                </div>
            </div>
        )
    }
}
