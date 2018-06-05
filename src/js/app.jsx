import React from 'react';

class Button extends React.Component {
    render() {
        return <button
            onClick={this.props.clickHandle}
            disabled={this.props.disableButton}>
                {this.props.textContent}
            </button>
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskNumber: 0
        }
    }

    addTask = () => {
        this.setState({
            taskNumber: this.state.taskNumber + 1
        });
    };

    removeTask = () => {
        this.setState({
            taskNumber: this.state.taskNumber - 1
        });
    };

    clearTasks = () => {
        this.setState({
            taskNumber: 0
        });
    };

    render() {

        const todoList = [];
        for (let i = 0; i < this.state.taskNumber; i++) {
            const task = `Task number ${i+1}`;
            todoList.push(task)
        }

        const disableButton = this.state.taskNumber <= 0;

        return <div>
            <div className={'btns'}>
                <Button
                    className={'btn btn--add'}
                    textContent={'Add'}
                    clickHandle={this.addTask}
                />
                <Button
                    className={'btn btn--rm'}
                    textContent={'Remove'}
                    clickHandle={this.removeTask}
                    disableButton={disableButton}
                />
                <Button
                    className={'btn btn--clr'}
                    textContent={'Clear'}
                    clickHandle={this.clearTasks}
                    disableButton={disableButton}
                />
            </div>
            <div className={'list'}>
                <ul>
                    {todoList}
                </ul>
            </div>
        </div>
    }
}

export {App};