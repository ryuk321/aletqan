import React from 'react';
import "./styles.scss"
import {NavigationSecond} from '../../intro/navigation-bar';
import AboutBody from './AboutBody';

export default class About extends React.Component {
    render(){
        return <>
            <NavigationSecond/>
            <AboutBody/>
        </>

    }
}
