import React from 'react';

class Button extends React.Component {
    render() {

        const mod = this.props.textContent.toLowerCase();

        return <button
            className={`btn btn--${mod}`}
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
            const task = <li key={i} className={'list__task'}>Task number {i+1}</li>;
            todoList.push(task)
        }

        const disableButton = this.state.taskNumber <= 0;

        return <div className={'container'}>
            <div className={'btns'}>
                <Button
                    textContent={'Add'}
                    clickHandle={this.addTask}
                />
                <Button
                    textContent={'Remove'}
                    clickHandle={this.removeTask}
                    disableButton={disableButton}
                />
                <Button
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