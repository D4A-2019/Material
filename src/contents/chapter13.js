import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter13 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      data: {
      	revolusiIndustri: [' Revolusi Industri 1.0 terjadi pada abad ke-18 melalui penemuan mesin uap yang mengakibatkan barang produksi dapat dibuat secara masal','Revolusi Industri 2.0 terjadi pada abad ke-19 hingga abad ke-20 dengan penggunaan mesin listrik sehingga mengakibatkan biaya produksi menjadi murah','Revolusi Industri 3.0 yang terjadi pada tahun 1970-an dengan penggunaan komputerisasi','Revolusi Industri 4.0 yang terjadi sekitar tahun 2010-an melalui rekayasa intelegensia dan internet of thing sebagai pulang punggung pergerakan dan konektivitas manusia dan mesin'],
      	dampakIndustri:['Ekonomi – Pertumbuhan, Pekerjaan, Sifat kerja','Bisnis – Ekspektasi Konsumen, Produk, dengan Data yang Lebih Baik, Inovasi Kolaboratif, Model Operasi Baru','Hubungan Nasional-Global – Pemerintahan; Negara, Region dan Kota; keamanan internasional','Masyarakat – Ketimpangan dan Kelas menengah, komunitas','Individu – Identitas, Moralitas dan Etika; Koneksi Antar-Manusia, Pengelolaan informasi publik dan privat.'],
      	karakterIslami: [' Kebajikan (Qs. 2: 177)', 'Beriman (Qs. 49:13)','Tanggung jawab pribadi (Qs. 10:41)','Kebenaran (Qs. 9:119)','Menjaga janji (Qs. 5:89)','Dapat dipercaya (Qs. 2:283)','Adil dan tidak berat sebelah (Qs. 4:58)','Sabar dan disiplin (Qs. 3:200)','Keberanian (Qs. 33:22)','Toleran (Qs. 2:256-257)','Mempertahankan dan membela diri (Qs. 22:39-40)','Sikap pertengahan (Qs. 17:29)','Kebaikan/ihsan (Qs. 10:26)','Murah hati (Qs. 2:274)','Pemaaf (Qs. 7:199)','Membalas keburukan dengan kebaikan (Qs. 41:43)','Rendah hati (Qs. 31:18)','Sopan santun (Qs. 4:86)'],
      	nilaiAlquran: ['Persatuan (Qs. 3:103)','Persaudaraan dan persamaan (Qs. 49:10)','Salam (Qs. 6:54)','Saling menolong dan kerjasama (Qs. 5:2)','Menghargai kehidupan (Qs. 4:93)','Menghargai perasaan dan emosi (Qs. 49:11)','Protokol dalam urusan umum (Qs. 24:62).'],
    }
  }
}
	
	render(){

		let revolusiIndustriList = this.state.data.revolusiIndustri.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })
	    let dampakIndustriList = this.state.data.dampakIndustri.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })
	    let karakterIslamiList = this.state.data.karakterIslami.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })
	    let nilaiAlquranList = this.state.data.nilaiAlquran.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })

	    return(
			<View style={{flex: 1 }}>
     		<ScrollView>
       		<Dalil ayat='Testing' soundFile={require('./dalil-sound/test.mp3')} />
       		<Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
          		Urgensi Softskill Dalam Dunia Kerja 
          	</Text>
          	<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			A. REVOLUSI INDUSTRI
       		</Text>
       		<Text>
       			Revolusi industri dalam Kamus Bahasa Indonesia (2008,1302) diartikan perubahan radikal dalam usaha mencapai produksi dengan menggunakan mesin-mesin, baik untu tenaga penggerak ataupun untuk tenaga pemroses. 
				Klaus Shwab (2016) mengungkapkan bahwa dunia telah mengalami empat tahapan revolusi, yaitu: 
       		</Text>
       			{revolusiIndustriList}
       		<Text>
       			{'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			B. URGENSI SOFTSKILL DDALAM ERA REVOLUSI INDUSTRI
       		</Text>	
       		<Text>
       			secara umum softskill didefinisikan sebagai kemampuan di luar kemampuan teknis dan akademis, yang lebih mengutamakan kemampuan intra dan interpersonal (Putra dan Pratiwi, 2005).{'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			C. DAMPAK REVOLUSI INDUSTRI
       		</Text>	
       		<Text>
       			Revolusi industri 4.0 saat ini bisa memberikan dampak baik dan buruk terhadap kehidupan manusia. Schwab (2016) mengungkapkan setidaknya ada lima klaster dampak tersebut, yakni:
       		</Text>
       			{dampakIndustriList}
       		<Text>
       			dampak revolusi industri 4.0 adalah munculnya fenomena disruptive innovation. Fenomena ini telah berhasil menggeser gaya hidup (life style) dan pola hidup (mindset) masyarakat dunia.
				Sigit (2018) menjelaskan bahwa secara sederhana disruptive innovation diartikan sebagai fenomena terganggunya para pelaku industri lama (incumbent) oleh para pelaku industri baru akibat kemudahan teknolog informasi.{'\n'}
       		</Text>	
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			D. PANDANGAN ISLAM TERHADAP REVOLUSI INDUSTRI
       		</Text>	
       		<Text>
       			Muhammad Qurasih Shihab (2007) mengungkapkan bahwa berdasarkan petunjuk Al-Qur’an, seorang Muslim dapat menerima hasil-hasil teknologi yang sumbernya netral, dan tidak menyebabkan maksiat, serta bermanfaat bagi manusia. {'\n'}
				Seandainya penggunaan satu hasil teknologi telah melalaikan seseorang dari zikir dan tafakur, sera mengantarkannya kepada keruntuhan nilai-nilai kemanusiaan, maka ketika itu bukan hasil teknologinya yang mesti ditolak, namun kita harus memperingatkan dan mengarahkan manusia yang menggunakan teknologi tersebut. {'\n'}
				Demikianlah halnya dengan revolusi digital atau revolusi industri 4.0 ini, bukan revolusi industrinya yang ditolak namun manusia yang menggunakannyalah yang harus diingatkan dan diarahkan menuju kebaikan bagi manusia dan alam semesta tanpa harus menuju keruntuhan dunia dan tergerusnya nilai-nilai kemanusiaan.{'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			E. KARAKTER ISLAMI YANG DIBUTUHKAN DALAM MENGHADAPI PERKEMBANGAN ZAMAN SESUAI TUNTUNAN AL QURAN
       		</Text>	
       		<Text>
       			Al-Qur’an telah memberikan solusi bagaimana menyikapi era revolusi industri 4.0, yaitu umat diharapkan kembali kepada nilai-nilai yang terkandung dalam Al-Qur’an.{'\n'}
				Nilai-nilai tersebut dijelaskan Irving dkk (2002) diantaranya,
       		</Text>
       			{karakterIslamiList}
       		<Text>
       			Selanjutnya terkait nilai-nilai Al-Qur’an dalam perilaku sosial Irving dkk (2002) mengutarakan diantaranya,
       		</Text>
       			{nilaiAlquranList}
       		</ScrollView>
       		</View>
       		);
       	}
       }