import React, {Component} from 'react'

export default class Cart_display extends Component {
    render() {
        let {carts, handleCartDelete, handleCartQuantityChange} = this.props
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> {
                    carts.map((items, index) => {
                        return <tr key={index}>

                            <img src={
                                    items.image
                                }
                                alt=""
                                style={
                                    {width: 50}
                                }/>


                            <th style={
                                {fontSize: 10}
                            }>
                                {
                                items.name
                            }</th>
                            <th>
                                <button onClick={
                                        () => {
                                            handleCartQuantityChange(items.id, -1)
                                        }
                                    }
                                    className='btn btn-info '>-</button>
                                {
                                items.quantity
                            }
                                <button onClick={
                                        () => {
                                            handleCartQuantityChange(items.id, 1)
                                        }
                                    }
                                    className='btn btn-warning'>+</button>
                            </th>
                            <th>{
                                items.price * items.quantity
                            }</th>
                            <th>
                                <button onClick={
                                        () => {
                                            handleCartDelete(items.id)
                                        }
                                    }
                                    className='btn btn-danger'>
                                    Delete
                                </button>
                            </th>
                        </tr>
                })
                } </tbody>

            </table>
        )
    }
}
