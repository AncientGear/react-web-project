/**
 * Author: Saul Israel Tzakum Ochoa
 * Date: 7/dic/2020
 * mail: cpp.saul@gmail.com
 */

import React, { Component } from 'react';

class Tarea1 extends Component {
    constructor() {
        super();

        this.state = {
            miles: 0,
            km: 0
        }
    }
    /**
     * @description convert the miles into km
     * @param {Objet} event - add the new person invite
     */
    milesToKm = (event) => {
        try {
            const html = document.getElementById("miles");
            if(event) {
                event.preventDefault();   
            } else {
                return 0;
            }
            if(html) {
                const miles = Number(html.value);
                const km = miles * 1.60934;    
                this.setState({
                    miles: miles,
                    km: km
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * @description change the value in the state
     * @param {Object} event - convert the miles into km
     */
    handleChange = (event) => {
        console.log(event);
        if(event) {
            this.setState({
                miles: event.target.value
            });
        }
    }

    /**
     * @description - render the component
     */
    render() {

        return (
            <div className="center">
                <h1>Convertidor de Millas</h1>
                <div className="converter">
                    <h3 className="text-gray">Millas</h3>
                    <form onSubmit={this.milesToKm}>
                        <input type="number" id="miles" onChange={this.handleChange()}></input>
                        <div className="clearfix"></div>
                        <button id="miles-to-km" type="submit">Convertir millas a kilómetros</button>
                    </form>
                        <h2>{this.state.miles} mi = {this.state.km} km</h2>
                </div>
            </div>
        );
    };
}


export default Tarea1;