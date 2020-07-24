import React, {Component} from 'react';
import { FlatList, Text, View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";

const Drawer = createDrawerNavigator();

export default class Chapter1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        dorongan: ['adanya rasa takut yang menyelimuti manusia karena keberadaannya yang kecil dan tak berarti jika dibandingkan dengan semesta yang maha besar tak terjangkau garis tepinya dan tak terpahami kandungan dan perilakunya. Perasaan takut inilah yang membuat manusia berdoa dan memohon pertolongan dan perlindungan-Nya.', 'adanya rasa kagum melihat kebesaran, keberlimpahan dan keindahan semesta ini sehingga mendorong manusia mencari pencipta dan pengatur serta melakukan ritual doa.'],
        defTuhan: ['sesuatu yang diyakini, dipuja, dan disembah oleh manusia sebagai yang Mahakuasa, Mahaperkasa, dan sebagainya', 'sesuatu yang dianggap sebagai Tuhan']
      }
    }
  }

  render() {

    let doronganList = this.state.data.dorongan.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let definisiList = this.state.data.defTuhan.map((dataList, index) => {
      return(
        <Text key={index}>{index+1}. {dataList}</Text>
      )
    })

    return (
      <View style={{ flex: 1 }}>
        <Dalil ayat='Testing' soundFile={require('./dalil-sound/test.mp3')} />
        <Text>
          Kebutuhan manusia terhadap Tuhan itu bersifat permanen dan tidak akan hilang, artinya kapan pun dan di mana pun manusia hidup pasti membutuhkan Tuhan.
          Dalam kondisi tertentu manusia mengabaikan atau mengeyampingkan kebutuhan ini. Namun hal ini hanya sementara dikarenakan pada akhirnya kebutuhan akan Tuhan akan tetap muncul pada saat manusia mengalami persoalan hidup berat atau kehidupannnya terancam.
          Kecenderungan manusia untuk berketuhanan itu dalam ajaran Agama Islam dikenal dengan istilah fitrah keagamaan
          Secara psikologis, ada dua dorongan yang menjadi alasan mengapa manusia percaya pada Tuhan.
        </Text>
        {doronganList}
        <Text>
          Tuhan menurut KBBI:
        </Text>
        {definisiList}
      </View>
    );
  }
}
