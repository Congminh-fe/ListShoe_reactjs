import React, {Component} from 'react'
import Cart_display from './Cart_display'
import Cart_list from './Cart_list'
import Cart_Detail from './Cart_Detail'
import {shoeArr} from './Data'

export default class Ex_shoes extends Component { // start
    state = {
        cartData: shoeArr,
        shoesView: shoeArr[0],
        carts: []
    };
    handleView = (detail) => {
        this.setState({shoesView: detail})
    };
    handleCartDisplay = (newItemsArr) => {
        const newCart = this.state.carts;
        const index = newCart.findIndex((item) => {
            return item.id == newItemsArr.id
        })
        if (index !== -1) {
            newCart[index].quantity += 1
        } else {
            newCart.push({
                ...newItemsArr,
                quantity: 1
            })
        }


        console.log(newCart)
        this.setState({carts: newCart})
    };
    handleDelete = (removeId) => {
        let cartsAfterDelete = this.state.carts.filter((item) => {
            return item.id !== removeId
        });

        this.setState({carts: cartsAfterDelete})
    };

    handleCartQuantityChange = (changedId, quantity) => {
        const newCart = [...this.state.carts];
        const cartIndex = newCart.findIndex((cart) => {
            return cart.id == changedId;
        })
        if (cartIndex !== -1) {
            newCart[cartIndex].quantity = newCart[cartIndex].quantity + quantity || 1
        }
        this.setState({carts: newCart})

    }

    // end
    render() {
        return (
            <div className="row">
                {/* cart display */}
                <div className="col-6">
                    <Cart_display carts ={this.state.carts}
                        handleCartDelete={
                            this.handleDelete
                        }
                        handleCartQuantityChange={
                            this.handleCartQuantityChange
                        }/>
                </div>
                {/* cart render */}
                <div className="col-6">
                    <Cart_list cartData={
                            this.state.cartData
                        }
                        handleViewDetail={
                            this.handleView
                        }
                        handleCartAdd={
                            this.handleCartDisplay
                        }/>
                </div>
                {/* cart detail */}
                <div className="col-12">
                    <Cart_Detail viewShoeDetail={
                        this.state.shoesView
                    }/>
                </div>
            </div>
        )
    }
}
