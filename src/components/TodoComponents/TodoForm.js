import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSumbit = (e) => {
        e.preventDefault();

        this.props.addItem(e, this.state.item);
    };

    render() {
        return(
            <form onSubmit={this.handleSumbit}>
                <input type="text" name="item" onChange={this.handleChange} />
                <button>Add</button>
            </form>
        );
    };
};

export default TodoForm;