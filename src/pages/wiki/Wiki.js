import React, { Component } from 'react';
import { Layout, Menu, Icon, Upload, Button, Modal, Form, Input } from 'antd';
import './Wiki.less';
import logo from '../../assets/images/logo.jpg';
const { Header, Sider, Content, Footer } = Layout;

class WikiDemo extends Component {
    state = {
        collapsed: false,
        visible: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    //点击上传文件
    uploadFileChecked = () => {
        this.setState({ visible: true })
    }
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            defaultFileList: [
                {
                    uid: '1',
                    name: 'xxx.png',
                    status: 'done',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/xxx.png',
                },
                {
                    uid: '2',
                    name: 'zzz.png',
                    status: 'error',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/zzz.png',
                },
            ],
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <div  >
                <Layout style={{ height: '100vh' }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img src={logo} className="logo" />
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>首页</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>葡萄</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>上传</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout >
                        <Header style={{ background: '#fff', padding: 0, }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px 0',
                                // minHeight: 280,
                                overflow: 'initial',
                                // display:'block'
                            }}
                        >
                            <div style={{ padding: 24, background: '#fff', textAlign: 'center', height: '800px' }}>

                                <Button icon="cloud-upload" type="primary" onClick={this.uploadFileChecked}>上传资料</Button>
                                <Modal
                                    title="上传文件"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    {/* <Upload {...props}>
                                        <Button>
                                            <Icon type="upload" /> Upload
                                        </Button>
                                    </Upload> */}
                                    <Form className="ant-advanced-search-form">
                                        <div>
                                            选择文件:
                                            <Upload {...props} style={{ width: '1020px', marginLeft: '20px' }}>
                                                <Button>
                                                    <Icon type="upload" /> Upload
                                                </Button>
                                            </Upload>
                                        </div>
                                        <Form.Item label="文件类型" >
                                            {getFieldDecorator('fileType', {
                                                
                                            })(<Input.Password />)}
                                        </Form.Item>

                                    </Form>
                                </Modal>
                            </div>
                            <Footer style={{ textAlign: 'center', }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Content>

                    </Layout>
                </Layout>

            </div>
        )
    }
}
const Wiki = Form.create()(WikiDemo)
export default Wiki