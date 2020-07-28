import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        dorongan: ['adanya rasa takut yang menyelimuti manusia karena keberadaannya yang kecil dan tak berarti jika dibandingkan dengan semesta yang maha besar tak terjangkau garis tepinya dan tak terpahami kandungan dan perilakunya. Perasaan takut inilah yang membuat manusia berdoa dan memohon pertolongan dan perlindungan-Nya.', 'adanya rasa kagum melihat kebesaran, keberlimpahan dan keindahan semesta ini sehingga mendorong manusia mencari pencipta dan pengatur serta melakukan ritual doa.'],
        defTuhan: ['sesuatu yang diyakini, dipuja, dan disembah oleh manusia sebagai yang Mahakuasa, Mahaperkasa, dan sebagainya', 'sesuatu yang dianggap sebagai Tuhan'],
        defOxford: ['the being or spirit that is worshipped and is believed to have created the universe, yakni sesuatu atau zat yang disembah dan diyakini sebagai pencipta alam semesta.'],
        defArab: ['Tuhan disebut dengan kata ilah yang menurut Ibnu Taimiyah seperti dikutip oleh Imaduddin (1989) berarti yang dipuja dengan penuh kecintaan hati, tunduk kepada-Nya, merendahkan diri di hadapan-Nya, takut dan mengharapkan-Nya, kepada-Nya tempat berpasrah ketika dalam kesulitan, berdoa dan bertawakkal kepada-Nya untuk kemashlahatan diri, dan menimbulkan ketenangan di saat mengingat-Nya dan terpaut cinta dengan-Nya'],
        kesimpulan : ['Tuhan adalah sesuatu yang dipentingkan atau dianggap penting oleh manusia sedemikian rupa sehingga manusia merelakan dirinya dikuasai dan didominasi olehnya untuk kemudian mematuhi dan mentaatinya.'],
        dinamisme : ['Dinamisme berasal dari Bahasa Yunani dynamis yang dalam Bahasa Indonesia disebut kekuatan','tiap-tiap benda yang berada di sekeliling mereka bisa mempunyai kekuatan batin yang misterius', 'Dalam ilmu sejarah agama dan ilmu perbandingan agama, kekuatan batin ini biasanya disebut mana.', 'memperoleh mana sebanyak-banyaknya dengan memakan benda-benda yang diyakini mempunyai mana atau dengan memakai fethis (benda bertuah) yang telah diisi oleh dukun atau ahli sihir dengan mana', 'Semakin banyak mana seseorang semakin terjamin keselamatannya Mana ini mempunyai lima sifat, yakni:'],
        animisme : ['berasal dari Bahasa Latin Anima yang berarti roh', 'semua benda, baik yang bernyawa atau tidak bernyawa mempunyai roh','belum dapat menjelaskan definisi roh dan membedakannnya dengan materi','roh itu tersusun dari suatu zat atau materi yang halus sekali yang hampir menyerupai udara atau uap.','roh itu makan, minum, mempunyai bentuk dan umur.','Roh juga mempunyau kehendak dan kekuatan, mempunyai perasaan senang dan menjadi marah','Roh juga mempunyau kehendak dan kekuatan, mempunyai perasaan senang dan menjadi marah','animisme sudah mengenal ritual peribadatan berupa doa, sembahyang, dan pemberian korban.'],
        politeisme : ['roh-roh itu, karena dimuliakan, dianggap mempunyai kekuasaan dan disembah dengan cara-cara tertentu, kemudian meningkat menjadi dewa', 'Bentuk dan sifat dewa juga lebih jelas daripada roh.', 'Dewa sudah mempunyai kepribadian sesuai dengan tugas dan pekerjaannya.', 'Dewa-dewa dalam politeisme mempunyai kedudukan yang hampir sama, tetapi karena beberapa hal, lambat laun beberapa di antara mereka mempunyai kedudukan yang lebih tinggi dari dewa-dewa yang lain.'],
        henoteisme : ['aliran yang mengutamakan beberapa dewa sebagai obyek penyembahan','satu dewa saja yang mereka yakini sebagai dewa tunggal bagi pemeluk agama tersebut.', 'Keyakinan terhadap satu dewa atau tuhan tidak berarti bermakna monoteisme.', 'Hal itu disebabkan mereka masih meyakini bahwa bagi agama lain terdapat tuhan tersendiri', 'Tuhan-tuhan yang lain itu merupakan musuh dan saingan dari tuhan yang satu itu.' ],
        monoteisme : ['Monoteisme merupakan perkembangan dari Henoteisme', 'dalam monoteisme tidak ada lagi tuhan saingan', 'Sementara tuhan-tuhan dari bangsa lain bukan tuhan yang sebenarnya, melainkan hanya syetan'],
        yakin : ['Kepercayaan kepada Tuhan menjadikan seseorang yakin bahwa ada zat yang maha kuasa yang kekuasaannya mengatasi kekuasaan manusia bahkan mengalahkan kekuatan seluruh alam semesta.', 'Tuhan harus sosok yang meyakinkan, tanpa kekurangan dan keraguan.','Manusia harus yakin seyakin-yakinnya bahwa tuhan yang diyakini dan disembahnya adalah sosok tuhan seperti itu.'],
        berserah : ['Kepercayaan kepada Tuhan harus diikuti dengan penyerahan diri dan kehidupan secara total kepada Tuhan', 'Penyerahan diri dan kehidupan itu dilakukan dengan cara mendengar, mengikuti dan mentaati segala perintah dan larangan Tuhan', 'Penyerahan diri dan kehidupan ini didasarkan pada keyakinan bahwa Tuhan adalah Zat yang mengatur alam semesta', 'Manusia mengetahui perintah dan larangan Tuhan melalui Agama.', 'Agama berfungsi mengajarkan kepada manusia tentang Tuhan, bagaimana wujud dan sifat-Nya, bagaimana perintah dan larangan-Nya.', 'Banyak hal yang tidak bisa dipahami oleh akal semata, melainkan manusia membutuhkan wahyu Tuhan yang diturunkan dalam bentuk agama.'],
        terbangun : ['Interaksi manusia satu dengan lainnya untuk memudahkan proses kehidupan', 'Interaksi tersebut dalam suatu komunitas akan melahirkan persaudaraan antar anggota yang diwujudkan dengan sikap saling memberi perhatian dan bantuan.'],
        menolak : ['Keyakinan terhadap Tuhan seharusnya membawa manusia kepada keteguhan sikap untuk menolak segala sistem atau aturan yang bertentangan dengan aturan-Nya.', 'Tuhan pasti sangat mengetahui segala karakteristik dan kebutuhan manusia, termasuk kebutuhan akan aturan', 'Aturan yang dibuat oleh manusia bisa saja diikuti dan ditaati selama aturan tersebut baik, disepakati bersama dan tidak bertentangan dengan aturan yang dibuat oleh Tuhan'],
        menerima : ['Keyakinan kepada Tuhan yang tumbuh di dalam masyarakat tidak berbentuk tunggal atau hanya satu keyakinan saja','kenyataannya banyak dan beragam konsep ketuhanan yang lahir di kalangan manusia.','Keyakinan itu bersifat pribadi dan subjektif sehingga setiap orang tidak bisa dipaksa untuk mengikuti keyakinan yang dianut oleh orang lain.','pada saat sebuah keyakinan berhadapan atau hidup berdampingan dengan keyakinan lain, maka diperlukan sikap yang bijak dan dewasa untuk mengakui perbedaan tersebut.'],
        konsepIslam : ['Konsep ketuhanan dalam Agama Islam disebut dengan tauhid','Tauhid adalah mengesakan Allah dan tidak menyekutukan-Nya dengan segala sesuatu yang lain.', 'Tauhid adalah poros yang di sekelilingnya semua ajaran Islam bergerak dan berputar','Keyakinan bahwa “Tidak ada Tuhan selain Allah” oleh kaum muslim dipahami sebagai penolakan dan pengingkaran terhadap hal-hal sebagai berikut: \n a) Setiap sekutu Allah Swt dalam kekuasaan (rulership) dan kehakiman-Nya atas alam semesta. \n b)  Kemungkinan bagi setiap makhluk untuk merepresentasikan,mempersonifikasikan atau dengan cara apa pun untuk mengungkapkan dan menggambarkan wujud Ilahi'],
        konsepKristen : ['konsep ketuhanan yang mereka yakini disebut dengan Trinitas atau Tritunggal.', 'Dogma Trinitas atau Tritunggal ini mengimani ketuhanan Allah, Yesus Kristus dan Roh Kudus sekaligus', 'Tuhan adalah satu tapi menjelma dan mewujud dalam tiga oknum, yakni Allah, Yesus Kristus dan Roh Kudus.', 'Ajaran ketuhanan yang pokok dalam agama Kristen sebagaimana tercantum dalam kredo iman rasuli, yaitu Tritunggal yang terdiri dari Tuhan Bapa, Tuhan Putra atau Anak dan Roh Kudus,', 'ketiga-tiganya adalah pribadi Allah dan ketiga pribadi tersebut adalah Allah.'],
        konsepYahudi : ['Dalam konsep Judaisme, nama Tuhan tidak dapat diketahui dengan pasti.', 'Kaum Yahudi modern hanya menduga-duga, bahwa nama Tuhan mereka adalah Yahweh', 'Konsep ketuhanan agama Yahudi secara ketat didasarkan pada unitarian monoteisme.'],
        konsepHindu : ['Menurut Triguna (2018) Agama Hindu menganut paham monoteisme, mengakui Tuhan sebagai sesuatu yang Esa', 'Keyakinan akan ke-Esa-an Tuhan dalam agama Hindu dinyatakan dengan dua cara pandang, yaitu Tuhan yang memiliki sifat-sifat Nirguna Brahman [Tuhan tidak berwujud, dan merupakan jiwa suci] dan Tuhan yang bersifat Saguna Brahman [Tuhan diberi nama, bentuk, dan atribut lainnya]. Sebagai Nirguna Brahman Tuhan dinyatakan tak berwujud, tidak terpikirkan dan abstrak.','Tuhan berwujud, berkepribadian, dan disimbolkan dengan berbagai atribut yang satu sama lain kadang-kadang berbeda, sehingga mengesankan Tuhan itu bersifat jamak.', 'Hindu bukan agama yang memuja banyak Tuhan','agama yang memuja satu Tuhan beserta percikan sinar dan jiwa Tuhan yang disebut berbagai nama dan sebagai bentuk pujian'],
        konsepBudha : ['Agama Buddha menggunakan aspek ‘nafi’ atau penolakan atas segala sesuatu yang dapat dipikirkan oleh manusia.','Tuhan tidak dapat dipandang sebagai suatu pribadi (personifikasi), tidak bersifat antropomorfisme (pengenaan ciri-ciri yang berasal dari wujud manusia) dan antropopatisme (pengenaan pengertian yang berasal dari perasaan manusia).', 'di dalam agama Buddha bahwasannya asal muasal dan penciptaan alam semesta bukan berasal dari tuhan, melainkan karena hukum sebab dan akibat yang telah disamarkan oleh waktu, dan tujuan akhir dari hidup manusia adalah mencapai kebuddhaan (anuttara samyak sambodhi) atau pencerahan sejati dimana batin manusia tidak perlu lagi mengalami proses tumimbal lahir'], 
        implementasi : ['Keberanian', 'Kesamaan Kemuliaan', 'Melepaskan Diri dan Kesempitan Dunia'],
    }
  }
}

  render() {

    let doronganList = this.state.data.dorongan.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList} </Text>
      )
    })
    let definisiList = this.state.data.defTuhan.map((dataList, index) => {
      return(
        <Text key={index}>{index+1}. {dataList}</Text>
      )
    })
     let oxfordList = this.state.data.defOxford.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let arabList = this.state.data.defArab.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
     let kesimpulanList = this.state.data.kesimpulan.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let dinamismeList = this.state.data.dinamisme.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let animismeList = this.state.data.animisme.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let politeismeList = this.state.data.politeisme.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let henoteismeList = this.state.data.henoteisme.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let monoteismeList = this.state.data.monoteisme.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let yakinList = this.state.data.yakin.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let berserahList = this.state.data.berserah.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let terbangunList = this.state.data.terbangun.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let menolakList = this.state.data.menolak.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let menerimaList = this.state.data.menerima.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let konsepIslamList = this.state.data.konsepIslam.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let konsepKristenList = this.state.data.konsepKristen.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let konsepYahudiList = this.state.data.konsepYahudi.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let konsepHinduList = this.state.data.konsepHindu.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let konsepBudhaList = this.state.data.konsepBudha.map((dataList, index) => {
      return(
        <Text key={index}> - {dataList}</Text>
      )
    })
    let implementasiList = this.state.data.implementasi.map((dataList, index) => {
      return(
        <Text key={index}>{index+1}. {dataList}</Text>
      )
    })


    return (

      <View style={{flex: 1 }}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
          Konsep Ketuhanan
        </Text>
        <Text>
          Kebutuhan manusia terhadap Tuhan itu bersifat permanen dan tidak akan hilang, artinya kapan pun dan di mana pun manusia hidup pasti membutuhkan Tuhan.
          Dalam kondisi tertentu manusia mengabaikan atau mengeyampingkan kebutuhan ini. Namun hal ini hanya sementara dikarenakan pada akhirnya kebutuhan akan Tuhan akan tetap muncul pada saat manusia mengalami persoalan hidup berat atau kehidupannnya terancam.
          Kecenderungan manusia untuk berketuhanan itu dalam ajaran Agama Islam dikenal dengan istilah fitrah keagamaan
          Secara psikologis, ada dua dorongan yang menjadi alasan mengapa manusia percaya pada Tuhan.
        </Text>
        {doronganList}
        <Text style={{fontWeight: 'bold'}}>
          {'\n'}Tuhan menurut KBBI:
        </Text>
        {definisiList}
        <Text style={{fontWeight: 'bold'}}>
         {'\n'}Tuhan menurut Oxford Learner's Dictionary : 
        </Text>
        <Text>
          the being or spirit that is worshipped and is believed to have created the universe, yakni sesuatu atau zat yang disembah dan diyakini sebagai pencipta alam semesta.{'\n'}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          Tuhan dalam Bahasa Arab :
        </Text>
        <Text>
          Tuhan disebut dengan kata ilah yang menurut Ibnu Taimiyah seperti dikutip oleh Imaduddin (1989) berarti yang dipuja dengan penuh kecintaan hati, tunduk kepada-Nya, merendahkan diri di hadapan-Nya, takut dan mengharapkan-Nya, kepada-Nya tempat berpasrah ketika dalam kesulitan, berdoa dan bertawakkal kepada-Nya untuk kemashlahatan diri, dan menimbulkan ketenangan di saat {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          Kesimpulan :
        </Text>
        <Text>
         Tuhan adalah sesuatu yang dipentingkan atau dianggap penting oleh manusia sedemikian rupa sehingga manusia merelakan dirinya dikuasai dan didominasi olehnya untuk kemudian mematuhi dan mentaatinya. {'\n'} 
        </Text>
        <Text>
          Kepercayaan manusia kepada Tuhan berproses secara evolusi hingga mencapai derajat kesempurnaannya. Berikut proses nya : {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          1. Dinamisme
        </Text>
        <Text>
          Dinamisme berasal dari Bahasa Yunani dynamis yang dalam Bahasa Indonesia disebut kekuatan
          tiap-tiap benda yang berada di sekeliling mereka bisa mempunyai kekuatan batin yang misterius
          Dalam ilmu sejarah agama dan ilmu perbandingan agama, kekuatan batin ini biasanya disebut mana.
          memperoleh mana sebanyak-banyaknya dengan memakan benda-benda yang diyakini mempunyai mana atau dengan memakai fethis (benda bertuah) yang telah diisi oleh dukun atau ahli sihir dengan mana
          Semakin banyak mana seseorang semakin terjamin keselamatannya
          Mana ini mempunyai lima sifat, yakni:
        </Text>
        <Text>
          a.  Mana mempunyai kekuatan {'\n'}
          b.  Mana tidak dapat dilihat {'\n'}
          c.  Mana tidak mempunyai tempat yang tetap {'\n'}
          d.  Mana pada dasarnya tidak selalu baik atau buruk {'\n'}
          e.  Mana terkadang dapat dikontrol {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          2. Animisme 
        </Text>
        <Text>
          Berasal dari Bahasa Latin Anima yang berarti roh,
          semua benda, baik yang bernyawa atau tidak bernyawa mempunyai roh,
          belum dapat menjelaskan definisi roh dan membedakannnya dengan materi,
          roh itu tersusun dari suatu zat atau materi yang halus sekali yang hampir menyerupai udara atau uap.
          roh itu makan, minum, mempunyai bentuk dan umur.
          Roh juga mempunyau kehendak dan kekuatan, mempunyai perasaan senang dan menjadi marah,
          animisme sudah mengenal ritual peribadatan berupa doa, sembahyang, dan pemberian korban. {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          3. Politeisme
        </Text>
        <Text>
          Roh-roh itu, karena dimuliakan, dianggap mempunyai kekuasaan dan disembah dengan cara-cara tertentu, kemudian meningkat menjadi dewa,
          Bentuk dan sifat dewa juga lebih jelas daripada roh.
          Dewa sudah mempunyai kepribadian sesuai dengan tugas dan pekerjaannya.
          dewa-dewa dalam politeisme mempunyai kedudukan yang hampir sama, tetapi karena beberapa hal, lambat laun beberapa di antara mereka mempunyai kedudukan yang lebih tinggi dari dewa-dewa yang lain. {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          4. Henoteisme
        </Text> 
        <Text>
          Aliran yang mengutamakan beberapa dewa sebagai obyek penyembahan,
          satu dewa saja yang mereka yakini sebagai dewa tunggal bagi pemeluk agama tersebut.
          Keyakinan terhadap satu dewa atau tuhan tidak berarti bermakna monoteisme.
          Hal itu disebabkan mereka masih meyakini bahwa bagi agama lain terdapat tuhan tersendiri
          Tuhan-tuhan yang lain itu merupakan musuh dan saingan dari tuhan yang satu itu.{'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          5. Monoteisme
        </Text>
        <Text>
          Monoteisme merupakan perkembangan dari Henoteisme,
          dalam monoteisme tidak ada lagi tuhan saingan,
          Sementara tuhan-tuhan dari bangsa lain bukan tuhan yang sebenarnya, melainkan hanya syetan. {'\n'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          Konskuensi Ketuhanan 
        </Text>
        <Text>
          Keyakinan yang lahir dari adanya latar belakang kondisi manusia yang kecil dan terbatas serta tidak sanggup menghadapi permasalahan yang mereka alami di dunia seharusnya memberikan dampak pada sikap dan perilaku.
        </Text>
        <Text>
          Ada Lima konsekuensi dari kepercayaan manusia kepada Tuhan sebagaimana dinyatakan oleh Salim (2016) yakni : {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          1. Keyakinan akan tuhan yang mantap
        </Text>
          {yakinList}
        <Text style={{fontWeight : 'bold'}}>
         {'\n'}2. Berserah diri total kepada tuhan
        </Text>
          {berserahList}
        <Text style={{fontWeight : 'bold'}}>
         {'\n'}3. Terbangun persaudaraan seiman
        </Text>  
          {terbangunList}
        <Text style={{fontWeight : 'bold'}}>
          {'\n'}4. Menolak sistem dan aturan yang bertentangan dengan aturan tuhan
        </Text>
          {menolakList}
        <Text style={{fontWeight : 'bold'}}>
          {'\n'}5. Menerima kenyataan pluralitas pemahaman tentang ketuhanan  
        </Text> 
          {menerimaList}
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          Konsep Ketuhanan Lintas Agama
        </Text>
        <Text>
          Konsep ketuhanan itu sangat beragam yang pada akhirnya melahirkan keragaman agama yang dianut oleh manusia
        </Text>
        <Text>
          Paling tidak ada enam agama besar yang sekarang hidup dan dianut oleh masyarakat dunia yaitu : {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
          1. Konsep Ketuhanan Agama Islam
        </Text>
          {konsepIslamList}
        <Text style={{fontWeight : 'bold'}}>
          {'\n'}2. Konsep Ketuhanan Agama Kristen
        </Text>
          {konsepKristenList}
        <Text style={{fontWeight : 'bold'}}>
         {'\n'}3. Konsep Ketuhanan Agama Yahudi
        </Text>
          {konsepYahudiList}
        <Text style={{fontWeight : 'bold'}}>
          {'\n'}4. Konsep Ketuhanan Agama Hindu
        </Text>
          {konsepHinduList}
         <Text style={{fontWeight : 'bold'}}>
          {'\n'}5. Konsep Ketuhanan Agama Budha
        </Text>
        {konsepBudhaList}
        <Text>
           {'\n'}
        </Text>
        <Text> 
            Implementasi Nilai - Nilai ketuhanan dalam lingkungan pendidikan, kekeluargaan dan pekerjaan :
        </Text>
          {implementasiList}
        </ScrollView>
      </View>
    );
  }
}
