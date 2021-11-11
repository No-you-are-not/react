import React from 'react';
import {UsersContext} from "./UsersContext";
import Users from "./Users";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true,
            users: [],
        };
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data
                });
            })
            .catch(error => console.log(error))
    }

    getData() {
        this.setState({
            check: false
        })
    };

    render() {
        let element;
        const check = this.state.check;
        if(check) {
            element = <button className={'button'} onClick={this.getData}>Get information</button>;
        } else {
            element = <div><Users /></div>;
        }
        return (

            <UsersContext.Provider value={{users: this.state.users}}>
                <div>
                    {element}
                </div>
            </UsersContext.Provider>

        );
    }
}

export default App;