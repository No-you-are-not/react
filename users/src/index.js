import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UsersClass from "./class";
import UsersFunc from "./func";

// let users = [
//     { id: 1, firstName: "John", lastName: "Doe", age: 24,
//         job: "Developer"},
//     { id: 2, firstName: "Kate", lastName: "Reton", age:
//             22, job: "Chef"},
//     { id: 3, firstName: "Melissa", lastName: "Lout", age:
//             41, job: "Developer"},
//     { id: 4, firstName: "Ann", lastName: "Willington",
//         age: 23, job: "Driver"},
//     { id: 5, firstName: "Michel", lastName: "Plank", age:
//             55, job: "Developer"},
//     { id: 6, firstName: "Bob", lastName: "Palanski", age:
//             32, job: "Waiter"},
//     { id: 7, firstName: "Jack", lastName: "Daniels", age:
//             23, job: "Developer"},
//     { id: 8, firstName: "Poul", lastName: "Torn", age:
//             65, job: "Cashier"},
// ]

// class UsersClass extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = users;
//     }
//     render() {
//         return(
//             <div className='App'>
//                 {
//          this.state.map((user, index) => (
//                 <div key={index} className='userCard'>
//                     <div><b>first name:</b> {user.firstName}</div>
//                     <div><b>last name:</b> {user.lastName}</div>
//                     <div><b>full name:</b> {user.firstName} {user.lastName}</div>
//                     <div><b>age:</b> {user.age + 5}</div>
//                     <div><b>job:</b> {user.job}</div>
//                 </div>
//             ))
//         }
//             </div>
//         )
//     }
// }

// function UsersFunc (){
//     const usersList = users;
//     return (
//     <div className='App'>
//         {
//          usersList.map((user, index) => (
//                 <div key={index} className='userCard'>
//                     <div><b>first name:</b> {user.firstName}</div>
//                     <div><b>last name:</b> {user.lastName}</div>
//                     <div><b>full name:</b> {user.firstName} {user.lastName}</div>
//                     <div><b>age:</b> {user.age + 5}</div>
//                     <div><b>job:</b> {user.job}</div>
//                 </div>
//             ))
//         }
//     </div>
//     )
// }

function App(){
    return (
        <div>
            <UsersClass/>
            <UsersFunc/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
