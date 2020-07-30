import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter11 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (

      <View style={{flex: 1 }}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
        Ilmu Pengetahuan dan Teknologi Dalam Islam
        </Text>
        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        A. Konsep Ilmu dalam Islam 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        1.	Pengertian Ilmu
        </Text>
        <Text>
        Secara etimologi, kata ilmu merupakan kata serapan bahasa Arab ‘ilm yang berarti pengetahuan atau kepandaian (Hadi, 2014, hlm. 314). Kata ‘ilm sendiri merupakan derivasi dari kata kerja ‘alima - ya’lamu artinya mengetahui (‘Abd Al-Hamid ‘Umar, 2008, hlm. 1541). 
        Secara terminologi, ilmu mempunyai kandungan dan medan pengertian yang jauh lebih luas dan mendalam yang terkait erat dengan prinsip-prinsip tauhid dan totalitas ajaran Islam.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        2.	Ilmu sebagai Perantara Kebaikan
        </Text>
        <Text>
        Hadits tersebut memberi syarat bagi segala upaya perbaikan kulitas hidup manusia, ditentukan oleh pengetahuan (ilmu) yang sesuai dengan konsep Islam. Jika syarat ini dilanggar atau tidak dipenuhi, artinya yang diajarkan kepada mahasiswa jenis pengetahuan yang betentangan dengan konsep Islam, maka yang terjadi adalah bukan kebaikan (khairan), tetapi justru keburukan (syarran) dalam arti luas
        “Telah berkata Abu Ja’far al-Baqir: Bahwa telah membaca Rasulullah saw ayat:” waltakun minkum ummatun yad’una ilal khair” (hendaklah ada diantara kalian segolongan umat yang menyeru kepada kebaikan (al-khair), lalu beliau bersabda (melanjutkan): Kebaikan (al-khair) adalah mengikuti (kesetiaan) kepada al-Qur’an dan sunnahku” (HR. Ibnu Murdawiyah).
        Berdasarkan hadits tersebut, Rasulullah saw memberikan batasan kepada kita tentang kebaikan yakni, segala sesuatu yang bersesuaian dengan al-Qur’an dan Assunnah.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        3.	Ilmu adalah Cahaya dari Allah SWT
        </Text>
        <Text>
        Allah adalah Al-Kholiq (Pencipta) segala yang ada (wujud), Dia Maha Tahu terhadap segala ciptaan-Nya dan Diri-Nya sendiri (al-‘Alim). Dia memancarkan Nuur (cahaya) berupa pengetahuan (al-‘ilmu) kepada hambanya, maka adalah Pemberi Cahaya langit dan bumi (nuuru al-samawat). 
        Sebagaimana firman-Nya dalam QS. An-Nuur [24] :35
        </Text>
        <Dalil ayat='۞ اَللّٰهُ نُوْرُ السَّمٰوٰتِ وَالْاَرْضِۗ مَثَلُ نُوْرِهٖ كَمِشْكٰوةٍ فِيْهَا مِصْبَاحٌۗ اَلْمِصْبَاحُ فِيْ زُجَاجَةٍۗ اَلزُّجَاجَةُ كَاَنَّهَا كَوْكَبٌ دُرِّيٌّ يُّوْقَدُ مِنْ شَجَرَةٍ مُّبٰرَكَةٍ زَيْتُوْنَةٍ لَّا شَرْقِيَّةٍ وَّلَا غَرْبِيَّةٍۙ يَّكَادُ زَيْتُهَا يُضِيْۤءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌۗ نُوْرٌ عَلٰى نُوْرٍۗ يَهْدِى اللّٰهُ لِنُوْرِهٖ مَنْ يَّشَاۤءُۗ وَيَضْرِبُ اللّٰهُ الْاَمْثَالَ لِلنَّاسِۗ وَاللّٰهُ بِكُلِّ شَيْءٍ عَلِيْمٌ ۙ' soundFile={require('./../../assets/audios/An-Nur-35.mp3')} />
        <Text>
        Artinya: "Allah (pemberi) cahaya (kepada) langit dan bumi. Perumpamaan cahaya-Nya, seperti sebuah lubang yang tidak tembus, yang di dalamnya ada pelita besar. Pelita itu di dalam tabung kaca (dan) tabung kaca itu bagaikan bintang yang berkilauan, yang dinyalakan dengan minyak dari pohon yang diberkahi, (yaitu) pohon zaitun yang tumbuh tidak di timur dan tidak pula di barat, yang minyaknya (saja) hampir-hampir menerangi, walaupun tidak disentuh api. Cahaya di atas cahaya (berlapis-lapis), Allah memberi petunjuk kepada cahaya-Nya bagi orang yang Dia kehendaki, dan Allah membuat perumpamaan-perumpamaan bagi manusia. Dan Allah Maha Mengetahui segala sesuatu."
        </Text>
        <Text>
        Allah memancarkan cahaya (‘ilmu)-Nya kepada manusia melalui wahyu-wahyu-Nya dan ilham-ilham-Nya. Al-Qur’an adalah wahyu Allah yang paling sempurna, maka oleh karenanya Al-Qur’an disebut an-Nuur (nama lain al-Qur’an). 
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        4.	Klasifikasi Ilmu dalam Islam
        </Text>
        <Text>
        Al-Attas (1989, hlm. 78-89) mengklasifikasikan ilmu menjadi dua. Pertama ilmu yang merupakan pemberian Allah SWT sebagai anugerah. Ilmu jenis ini dikenal dengan istilah ilmu laduni. Ilmu ini diperoleh manusia tanpa melalui upaya. Al-Quran sebagaimana tercantum dalam Q.S Al-Kahfi [18]: 65 sudah menyinggung tentang ilmu laduni ini.
        </Text>
        <Dalil ayat='فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَآ اٰتَيْنٰهُ رَحْمَةً مِّنْ عِنْدِنَا وَعَلَّمْنٰهُ مِنْ لَّدُنَّا عِلْمًا' soundFile={require('./../../assets/audios/Al-Kahfi-65.mp3')} />
        <Text>
        Artinya: “Lalu mereka bertemu dengan seorang hamba di antara hamba-hamba Kami, yang telah Kami berikan kepadanya rahmat dari sisi Kami, dan yang telah Kami ajarkan kepadanya ilmu dari sisi Kami.”
        </Text>
        <Text>
        Kedua, ilmu yang diperoleh karena usaha manusia atau dikenal dengan istilah ilmu kasbi. Ilmu ini diperoleh manusia melalui pengamatan, perenungan, maupun eksperimen. Terkait ilmu kasbi ini, Al-Quran sendiri telah banyak menyinggungnya dalam Al-Quran. Bahkan ayat yang menyinggung tentang ilmu kasbi menurut Shihab (2001, hlm. 434) jauh lebih banyak dibandingkan dengan ayat yang menyinggung ilmu laduni. 
        </Text>

        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        B. Adab Berilmu dalam Islam
        </Text>
        <Text>
        Proses pembelajaran dalam Islam bukan sekedar kegiatan kognitif melainkan juga transfer nilai dan karakter. Oleh karena itu, Islam sangat memperhatikan akhlak dalam menuntut maupun mengamalkan ilmu. Usaimin (2003, hlm. 21-33) menyampaikan ada etika yang perlu diperhatikan dalam menuntut ilmu.{"\n"}
        Didasari niat ikhlas karena Allah SWT. Niat mencari termasuk mengamalkan ilmu harus didasarkan niat ibadah karena Allah. Adapun niat lain yang bersifat keduniaan selayaknya tidak jadi dasar utama dalam mencari ilmu. 
        Menuntut ilmu dalam rangka memberantas kebodohan. Motif menuntut ilmu seharusnya disorong niat untuk memberantas kebodohan baik untuk dirinya sendiri maupun orang lain karena pada dasarnya manusia lahir dalam keadaan tidak tahu apa-apa.
        Menuntut ilmu dalam koridor agama dan membela syariat.
        Berlapang dada dan tegar menghadapi berbagai hambatan
        Mengamalkan ilmu yang diperoleh sebab menuntut ilmu bukan sekedar untuk memperoleh pemahaman tetapi juga untuk beramal saleh.
        Menuntut ilmu dalam rangka mengajak manusia untuk menyembah Allah.
        Menuntut ilmu mampu membentuk pribadi yang bijaksana, yaitu bertindak sesuai dengan kondisi orang yang dihadapi, termasuk mengajarkan ilmu yang didapat kepada orang lain secara bijaksana.
        Menuntut ilmu dengan sabar sebab menuntut ilmu memerlukan pengorbanan yang tidak sedikit
        Selalu menghormati guru atau mentor dalam proses pembelajaran
        Selalu berpegang teguh pada Al-Quran dan Sunah Rasulullah SAW.
        </Text>


        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        C. Tugas dan Tanggung Jawab Umat Islam dalam Pengembangan IPTEK
        </Text>
        <Text>
        Al-Quran memberikan perhatian khusus pada kata ilmu. Kata ilmu dengan berbagai bentuknya diulang sebanyak 854 kali dalam Al-Quran (Asyarie dan Yusuf, 2006, h. 76-77). Pengulangan kata ilmu tersebut tentu harus kita renungkan sebagai isyarat perlunya manusia memerhatikan perkembangan ilmu dan pengetahuan.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        1.  Ilmu sebagai perangkat kekhalifahan
        </Text>
        <Text>
        Ketika Allah SWT akan mengangkat manusia sebagai khalifah di muka bumi, malaikat meragukan kompetensi manusia dalam mengelola bumi. Namun, Allah dengan tegas tetap memilih manusia untuk menjadi khalifah, untuk itu Allah kemudian mengajarkan nama-nama benda (ilmu) kepada Nabi Adam sebagai manusia pertama sekaligus khalifah di muka bumi
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        2.	Manusia memiliki potensi untuk berkembang.
        </Text>
        <Text>
        Ketika manusia dilahirkan ke dunia, manusia lahir dalam keadaan tidak tahu apa-apa. Meskipun demikian, Allah melengkapi penciptaan manusia dengan beberapa indra untuk mengembangkan diri mereka. Hal ini dapat kita renungi dalam
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        3.	Al-Quran memerintahkan manusia meneliti
        </Text>
        <Text>
        Dalam Al-Quran terdapat beberapa ayat yang menginformasikan tentang kebesaran Allah dan memerintahkan manusia untuk mengamatinya
        </Text>
        <Text style={{fontWeight: 'bold'}}>
        4.	Al-Quran mendorong manusia untuk menjadi pribadi cerdas.
        </Text>
        <Text>
        Dalam Al-Quran terdapat beberapa ayat yang menggunakan istilah-istilah kecendekiaan seperti ulul albab, ulul ilmi, ulin nuha, dan ulul absar. Ayat-ayat tersebut mengisyaratkan agar kita menjadi orang yang cerdas, dapat mengambil pelajaran dan hikmah, serta berperan aktif dalam mentafakuri kebesaran Allah.
        </Text>

        <Text style={{fontWeight : 'bold', fontSize : 15}}>
        {"\n"}
        D. Kontribusi Ilmuwan Muslim dalam Pengebangan IPTEK
        </Text>
        <Text>
        Selain berkontribusi pada tataran filosofis, dalam ranah praktis dunia Islam sudah memberikan sumbangsih nyata dalam pengembangan ilmu pengetahuan dan teknologi. Beberapa ilmuan yang lahir dari peradaban Islam yang berkontribusi dalam pengembangan dunia IPTEK di antaranya antara lain Al-Kindi (194-260 H/809-873 M), Al-Farabi (w 390 H/961 M), Ibnu Bajah (w 523 H), Ibnu Thufail (w 581 H), dan Ibnu Sina (370-428 H/980-1037 M). 
        Dua orang tokoh matematika muslim yang terkenal adalah Umar Al-Farukhan (arsitek Kota Baghdad) dan Al-Khawarizmi (penemu angka nol (0)). 
        Tokoh astronomi atau ilmuwan islam dalam bidang ini adalah Al-Fazari, Al-Battani, Abu Wafak dan Al-Farghoni.
        </Text>
        </ScrollView>
      </View>
    );
  }
}
