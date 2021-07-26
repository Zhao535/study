import React from 'react';




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }



    render() {
        return <div className="home-page">
            <div className="home-info">
                <video autoPlay={true} loop={true} className="video" src="./assets/video/init.mp4" controls="controls" />
            </div>
        </div>
    }
}

export default Home;
