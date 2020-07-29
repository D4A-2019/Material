import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter7 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (

      <View style={{flex: 1 }}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
        Konsep Manusia Dalam Islam
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        A. Konsep Diri Manusia 
        </Text>
        <Text>
        Manusia adalah makhluk Allah SWT, makhluk artinya yang diciptakan, sedang penciptanya disebut khaliq. 
        Makhluk Allah yang lainnya, yaitu, malaikat, iblis, jin, sorga, neraka, bumi, langit, binatang, tumbuh-tumbuhan dan lain-lainnya. 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Pandangan Ilmu Pengetahuan tentang Manusia
        </Text>
        <Text>
        Para ahli pikir berbeda pendapat dalam mendefinisikan manusia. 
        Perbedaan pendapat tersebut timbul disebabkan oleh kenyataan kekuatan dan peran multidimensional yang dimainkan oleh manusia ditambah dengan kecenderungan para ahli pikir yang hanya meninjau dari sisi yang menjadi titik pusat perhatiannya dan mengabaikan sisi yang lainnya{"\n"}
        Para penganut teori psikoanalisis menyebut manusia sebagai homo volens (manusia berkeinginan).
        Para penganut teori behaviorisme menyebut manusia sebagai homo mechanicus (manusia mesin). 
        Sementara itu para pakar penganut teori kognitif menyebut manusia sebagai homo sapiens (manusia berpikir). 
        Sedangkan menurut penganut teori humanisme, manusia adalah homo ludens (manusia bermain).
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Manusia Menurut Agama Islam
        </Text>
        <Text>
        Allah SWT, Sang Pencipta manusia, telah menurunkan Kitab Suci Al-Qur’an, yang di antara ayat-ayat-Nya adalah gambaran konkrit tentang manusia. Penyebutan nama manusia dalam al-Qur’an tidak hanya satu macam.{"\n"}
        
        Dari aspek historis penciptaannya, manusia disebut dengan Bani Adam. Penyebutan seperti ini menjelaskan bahwa manusia adalah anak turun Nabi Adam As. Semua makhluk yang bukan anak turun Nabi Adam As tidak disebut sebagai manusia. Salah satu ayat yang menyebutkan istilah Bani Adam ini adalah Surat Al-A’raf ayat 31:
        </Text>
        <Dalil ayat='۞ يٰبَنِيْٓ اٰدَمَ خُذُوْا زِيْنَتَكُمْ عِنْدَ كُلِّ مَسْجِدٍ وَّكُلُوْا وَاشْرَبُوْا وَلَا تُسْرِفُوْاۚ اِنَّهٗ لَا يُحِبُّ الْمُسْرِفِيْنَ ࣖ - 'soundFile={require('./../../assets/audios/Al-Araf-31.mp3')} />
        <Text>
        Artinya: "Hai anak Adam, pakailah pakaianmu yang indah di setiap (memasuki) mesjid, makan dan minumlah, dan janganlah berlebih-lebihan. Sesungguhnya Allah tidak menyukai orang-orang yang berlebih-lebihan."
        </Text>

        <Text>
        Dari aspek biologis kemanusiaannya, manusia disebut dengan basyar yang mencerminkan sifat-sifat fisika-kimia-biologisnya. Penggunaan kata basyar ini karena kata tersebut seakar dengan kata basyirah yang artinya kulit, sesuatu yang menunjukkan unsur biologis manusia. Kata basyar misalnya terdapat dalam surat al-Mukminun ayat 33:
        </Text>
        <Dalil ayat='وَقَالَ الْمَلَاُ مِنْ قَوْمِهِ الَّذِيْنَ كَفَرُوْا وَكَذَّبُوْا بِلِقَاۤءِ الْاٰخِرَةِ وَاَتْرَفْنٰهُمْ فِى الْحَيٰوةِ الدُّنْيَاۙ مَا هٰذَآ اِلَّا بَشَرٌ مِّثْلُكُمْۙ يَأْكُلُ مِمَّا تَأْكُلُوْنَ مِنْهُ وَيَشْرَبُ مِمَّا تَشْرَبُوْنَ' soundFile={require('./../../assets/audios/Al-Muminun-33.mp3')} />
        <Text>
        Artinya: "Dan berkatalah pemuka-pemuka yang kafir di antara kaumnya dan yang mendustakan akan menemui hari akhirat (kelak) dan yang telah Kami mewahkan mereka dalam kehidupan di dunia: "(Orang) ini tidak lain hanyalah manusia seperti kamu, dia makan dari apa yang kamu makan, dan meminum dari apa yang kamu minum."
        </Text>

        <Text>
        Dari aspek kecerdasannya, manusia disebut dengan insan yakni makhluk terbaik yang diberi akal sehingga mampu menyerap ilmu pengetahuan. Seb agaimana firman Allah Swt dalam surat al-Rahman ayat 3 – 4: 
        </Text>
        <Dalil ayat='خَلَقَ الْاِنْسَانَۙ - ٣ عَلَّمَهُ الْبَيَانَ - ٤' soundFile={require('./../../assets/audios/An-Rahman-(3-4).mp3')} />
        <Text>
        Artinya: "Dia menciptakan manusia. Mengajarnya pandai berbicara."{"\n"}
        </Text>
        
        <Text>
        Dari aspek sosiologisnya, manusia disebut dengan an-nas yang menunjukkan sifatnya yang berkelompok dengan sesamanya. Manusia tidak dapat hidup sempurna tanpa bantuan dan keterlibatan orang lain dalam kehidupannya. Penyebutan an-nas salah satunya terdapat dalam Surat al-Hujurat ayat 13:
        </Text>
        <Dalil ayat='يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا ۚ اِنَّ اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْ ۗاِنَّ اللّٰهَ عَلِيْمٌ خَبِيْرٌ' soundFile={require('./../../assets/audios/Al-Hujurat-13.mp3')} />
        <Text>
        Artinya: "Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal. Sesungguhnya orang yang paling mulia di antara kamu di sisi Allah ialah orang yang paling takwa di antara kamu. Sesungguhnya Allah Maha Mengetahui lagi Maha Mengenal."{"\n"}
        </Text>
        
        <Text>
        Dari aspek posisinya, manusia disebut dengan abdun (hamba) yang menunjukkan kedudukannya sebagai hamba Allah yang harus tunduk dan patuh kepada-Nya. Seperti firman Allah Swt dalam surat Saba’ ayat 9:
        </Text>
        <Dalil ayat='اَفَلَمْ يَرَوْا اِلٰى مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْ مِّنَ السَّمَاۤءِ وَالْاَرْضِۗ اِنْ نَّشَأْ نَخْسِفْ بِهِمُ الْاَرْضَ اَوْ نُسْقِطْ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاۤءِۗ اِنَّ فِيْ ذٰلِكَ لَاٰيَةً لِّكُلِّ عَبْدٍ مُّنِيْبٍ ࣖ' soundFile={require('./../../assets/audios/Saba-9.mp3')} />
        <Text>
        Artinya: "Maka apakah mereka tidak melihat langit dan bumi yang ada di hadapan dan di belakang mereka? Jika Kami menghendaki, niscaya Kami benamkan mereka di bumi atau Kami jatuhkan kepada mereka gumpalan dari langit. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda (kekuasaan Tuhan) bagi setiap hamba yang kembali (kepada-Nya)."
        </Text>
        


        <Text style={{fontWeight: 'bold'}}>
        {"\n"}
        Asal Kejadian Manusia
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Menurut Ilmu Pengetahuan
        </Text>
        <Text>
        Kehadiran manusia yang pertama tidak terlepas dari asal-usul kehidupan di alam semesta ini. Asal-usul manusia menurut ilmu pengetahuan tidak bisa dipisahkan dari teori tantang spesies baru yang berasal dari spesies lain yang telah ada sebelumnya melalui proses evolusi Menurut Islam
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Proses Penciptaan Manusia Pertama
        </Text>
        <Text>
        Dalam pandangan Islam, Adam adalah manusia pertama yang diciptakan oleh Allah Swt di muka bumi ini dengan segala karakter kemanusiaannya. Proses penciptaan Adam sebagai manusia pertama dapat kita lihat dalam surat al-Hijr ayat 28 – 29:{"\n"}
        </Text>
        <Dalil ayat='وَاِذْ قَالَ رَبُّكَ لِلْمَلٰۤىِٕكَةِ اِنِّيْ خَالِقٌۢ بَشَرًا مِّنْ صَلْصَالٍ مِّنْ حَمَاٍ مَّسْنُوْنٍۚ - ٢٨فَاِذَا سَوَّيْتُهٗ وَنَفَخْتُ فِيْهِ مِنْ رُّوْحِيْ فَقَعُوْا لَهٗ سٰجِدِيْنَ - ٢٩' soundFile={require('./../../assets/audios/Al-Hijr-(28-29).mp3')} />
        <Text>
        Artinya: "Dan (ingatlah), ketika Tuhanmu berfirman kepada para malaikat, “Sungguh, Aku akan menciptakan seorang manusia dari tanah liat kering dari lumpur hitam yang diberi bentuk. Maka apabila Aku telah menyempurnakan (kejadian)nya, dan Aku telah meniupkan roh (ciptaan)-Ku ke dalamnya, maka tunduklah kamu kepadanya dengan bersujud.”"
        </Text>

        <Text>
        Dari ayat tersebut dapat diambil pengertian bahwa proses penciptaan Adam tersebut melalui tiga tahapan, yakni:{"\n"}
        a) Bahan awal manusia adalah tanah{"\n"}
        b) Bahan tersebut disempurnakan{"\n"}
        c) Setelah proses penyempurnaannya selesai, ditiupkan kepadanya ruh Ilahi.
        </Text>
        <Text>
        Sedangkan tentang proses penciptaan Hawa, sebagian besar ulama  mendasarkannya pada surat An-Nisa’ ayat 1:
        </Text>
        <Dalil ayat='يٰٓاَيُّهَا النَّاسُ اتَّقُوْا رَبَّكُمُ الَّذِيْ خَلَقَكُمْ مِّنْ نَّفْسٍ وَّاحِدَةٍ وَّخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيْرًا وَّنِسَاۤءً ۚ وَاتَّقُوا اللّٰهَ الَّذِيْ تَسَاۤءَلُوْنَ بِهٖ وَالْاَرْحَامَ ۗ اِنَّ اللّٰهَ كَانَ عَلَيْكُمْ رَقِيْبًا' soundFile={require('./../../assets/audios/An-Nisa-1.mp3')} />
        <Text>
        Artinya: "Hai sekalian manusia, bertakwalah kepada Tuhan-mu yang telah menciptakan kamu dari seorang diri, dan dari padanya Allah menciptakan isterinya; dan dari pada keduanya Allah memperkembang biakkan laki-laki dan perempuan yang banyak. Dan bertakwalah kepada Allah yang dengan (mempergunakan) nama-Nya kamu saling meminta satu sama lain, dan (peliharalah) hubungan silaturrahim. Sesungguhnya Allah selalu menjaga dan mengawasi kamu."
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Proses Reproduksi Manusia
        </Text>
        <Text>
        Proses reproduksi manusia berbeda dengan proses penciptaan Adam dan Hawa. Proses reproduksi manusia terjadi melalui percampuran bahan dari laki-laki dan perempuan.
        Tahap pertama manusia dibuat dari saripati tanah melalui makanan yang dimakan oleh laki-laki dan perempuan. Sebagian dari inti zat yang dimakan tersebut menjadi bahan sperma (air mani) dan ovum yang merupakan bahan awal terciptanya manusia. Sperma dan ovum, yang disebut nuthfah, itu tersimpan dalam tempat yang kokoh. Hal ini dijelaskan oleh Allah dalam QS al-Mukminun ayat 12 - 13:
        {"\n"}
        </Text>
        <Dalil ayat='وَلَقَدْ خَلَقْنَا الْاِنْسَانَ مِنْ سُلٰلَةٍ مِّنْ طِيْنٍ ۚ - ١٢ثُمَّ جَعَلْنٰهُ نُطْفَةً فِيْ قَرَارٍ مَّكِيْنٍ ۖ - ١٣' soundFile={require('./../../assets/audios/Al-Muminun-(12-13).mp3')} /> 
        <Text>
        Artinya: "Dan sungguh, Kami telah menciptakan manusia dari saripati (berasal) dari tanah. Kemudian Kami menjadikannya air mani (yang disimpan) dalam tempat yang kokoh (rahim)."
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        {"\n"}
        Unsur-unsur Manusia
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Ruh
        </Text>
        <Text>
        Ruh adalah getaran ilahiah, yaitu getaran sinyal ketuhanan sebagaimana rahmat, nikmat, dan hikmah yang kesemuanya sering terasakan sentuhannya, tetapi sukar dipahami hakekatnya. 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Nafs
        </Text>
        <Text>
        Kata nafs di dalam al-Qur’an mempunyai aneka makna, sekali diartikan sebagai totalitas manusia. Di tempat lain ia menunjuk kepada apa yang terdapat dalam diri manusia yang menghasilkan tingkah laku.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Fitrah
        </Text>
        <Text>
        Dalam kamus al-Munjid, fitrah berarti sifat yang ada pada awal penciptaannya, sifat alami manusia, agama, atau sunnah.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Qalb
        </Text>
        <Text>
        Kata qalb terambil dari akar kata yang bermakna merubah, pindah atau membalik karena seringkali qalb itu berbolak balik, kadang senang dan kadang sedih, kadang setuju dan kadang menolak.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        ‘Aql (Akal)
        </Text>
        <Text>
        Secara bahasa, kata ‘aql berarti menahan atau mengikat, sehingga ‘aqil pada zaman pra Islam digunakan untuk menyebut orang yang dapat menahan amarahnya dan oleh karenanya dapat mengambil sikap dan tindakan yang berisi kebijaksanaan dalam mengatasi masalah yang dihadapinya.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Al-Hawa (Nafsu)
        </Text>
        <Text>
        Al-Hawa, yang dalam Bahasa Indonesia sering disebut hawa nafsu, adalah suatu kekuatan yang mendorong manusia untuk mencapai keinginannya. Dorongan-dorongan ini sering disebut dengan dorongan primitif, karena sifatnya yang bebas tanpa mengenal baik dan buruk.
        </Text>

        <Text style={{fontWeight: 'bold'}}>
        {"\n"}
        Karakteristik Manusia
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Aspek Kreasi
        </Text>
        <Text>
        Manusia mempunyai morfologi (bentuk tubuh), struktur dan fungsi anggota tubuh yang sempurna dubandingkan dengan makhluk Allah yang lainnya. Meskipun mungkin juga banyak kesamaannya, tetapi tangan manusia misalnya lebih fungsional daripada tangan simpanse,
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Aspek Ilmu
        </Text>
        <Text>
        Manusia adalah makhluk yang dianugerahi kemampuan bepikir sehingga ia mampu menyusun konsep-konsep, teori-teori dan rumus-rumus, mencipta, mengembangkan dan mengemukakan gagasan serta melaksanakannya. Hal ini tidak dimiliki oleh makhluk lain
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Aspek Kehendak
        </Text>
        <Text>
        Manusia memiliki kehendak yang menyebabkannya bisa mengadakan pilihan-pilihan dalam hidupnya. Makhluk lain hidup dalam suatu pola yang telah baku dan tak akan pernah berubah
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Aspek Pengarahan Akhlak
        </Text>
        <Text>
        Manusia adalah makhluk yang dapat dibentuk akhlaknya. Ada manusia yang sebelumnya baik-baik tetapi karena pengaruh lingkungan tertentu dapat menjadi seorang penjahat. 
        </Text>

        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        B. Tugas dan Peran Manusia sebagai Hamba dan Khalifah Allah 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Manusia sebagai Hamba Allah
        </Text>
        <Text>
        Misi penciptaan manusia adalah untuk penyembahan kepada sang Penciptanya, Allah Swt. Manusia adalah ‘abdullah, hamba Allah. Seorang hamba berarti orang yang taat dan patuh kepada perintah Allah Swt
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Manusia sebagai Khalifah Allah
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        definisi
        </Text>
        <Text>
        Kata khalifah berasal dari kata khalafa yang berarti ‘di belakang”. Dari sini, kata khalifah seringkali diartikan sebagai pengganti, karena yang menggantikan selalu berada atau datang di belakang, sesudah yang digantikannya
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        Tugas Manusia sebagai Khalifah Allah
        </Text>
        <Text>
        Kedudukan manusia sebagai khalifah Allah Swt merupakan kelangsungan dan akibat dari proses penyembahan yang sempurna manusia terhadap Allah Swt. 
        </Text>

        <Text style={{fontWeight: 'bold'}}>
        {"\n"}
        Karakter Positif dalam Pengembangan Diri Manusia
        </Text>
        <Text>
        Karakter menurut Kamus Besar Bahasa Indonesia merupakan sifat-sifat kejiwaan, akhlak atau budi pekerti yang membedakan seseorang dari yang lain. Dengan demikian karakter adalah nilai-nilai yang unik-baik yang terpateri dalam diri dan terejawantahkan dalam perilaku.Karakter secara koheren memancar dari hasil olah pikir, olah hati, olah rasa dan karsa, serta olahraga seseorang atau sekelompok orang.{"\n"}
        Adapun karakter-karakter unggul dan utama yang harus dimiliki oleh manusia dalam menjalankan tugas kekhalifahan adalah sebagai berikut:
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        1.	Tabah dan Pantang Menyerah
        </Text>
        <Text>
        Dalam Kamus Besar Bahasa Indonesia, kata tabah mempunyai arti (1) tahan menghadapi cobaan, tidak lekas marah, tidak lekas putus asa, tidak lekas patah hati. (2) tenang, tidak tergesa-gesa, dan tidak terburu nafsu. 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        2.	Konsisten (Istiqamah)
        </Text>
        <Text>
        Kata istiqamah dalam bahasa Arab berarti jalan lurus yang berada di tengah, tidak melenceng ke kanan atau ke kiri, lawan katanya adalah i’wijaj (garis bengkok). Istiqamah juga bisa diartikan sebagai sikap moderat atau wajar dalam banyak hal termasuk dalam persoalan agama. Istiqamah adalah bersikap moderat, tidak ekstrim ke kanan atau ke kiri.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        3.	Integritas
        </Text>
        <Text>
        Salah satu karakter utama seseorang adalah integritas. Seseorang dikatakan berintegritas kalau apa yang dikatakan sesuai dengan apa yang diperbuat. Orang yang berintegritas akan selalu konsisten dalam memegang prinsip kejujuran di mana saja, kapan saja dan dengan siapa saja
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        4.	Profesional
        </Text>
        <Text>
        Kamus Besar bahasa Indonesia, profesionalisme adalah mutu, kualitas dan tindak tanduk yang merupakan ciri suatu profesi atau orang yang professional. 
        </Text>


        </ScrollView>
      </View>
    );
  }
}
