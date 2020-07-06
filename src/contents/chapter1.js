import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Paragraph } from 'react-native-paper'
import UnorderedList from 'react-native-unordered-list';

import * as Dalil from "../dalil/dalil";

export default class Chapter1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Dalil ayat='Testing' soundFile='./dalil-sound/test.mp3'></Dalil>
        <Paragraph>
          Kebutuhan manusia terhadap Tuhan itu bersifat permanen dan tidak akan hilang, artinya kapan pun dan di mana pun manusia hidup pasti membutuhkan Tuhan.
          Dalam kondisi tertentu manusia mengabaikan atau mengeyampingkan kebutuhan ini. Namun hal ini hanya sementara dikarenakan pada akhirnya kebutuhan akan Tuhan akan tetap muncul pada saat manusia mengalami persoalan hidup berat atau kehidupannnya terancam.
          Kecenderungan manusia untuk berketuhanan itu dalam ajaran Agama Islam dikenal dengan istilah fitrah keagamaan
          Secara psikologis, ada dua dorongan yang menjadi alasan mengapa manusia percaya pada Tuhan.
          <FlatList
            data={[
              { key: 'adanya rasa takut yang menyelimuti manusia karena keberadaannya yang kecil dan tak berarti jika dibandingkan dengan semesta yang maha besar tak terjangkau garis tepinya dan tak terpahami kandungan dan perilakunya. Perasaan takut inilah yang membuat manusia berdoa dan memohon pertolongan dan perlindungan-Nya.' },
              { key: 'adanya rasa kagum melihat kebesaran, keberlimpahan dan keindahan semesta ini sehingga mendorong manusia mencari pencipta dan pengatur serta melakukan ritual doa.' }
            ]}

            renderItem={({ item }) => <Paragraph>- {item.key}</Paragraph>}
          />
        </Paragraph>

        <Paragraph>
          Tuhan menurut KBBI:<br/>
          <FlatList
            data={[
              { key: 'sesuatu yang diyakini, dipuja, dan disembah oleh manusia sebagai yang Mahakuasa, Mahaperkasa, dan sebagainya' },
              { key: 'sesuatu yang dianggap sebagai Tuhan' }
            ]}

            renderItem={({ item, index }) => <Paragraph>({index + 1}) {item.key}</Paragraph>}
          />
        </Paragraph>
      </View>
    );
  }
}