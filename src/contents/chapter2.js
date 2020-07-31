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

      <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10}}>
      <Text style={{fontWeight: 'bold', color: '#007f5f', fontSize: 20, textAlign: 'center', margin:10}}>
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
        	{'\n'}Pengertian Agama
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
        	{'\n'}Unsur Agama
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
        	{'\n'}Jenis Agama
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
        	{'\n'}Penyebaran Agama
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
        <Text>
            1. Agama, berislam, dan beriman {'\n'}
        </Text> 
                <Dalil ayat='وَإِذْ أَخَذَ رَبُّكَ مِنۢ بَنِىٓ ءَادَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰٓ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا۟ بَلَىٰ ۛ شَهِدْنَآ ۛ أَن تَقُولُوا۟ يَوْمَ ٱلْقِيَٰمَةِ إِنَّا كُنَّا عَنْ هَٰذَا غَٰفِلِينَ' soundFile={require('./../../assets/audios/Al-Araf-172.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan (ingatlah), ketika Tuhanmu mengeluarkan keturunan anak-anak Adam dari sulbi mereka dan Allah mengambil kesaksian terhadap jiwa mereka (seraya berfirman): "Bukankah Aku ini Tuhanmu?" Mereka menjawab: "Betul (Engkau Tuhan kami), kami menjadi saksi". (Kami lakukan yang demikian itu) agar di hari kiamat kamu tidak mengatakan: "Sesungguhnya kami (bani Adam) adalah orang-orang yang lengah terhadap ini (keesaan Tuhan)",
                    (QS Al-A'raf: 172) {'\n'}
                </Text>
                <Dalil ayat='فأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا ۚ فِطْرَتَ ٱللَّهِ ٱلَّتِى فَطَرَ ٱلنَّاسَ عَلَيْهَا ۚ لَا تَبْدِيلَ لِخَلْقِ ٱللَّهِ ۚ ذَٰلِكَ ٱلدِّينُ ٱلْقَيِّمُ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ' soundFile={require('./../../assets/audios/Ar-Rum-30.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Maka hadapkanlah wajahmu dengan lurus kepada agama Allah; (tetaplah atas) fitrah Allah yang telah menciptakan manusia menurut fitrah itu. Tidak ada peubahan pada fitrah Allah. (Itulah) agama yang lurus; tetapi kebanyakan manusia tidak mengetahui, "
                    (QS Ar-Rum: 30) {'\n'}
                </Text>   
         <Text>
            2. Kasih sayang  {'\n'}
         </Text>
                <Dalil ayat='قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَاللَّهُ غَفُورٌ رَحِيمٌ'soundFile={require('./../../assets/audios/Ali-Imran-31.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Katakanlah: "Jika kamu (benar-benar) mencintai Allah, ikutilah aku, niscaya Allah mengasihi dan mengampuni dosa-dosamu". Allah Maha Pengampun lagi Maha Penyayang. "
                    (QS Ali Imran: 31) {'\n'}
                </Text>
                <Dalil ayat='۞ وَٱعْبُدُوا۟ ٱللَّهَ وَلَا تُشْرِكُوا۟ بِهِۦ شَيْـًٔا ۖ وَبِٱلْوَٰلِدَيْنِ إِحْسَٰنًا وَبِذِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينِ وَٱلْجَارِ ذِى ٱلْقُرْبَىٰ وَٱلْجَارِ ٱلْجُنُبِ وَٱلصَّاحِبِ بِٱلْجَنۢبِ وَٱبْنِ ٱلسَّبِيلِ وَمَا مَلَكَتْ أَيْمَٰنُكُمْ ۗ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ مُخْتَالًا فَخُورًا'soundFile={require('./../../assets/audios/An-Nisa-36.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Sembahlah Allah dan janganlah kamu mempersekutukan-Nya dengan sesuatupun. Dan berbuat baiklah kepada dua orang ibu-bapa, karib-kerabat, anak-anak yatim, orang-orang miskin, tetangga yang dekat dan tetangga yang jauh, dan teman sejawat, ibnu sabil dan hamba sahayamu. Sesungguhnya Allah tidak menyukai orang-orang yang sombong dan membangga-banggakan diri,"
                    (QS An Nisa: 36) {'\n'}
                </Text>
                <Dalil ayat=' وَقَضَى رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا إِمَّا يَبْلُغَنَّ عِنْدَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُلْ لَهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُلْ لَهُمَا قَوْلًا كَرِيمًا  (٢٣)  وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُلْ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا  (٢٤)'soundFile={require('./../../assets/audios/Al-Isra-(23-24).mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan Tuhanmu telah memerintahkan supaya kamu jangan menyembah selain Dia dan hendaklah kamu berbuat baik pada ibu bapakmu dengan sebaik-baiknya. Jika salah seorang di antara keduanya atau kedua-duanya sampai berumur lanjut dalam pemeliharaanmu, maka sekali-kali janganlah kamu mengatakan kepada keduanya perkataan "ah" dan janganlah kamu membentak mereka dan ucapkanlah kepada mereka perkataan yang mulia."
                    (QS Al Isra: 23-24) {'\n'}
                </Text>
                <Dalil ayat=' وَلَقَدْ آتَيْنَا لُقْمَانَ الْحِكْمَةَ أَنِ اشْكُرْلِله وَمَنْ يَشْكُرْفَإنَّمَايَشْكُرُلِنَفْسِهِ وَمَنْ كَفَرَ فَإِنَّ اللهَ غَنِيٌّ حَمِيْدٌ  (١٢) وَإِذْ قَالَ لُقْمَانُ لاِبْنِهِ وَهُوَيَعِظُهُ يَابُنَيَّ لاَتُشْرِكْ بِاللهِ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيْمٌ  (١٣)  وَوَصَّيْنَاالإِنْسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَي وَهْنٍ وَفِصَالُهُ فِي عَامَيْنِ أَنِ اشْكُرْلِي وَلِوَالِدَيْكَ إِلَيَّ المَصِيْرُ (١٥)  وَإِنْ جَا هَدَكَ عَلَى أَنْ تُشْرِكَ بِي مَالَيسَ لَكَ بِهِ عِلْمٌ فَلاَ تُطِعْهُمَا وَصَاحِبهُممَافِي الدُّنيَامَعرُوفًاوَاتَّبِعْ سَبِيلَ مَن أَنَبَ إِلَيَّ مَرْجِعُكُم فَأُنَبِّئُكُم بِمَا كُنتُم تَعْمَلُونَ  (١٤)'soundFile={require('./../../assets/audios/Luqman-(12-15).mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan sesungguhnya telah Kami berikan hikmah kepada Lukman, yaitu: "Bersyukurlah kepada Allah. Dan barang siapa yang bersyukur (kepada Allah), maka sesungguhnya ia bersyukur untuk dirinya sendiri; dan barang siapa yang tidak bersyukur, maka sesungguhnya Allah Maha Kaya lagi Maha Terpuji". Dan (ingatlah) ketika Lukman berkata kepada anaknya, di waktu ia memberi pelajaran kepadanya: "Hai anakku, janganlah kamu mempersekutukan (Allah) sesungguhnya mempersekutukan (Allah) adalah benar-benar kelaliman yang besar".
                                     Dan Kami perintahkan kepada manusia (berbuat baik) kepada dua orang ibu-bapaknya; ibunya telah mengandungnya dalam keadaan lemah yang bertambah-tambah, dan menyapihnya dalam dua tahun. Bersyukurlah kepada-Ku dan kepada dua orang ibu bapakmu, hanya kepada-Kulah kembalimu.
                                     Dan jika keduanya memaksa kamu untuk mempersekutukan Aku dengan sesuatu yang tidak ada pengetahuanmu tentang itu, maka jangan lah engkau mematuhi keduanya, dan pergaulilah keduanya di dunia dengan baik, dan ikutilah jalan orang yang kembali kepada-Ku, kemudian hanya kepada-Kulah kembali kamu, maka Ku-beritakan kepada kamu apa yang telah kamu kerjakan."
                    (QS Luqman: 12-15) {'\n'}
                </Text>       
        <Text>           
            3. Keindahan {'\n'}
        </Text>
                <Dalil ayat='زُيِّنَ لِلنَّاسِ حُبُّ ٱلشَّهَوَٰتِ مِنَ ٱلنِّسَآءِ وَٱلْبَنِينَ وَٱلْقَنَٰطِيرِ ٱلْمُقَنطَرَةِ مِنَ ٱلذَّهَبِ وَٱلْفِضَّةِ وَٱلْخَيْلِ ٱلْمُسَوَّمَةِ وَٱلْأَنْعَٰمِ وَٱلْحَرْثِ ۗ ذَٰلِكَ مَتَٰعُ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۖ وَٱللَّهُ عِندَهُۥ حُسْنُ ٱلْمَـَٔابِ'soundFile={require('./../../assets/audios/Ali-Imran-14.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dijadikan indah pada (pandangan) manusia kecintaan kepada apa-apa yang diingini, yaitu: wanita-wanita, anak-anak, harta yang banyak dari jenis emas, perak, kuda pilihan, binatang-binatang ternak dan sawah ladang. Itulah kesenangan hidup di dunia, dan di sisi Allah-lah tempat kembali yang baik (surga)."
                    (QS Al Imran: 14) {'\n'}
                </Text>
        <Text>
            4. Harga diri  {'\n'}
        </Text>
                <Dalil ayat=' لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ  (٥) ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ  (٤)'soundFile={require('./../../assets/audios/At-Tin-(4-5).mp3')}/>
                <Text>
                   {'\n'} Artinya : "Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya. Kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya (neraka), kecuali orang-orang yang beriman dan mengerjakan amal saleh"
                    (QS At Tin: 4-5) {'\n'}
                </Text>
                <Dalil ayat='تَيَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ (٢٧) ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً  (٢٨)  فَادْخُلِي  (٢٩)فِي عِبَادِي  وَادْخُلِي جَنَّتِي  (٣٠)'soundFile={require('./../../assets/audios/Al-Fajr-(27-30).mp3')}/>
                <Text>
                   {'\n'} Artinya : "Hai jiwa yang tenang. Kembalilah kepada Tuhanmu dengan hati yang puas lagi diridhai-Nya. Maka masuklah ke dalam jama’ah hamba-hamba-Ku, masuklah ke dalam syurga-Ku."
                    (QS Al Fajr: 27-30) {'\n'}
                </Text>
                <Dalil ayat=' وَنَفْسٍ وَمَا سَوَّاهَا (٧)  فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا (٨)  قَدْ أَفْلَحَ مَنْ زَكَّاهَا (٩)  وَقَدْ خَابَ مَنْ دَسَّاهَا (١٠) كَذَّبَتْ ثَمُودُ بِطَغْوَىٰهَآ  (١١)'soundFile={require('./../../assets/audios/Asy-Syams-(7-11).mp3')}/>
                <Text>
                   {'\n'} Artinya : "dan jiwa serta penyempurnaannya (ciptaannya), maka Allah mengilhamkan kepada jiwa itu (jalan) kefasikan dan ketakwaannya, sesungguhnya beruntunglah orang yang mensucikan jiwa itu, dan sesungguhnya merugilah orang yang mengotorinya. (Kaum) Tsamud telah mendustakan (rasulnya) karena mereka melampaui batas (zhalim),"
                    (QS Ash Syams: 7-11) {'\n'}
                </Text>
        <Text>
            5. Kedamaian  {'\n'}
        </Text>
                <Dalil ayat='وَٱللَّهُ يَدْعُوٓا۟ إِلَىٰ دَارِ ٱلسَّلَٰمِ وَيَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍ مُّسْتَقِيمٍ'soundFile={require('./../../assets/audios/Yunus-25.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Allah menyeru (manusia) ke Darussalam (surga), dan menunjuki orang yang dikehendaki-Nya kepada jalan yang lurus (Islam)."
                    (QS Yunus: 25) {'\n'}
                </Text>
        <Text>
            6. Kebenaran  {'\n'}
        </Text>
                <Dalil ayat='ٱلْحَقُّ مِن رَّبِّكَ ۖ فَلَا تَكُونَنَّ مِنَ ٱلْمُمْتَرِينَ'soundFile={require('./../../assets/audios/Al-Baqarah-147.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Kebenaran itu adalah dari Tuhanmu, sebab itu jangan sekali-kali kamu termasuk orang-orang yang ragu."
                    (QS Al Baqarah: 147) {'\n'}
                </Text>
                <Dalil ayat='وَقُلْ جَآءَ ٱلْحَقُّ وَزَهَقَ ٱلْبَٰطِلُ ۚ إِنَّ ٱلْبَٰطِلَ كَانَ زَهُوقًا'soundFile={require('./../../assets/audios/Al-Isra-81.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan katakanlah: "Yang benar telah datang dan yang batil telah lenyap". Sesungguhnya yang batil itu adalah sesuatu yang pasti lenyap."
                    (QS Al Isra: 81) {'\n'}
                </Text>
        <Text>
            7. Aktualisasi diri {'\n'}
        </Text>
                <Dalil ayat='ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ'soundFile={require('./../../assets/audios/Al-Mulk-2.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Yang menjadikan mati dan hidup, supaya Dia menguji kamu, siapa di antara kamu yang lebih baik amalnya. Dan Dia Maha Perkasa lagi Maha Pengampun,"
                    (QS Al Mulk: 2) {'\n'}
                </Text>
        <Text>
            8. Berkeluarga {'\n'}
        </Text>
                <Dalil ayat='وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ'soundFile={require('./../../assets/audios/Ar-Rum-21.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                    (QS Ar Rum: 21) {'\n'}
                </Text>
        <Text>
            9. Bermasyarakat {'\n'}
        </Text>
                <Dalil ayat='وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ'soundFile={require('./../../assets/audios/Ar-Rum-21.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                    (QS Ar Rum: 21) {'\n'}
                </Text>

        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        	Fungsi Agama
        </Text>	
        <Text>
        	{'\n'}Fungsi agama bagi kehidupan manusia dapat dilihat dari aspek personal dan sosial. Secara personal agama berfungsi untuk memenuhi kebutuhan individual seperti kebutuhan akan keselamatan, kebermaknaan hidup, dan lainnya. Sementara secara sosial agama berfungsi menyadarkan manusia tentang peran mereka dalam keluarga dan masyarakat
        </Text>
        <Text style={{fontWeight : 'bold'}}>
        	{'\n'}Fungsi Agama dari Aspek Personal
        </Text>
        	{aspekPersonalList}
        <Text style={{fontWeight : 'bold'}}>
        	{'\n'}Fungsi Agama dari Aspek Sosial
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
        </Text>
        <Dalil ayat='قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ  (١) لَآ أَعْبُدُ مَا تَعْبُدُونَ  (٢) وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ  (٣) وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ  (٤) وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ  (٥) لَكُمْ دِينُكُمْ وَلِىَ دِينِ  (٦)'soundFile={require('./../../assets/audios/Al-Kafirun-(1-6).mp3')}/>
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
			pemahaman agama Islam itu bisa muncul karena sebab-sebab sebagai berikut:{'\n'}
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