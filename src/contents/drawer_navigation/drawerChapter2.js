import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Chapter from "../chapterBundle";

const Drawer = createDrawerNavigator();

export default class drawerChapter2 extends Component {
    render() {
        return(
            <Drawer.Navigator initialRouteName="Chapter2">
                <Drawer.Screen name="Chapter1" component={Chapter.Chapter1}/>
                <Drawer.Screen name="Chapter2" component={Chapter.Chapter2}/>
                <Drawer.Screen name="Chapter3" component={Chapter.Chapter3}/>
                <Drawer.Screen name="Chapter4" component={Chapter.Chapter4}/>
                <Drawer.Screen name="Chapter5" component={Chapter.Chapter5}/>
                <Drawer.Screen name="Chapter6" component={Chapter.Chapter6}/>
                <Drawer.Screen name="Chapter7" component={Chapter.Chapter7}/>
                <Drawer.Screen name="Chapter8" component={Chapter.Chapter8}/>
                <Drawer.Screen name="Chapter9" component={Chapter.Chapter9}/>
                <Drawer.Screen name="Chapter10" component={Chapter.Chapter10}/>
                <Drawer.Screen name="Chapter11" component={Chapter.Chapter11}/>
                <Drawer.Screen name="Chapter12" component={Chapter.Chapter12}/>
                <Drawer.Screen name="Chapter13" component={Chapter.Chapter13}/>
                <Drawer.Screen name="Chapter14" component={Chapter.Chapter14}/>
                <Drawer.Screen name="Chapter15" component={Chapter.Chapter15}/>
            </Drawer.Navigator>
        );
    }
}