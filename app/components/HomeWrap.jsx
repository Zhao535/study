import React from 'react';
import { Utils } from '../common';
import NavLink from '../common/NavLink';

export default class HomeWrap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            setTimeout(() => {
                Utils.common.scrollTop();
            }, 500);
        });
    }

    render() {
        return <div className='home-wrap'>
            <div className='inner-page'>
                {this.props.children}
            </div>

            <ul className='btm-menu'>
                 {/* <li>首页</li>
                        <li onClick={() => {
                            <Link to=''></Link>
                            // App.go('/app/streaming/stream')
                        }}>直播</li>
                        <li>分类</li>
                        <li>赛事</li>
                        <li>视频</li>
                        <li>游戏</li> */}
                        {/* <li>游戏</li> */}
                <li><NavLink to='/app/streaming/home'><i className='home' /><p>首页</p></NavLink></li>
                <li><NavLink to='/app/streaming/stream'><i className='merchants' /><p>直播</p></NavLink></li>
            </ul>

        </div>;
    }
}
