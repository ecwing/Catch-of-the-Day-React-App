import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends Component {
    
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        const tranisitionOptions = {
            classNames: "order",
            key,
            timeout: { enter: 500, exit: 500 }
        };
        //make sure fish is loaded before we continue!
        if(!fish) return null;

        if(!isAvailable) {
            return (
                <CSSTransition {...tranisitionOptions}>
                <li key={key}> 
                    Sorry {fish ? fish.name : 'fish'} is no longer available
                </li>
                </CSSTransition>
            );
        }
        return (
            <CSSTransition {...tranisitionOptions}>
            <li key={key}>
                <span>
                    <TransitionGroup component="span" className="count">
                            <CSSTransition {...tranisitionOptions} >
                                <span>{count}</span>
                        </CSSTransition>
                    </TransitionGroup> 
                    lbs {fish.name}
                    {formatPrice(count * fish.price)}
                    <button onClick={() => this.props.removeFromOrder(key)}>
                        &times;
                    </button>
                </span>
            </li>
            </CSSTransition>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal = (count * fish.price);
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul"
                className='order'>
                {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;