import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter2 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      data: {
      	nilKemanusiaan: ['Agama, berislam, dan beriman (QS. 7: 172; 30:30)', 'Kasih sayang (QS. 3: 31; 4: 36:17:23-24; 31:12-15; 3:159)', 'Keindahan (QS. 3: 14)', 'Harga diri (QS. 95: 4-5; 89: 27-30;  91: 7-10)', 'Kedamaian (QS. 10:25)','Kebenaran (QS. 2:147;  17: 81)','Aktualisasi diri (QS. 67: 2)','Berkeluarga (QS: 30:21)','Bermasyarakat (QS: 30:21)'],
      	aspekPersonal: ['Fungsi edukasi. Agama memberikan edukasi yang berkaitan dengan edukasi moral, petunjuk kebenaran dan informasi alam ghaib.','Agama sebagai sumber moral untuk memberitahu manusia perilaku yang baik dan buruk serta informasi tentang pahala dan dosa.','Agama sebagai petunjuk kebenaran karena agama dapat memberikan kebenaran hakiki yang gagal ditemukan oleh manusia.','Agama sebagai sumber informasi metafisika atau alam ghaib yang tidak dapat dijangkau oleh akal manusia.','Fungsi bimbingan rohani untuk memberi manusia nutrisi rohani agar mencapai kesempurnaan dan kebahagiaan hidup.','Fungsi penyelamatan. Agama dapat menyelamat kan manusia karena Tuhan memberikan jalan keselamatan apabila manusia menjalankan ajaran agama dengan baik.','Fungsi tabsyir dan indzar. Agama senantiasa memberikan kabar gembira (tabsyir) untuk semua orang yang menjalankan agamanya dengan baik dan juga memberikan peringatan (indzar) untuk orang yang tidak mau peduli terhadap ajaran agamanya.'],
      	aspekSosial: ['Fungsi Ukhuwah. Kesamaan iman merupakan sebuah ikatan tertinggi yang dikenal manusia di dunia, berdasarkan kesamaan ini terbentuklah sebuah kesatuan sosiologis.','Fungsi kontrol sosial. Agama memerintahkan agar seluruh sikap dan perilaku masyarakat senantiasa sejalan dengan norma-norma agama.','Fungsi Penyadaran Peran Sosial. Manusia tidak dapat hidup tanpa pertolongan orang lain. Agama datang untuk menyadarkan bahwa mereka adalah orang-orang yang perlu dibantu, disantuni, dan dibimbing'],

    }
  }
}

 render() {

    let nilKemanusiaanList = this.state.data.nilKemanusiaan.map((dataList, index) => {
      return(
        <Text key={index}>{index+1}. {dataList} </Text>
      )
    })
    let aspekPersonalList = this.state.data.aspekPersonal.map((dataList, index) => {
      return(
        <Text key={index}>{index+1}. {dataList} </Text>
      )
    })
    let aspekSosialList = this.state.data.aspekSosial.map((dataList, index) => {
      return(
        <Text key={index}>{index+1}. {dataList} </Text>
      )
    })


    return (

      <View style={{flex: 1 }}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
          Peran Agama Dalam Kehidupan Manusia
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        	A. MAKNA AGAMA
        </Text>
        <Text>
          Sebagian orang berpendapat bahwa Tuhan dan Spiritualitas itu tidak membutuhkan Agama. Agama yang menjadi manifestasi nilai ketuhanan dan 
          spiritualitas pada sebagiannya menunjukan praktik yang tidak sesuai dengan nilai ketuhanan dan spiritualitas. Bahkan Agama bagi sebagian orang 
          telah menghancurkan nilai-nilai ketuhanan dan spiritualitas itu sendiri.
        </Text>
        <Text>
        	Sebenarnya meskipun seseorang tidak pernah membaca kitab suci, 
        	tidak pernah bertemu dan berinteraksi dengan nabi dan rasul serta tidak pernah belajar agama, 
        	ia dengan sendirinya pasti bisa mengetahui dan mengenal adanya Tuhan. 
        	Itulah yang disebut dengan fitrah keagamaan.Dengan fitrah itu manusia sudah bisa mengenal Tuhan tanpa harus mengikuti sebuah Agama
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        	Pengertian Agama
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	a-gam-a
        </Text>
        <Text>
        	Kata gam berarti pergi, tetapi setelah mendapatkan awalan dan akhiran a, pengertiannya berubah menjadi jalan. Selain mendapatkan awalan a, kata gam kadang-kadang juga diberi awalan i sehingga menjadi igama atau u sehingga menjadi ugama
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Ad-Din
        </Text>
        <Text>
        	Din dalam Bahasa Arab mempunyai banyak arti pokok, yaitu keberhutangan, kepatuhan, kekuasaan bijaksana, dan kecenderungan alami atau tendensi.
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Religion
        </Text>
        <Text>
        	Kata religion berasal dari Bahasa Latin relegere yang berarti berpegang kepada norma-norma.
        </Text>
        <Text>
        	Menurut Oxford Student Dictionary (1978) berarti “the biliefe in the existence of supranatural ruling power, the creator and the controller of the universe” yakni suatu kepercayaan akan keberadaan suatu kekuatan pengatur yang bersifat supranatural yang menciptakan dan mengendalikan alam semesta.
        </Text>
        <Text>
        	Religion dalam pengertiannya yang paling umum diartikan sebagai sistem orientasi dan obyek pengabdian
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        	Unsur Agama
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Keyakinan ( Credial )
        </Text>
        <Text>
        	Credial adalah keyakinan akan adanya sesuatu kekuatan supranatural yang diyakini mengatur dan mencipta alam.
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Peribadatan ( Ritual )
        </Text>
        <Text>
        	Peribadatan adalah tingkah laku manusia dalam berhubungan dengan kekuatan supranatural tersebut sebagai konsekuensi atas pengakuan dan ketundukannya.
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Sistem Nilai
        </Text>
        <Text>
        	Sistem nilai adalah aturan yang mengatur hubungan manusia dengan manusia lainnyaatau alam semesta yang dikaitkan dengan keyakinannya tersebut (Tim Dosen PAI, 2007:4-5).
        </Text>
        <Text>
        	{'\n'}
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Dimensi Agama
        </Text>
        <Text>
        	Agama itu mempunyai dua dimensi yakni ajaran dan keberagamaan. Agama sebagai ajaran adalah yang tertuang dalam kitab suci yang menjadi sumber rujukan bagi manusia. Sedangkan keberagaman merupakan perilaku yang bersumber langsung atau tidak langsung kepada ajaran.
        </Text>
        <Text>
        	Dengan meminjam analisis “religion comitment” dari Glock dan Strak (1965:18-38), keberagamaan muncul menjadi lima dimensi: ideologis, intelektual, eksperensial, ritualistik dan konsekuensial.
        </Text>
        <Text>
        	Dimensi ideologis berkenaan dengan seperangkat kepercayaan (beliefs) yang memberikan “premis eksistensial” untuk menjelaskan Tuhan, alam, manusia, dan hubungan di antara mereka.
        </Text>
        <Text>
        	Dimensi intelektual mengacu pada pengetahuan agama yakni apa yang tengah atau harus diketahui orang tentang ajaran-ajaran agamanya.
        </Text>
        <Text>
        	Dimensi eksperiensial adalah bagian keagamaan yang berkaitan dengan perasaan keagamaan seseorang, yang menekankan kepada keterlibatan emosional dan sentimental pada pelaksanaan ajaran agama
        </Text>
        <Text>
        	Dimensi ritualistik merujuk pada ritus-ritus keagamaan yang dianjurkan oleh agama dan dilaksanakan oleh para pengikutnya.
        </Text>
        <Text>
        	Dimensi konsekuensial merupakan wujud konkrit dari dampak beragama yang berhubungan dengan aspek kemanusiaan dan kemasyarakatan.
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Jenis Agama
        </Text>
        <Text>
        	Agama wahyu (samawi atau langit)
        </Text>
        <Text>
        	agama yang diterima oleh manusia dari Allah Sang Pencipta melalui Malaikat Jibril dan disampaikan serta disebarkan oleh Rasul-Nya kepada umat manusia. Bersifat Monoteis. Penamaan agama tersebut berasal dari wahyu. Berlaku universal untuk seluruh umat manusia.
        </Text>
        <Text>
        	Agama non-wahyu (ardhi atau bumi)
        </Text>
        <Text>
        	Agama non-wahyu bersandar semata-mata kepada ajaran seorang manusia yang dianggap memiliki pengetahuan tentang kehidupan dalam berbagai aspeknya secara mendalam. Bersifat politeis. Penamaan agama dikaitkan dengan pendiri atau tempat asal agama tersebut. Berlaku Lokal hanya untuk suatu masyarakat tertentu.
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Penyebaran Agama
        </Text>
        <Text>
        	Agama Misionari
        </Text>
        <Text>
        	agama yang menuntut pemeluknya untuk menyebarkan ajaran-ajarannya kepada manusia lainnya.
        </Text>
        <Text>
        	Agama Bukan Misionari
        </Text>
        <Text>
        	agama tidak menuntut pemeluknya untuk menyebarkan ajaran-ajarannya kepada orang lain. Jadi cukup disebarkan kepada lingkungan tertentu yang menjadi misi utamanya. (Suryana, 1997: 36-37). {'\n'}
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        	B. KEDUDUKAN SERTA FUNGSI SIMBOL DAN RITUAL KEAGAMAAN
        </Text>
        <Text>
        	Di kehidupan modern, kemajuan pesat akal manusia tidak diimbangi dengan kekuatan hati. Hal inilah yang menyebabkan semua penyimpangan pada manusia. Padahal, tidak ada hal selain agama yang dapat mengantar manusia ke tujuan yang agung dan suci. Muthahhari mengungkapkan: bila agama tidak ada, kemanusiaan pun tak akan ada.
        </Text>
        <Text>
        Krisis tentang makna dan tujuan hidup terjadi karena manusia tercabut dari nilai agama. Krisis ini menyebabkan gaya hidup manusia yang hanya mengandalkan kebendaan dan rasionalitas. Tasmara(2001:6) mengungkapkan jika bahwa pengingkaran terhadap fitrah sebagai kesucian diri manusia akan menodai hal prinsipil dan menyebabkan dosa-dosa kemanusiaan.
        </Text>
        <Text>
        	Nilai kemanusiaan akan tetap ada jika manusia dapat memenuhi aspek spiritualitas sebagai kebutuhan dasar. kebutuhan dasar itu menurut Fadloli terdiri dari:
        </Text>
        	{nilKemanusiaanList}
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        	Fungsi Agama
        </Text>	
        <Text>
        	Fungsi agama bagi kehidupan manusia dapat dilihat dari aspek personal dan sosial. Secara personal agama berfungsi untuk memenuhi kebutuhan individual seperti kebutuhan akan keselamatan, kebermaknaan hidup, dan lainnya. Sementara secara sosial agama berfungsi menyadarkan manusia tentang peran mereka dalam keluarga dan masyarakat
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	Fungsi Agama dari Aspek Personal
        </Text>
        	{aspekPersonalList}
        <Text style={{fontWeight : 'bold'}}>
        	Fungsi Agama dari Aspek Sosial
        </Text>	
        	{aspekSosialList}
        <Text>
        	{'\n'}
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        	C. KEANEKARAGAMAN PEMAHAMAN DAN SIKAP BERAGAMA
        </Text>
        <Text>
        Kita harus meyakini bahwa perbedaan adalah sebuah keniscayaan. Perbedaan itu adalah kehendak Allah swt. dan bisa saja Ia menjadikan kita semua beragama namun Allah membiarkan hal tersebut agar menguji siapa yang paling bertakwa dalam klaim keimanannya.
        </Text>
        <Text>
        Semua ajaran agama memiliki inti kebaikan, sehingga kebaikan itu sendiri bersifat universal. Agama bukanlah sebuah hal yang menjadikan kita pembatas untuk melakukan kebaikan. Namun, nilai kebenaran sebuah agama tidaklah seuniversal nilai kebaikan. Semua ajaran agama memiliki subjektifitas akan kebenaran agama tersebut. Setiap muslim tidaklah mungkin beribadah mengikut agama lain, begitu sebaliknya. Prinsip inilah yang difirmankan oleh Allah dalam surat Al-Kafirun yang isinya secara tegas bahwa seorang muslim secara tegas tidak akan menerima kebenaran keyakinan di luar islam, kemudian bertoleransi dengannya.
        </Text>
        <Text>
        قُلْ يٰٓاَيُّهَا الْكٰفِرُوْنَۙ لَآ اَعْبُدُ مَا تَعْبُدُوْنَۙ وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۚ وَلَآ اَنَا۠ عَابِدٌ مَّا عَبَدْتُّمْۙ وَلَآ اَنْتُمْ
		عٰبِدُوْنَ مَآ اَعْبُدُۗ لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِ
        </Text>
        <Dalil ayat='AL-Kafirun' soundFile={require('./audios/Al Kafirun - (1-6).mp3')}/>
        <Text>
        	Artinya: “Katakanlah: “Hai orang- orang kafir, Aku tidak akan menyembah
			apa yang kamu sembah. Dan kamu bukan penyembah Tuhan yang aku
			sembah. Dan kamu tidak pernah (pula) menjadi penyembah Tuhan yang aku
			sembah. Untukmu agamamu, dan untukkulah, agamaku”. (QS Al-Kafirun: 1-6).
        </Text>
        <Text>
        	Toleransi yang diajarkan Rasulullah saw tergambar pada sikapnya tentang hubungan jual beli dengan non muslim. Selain itu juga terdapat toleransi jika terjadi perbedaan paham antar umat beragama muslim tentang pemahaman agama dan tidak perlu ada pertentangan tentang siapa yang paling benar. Seperti sebuah kisah tentang bagaimana kalimat Rasulullah yang ditangkap berbeda dan saat bertanya kebenarannya kepada Rasulullah, Beliau membenarkan kedua pemahaman kalimat tersebut.
        </Text>
        <Text>
        	Perbedaan pendapat sebagaimana dijelaskan di atas berkaitan dengan
			pemahaman agama Islam itu bisa muncul karena sebab-sebab sebagai berikut:
        </Text>
        <Text>
        a. Perbedaan qira’at (bacaan). {'\n'}
		b. Tidak mengetahui adanya hadis Nabi.{'\n'}
		c. Ragu-ragu akan kesahihan sebuah hadis.{'\n'}
		d. Perbedaan dalam memahami dan menafsirkan teks.{'\n'}
		e. Pertentangan antar dalil.{'\n'}
		f. Perbedaan kaidah istinbat hukum.

        </Text>
        </ScrollView>
        </View>
    );
	}
}