import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter10 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (

      <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10}}>
      <Text style={{fontWeight: 'bold', color: '#007f5f', fontSize: 20, textAlign: 'center', margin:10}}>
        Peradaban Islam
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        A. Makna dan Karakter Peradaban Islam 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        1.  Makna Peradaban Islam
        </Text>
        <Text>
        Peradaban dalam Kamus Bahasa Indonesia dimaknai sebagai “Kemajuan (kecerdasan, kebudayaan) lahir batin” (Pusat Bahasa, 2008:9). Pengertian ini mengisyaratkan bahwa kebudayaan merupakan sebuah kemajuan yang diperoleh dari hasil pikiran dan tindakan manusia
        peradaban dapat disimpulkan sebagai hasil karya kemajuan manusia baik yang bersifat jasmani maupun rohani yang diturunkan secara turun-temurun dalam rangka menuju kehidupan yang lebih maju. 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        2.  Karakteristik Peradaban Islam
        </Text>
        <Text>
        Karakter yang dimaksud adalah: universalitas, tauhid, seimbang dan moderat, serta adanya sentuhan akhlak.
        Peradaban Islam bersifat 
        <Text style={{fontWeight: 'bold'}}>{" "}UNIVERSALITAS,{" "}</Text>
        sebab Islam sendiri merupakan agama universal, agama yang kokoh dan menyampaikan nila-nilai kebenaran, keadilan, kebaikan dan persamaan antara seluruh manusia tanpa melihat warna kulit, dan jenisnya, tidak mempercayai pandangan keunggulan unsur (bangsawan) atau ketinggian jenis ras manusia dari yang lain. 
        <Text style={{fontWeight: 'bold'}}>{" "}TAUHID{" "}</Text>
        adalah karakter peradaban Islam yang kedua. Keunggulan yang membedakan peradaban Islam dengan peradaban yang lainnya adalah bahwa peradaban Islam tegak atas dasar tauhid secara mutlak kepada Allah, Rabb langit dan bumi. 
        Karakter peradaban Islam ketiga adalah 
        <Text style={{fontWeight: 'bold'}}>{" "}ADIL DAN MODERAT</Text>
        . Keadilan dan moderat (wasathan) merupakan karakteristik yang unggul dalam peradaban Islam. yakni moderat dan adil antara dua sudut yang saling berhadap-hadapan atau saling bertentangan.
        Karakter keempat dari peradaban Islam adalah adanya 
        <Text style={{fontWeight: 'bold'}}>{" "}SENTUHAN AKHLAK</Text>
        . Akhlak dalam peradaban Islam merupakan pagar yang membatasi sekaligus dasar yang tegak di atasnya kejayaan Islam.
        </Text>
        
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        B. Capaian Peradaban Islam Dari Masa Ke Masa
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        1.	Kemajuan Peradaban di Zaman Rasulullah Saw
        </Text>
        <Text>
        Penghapusan tradisi-tradisi jahiliah merupakan dasar penting yang diletakan Rasulullah saw dalam membangun peradaban Islam. Nilai-nilai Islam yang humanis dalam peradaban yang dibangun Rasulullah saw kemudian menjadi penunjang keberhasilan dakwah beliau. 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        2.	Kemajuan Peradaban di Era Al-Khulafa Al-Rasyidin
        </Text>
        <Text>
        Hal yang cukup menonjol dari Abu Bakar Ash-Shidiq dalam membangun peradaban adalah terkait dengan pemerintahan. Menurut Zubaidah ( 2016, hlm. 39–40) ada empat kebijakan yang diterapkan Abu Bakar dalam pemerintahannya, yaitu: a.   	Pemerintahan Berdasarkan Musyawarah, Amanat Baitul Mal, Konsep Pemerintahan,Kekuasaan Undang-undang, 
        Periode kekhalifahan Umar bin Khattab ra dianggap sebagai “abad emas” Islam dalam segala zaman. Khalifah Umar bin Khattab ra mengikuti langkah-langkah Rasulullah saw dengan segenap kemampuannya, terutama pengembangan Islam.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        3.	Peradaban Islam pada Masa Dinasti Umayyah
        </Text>
        <Text>
        Pemerintahan Dinasti Umayyah dianggap sebagai masa penyebaran benih kebudayaan yang berkembang subur di masa Dinasti Abbasiyyah. Banyak ilmu pengetahuan yang berkembang pada masa Dinasti Umayyah, seperti ilmu-ilmu keagamaan (ilmu qiraat, ilmu fikih, ilmu tafsir, ilmu kalam, ilmu hadis, ilmu tasawuf dan ilmu bahasa) dan juga ilmu arsitektur (Hasan, 2018)
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        4.	Peradaban Islam pada Zaman Dinasti Abbasiyah
        </Text>
        <Text>
        Peradaban Islam pada zaman kekuasaan Dinasti Abbasiyah disebut-sebut sebagai The Golden Age of Islam. Peradaban di era ini mengalami kemajuan di berbagai bidang terutama pendidikan dan pemikiran-pemikiran rasional (Saefuddin & Azra, 2002). Pesatnya perkembangan pendidikan dan pemikiran pada masa Dinasti Abbasiyah tidak lepas dari beberapa langkah strategis yang dijalankan beberapa khalifahnya,{"\n"}
        a.	Mendirikan lembaga pengembangan ilmu pengetahuan{"\n"}
        b.	Gerakan Penerjemah{"\n"}
        c.	Baitul Hikmah{"\n"}   
        </Text>

        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        C. Karakteristik Peradaban islam di Indonesia
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        1.	Sejarah Masuknya Islam di Nusantara
        </Text>
        <Text>
        Proses bagaimana peradaban Islam Indonesia lahir tidak mungkin dipisahkan dari proses masuknya Islam ke nusantara dan medium apa yang digunakan untuk menyebarkannya.{"\n"}
        <Text style={{fontWeight: 'bold'}}>Teori India{" "}</Text> 
        yang secara umum menyatakan bahwa Islam berasal dari India. Teori ini pertama kali diungkapkan oleh  Pijnappel yang merupakan professor pertama tentang studi Melayu Leiden.{"\n"} 
        <Text style={{fontWeight: 'bold'}}>Teori Arab{" "}</Text>
        Islam datang langsung dari Arab tepatnya dari Hadramaut. Teori ini pertama kali dikedepankan oleh Crawfurd (1820), Keyzer (1859), Niemann (1861), de Hollander (1861), dan Veth (1878). Niemann dan de Hollander menyebutkan bahwa Hadramaut merupakan sumber datangnya Islam, sebab muslim Hadramaut adalah pengikut mazhab Syafi'i seperti juga kaum muslimin Indonesia (Fathurrohman, 2017:28).{"\n"}
        <Text style={{fontWeight: 'bold'}}>Teori Persia{" "}</Text>
        Islam yang datang di Nusantara berasal dari Persia, bukan India atau Arabia. Teori ini didasarkan pada kesamaan unsur budaya Persia, khususnya Shiah yang ada dalam unsur kebudayaan Islam Nusantara, khususnya di Indonesia dengan Persia (Amin & Ananda, 2019:88){"\n"}
        <Text style={{fontWeight: 'bold'}}>Teori Cina</Text>
        . Menurut teori ini, Islam masuk dibawa orang-orang Cina. Teori ini didasarkan pada argumen yang relatif sama dengan Teori Persia, yaitu banyaknya unsur kebudayaan Cina dalam beberapa unsur kebudayaan Islam di Indonesia. Menurut H.J. de Graaf yang telah menyunting beberapa literatur Jawa Klasik (Catatan Tahunan Melayu) memperlihatkan adanya peranan orang-orang Cina dalam pengembangan Islam di Indonesia.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        2.	Akulturasi Nilai-nilai Islam dengan Budaya Lokal
        </Text>
        <Text>
        Di antara karakter khas Peradaban Islam adalah universalitas dan humanis. Kedua karakter tersebut merupakan karakter yang memudahkan pengaruh Islam masuk ke berbagai lapisan masyarakat di berbagai belahan dunia termasuk nusantara
        Dalam sejarah masuk dan berkembangnya Islam di nusantara, pendekatan dakwah melalui budaya merupakan pendekatan yang sangat efektif dan elegan. Budaya dalam konteks ini tentu saja tidak sekedar kesenian, tetapi juga menyangkut pola kehidupan, cara mengatur pemerintahan, pendidikan, dan lain sebagainya. Fathurrohman (2017:41–44) menyebutkan ada enam saluran (budaya) berkembangnya Islam di nusantara, yaitu perdagangan, politik, perkawinan, pendidikan, kesenian, dan tasawuf.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        3.	Keragaman Islam di Indonesia
        </Text>
        <Text>
        Dalam kondisi keragaman otoritas keagamaan dalam komunitas Islam di Indonesia, maka yang perlu dikembangkan menurut Azra (2011) adalah sikap tasamuh, toleransi satu sama lain. Selain itu, pada waktu yang bersamaan perlu dikurangi adanya kecenderungan dominatif dan hegemonif di antara otoritas yang ada di dalam institusi keagamaan di Indonesia
        </Text>
        </ScrollView>
      </View>
    );
  }
}
