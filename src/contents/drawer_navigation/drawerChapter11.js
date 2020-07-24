import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Chapter from "../chapterBundle";

const Drawer = createDrawerNavigator();

export default class drawerChapter11 extends Component {
    render() {
        return(
            <Drawer.Navigator initialRouteName="BAB 11">
                <Drawer.Screen name="BAB 1" component={Chapter.Chapter1}/>
                <Drawer.Screen name="BAB 2" component={Chapter.Chapter2}/>
                <Drawer.Screen name="BAB 3" component={Chapter.Chapter3}/>
                <Drawer.Screen name="BAB 4" component={Chapter.Chapter4}/>
                <Drawer.Screen name="BAB 5" component={Chapter.Chapter5}/>
                <Drawer.Screen name="BAB 6" component={Chapter.Chapter6}/>
                <Drawer.Screen name="BAB 7" component={Chapter.Chapter7}/>
                <Drawer.Screen name="BAB 8" component={Chapter.Chapter8}/>
                <Drawer.Screen name="BAB 9" component={Chapter.Chapter9}/>
                <Drawer.Screen name="BAB 10" component={Chapter.Chapter10}/>
                <Drawer.Screen name="BAB 11" component={Chapter.Chapter11}/>
                <Drawer.Screen name="BAB 12" component={Chapter.Chapter12}/>
                <Drawer.Screen name="BAB 13" component={Chapter.Chapter13}/>
                <Drawer.Screen name="BAB 14" component={Chapter.Chapter14}/>
                <Drawer.Screen name="BAB 15" component={Chapter.Chapter15}/>
            </Drawer.Navigator>
        );
    }
}