import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter4 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: {
            semakna: ['Al Furqan, bermakna pembeda, yaitu mampu membedakan antara yang haq dan bathil', 'Al Kitab, bermakna tulisan, yakni ditulis dalam lembaran-lembaran', 'Adz Dzikru, bermakna peringatan, yakni sebagai peringatan dari Allah swt kepada manusia'],
            fungsi: ['Petunjuk dan pedoman hidup','Solusi problematika kehidupan','Otoritas hukum tertinggi','Korektor dan penyempurna kitab-kitab sebelumnya','Mukjizat Nabi Muhammad saw'],
            keseimbangan: ['Keseimbangan antara jumlah bilangan kata dengan antonimnya.','Keseimbangan antara jumlah bilangan kata dengan sinonim atau makna yang dikandungnya.','Keseimbangan antara jumlah bilangan kata dengan jumlah kata yang menunjuk kepada akibatnya.','Keseimbangan antara jumlah bilangan kata dengan kata penyebabnya.'],
            isyarat: ['Al-Qur’an mengisyaratkan bahwa langit dan bumi semula merupakan satu gumpalan sebagaimana dilukiskan dalam surat QS 21:30','Gunung-gunung di muka bumi ternyata diciptakan Allah swt dapat berjalan sebagaimana dikemukakan dalam QS 27:88','Fenomena hujan ternyata menyimpan berbagai proses yang amat mengagumkan sebagaimana dikemukakan dalam QS 43:11','Al-Qur’an juga mengisyaratkan tentang perbedaan perhitungan kalender Syamsiyah dan Qamariyah, yaitu ketika menguraikan kisah Ashhabul al-Kahfi (sekelompok pemuda yang berlindung di gua)'],
            metode: ['Metode Ijmali, adalah metode yang paling awal muncul, dan sudah digunakan sejak Rasulullah saw dan para sahabat. Penafsiran dalam metode ijmali dilakukan dengan menafsirkan ayat secara ringkas, dengan menggunakan bahasa yang umum dan dangat mudah dipahami','Metode Tahlili, adalah metode yang akan menjelaskan  kandungan ayat ayat Al-Qur’an dari berbagai aspek, mulai dari aspek bahasa, asbâb an-nuzûl, munâsabah dan aspek lainnya yang berhubungan dan memungkinkan. Penafsiran dilakukan dengan menggunakan sistematika mushaf Al-Qur’an, urut dari awal sampai akhir ayat demi ayat','Metode Muqârin, adalah metode yang digunakan oleh seorang mufassir dengan jalan melakukan perbandingan antara teks ayat-ayat Al-Qur’an yang mempunyai kesamaan atau kemiripan isi, atau memiliki redaksi yang berbeda untuk isi kasus yang sama; atau ayat-ayat Al-Qur’an dengan hadis yang terlihat bertentangan; dan berbagai pendapat mufassir dalam menafsirkan Al-Qur’an.','Metode Maudhui, atau tematik merupakan metode yang berbeda secara prinsip dengan metode ijmâli dan tahlîli. Dalam metode ini, seorang mufassir akan mengumpulkan ayat-ayat yang mengandung pengertian yang sama, selanjutnya melakukan kompromi antara makna yang umum/‘âm dan khusus/khâsh, mencari persamaan dari ayat-ayat yang redaksinya terlihat bertentangan, menjelaskan ayat nasikh dan mansukh, sehingga dapat ditemukan suatu kesamaan, tanpa harus memaksakan sebagian ayat kepada makna-makna yang sebenarnya tidak tepat.'],
            corak: ['Corak sastra bahasa dalam penafsiran Al-Qur’an dilatarbelakangi oleh mulai menyebarnya Islam dan banyaknya orang-orang di luar Arab yang memeluk Islam.','Corak fiqih atau hukum dalam penafsiran Al-Qur’an dipengaruhi oleh berkembangnya ilmu fiqih serta mulai terbentuknya mazhab-mazhab fiqih.','Corak teologi dan/atau filsafat juga lahir  akibat dimulainya program penerjemahan kitab filsafat klasik yang mempengaruhi sebagian pihak dan masuknya penganut agama-agama lain ke dalam Islam, yang masih mempercayai beberapa hal dari kepercayaan lama mereka.','Corak tasawuf lahir sebagai jawaban atas munculnya gerakan sufisme yang menjadi reaksi utama atas kecenderungan umat Islam saat itu yang begitu terlena dengan materi.','Corak penafsiran ilmiah, dilatarbelakangi oleh kemajuan ilmu pengetahuan dan usaha mufassir sendiri untuk memahami Al-Qur’an seiring dengan maju dan berkembangnya ilmu pengetahuan.','Corak sastra budaya kemasyarakatan, yakni corak tafsir yang berkaitan langsung dengan masalah-masalah sosial berdasarkan petunjuk ayat-ayat dalam Al-Qur’an, penyampaian penafsiran menggunakan bahasa yang mudah dimengerti tetapi indah didengar.'],
        }
      }
    }


    render() {

        let semaknaList = this.state.data.semakna.map((dataList, index) => {
          return(
            <Text key={index}> - {dataList} </Text>
          )
        })
        let fungsiList = this.state.data.fungsi.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
        })
        let keseimbanganList = this.state.data.keseimbangan.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
        })
        let isyaratList = this.state.data.isyarat.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
        })
        let metodeList = this.state.data.metode.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
        })
        let corakList = this.state.data.corak.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
          })
    
    
        return (
          <View>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10}}>
            <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
            Al Qur'an: Sumber Utama Ajaran Islam
            </Text>

            <Text style={{fontWeight : 'bold', fontSize : 15}}>
            A. Makna, Fungsi, dan Keistimewaan Al-Qur’an
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Makna Al-Qur`an
            </Text>
            <Text>
            Al-Qur’an secara bahasa berarti “bacaan”. Sedangkan secara pengertian berarti “firman Allah swt yang diturunkan kepada Nabi Muhammad saw melalui Malaikat Jibril dengan lafal-lafal yang berbahasa Arab untuk menjadi undang-undang dan petunjuk bagi manusia, serta menjadi sarana pendekatan diri dan ibadah kepada Allah swt dengan membacanya, yang terhimpun dalam satu mushaf diawali dengan surat al-Fatihah dan diakhiri dengan surat an-Nas, yang disampaikan secara mutawatir dari generasi ke generasi”
            Dalam Al-Qur’an, Allah swt menyebutkan beberapa kata yang semakna dengan Al-Qur’an, yakni :
            </Text>
            {semaknaList}
            <Text style={{fontWeight: 'bold'}}>
            Fungsi dan Kedudukan Al-Qur’an
            </Text>
            <Text>
            Al-Qur’an adalah sumber pertama dan utama dari ajaran Islam yang berfungsi sebagai :
            </Text>
            {fungsiList}
            <Text style={{fontWeight: 'bold'}}>
            Keistimewaan Al-Qur’an
            </Text>
            <Text>
            Secara kebahasaan, Al-Qur’an memiliki keistimewaan dan keindahan yang tiada tara ditinjau dari segi nada dan langgamnya, pemilihan kata-kata dan susunannya, keluasan dan kekayaan kandungan maknanya, sehingga dapat memuaskan akal dan sekaligus jiwa, baik bagi para pemikir maupun orang awam.

            Al-Qur’an juga memiliki keseimbangan redaksi yang amat mengagumkan yang meliputi :
            </Text>
              {keseimbanganList}
            <Text>
            Berikut isyarat atau hakikat ilmiah yang disinggung Al-Qur’an umumnya ditampilkan dalam redaksi yang singkat dan sarat makna :
            </Text>
            {isyaratList}
            
            <Text style={{fontWeight : 'bold', fontSize : 15}}>
            C. Keragaman Corak penafsiran Al-Qur’an
            </Text>
            <Text>
            Menurut Adz-Dzahabi (1976:13-15), tafsir secara bahasa dimaknai sebagai keterangan dan penjelasan (al-idhâh wa at-tabyîn). Sedangkan secara istilah syariat, tafsir bermakna keterangan dan penjelasan tentang arti dan maksud ayat-ayat Al-Qur’an sebatas kemampuan manusia.
            </Text>
            <Text style={{fontWeight: 'bold'}}>
            Tafsir bil-Ma’tsur dan bil ar-Ra’yi
            </Text>
            <Text>
            Tafsîr bil-ma’tsûr adalah upaya untuk menafsirkan Al-Qur’an dengan Al-Qur’an, atau Al-Qur’an dengan Sunnah Nabi saw, dan juga Al-Qur’an dengan pendapat atau penafsiran para sahabat Nabi saw dan tabi’in.

            Perkembangan peradaban yang terjadi akhirnya menghendaki munculnya bentuk tafsir yang memberikan peranan lebih luas dan besar kepada akal atau ijtihad dibandingkan dengan penggunaannya pada bentuk bil-ma’tsûr. Bentuk tafsir tersebut dalam perkembangannya dikenal dengan sebutan Tafsîr bil-ra’yi.

            Dalam tafsîr bil-ra’yi pada saat seorang mufassir menafsirkan ayat-ayat Al-Qur’an, mereka menggunakan kemampuan ijtihad atau pemikiran, namun tidak melepaskan diri dari tafsir Al-Qur’an dengan Al-Qur’an atau dengan hadis. Pada masa itu, bentuk penafsiran bil ra’yi memungkinkan untuk menafsirkan Al-Qur’an dengan bantuan bermacam-macam ilmu pengetahuan yang sudah tersusun saat itu, seperti ilmu bahasa Arab, ilmu qirâah, ilmu-ilmu Al-Qur’an, ilmu hadits, ushul fiqh, ilmu sejarah, dan lain-lain. Dinamai dengan at-tafsîr bi- ar-ra’yi karena yang dominan memang penalaran atau ijtihad mufassir itu sendiri.

            </Text>
            <Text style={{fontWeight: 'bold'}}>
            Metode Penafsiran
            </Text>
            {metodeList}
            <Text style={{fontWeight: 'bold'}}>
            Corak Penafsiran
            </Text>
            <Text>
            Lahirnya corak penafsiran Al-Qur’an sangat dipengaruhi oleh dinamika keilmuan di kalangan umat Islam pada saat itu, di sisi lain juga berkaitan dengan munculnya berbagai tantangan dari luar. Berikut dijelaskan ragam corak penafsiran Al-Qur’an, 
            </Text>
            {corakList}

            </ScrollView>
          </View>
        );
      }
}