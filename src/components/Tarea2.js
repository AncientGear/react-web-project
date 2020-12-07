/**
 * Author: Saul Israel Tzakum Ochoa
 * Date: 7/dic/2020
 * mail: cpp.saul@gmail.com
 */
import React, { Component } from 'react';

class Tarea2 extends Component {
    constructor() {
        super();

        this.state = {
            newPerson: "",
            inviteds: []
        };
    }

    /**
     * @description - add the new person invite
     * @param {Object} event - all the info of the event
     */
    addInvite = (event) => {
        try {
            console.log(event);
            const html = document.getElementById("invite");
            if(event) {
                event.preventDefault();
            } else {
                return 0;
            }

            if(html) {
                let invitedsAux = this.state.inviteds;
                const newPerson = html.value;
                console.log(typeof(newPerson));
                invitedsAux.push(newPerson);

                this.setState({
                    newPerson: newPerson,
                    inviteds: invitedsAux
                });

                console.log(invitedsAux);
            }
        } catch(err) {
            console.log(err);
        }
    }

    /**
     * @description - change the value in the state
     * @param {Object} event - all the info of the event
     */
    handleChange = (event) => {
        if(event) {
            this.setState({
                newPerson: event.target.value
            });
        }
    }

    render() {
        return (
            <div className="center">
                <h1>Invitados a mi fiesta</h1>
                <h3 className="text-gray">Nombre</h3>
                <form onSubmit={this.addInvite}>
                    <input type="text" id="invite" onChange={this.handleChange()}></input>
                    <div className="clearfix"></div>
                    <button id="add-person" type="submit">Agregar a la lista de invitados</button>
                </form>
                {
                    Object.keys(this.state.inviteds).map((person) => (
                            <ul id="party-list" key={person}>
                                <li>{this.state.inviteds[`${person}`]}</li>
                                <div className="clearfix"/>
                            </ul>
                        )
                    )
                }
            </div>
        );
    }
}

export default Tarea2;