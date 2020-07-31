import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter12 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      data: {
      	prinsipIslami: ['Dimensi Ma’rifat (Yaitu sebuah pengenalan diri diri pada penguasaan profesionalitas hakikat pekerjaan)','Dimensi Syariat (Dimensi ini menekankan pada sebuah syariat aplikasi kinerja secara profesional).','Dimensi Hakikat (Tentunya tujuan itu adalah untuk menggapai keridhoan Allah swt, artinya semua yang dilakukan diniatkan semata-mata).'],

    }
  }
}
	
	render(){

		let prinsipIslamiList = this.state.data.prinsipIslami.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })

		return(
			<View>
     		<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10}}>
			 <Text style={{fontWeight: 'bold', color: '#007f5f', fontSize: 20, textAlign: 'center', margin:10}}>
          		Etos Kerja
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			A. MASALAH YANG DIHADAPI DAN HUBUNGANNYA DENGAN ETOS KERJA
       		</Text>
       		<Text>
       			Banyak analisis menyatakan bahwa kelemahan ekonomi di dunia Muslim sekarang disebabkan oleh etika kerja yang lemah (yang disebabkan oleh terlalu ritualistiknya dan berorientasinya muslim pada akhirat dan meninggalkan aspek-aspek duniawi).
				Namun, Hal tersebut tidak boleh dilakukan oleh seorang Muslim karena Islam mengharuskan keseimbangan antara duniawi dan akhirat, antara bekerja dan beribadah. Pekerjaan yang dilakukan oleh manusia adalah proses penemuan diri, 
				serta pencarian hasil yang dapat dimanfaatkan untuk memenuhi kebutuhan fisik dan spiritual manusia. Masalah etika kerja sangat penting untuk menjadi dasar dalam proses kerja setiap orang. 
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			 {'\n'} Nilai Ideal Dan Etos Kerja Tertinggi 
       		</Text>
       		<Text>
       			Bagi seorang Muslim, nilai ideal dan etos kerja tertinggi adalah "niat". Niat seorang Muslim adalah inspirasi dan motivasi untuk menjadi manusia yang berprestasi di tempat kerja. Dalam pandangan Islam, kerja bukan hanya kerja, tetapi dalam kerja, 
       			ada ibadah sebagai bentuk syukur kepada Allah SWT. Semakin tinggi niat seseorang, semakin banyak antusiasme untuk bekerja untuk mencapai tujuan yang ditetapkannya. Untuk membuktikan niat dan untuk mencapai tujuan yang tinggi diperlukan integrasi 
       			semua kegiatan dan kemampuan yang dimiliki seseorang. Niat adalah sumber dorongan mental bagi seseorang untuk melakukan atau tidak melakukan sesuatu. Niat ini memunculkan rasa bekerja hany untuk mencari ridho Allah. 
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			{'\n'}Yang Dapat Mempengaruhinya 
       		</Text>
       		<Text>
       			Etos kerja tidak hanya bergantung pada nilai-nilai Islam, tetapi hari ini etos kerja juga dipengaruhi oleh budaya, pendidikan, politik sosial, lingkungan, dan geografi.
				Etos kerja yang tinggi atau rendah dari suatu masyarakat dipengaruhi oleh ada atau tidak adanya struktur ekonomi. {'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			B. ETIKA PROFESI ISLAMI 
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			Konsep Bekerja Dalam Islam & Lahirnya Profesionalitas Dalam Bekerja  
       		</Text>
       		<Text>
       			Bekerja dalam Islam tidak berarti hanya bekerja. Kerja dalam konsep Islam adalah untuk memenuhi panggilan Allah SWT dan Utusan-Nya. Pekerjaan semacam itu adalah ibadah. Pekerjaan yang baik adalah pekerjaan yang dapat membersihkan hati dan pikiran. Hasil pekerjaan itu tidak najis. Pekerjaan harus mengikuti hukum Allah (Al-Qur'an, Sunnah Rasulullah SAW) dan berdasarkan niat baik.
				Walaupun seluruh pekerjaan diniatkan karena Allah, namun pastinya ada perbedaan bakat dan minat antara masing-masing individu, pada suatu saat akan melahirkan suatu keahlian tertentu. Hal ini akan mengarah kepada proses profesionalitas dalam bekerja.
				Profesionalitas didasarkan pada memiliki keterampilan yang tinggi di bidangnya dan kecakapan dalam menggunakan peralatan tertentu, memiliki pengetahuan dan pengalaman serta kecerdasan untuk menganalisis suatu masalah, dan memiliki orientasi ke masa depan, sehingga mereka dapat mengantisipasi perkembangan lingkungan. {'\n'}
				Seseorang dapat menjadi profesional di tempat kerja jika pekerjaannya bukan hanya ada stimulus dari luar, tetapi juga memiliki antusiasme, dan memiliki dorongan yang tinggi. Motivasi adalah kekuatan atau dorongan yang mendengar perilaku seseorang.
       		</Text> 
      		<Text style={{fontWeight: 'bold'}}>
       			{'\n'}Etos Kerja Islami Dalam Lingkungan Pendidikan, Keluarga Dan Pekerjaan  
       		</Text>
       		<Text>
       			Bekerja dalam Islam adalah sebagai aplikasi iman, Islam, dari usaha seseorang, sehingga bekerja dalam ajaran Islam, tidak hanya mengejar hasil tetapi pada saat yang sama mengejar nilai kerja. 
       			Islam memposisikan manusia sebagai aktif-transformatif terhadap diri mereka sendiri dan lingkungan alami mereka. Tuhan akan menilai kualitas kemanusiaan seseorang melalui upaya yang dilakukan (ketulusan niat). Keberhasilan upaya manusia ada di tangan Allah. {'\n'}
       			Setidaknya ada tiga prinsip atau dimensi yang harus dilakukan dalam melakukan pekerjaan, baik dalam lingkungan pendidikan, keluarga, atau kerja yaitu: {'\n'}
       		</Text>
       			{prinsipIslamiList}
       		<Text>
       			Landasan untuk bekerja bagi seorang Muslim adalah tauhid. Tauhid adalah motivasi utama untuk bekerja dan pada saat yang sama menjadi pekerjaan manusia bernilai tinggi. Pekerjaan Muslim tidak lagi membedakan antara bekerja dan kesenangan, bekerja baginya adalah kesenangan, dan kesenangan ada melalui kerja. 
       			Pekerjaan semacam itu menurut naluri seorang Muslim, sesuai dengan bakat dan kemampuannya, tidak lagi dipaksakan dan dipaksakan. Pekerjaan yang tulus dan berlandaskan tauhid meningkatkan nilai-nilai kemanusiaan dan memberikan kebahagiaan. {'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			C. JIHAD & ETOS KERJA 
       		</Text>
       		<Text>
       			Jihad di masa sekarang berarti membangun, menjunjung tinggi, dan menyusun. Umat ​​Islam terpanggil untuk ikut serta dalam mewujudkan keunggulan menjadi bangsa yang dapat bersaing dan melampaui kemajuan bangsa lain. Menurut Rahardjo, aktualisasi Jihad adalah bekerja dengan sepenuh hati. 
       			Jihad dalam konteks pembangunan adalah kemauan untuk membangun, memiliki perencanaan yang matang dalam setiap kegiatan pembangunan, dan menghilangkan segala bentuk hambatan yang menghambat, terus mencapai tujuan yang diinginkan, Etos kerja ditegakkan dan menjunjung tinggi nilai-nilai ini.
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			{'\n'}Aspek Jihad  
       		</Text>
       		<Text>
       			Jihad An-Nafs termasuk di dalam ini jihad pendidikan yaitu membangun kepercayaan diri sendiri dengan membenahi sumber daya manusia Indonesia. hal ini memungkinkan terjadinya suatu proses pembangunan yang berkelanjutan.
				Jihad Bil-Lisan dan Bil-Qalam Artinya berfikir serius untuk menemukan konsep-konsep pembangunan. Pada dataran ini seseorang bisa disebut mujtahid, artinya mengadakan pembaharuan konsepsi. {'\n'}
				Jihad Bil-Mal membangun dan menumbuhkan kelompok yang mempunyai kekuatan ekonomi yang tangguh, sehingga bisa mengangkat kelumpok-kelompok.
       		</Text>
       		</ScrollView>
       		</View>
		);
	}
}