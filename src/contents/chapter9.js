import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter9 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (

      <View style={{flex: 1 }}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
        A. Konsep Alam Menurut Islam 
        </Text>
        <Text>
        Alam Semesta merupakan tempat yang meliputi kehidupan biotik maupun antibiotik serta seluruh adegan peristiwa alam.
        Menurut Al-Quran, alam adalah unsur-unsur yang memiliki atau saling keterkaitan antara satu sama lain dan merupakan wujud dari keberadaan Allah SWT.
        Penjelasan tentang alam salah satunya terdapat pada Qur’an surat Ali Imran ayat 83
        </Text>
        <Dalil ayat='Ali Imran ayat 83' soundFile={require('./dalil-sound/test.mp3')} />
        <Text>
        Artinya: “Maka apakah mereka mencari agama yang lain dari agama Allah, padahal kepada-Nya-lah menyerahkan diri segala apa yang di langit dan di bumi, baik dengan suka maupun terpaksa dan hanya kepada Allah-lah mereka dikembalikan”
        </Text>

        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
        {"\n"}
        B. Hakikat Alam Semesta
        </Text>
        <Text>
        Dalam Tafsir Ibn Katsir alam adalah segala sesuatu yang ada selain Allah. Alam (عالم) berasal dari kata tanda (العلامة) karena alam merupakan bukti yang menunjukkan adanya pencipta dan keesaan-Nya
        Menurut para ulama, alam adalah segala sesuatu selain Allah SWT
        Menurut para filsuf islam, alam merupakan susunan dari maddat (materi) dan shurat (bentuk) yang ada di bumi dan di langit.
        Ikhwan as-Shafa memaparkan bahwa alam merupakan semua wujud spiritual maupun material yang menghuni keluasan langit, yang membentuk kekuasaan meliputi lapisan-lapisan (langit), bintang-bintang, elemen dasar, hingga manusia. 
        Kata ‘âlam sering disebut sebagai kota (city) atau makhluk (animal) akan tetapi selalu berbeda dari kesatuan ilahiyah (divine unity) terkait Tuhan dengan eksistensinya (wujud), keabadiannya (baqa’), keparipurnaannya (tamam), dan kesempurnaannya (kamal).
        Islam memaknai alam semesta sebagai gambaran konsep kekuasaan Allah
        Sains menggambarkan kesatuan alam semesta yaitu keterhubungan seluruh bagian dan aspeknya.
        Islam medeskripsikan  alam tidak secara fisik semata tapi juga non-fisik (ghaib). Hal ini yang menjadi prinsip dasar alam dalam islam yaitu integratif. Ala terdiri dari material kuantitatif dan kualitatif.
        </Text>
        <Text>
        Alparslan Acikgenc menyebutkan dua jenis alam dalam pandangan hidup islam yaitu syahadah (yang terlihat) dan alam ghaib (tidak terlihat). Pembagian ini dapat dilihat di Qur’an surat Al-Zumar:46.
        </Text>
        <Dalil ayat='Al-Zumar ayat 46' soundFile={require('./dalil-sound/test.mp3')} />
        <Text>
            <Text style={{fontWeight: 'bold'}}>
            Alam syahadah{" "}
            </Text>
            <Text>
            merupakan segala sesuatu yang dapat dipersepsi oleh indera seperti manusia, hewan, tumbuhan, air, benda mati, dan keseluruhan langit dan bumi. Alam ini diketahui lewat pengamatan manusia menggunakan akal dan panca inderanya.
            </Text>
        </Text>
        <Text>
            <Text style={{fontWeight: 'bold'}}>
            Alam ghaib{" "}
            </Text>
            <Text>
            berada di luar kemampuan panca indera seperti malaikat, jin, iblis, surga, neraka, dan lainnya. keberadaan alam ini mutlak diketahui lewat wahyu.
            </Text>
        </Text>
        <Text>
        Kedua alam ini tidak terpisah sehingga fenomena alam bukan sesuatu yang terjadi berdasarkan sebab akibat alam syahadah semata tapi juga memiliki kaitan dengan alam ghaib. Seperti hubungan antara hujan dengan malaikat pembawa rizki.
        </Text>

        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
        {"\n"}
        C. Hubungan Manusia dan Alam 
        </Text>
        <Text>
        Manusia diciptakan sebagai khalifah yang berperan sebagai penanggung jawab di muka bumi.{"\n"}
        Allah menugaskan amanah masing-masing kepada semua makhluknya sebagaimana tercantum dalam QS Al-Ahzab: 72.
        </Text>
        <Dalil ayat='Al-Ahzab ayat 72' soundFile={require('./dalil-sound/test.mp3')} />
        <Text>
        manusia dianugrahi fitrah dan kepercayaan, keberanian dan keutamaan serta kebijakan dan kekuasaan di alam semesta ini. 
        manusia tidak hanya sebagai khalifah di muka bumi saja, melainkan pemegang amanah dan tanggung jawab atas pemeliharaan bumi.
        {"\n"}
        Al-Faruqi menyebutkan bahwa dalam Islam, alam adalah ciptaan dan anugerah.
        Sebagai makhluk, ia bersifat teratur; sebagai anugerah ia merupakan kebaikan yang tak mengandung dosa yang disediakan untuk manusia.
        Tujuannya adalah memungkinkan manusia melakukan kebaikan dan mencapai kebahagiaan. 
        Al-Faruqi kemudian menjelaskan lebih jauh ketiga penilaian tersebut, bahwa Tauhid yang mendasari pola pikir muslim mengharuskannya untuk melihat ciptaan Allah dalam setiap objek dan peristiwa.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Tugas dan Kewajiban Manusia Terhadap Alam Semesta
        </Text>
        <Text>
        a. Memakmurkan bumi (al-imarah) dengan mengelola pemanfaatan lingkungan alam{"\n"}
        b. Memelihara dan menjaga bumi dari upaya-upaya perusakan yang datang dari pihak manapun (al-ri’ayah).{"\n"} 
        c. Kebersihan (al-nadzofah), dengan menjaga kebersihan, lingkungan tidak menjadi terkontaminasi dari penyakit. Dari peranan tersebut manusia sudah memelihara lingkungan agar tetap hidup sehat. Kebersihan itu sifatnya meluas dalam berbagai aspek, diantaranya: aspek biologis yang erat kaitannya pada kesehatan dan lain sebagainya; aspek geografis yang erat kaitanya pada kebersihan dalam pemetaan tempat dalam tatanan suatu wilayah. Aspek geologis erat kaitanya pada ketelitian dalam penggunaan sumber daya alam. Aspek hydrologis yang erat kaitannya pada kebersihan air untuk menjaga dari kontaminasi polusi seperti dari bahan kimia yg berbahaya bagi kehidupan masyarakat.{"\n"}
        d. Keseimbangan alam (tawazun li al-alam), dengan menjaga apa yang telah Allah ciptakan keseimbangan dalam penciptaanya, maka dalam pemanfaatannya pun tidak akan berlebihan. Sebagai khalifah, manusia diberi wewenang berupa kebebasan memilih dan menentukan sehingga kebebasannya melahirkan kreatifitas yang dinamis. Kebebasan manusia sebagai khalifah bertumpu pada landasan tauhid seperti yg sudah dijelaskan sebelumnya sehingga kebebasan yang dimiliki tidak menjadikan manusia bertindak sewenang-wenang, seperti memanfaatkan lingkungan hanya untuk kepentingan individual.
        </Text>

        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
        {"\n"}
        D. Prinsip-Prinsip Islam dalam Pengelolaan Alam Semesta 
        </Text>
        <Text>
        Al-Toumy al-Syaibani menjelaskan prinsip-prinsip dasar pandangan Islam tentang alam semesta yang disederhanakannya menjadi 10 prinsip dasar sebagai berikut
        </Text>
        <Text>
        1.  Yang dimaksud dengan alam adalah segala sesuatu selain Allah, meliputi cakrawala, langit, bumi, bintang, manusia, hewan, tumbuhan, benda dan sifat benda, makhluk benda dan bukan benda.{"\n"}
        2.  Alam Wujud ini terdiri dari unsur ruh dan materi sekaligus. Prinsip ini mengandung pengertian keseimbangan antara ruh dan materi.{"\n"}
        3.  Alam semesta dan seluruh isinya senantiasa berubah sesuai kehendak Allah Swt.{"\n"}
        4.  Alam berkembang dan bergerak terus sesuai dengan hukum yang telah digariskan oleh penciptanya.{"\n"}
        5.  Setiap unsur dan bagian dari alam ini senantiasa terikat pada hukum umum yang tertentu dan berdasarkan pada hubungan yang teratur yang menunjukkan kesatuan koordinasi dan pengaturan.{"\n"}
        6.  Pada alam semesta berlaku hukum umum sebab akibat.{"\n"}
        7.  Alam semesta diciptakan bagi kesejahteraan dan kemajuan manusia.{"\n"}
        8.  Alam bersifat baharu yang kemudian mengalami perubahan sampai pada akhirnya menemui saat kehancurannya. Setiap unsur alam memiliki titik permulaan dan titik akhir penghabisan.{"\n"}
        9.  Penerimaan akan hakikat baharunya alam, berarti menerima Wujud Pencipta alam. Dalam hal ini, berarti alam diciptakan dari tidak ada oleh Allah Swt dan memeliharanya.{"\n"}
        10. Allah Swt adalah Sang Pencipta yang memiliki ciri-ciri keunggulan sebagai Tuhan yang mutlak dan bersifat kesempurnaan.
        </Text>
        <Text>
        Prinsip dasar hubungan manusia dengan alam atau makhluk lain di sekitarnya pada dasarnya ialah pertama, kewajiban menggali dan mengelola alam dengan segala kekayaannya.
        </Text>
        <Text>
        Allah berfirman dalam Al-Quran surat Hud ayat 61
        </Text>
        <Dalil ayat='Hud ayat 61' soundFile={require('./dalil-sound/test.mp3')} />
        <Text>
        “…Dia (Allah) telah menciptakan kamu dari bumi (tanah) dan memerintahkan kalian memakmurkannya (mengurusnya)”.
        </Text>
        <Text>
        kedua, manusia sebagai pengelola alam tidak diperkenankan merusak lingkungan yang terkandung dalam surat al-A’raf ayat 56
        </Text>
        <Dalil ayat='Al-A’raf ayat 56' soundFile={require('./dalil-sound/test.mp3')} />
        <Text>
        “Janganlah kamu berbuat kerusakan di muka bumi sesudah (Allah) memperbaikinya”.
        </Text>
        <Text>
        Agama memberi arahan pasti terkait hukum motivasi kepada manusia untuk mewujudkan hubungannya dengan alam sebaik-baiknya. Ada Empat prinsip yang harus kita tanamkan pada diri kita masing-masing agar alam tetap terus terjaga dan lestari :
        </Text>
        <Text>
        1.	 Sikap Hormat terhadap Alam{"\n"}
        Di dalam al-Qur’an surat al-Anbiya 107 :{"\n"}
        <Dalil ayat='Al-Anbiya ayat 107' soundFile={require('./dalil-sound/test.mp3')} />{"\n"}
        “Dan tiadalah kami mengutus kamu, melainkan untuk (menjadi) rahmat bagi semesta alam”.
        </Text>
        <Text>
        2. 	Prinsip Tanggung Jawab{"\n"}
        Tanggung jawab moral terhadap alam karena manusia diciptakan sebagai khalifah (penanggung jawab) di muka bumi dan secara ontologis manusia adalah bagian integral dari alam.
        </Text>
        <Text>
        3.	Prinsip Solidaritas{"\n"}
	    Prinsip solidaritas muncul dari kenyataan bahwa manusia adalah bagian integral dari alam semesta
        </Text>
        <Text>
        4.	 Prinsip Kasih Sayang dan Kepedulian terhadap Alam{"\n"}
        Kasih sayang dan kepedulian ini juga muncul dari kenyataan bahwa semua makhluk hidup mempunyai hak untuk dilindungi, dipelihara, tidak disakiti, dan dirawat.
        </Text>

        </ScrollView>
      </View>
    );
  }
}
