import * as React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Nov 2018', uv: 45, pv: 2400, amt: 2400 },
    { name: 'Dez 2018', uv: 42, pv: 2400, amt: 2400 },
    { name: 'Jan 2019', uv: 35, pv: 2400, amt: 2400 },
    { name: 'Feb 2019', uv: 27, pv: 2400, amt: 2400 },
    { name: 'Mar 2019', uv: 22, pv: 2400, amt: 2400 },
    { name: 'Apr 2019', uv: 25, pv: 2400, amt: 2400 },
    { name: 'Mai 2019', uv: 10, pv: 2400, amt: 2400 }];

export interface ILineChartViewProps {
}

export interface ILineChartViewState {
}

export default class LineChartView extends React.Component<ILineChartViewProps, ILineChartViewState> {
    constructor(props: ILineChartViewProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <LineChart width={600} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        );
    }
}
