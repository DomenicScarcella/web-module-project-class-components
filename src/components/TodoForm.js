import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            itemText: "",
        };
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.task]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({
            itemText: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>
                    Add Task:
                </button>
                <input
                    type="text"
                    name="itemText"
                    value={this.state.itemText}
                    onChange={this.handleChanges}
                />
            </form>
        );
    }
}

export default TodoForm;