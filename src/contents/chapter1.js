import * as React from 'react';
import { FlatList, Text, ScrollView } from 'react-native';
import { Paragraph, Subheading } from 'react-native-paper'

import Dalil from "../dalil/dalil";

export default class Chapter1 extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Dalil ayat='Testing' soundFile={require('./dalil-sound/test.mp3')} />
        <Paragraph>
          Kebutuhan manusia terhadap Tuhan itu bersifat permanen dan tidak akan hilang, artinya kapan pun dan di mana pun manusia hidup pasti membutuhkan Tuhan.
          Dalam kondisi tertentu manusia mengabaikan atau mengeyampingkan kebutuhan ini. Namun hal ini hanya sementara dikarenakan pada akhirnya kebutuhan akan Tuhan akan tetap muncul pada saat manusia mengalami persoalan hidup berat atau kehidupannnya terancam.
          Kecenderungan manusia untuk berketuhanan itu dalam ajaran Agama Islam dikenal dengan istilah fitrah keagamaan
          Secara psikologis, ada dua dorongan yang menjadi alasan mengapa manusia percaya pada Tuhan.
        </Paragraph>
        <FlatList
          data={[
            { key: 'Adanya rasa takut yang menyelimuti manusia karena keberadaannya yang kecil dan tak berarti jika dibandingkan dengan semesta yang maha besar tak terjangkau garis tepinya dan tak terpahami kandungan dan perilakunya. Perasaan takut inilah yang membuat manusia berdoa dan memohon pertolongan dan perlindungan-Nya.' },
            { key: 'Adanya rasa kagum melihat kebesaran, keberlimpahan dan keindahan semesta ini sehingga mendorong manusia mencari pencipta dan pengatur serta melakukan ritual doa.' }
          ]}

          renderItem={({ item }) => <Paragraph>- {item.key}</Paragraph>}
        />

        <Paragraph>
          {"\n"}
          Tuhan menurut KBBI:
        </Paragraph>
        <FlatList
          data={[
            { key: 'Sesuatu yang diyakini, dipuja, dan disembah oleh manusia sebagai yang Mahakuasa, Mahaperkasa, dan sebagainya' },
            { key: 'Sesuatu yang dianggap sebagai Tuhan' }
          ]}

          renderItem={({ item, index }) => <Paragraph>({index + 1}) {item.key}</Paragraph>}
        />

        <Paragraph>
          {"\n"}
          Tuhan menurut Oxford Learner’s Dictionary:{"\n"}
          The being or spirit that is worshipped and is believed to have created the universe, yakni sesuatu atau zat yang disembah dan diyakini sebagai pencipta alam semesta.
        </Paragraph>

        <Paragraph>
          {"\n"}
          Tuhan dalam Bahasa Arab: {"\n"}
          Tuhan disebut dengan kata ilah yang menurut Ibnu Taimiyah seperti dikutip oleh Imaduddin (1989) berarti yang dipuja dengan penuh kecintaan hati, tunduk kepada-Nya, merendahkan diri di hadapan-Nya, takut dan mengharapkan-Nya, kepada-Nya tempat berpasrah ketika dalam kesulitan, berdoa dan bertawakkal kepada-Nya untuk kemashlahatan diri, dan menimbulkan ketenangan di saat mengingat-Nya dan terpaut cinta dengan-Nya.
        </Paragraph>

        <Paragraph>
          {"\n"}
          Kesimpulan: {"\n"}
          Tuhan adalah sesuatu yang dipentingkan atau dianggap penting oleh manusia sedemikian rupa sehingga manusia merelakan dirinya dikuasai dan didominasi olehnya untuk kemudian mematuhi dan mentaatinya.
        </Paragraph>

        <Subheading>
          {"\n"}
          Konsekuensi Ketuhanan
        </Subheading>
        <Paragraph>
          Keyakinan yang lahir dari adanya latar belakang kondisi manusia yang kecil dan terbatas serta tidak sanggup menghadapi permasalahan yang mereka alami di dunia seharusnya memberikan dampak pada sikap dan perilaku.
          Ada Lima konsekuensi dari kepercayaan manusia kepada Tuhan sebagaimana dinyatakan oleh Salim (2016) yakni:
        </Paragraph>

      </ScrollView>
    );
  }
}