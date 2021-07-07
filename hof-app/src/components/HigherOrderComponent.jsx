import React from "react";

class HigherOrderComponent extends React.Component {
    // constructor
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((value) => 
            <div key={value.id}>
                <li className="list-elements">
                    <span>Id: {value.id}</span>
                    <span>Name : {value.name}</span>
                    <span>User Type: {value.user_type}</span>
                </li>
            </div>
        )
        return mapRows;
    }
    // display designer type
    designerType = () => {
        const data = this.state.userData;
        const designerRows = data.filter((value) => value.user_type === 'Designer')
        .map((value) => 
            <div key={value.id}>
                <li className="list-elements">
                    <span>Id: {value.id}</span>
                    <span>Name : {value.name}</span>
                    <span>User Type: {value.user_type}</span>
                </li>
            </div>
        )
        return designerRows;
    }
    // name starting with letter J
    letterJ = () => {
        const data = this.state.userData;
        const jRows = data.filter((value) => value.name[0]==="J")
        .map((value) => 
            <div key={value.id}>
                <li className="list-elements">
                    <span>Id: {value.id}</span>
                    <span>Name : {value.name}</span>
                    <span>User Type: {value.user_type}</span>
                </li>
            </div>
        )
        return jRows;
    }
    // age greater than 28 and less than or equals 50
    filterAge = () => {
        const data = this.state.userData;
        const requiredAgeUsers = data.filter((value) => (value.age>28 && value.age<=50))
        .map((value)=>
            <div key={value.id}>
                <li className="list-elements">
                    <span>Id: {value.id}</span>
                    <span>Name : {value.name}</span>
                    <span>User Type: {value.user_type}</span>
                </li>
            </div>
        )
        return requiredAgeUsers;
    }
    // total years of designers
    totalYears = () => {
        const data = this.state.userData;
        const totalYrs = data.filter((value)=> value.user_type==="Designer")
        .reduce((acc,value) => acc.years+value.years)
        return totalYrs;
    }
    // render
    render() {
        return (
            <div>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()} </ul>
                </div>
                <h1>Display based on user type</h1>
                <div className="display-box">
                    <ul>{this.designerType()} </ul>
                </div>
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                    <ul>{this.letterJ()} </ul>
                </div>
                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box">
                    <ul>{this.filterAge()} </ul>
                </div>
                <h1>Filter the total years of the designers</h1>
                <div className="display-box">
                    <ul>{this.totalYears()} </ul>
                </div>
            </div>
        )
    }
}
export default HigherOrderComponent;