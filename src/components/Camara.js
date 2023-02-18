import React, {Component} from 'react';
import Webcam from 'react-webcam';

export default class Camara extends Component {
    render() {

        return (
            <div className='App'>
                <Webcam audio={false} height={500} ref={this.setRef} screenshotFormat="image/jpeg" width={500}/>
                
            </div>
        )
    }
}