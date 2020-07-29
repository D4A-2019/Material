import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1 }}>
            <ScrollView>
            <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
            Sunnah: Basic Mental Profesional
            </Text>

            <Text style={{fontWeight : 'bold', fontSize : 15}}>
            A. Makna, Fungsi dan Kedudukan Sunnah
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Pengertian Sunnah
            </Text>
            <Text>
            Sunnah adalah tata cara yang telah mentradisi dan berkesinambungan, baik yang baik dan buruk. Riwayat Muslim mengatakan: Barangsiapa di dalam Islam memperkenal kan perilaku baik (Sunnah Hasanah) maka ia akan memperoleh pahala, sebaliknya siapa yang memperkenalkan perilaku buruk (Sunnah Sayyiah) akan memperoleh dosa. 
            Dilihat dari sisi terminologis, ulama-ulama memiliki perbedaan pendapat.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Menurut Muhammad ‘Ajjaj al Khatih
            </Text>
            <Text>
            Sunnah adalah setiap yang ditinggalkan dan diterima dari Rasulullah SAW berupa perkataan, perbuatab, ketetapan, akhlak, atau kehidupan baik sebelum dan sesudah Nabi Muhammad menjadi rasul.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Menurut Ulama Ushul Fiqh
            </Text>
            <Text>
            Sunnah merupakan setiap yang datang dari rasulullah saw selain al-quran baik berupa perkataan, perbuatan, maupun ketetapan yang dapat dijadikan sebagai dalil dalam menetapkan hukum syariat.
            </Text>

            <Text style={{fontWeight : 'bold'}}>
            Fungsi dan Kedudukan Sunnah
            </Text>
            <Text>
            As-Sunnah merupakan penafsir al-quran dan referensi juga petunjuk kedua setelah al-quran. Fungsi sunnah adalah sebagai sumber hukum kedua setelah Al-Quran. Dalam menjalankan fungsinya, sunnah berkaitan dengan al-quran dalam tiga kondisi yang dijelaskan oleh Muslim Nurdin:
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Menguatkan Hukum yang Telah Ditetapkan dalam Al-Quran
            </Text>
            <Text>
            Hadits digunakan sebagai penguat dan penegas hukum yang diambil dari al-quran. Seperti saat sebuah hadits riwayat Bukhari Muslim tentang dosa-dosa besar yang merupakan penguat dari al-quran surat Luqman ayat 13.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Menjelaskan Hukum yang Ada Dalam Al-Quran
            </Text>
            <Text>
            Dalam memperjelas hukum yang ada di al-quran sunnah melakukannya dengan tiga cara yaitu memberikan rincian hukum (seperti memperjelas hukum shalat pada surat An-Nisa ayat 103), membatasi kemutlakan hukum (seperti memperjelas batasan kemutlakan hukum tentang warisan), dan memberikan pengecualian (seperti penjelasan tentang pengecualian kondisi yang memperbolehkan kita memakan bangkai ikan dan belalang).
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Menambah Hukum Baru dalam Al-Quran
            </Text>
            <Text>
            Sunnah akan menambah hukum baru yang belum tercantum dalam al-quran.
            </Text>

            <Text style={{fontWeight : 'bold', fontSize : 15}}>
            B. Sunnah sebagai paradigma keunggulan
            </Text>
            <Text>
            Muhammad Said Ramadan menyatakan bahwa kehidupan Rasulullah SAW dapat memberikan contoh baik agar menjadi umat muslim yang mulia. Sifat-sifat Rasulullah yang dapat membuat kita menjadi manusia unggul di antaranya adalah:
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Shidiq
            </Text>
            <Text>
            Rasulullah merupakan manusia yang selalu jujur baik dalam perkataan dan perilakunya. Kejujuran tersebut disampaikan saat berinteraksi dan bergaul dengan masyarakat terutama dalam perdagangan dilakukan dengan cara menyampaikan kondisi nyata dari barang dagangannya. Dalam  berdagang, Rasulullah menjauhi perilaku ghahar. Ghahar memiliki arti sangat luas. Beberapa contoh ghahar adalah seperti: penjual tidak mampu menyerahkan barang jualannya pada saat akad, penjual menjual barang penjual lainnya saat barangnya masih ada di penjual sebelumnya, penjual tidak memberikan kepastian tentang jenis benda yang dijual atau jenis benda yang dijual, penjual tidak memberikan kepastian tentang sifat tertentu dari benda yang dijual, penjual tidak tegas dalam memberikan harga, penjual tidak tegas dalam menentukan waktu penyerahan barang, penjual tidak memberikan kejelasan transaksi, barang dengan kualitas berbeda dijual dengan harga yang sama.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Amanah
            </Text>
            <Text>
            Maksud dari amanah adalah dapat dipercayai perkataan dan perbuatannya.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Tabligh
            </Text>
            <Text>
            Nabi Muhammad selalu menyampaikan apa yang ia terima dari Allah kepada umatnya tanpa menyembunyikan apapun. Lawan dari sifat ini adalah kitman (yang berarti menyembunyikan).
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Fathonah
            </Text>
            <Text>
            Nabi Muhammad juga memiliki sifat fathonah atau cerdas. Sifat ini membuat nabi selalu berpikir jernih sehingga dapat mengatasi masalah yang dihadapi. Kecerdasan ini juga dapat dilihat dari cara Rasulullah dalam menjelaskan firman-firman Allah pada kaumnya.
            </Text>

            <Text style={{fontWeight : 'bold', fontSize : 15}}>
            C. Sunnah disesuaikan konteks budaya/’urf
            </Text>
            <Text>
            Kebijakan yang dibuat oleh Rasulullah haruslah dipahami secara tepat dan sempurna. Namun, karena zaman yang terus berganti maka teknik pengamalannya pun akan disesuaikan.
            </Text>
            <Text>
            Saat Rasulullah wafat dan penyebaran islam makin meluas, muncul masalah-masalah baru. Permasalahan ini memiliki sisi positif karena melahirkan berbagai kreativitas dan usaha untuk merekonstruksi tradisi-tradisi yang ada sebelumnya. Karena hal ini, maka Sunnah Nabi akan menjadi dinamis.
            </Text>
            <Text>
            Menurut Fazlur Rahman, sunnah Nabi merupakan ajaran Islam pertama yang dipahami dan diaplikasikan secara beragam. Contoh sunnah yang perlu dipahami secara kontekstual adalah ketentuan tentang mahram bagi perempuan yang akan melakukan perjalanan, hubungan antara umat beragama,serta hukuman bagi orang murtad. Pemahaman bagi sunnah yang mensyariatkan wanita untuk pergi bersama mahramnya memiliki latar belakang yang kuat karena situasi saat itu belum aman. Namun, saat kondisi aman dan tidak ada ancaman di perjalanan maka larangan wanita untuk bepergian seorang diri tidaklah berlaku lagi.
            </Text>
            <Text>
            Pemahaman makna, fungsi, dan kedudukan Sunnah sejatinya memberikan gambaran yang utuh pada kita bahwa misi kerasulan adalah sebuah misi yang dapat dilihat pada dua dimensi yaitu dimensi transenden dan dimensi sosial.
            </Text>
            <Text>
            Pada dimensi transenden, kita dapat melihat gambaran bagaimana sosok Rasulullah menjadi contoh untuk hal-hal yang terkait dengan ibadah. Gambaran tersebut memperlihatkan bagaimana Rasulullah begitu semangat dalam melakukan ibadah.
            </Text>
            <Text>
            Dimensi sosial dari sunnah adalah tentang bagaimana Rasulullah menjadi orang yang sangat humanis sehingga diterima oleh lingkungan sekitar bahkan jauh sebelum risalah kenabian turun. Dimensi ini menggambarkan sifat-sifat baik yang dimiliki Rasulullah. 
            </Text>
            <Text>
            Langkah dalam meneladani Rasulullah dalam segala altivitas kita di antaranya adalah dengan cara senantiasa bertaubat pada Allah SWT, menjaga amanah yang diberikan Allah kepada kita selaku manusia, memelihara kejujuran dalam keseharian.
            </Text>

            </ScrollView>
            </View> 
        );
    }
}