import React, { Component } from 'react';
import { Layout, message, Menu, Icon, Breadcrumb, Input } from 'antd';
import './assets/css/common.less'
import App from "./common/App";
import { Utils } from "./common";
import "./index.less"
const { Search } = Input;
const { Header } = Layout

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            permissionsLoaded: false
        };
    }

    componentDidMount() {
        if (window.location.hash.indexOf('login') < 0) {
            let adm = App.getAdmProfile();
            if (!adm.id) {
                App.logout();
                App.go('/login');
            } else {
                this.loadPermissions(0);
            }
        }
    }

    loadPermissions = (count) => {

        let timer = null;
        if (!Utils.adminPermissions) {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                this.loadPermissions(count + 1);
            }, 500);

            if (count > 3) {
                clearTimeout(timer);
                App.logout();
                App.go('/login');
            }
            Utils.adm.initPermissions();
        } else {
            this.setState({
                permissionsLoaded: true
            });
            message.destroy();
        }
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        let to = location.hash.split('#')[1];
        addEventListener('hashchange', (e) => {
            to = location.hash.split('#')[1];
        });
        return <div className="home-page">
            <Header>
                <div className="header">
                    <div className="header-left">
                        <img src={(require("./assets/image/common/liuyu_logo.png"))} />
                        <li onClick={()=>{App.go("/app/streaming/home") }}>首页</li>
                        <li onClick={()=>{App.go("/app/streaming/stream")}}>直播</li>
                        <li>分类</li>
                        <li>赛事</li>
                        <li>视频</li>
                        <li>游戏</li>
                        <li>游戏</li>
                    </div>
                </div>
            </Header>

            <a style={{ position:'absolute',left:'0',bottom:'0',width:'100%',height:'50px',lineHeight:'50px',textAlign:'center', color: '#9a9a9a' }} href='http://beian.miit.gov.cn/'>豫ICP备2021017216号</a>
            {this.props.children}
        </div>
    }

}
