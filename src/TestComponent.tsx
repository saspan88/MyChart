import * as React from 'react';

export interface ITestComponentProps {
}

export interface ITestComponentState {
}

export default class TestComponent extends React.Component<ITestComponentProps, ITestComponentState> {
    constructor(props: ITestComponentProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>

            </div>
        );
    }
}
