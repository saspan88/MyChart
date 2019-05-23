import './App.css';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import * as React from 'react';
import { Layer, Rect, Stage } from 'react-konva';

export interface IMapViewState {
    zoom: number,
    minZoom: number,
    maxZoom: number,
    center: number[]
}
// image in the overlay
export default class MapView extends React.Component<{}, IMapViewState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            zoom: 13,
            center: [51.839823, 6.652006],
            minZoom: 12,
            maxZoom: 17
        }
    }
    handleBoundsChange = (center: any, zoom: any, bounds: any, initial: any) => {
        //if (initial) {
        //    console.log('Got initial bounds: ', bounds)
        //}
        this.setState({ center, zoom })
    }
    onClickGoToCentral = (event: any) => {
        this.setState((prevState) => ({ center: [51.839823, 6.652006] }))
    }
    onClickZoomIn = (event: any) => {
        this.setState({
            zoom: Math.min(this.state.zoom + 1, this.state.maxZoom)
        })
    }
    onClickZoomOut = (event: any) => {
        this.setState({
            zoom: Math.max(this.state.zoom - 1, this.state.minZoom)
        })
        //this.setState((prevState) => ({ zoom: prevState.zoom - 1 }))
    }
    handleClick = (event: any, latLng: any, pixel: any) => {
        //console.log('Map clicked!', latLng, pixel)
    }


    render() {
        const { center, zoom, minZoom, maxZoom } = this.state

        return (<div>
            <p>MapView</p>
            <button onClick={this.onClickGoToCentral}>Go to Central</button>
            <button onClick={this.onClickZoomIn}>ZoomIn</button>
            <button onClick={this.onClickZoomOut}>ZommOut</button>
            <Map
                zoom={zoom}
                center={center}
                width={600}
                height={400}
                onClick={this.handleClick}
            //onBoundsChanged={this.handleBoundsChange}
            >
                <Marker anchor={[51.839823, 6.652006]} payload={1} onClick={(clickParam: any) => { }} />

                <Overlay anchor={[51.839823, 6.652006]} offset={[120, 79]}>
                    <Stage height={400} width={400}>
                        <Layer>
                            <Rect
                                x={60}
                                y={20}
                                width={150}
                                height={100}
                                fill="green"
                                opacity={0.3}
                            />
                        </Layer>
                    </Stage>
                </Overlay>
            </Map>
        </div>);
    }
}

