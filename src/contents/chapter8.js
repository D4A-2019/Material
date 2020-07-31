import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter8 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        data: {
            prinsip: ['Keadilan','Keseimbangan',"Toleransi"],
            perilaku: ['Menjaga kebersamaan dan tali silaturahmi','Bersikap rendah hati terhadap sesama','Mengakui dan menghormati setiap perbedaan yang ada di sekitar kita','Menjaga perasaan orang lain agar tidak tersakiti atas apa yang kita ucapkan dan lakukan','Memaafkan orang yang melakukan kesalahan kepada kita'],
      }
    }
  }

  render() {
    
    let prinipList = this.state.data.prinsip.map((dataList, index) => {
        return(
          <Text key={index}> - {dataList} </Text>
        )
    })
    let perilakuList = this.state.data.perilaku.map((dataList, index) => {
        return(
          <Text key={index}> - {dataList} </Text>
        )
    })
    
    return (
      <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10}}>
      <Text style={{fontWeight: 'bold', color: '#007f5f', fontSize: 20, textAlign: 'center', margin:10}}>
        Relasi Antar Manusia
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        A. Ukhuwah Islamiyah 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Ukhuwah Ubudiyah
        </Text>
        <Text>
        Ukhuwah ubudiyah yaitu bahwa seluruh makhluk adalah bersaudara dalam arti memiliki persamaan.{"\n"}
        Sebagaimana Firman Allah:
        </Text>
        <Dalil ayat='وَمَا مِنْ دَاۤبَّةٍ فِى الْاَرْضِ وَلَا طٰۤىِٕرٍ يَّطِيْرُ بِجَنَاحَيْهِ اِلَّآ اُمَمٌ اَمْثَالُكُمْ ۗمَا فَرَّطْنَا فِى الْكِتٰبِ مِنْ شَيْءٍ ثُمَّ اِلٰى رَبِّهِمْ يُحْشَرُوْنَ' soundFile={require('./../../assets/audios/Al-Anam-38.mp3')} />
        <Text>
        Artinya: Dan tidaklah binatang-binatang yang ada di muka bumi, dan tidak pula burung-burung yang terbang dengan kedua
        sayapnya, kecuali umat seperti kamu juga Tiadalah Kami alpakan
        sesuatupun dalam Al-Kitab, kemudian kepada Tuhanlah mereka
        dihimpunkan“(QS al An’am(6):38).
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Ukhuwah Insaniyah
        </Text>
        <Text>
        Ukhuwah fi al-insaniyah, dalam arti seluruh umat manusia adalah
        bersaudara, karena mereka semua bersumber dari ayah dan ibu yang
        satu, yakni Adam dan Hawa, meskipun terdapat perbedaan-perbedaan
        yang banyak di antara mereka.{"\n"}
        Sebagaimana Firman Allah:
        </Text>
        <Dalil ayat='يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا ۚ اِنَّ اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْ ۗاِنَّ اللّٰهَ عَلِيْمٌ خَبِيْرٌ' soundFile={require('./../../assets/audios/Al-Hujurat-13.mp3')} />
        <Text>
        Artinya: "Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. 
        Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa. Sungguh, Allah Maha Mengetahui, Mahateliti."
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Ukhuwah Wathaniyah
        </Text>
        <Text>
        Ukhuwah fi al-wathaniyah wa al-nasab. Yakni
        persaudaraan yang timbul karena adanya persamaan
        keturunan dan kebangsaan. Sebagaimana persaudaraan
        antara kaum Ad dan kaum Hud.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Ukhuwah Din al Islam
        </Text>
        <Text>
        Ukhuwah fi din al-Islam, yaitu persaudaraan antar sesama muslim yang
        diikat oleh persamaan agama. Istilah ini terdapat dalam QS al-Ahzab
        ayat 5, yakni ikhwanukum fi ad-din (saudaramu seagama).
        </Text>
        <Dalil ayat='اُدْعُوْهُمْ لِاٰبَاۤىِٕهِمْ هُوَ اَقْسَطُ عِنْدَ اللّٰهِ ۚ فَاِنْ لَّمْ تَعْلَمُوْٓا اٰبَاۤءَهُمْ فَاِخْوَانُكُمْ فِى الدِّيْنِ وَمَوَالِيْكُمْ ۗوَلَيْسَ عَلَيْكُمْ جُنَاحٌ فِيْمَآ اَخْطَأْتُمْ بِهٖ وَلٰكِنْ مَّا تَعَمَّدَتْ قُلُوْبُكُمْ ۗوَكَانَ اللّٰهُ غَفُوْرًا رَّحِيْمًا' soundFile={require('./../../assets/audios/Al-Ahzab-5.mp3')} />
        <Text>
        Artinya: Panggillah mereka (anak angkat itu) dengan (memakai) nama
        bapak-bapak mereka; itulah yang adil di sisi Allah, dan jika kamu tidak
        mengetahui bapak mereka, maka (panggillah mereka sebagai)
        saudara-saudaramu seagama dan maula-maulamu. Dan tidak ada dosa
        atasmu jika kamu khilaf tentang itu, tetapi (yang ada dosanya) apa yang
        disengaja oleh hatimu. Allah Maha Pengampun, Maha Penyayang (QS
        Al-Ahzab (33):5).
        </Text>

        <Text style={{fontWeight: 'bold'}}>
        {"\n"}
        Prinsip Hidup Harmonis 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Manusia Diciptakan Berbeda
        </Text>
        <Text>
        Perbedaan ini sudah menjadi ketetapan Allah swt (sunnatullah).
        Al-Quran dengan gamblang menjelaskan adanya perbedaan dan
        keragaman dalam masyarakat. Hal ini sesuai dengan firman Allah swt
        dalam surat Al Hujarat ayat 13.
        </Text>  
        <Text style={{fontWeight: 'bold'}}>
        Keniscayaan Perbedaan Keyakinan
        </Text>
        <Text>
        Secara sosiologis, pengakuan terhadap adanya keragaman keyakinan
        ini merupakan pengakuan toleran yang paling sederhana, namun
        pengakuan secara sosiologis ini tidak berarti mengandung pengakuan
        terhadap kebenaran teologis dari agama lain.{"\n"}
        Allah swt berfirman dalam surat Al-Kafirun (109) ayat 1-6 yang
        berbunyi:
        </Text>
        <Dalil ayat='قُلْ يٰٓاَيُّهَا الْكٰفِرُوْنَۙ - ١لَآ اَعْبُدُ مَا تَعْبُدُوْنَۙ - ٢وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۚ - ٣وَلَآ اَنَا۠ عَابِدٌ مَّا عَبَدْتُّمْۙ - ٤وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۗ - ٥لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِ ࣖ - ٦' soundFile={require('./../../assets/audios/Al-Kafirun-(1-6).mp3')} />
        <Text>
        Artinya: ”Katakanlah (Muhammad) : "Hai orang-orang kafir, Aku
        tidak akan menyembah apa yang kamu sembah. Dan kamu bukan
        penyembah apa yang aku sembah. Dan aku tidak pernah menjadi
        penyembah apa yang kamu sembah, Dan kamu tidak pernah (pula)
        menjadi penyembah apa yang aku sembah. Untukmu agamamu, dan
        untukku agamaku."
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Tidak ada Paksaan dalam Islam
        </Text>
        <Text>
        Al-Quran dan Sunnah menegaskan bahwa keberagamaan harus
        didasarkan pada kepatuhan yang tulus kepada Allah. Karena itu
        pula, tidak ada paksaan dalam menganut agama.{"\n"}
        Sebagaimana Allah swtberfirman dalam surat Al-Baqarah (2)
        ayat 256 yang berbunyi:
        </Text>
        <Dalil ayat='لَآ اِكْرَاهَ فِى الدِّيْنِۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَا ۗوَاللّٰهُ سَمِيْعٌ عَلِيْمٌ' soundFile={require('./../../assets/audios/Al-Baqarah-256.mp3')} />
        <Text>
        Artinya: “Tidak ada paksaan dalam (menganut) agama (Islam);
        sesungguhnya telah jelas (perbedaan) antara jalan yang benar
        dengan jalan yang sesat. Karena itu barangsiapa yang ingkar
        kepada Thaghut dan beriman kepada Allah, maka sesungguhnya
        ia telah berpegang (teguh) kepada tali yang snagat kuat yang
        tidak akan putus. Dan Allah Maha Mendengar lagi Maha
        Mengetahui.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Meneladani Rasulullah
        </Text>
        <Text>
        Rasulullah saw saw diutus untuk menyempurnakan
        akhlak manusia. Kita diharuskan mengikuti
        keteladanannya. Perilaku Rasulullah saw adalah perilaku
        akhlak. Akhlak merupakan norma dan etika pergaulan
        berlandaskan Islam. Ia tidak hanya mengatur etika
        pergaulan antar sesama manusia, tetapi juga dengan
        alam lingkungan dan Penciptanya.
        </Text>

        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        B. Kebersamaan Dalam Pluralitas Agama
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Tidak Bertoleransi dalam Hal Akidah
        </Text>
        <Text>
        Dalam hubungan bermasyarakat, Al-Qur’an sangat
        menganjurkan agar umat Islam menjalin hubungan tidak
        hanya dengan sesama muslim melainkan juga dengan
        warga masyarakat yang non muslim. Namun toleransi
        tersebut bukan dalam hal akidah, melainkan dalam hal
        yang sifatnya sosial kemasyarakatan. Berkaitan dengan
        hal ini Allah swt berfirman dalam surat al-Kafirun ayat
        1-6.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Tidak Menghina simbol-simbol kesucian agama lain
        </Text>
        <Text>
        Berkaitan dengan hal ini Allah swt secara tegas
        berfirman dalam surat al-An’am (6) ayat 108.
        </Text>
        <Dalil ayat='وَلَا تَسُبُّوا الَّذِيْنَ يَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ فَيَسُبُّوا اللّٰهَ عَدْوًاۢ بِغَيْرِ عِلْمٍۗ كَذٰلِكَ زَيَّنَّا لِكُلِّ اُمَّةٍ عَمَلَهُمْۖ ثُمَّ اِلٰى رَبِّهِمْ مَّرْجِعُهُمْ فَيُنَبِّئُهُمْ بِمَا كَانُوْا يَعْمَلُوْنَ' soundFile={require('./../../assets/audios/Al-Anam-54.mp3')} />
        <Text>
        Artinya: "Ikutilah apa yang telah diwahyukan Tuhanmu kepadamu (Muhammad); tidak ada tuhan selain Dia; dan berpalinglah dari orang-orang musyrik."
        </Text>
        <Text>
        Ayat tersebut secara tegas ingin mengajarkan kepada
        umat Islam untuk memelihara kesucian agamanya
        dengan cara tidak menghina simbol kesucian agama lain
        serta menciptakan rasa aman dan hubungan yang
        harmonis antar umat beragama.
        </Text>

        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        C. Moderasi Beragama
        </Text>
        <Text>
        Kata moderasi berasal dari Bahasa Latin moderâtio, yang
        berarti ke­sedang­an (tidak kelebihan dan tidak kekurangan).
        Kata itu juga berarti penguasaan diri (dari sikap sangat
        kelebihan dan kekurangan). Kamus Besar Bahasa Indonesia
        (KBBI) menyediakan dua pengertian kata moderasi, yakni: 1)
        pengurangan kekerasan, dan 2) penghindaran keekstreman. Jika
        dikatakan, “orang itu bersikap moderat”, kalimat itu berarti
        bahwa orang itu bersikap wajar, biasa-biasa saja dan tidak
        ekstrem.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Islam Agama Moderat dan Toleran
        </Text>
        <Text>
        Secara umum ajaran Islam bercirikan moderat (washat) dalam
        aqidah, ibadah, akhlaq, dan muamalah.ciri ini disebut dalam
        Al-Qur’an sebagai as shiratal mustaqim (jalan lurus/kebenaran)
        yang berbeda dengan jalan mereka yang dimurkai (al maghduub
        alaihim) dan yang sesat (adh-dhaalin) karena mereka melakukan
        banyak penyimpangan. Islam berada di tengah di antara sikap yang
        berlebihan itu, sehingga dalam al-Quran diberi sifat sebagai
        ummatan washatan sebagaimana firman Allah swt dalam QS
        al-Baqarah ayat 143
        </Text>
        <Dalil ayat='وَكَذٰلِكَ جَعَلْنٰكُمْ اُمَّةً وَّسَطًا لِّتَكُوْنُوْا شُهَدَاۤءَ عَلَى النَّاسِ وَيَكُوْنَ الرَّسُوْلُ عَلَيْكُمْ شَهِيْدًا ۗ وَمَا جَعَلْنَا الْقِبْلَةَ الَّتِيْ كُنْتَ عَلَيْهَآ اِلَّا لِنَعْلَمَ مَنْ يَّتَّبِعُ الرَّسُوْلَ مِمَّنْ يَّنْقَلِبُ عَلٰى عَقِبَيْهِۗ وَاِنْ كَانَتْ لَكَبِيْرَةً اِلَّا عَلَى الَّذِيْنَ هَدَى اللّٰهُ ۗوَمَا كَانَ اللّٰهُ لِيُضِيْعَ اِيْمَانَكُمْ ۗ اِنَّ اللّٰهَ بِالنَّاسِ لَرَءُوْفٌ رَّحِيْمٌ' soundFile={require('./../../assets/audios/Al-Baqarah-143.mp3')} />
        <Text>
        Artinya: "Dan demikian pula Kami telah menjadikan kamu (umat Islam) ”umat pertengahan” agar kamu menjadi saksi atas (perbuatan) manusia dan agar Rasul (Muhammad) menjadi saksi atas (perbuatan) kamu. Kami tidak menjadikan kiblat yang (dahulu) kamu (berkiblat) kepadanya melainkan agar Kami mengetahui siapa yang mengikuti Rasul dan siapa yang berbalik ke belakang. Sungguh, (pemindahan kiblat) itu sangat berat, kecuali bagi orang yang telah diberi petunjuk oleh Allah. Dan Allah tidak akan menyia-nyiakan imanmu. Sungguh, Allah Maha Pengasih, Maha Penyayang kepada manusia."
        </Text>
        <Text>
        Prinsip Moderasi
        </Text>
        {prinipList}
        <Text>
        Perilaku Yang Mencerminkan Kerukunan
        </Text>
        {perilakuList}


        </ScrollView>
      </View>
    );
  }
}
