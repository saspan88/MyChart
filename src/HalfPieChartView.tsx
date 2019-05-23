import * as React from 'react';
import { Cell, Pie, PieChart } from 'recharts';

export interface IHalfPieChartViewProps {
    AktuelleMessung: number
}

export interface IHalfPieChartViewState {
    AktuelleMessung: number
}

const data = [
    { name: 'Group A', value: 65 },
    { name: 'Group B', value: 35 },
];
const COLORS = ['#FFBB28', '#CDCDCD'];
//colors
//'#0088FE' - Blue
//'#00C49F' - Green
//'#FFBB28' - Yellow
//'#FF8042' - Red

export default class HalfPieChartView extends React.Component<IHalfPieChartViewProps, IHalfPieChartViewState> {
    constructor(props: IHalfPieChartViewProps) {
        super(props);

        this.state = {
            AktuelleMessung: 0
        }
    }

    public render() {
        return (
            <div className="chart-background">
                <p>Aktulle Messung</p>
                <PieChart width={300} height={150}>
                    <text x={155} y={90} textAnchor="middle" dominantBaseline="middle">
                        {this.props.AktuelleMessung}
                    </text>
                    <Pie
                        data={data}
                        cx={150}
                        cy={100}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={50}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>
            </div>
        );
    }
}
