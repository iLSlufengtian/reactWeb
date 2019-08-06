import React,{Component,Fragement} from 'react'
import { Route,Switch,Link,NavLink ,Redirect,BrowserRouter as Router} from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom'  //将Router放在最外层，这里就不用写了
import Food from './food/Food'
import Wiki from './wiki/Wiki'

export default class Home extends Component {
    render () {
        return (
        <div>
            {/*  Router下需要唯一子组件   可以用Fragement，需要引入 */}
            <Router>   
                {/* 相当于a标签,点击跳转到对应的路由 */}
                {/* <Link to="/food">food</Link> <br/> 
                <Link to="/wiki">wiki</Link>   */}
                <NavLink to="/food" activeClassName="active"></NavLink>
                    {/* 这里的active可以通过import 'css文件路径'引入css样式文件
                    react最古老的写法是
                        将样式写在js文件中暴露active，引入import styles from './style.js' */}
                {/* <NavLink to="/food"  activeStyle={styles.active}></NavLink> */}
                    {/* 第三种使用styled.components 通过组件传参
                    import {NavLink} from 'react-router-dom'
                    import styled from 'styled-components'
                    export default styled(NavLink).attrs({
                        to:props => props.to,
                        ativeClassName: props => props.activeClassName
                    })`
                        color:red;
                    `
                    路由文件中引入import MyLink from '上个文件路径' */}
                    
                {/* 此时只会匹配一个唯一的路径 */}
                <Switch>     
                    {/* 默认/ /food是一个路由，都匹配了 加 exact精准匹配 */}
                    <Redirect from="/" exact to="/food" />   
                  {/*  Food对应相应的组件 */}
                    <Route path="/food" component={Food} />   
                    <Route path="/food/3" component={Wiki} />     
                    <Route path="/wiki" component={Wiki} />
                    <Route component={Wiki} />  
                    {/* 不写path可以设置当路由匹配错误时，设置匹配的组件
                    排他性路由按从上往下显示 */}
                </Switch>
            </Router>
         </div>
        )
    }
}