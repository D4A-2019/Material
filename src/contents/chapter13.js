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
			<View>
     		<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10}}>
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
       		<Text>
            a.  Kebajikan
          </Text>
            <Dalil ayat='۞ لَّيْسَ ٱلْبِرَّ أَن تُوَلُّوا۟ وُجُوهَكُمْ قِبَلَ ٱلْمَشْرِقِ وَٱلْمَغْرِبِ وَلَٰكِنَّ ٱلْبِرَّ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَٱلْمَلَٰٓئِكَةِ وَٱلْكِتَٰبِ وَٱلنَّبِيِّۦنَ وَءَاتَى ٱلْمَالَ عَلَىٰ حُبِّهِۦ ذَوِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينَ وَٱبْنَ ٱلسَّبِيلِ وَٱلسَّآئِلِينَ وَفِى ٱلرِّقَابِ وَأَقَامَ ٱلصَّلَوٰةَ وَءَاتَى ٱلزَّكَوٰةَ وَٱلْمُوفُونَ بِعَهْدِهِمْ إِذَا عَٰهَدُوا۟ ۖ وَٱلصَّٰبِرِينَ فِى ٱلْبَأْسَآءِ وَٱلضَّرَّآءِ وَحِينَ ٱلْبَأْسِ ۗ أُو۟لَٰٓئِكَ ٱلَّذِينَ صَدَقُوا۟ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُتَّقُونَ'soundFile={require('./../../assets/audios/Al-Baqarah-177.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Bukanlah menghadapkan wajahmu ke arah timur dan barat itu suatu kebajikan, akan tetapi sesungguhnya kebajikan itu ialah beriman kepada Allah, hari kemudian, malaikat-malaikat, kitab-kitab, nabi-nabi dan memberikan harta yang dicintainya kepada kerabatnya, anak-anak yatim, orang-orang miskin, musafir (yang memerlukan pertolongan) dan orang-orang yang meminta-minta; dan (memerdekakan) hamba sahaya, mendirikan shalat, dan menunaikan zakat; dan orang-orang yang menepati janjinya apabila ia berjanji, dan orang-orang yang sabar dalam kesempitan, penderitaan dan dalam peperangan. Mereka itulah orang-orang yang benar (imannya); dan mereka itulah orang-orang yang bertakwa."
                    (QS Al Baqarah: 177) {'\n'}
                </Text>
          <Text>
            b.  Beriman 
          </Text>
            <Dalil ayat='يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَٰكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَٰكُمْ شُعُوبًا وَقَبَآئِلَ لِتَعَارَفُوٓا۟ ۚ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ ۚ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٌ'soundFile={require('./../../assets/audios/Al-Hujurat-13.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal. Sesungguhnya orang yang paling mulia di antara kamu di sisi Allah ialah orang yang paling takwa di antara kamu. Sesungguhnya Allah Maha Mengetahui lagi Maha Mengenal."
                    (QS Al Hujurat: 13) {'\n'}
                </Text>
          <Text>
            c.  Tanggung jawab pribadi 
            </Text>
              <Dalil ayat='وَإِن كَذَّبُوكَ فَقُل لِّى عَمَلِى وَلَكُمْ عَمَلُكُمْ ۖ أَنتُم بَرِيٓـُٔونَ مِمَّآ أَعْمَلُ وَأَنَا۠ بَرِىٓءٌ مِّمَّا تَعْمَلُونَ'soundFile={require('./../../assets/audios/Yunus-41.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Jika mereka mendustakan kamu, maka katakanlah: "Bagiku pekerjaanku dan bagimu pekerjaanmu. Kamu berlepas diri terhadap apa yang aku kerjakan dan akupun berlepas diri terhadap apa yang kamu kerjakan"."
                    (QS Yunus: 41) {'\n'}
                </Text>
            <Text>
            d.  Kebenaran 
            </Text>
              <Dalil ayat='يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَكُونُوا۟ مَعَ ٱلصَّٰدِقِينَ'soundFile={require('./../../assets/audios/At-Taubah-119.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Hai orang-orang yang beriman bertakwalah kepada Allah, dan hendaklah kamu bersama orang-orang yang benar."
                    (QS At Taubah: 119) {'\n'}
                </Text>
            <Text>
            e.  Menjaga janji 
            </Text>
              <Dalil ayat='لَا يُؤَاخِذُكُمُ ٱللَّهُ بِٱللَّغْوِ فِىٓ أَيْمَٰنِكُمْ وَلَٰكِن يُؤَاخِذُكُم بِمَا عَقَّدتُّمُ ٱلْأَيْمَٰنَ ۖ فَكَفَّٰرَتُهُۥٓ إِطْعَامُ عَشَرَةِ مَسَٰكِينَ مِنْ أَوْسَطِ مَا تُطْعِمُونَ أَهْلِيكُمْ أَوْ كِسْوَتُهُمْ أَوْ تَحْرِيرُ رَقَبَةٍ ۖ فَمَن لَّمْ يَجِدْ فَصِيَامُ ثَلَٰثَةِ أَيَّامٍ ۚ ذَٰلِكَ كَفَّٰرَةُ أَيْمَٰنِكُمْ إِذَا حَلَفْتُمْ ۚ وَٱحْفَظُوٓا۟ أَيْمَٰنَكُمْ ۚ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمْ ءَايَٰتِهِۦ لَعَلَّكُمْ تَشْكُرُونَl'soundFile={require('./../../assets/audios/Al-Maidah-89.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Allah tidak menghukum kamu disebabkan sumpah-sumpahmu yang tidak dimaksud (untuk bersumpah), tetapi Dia menghukum kamu disebabkan sumpah-sumpah yang kamu sengaja, maka kaffarat (melanggar) sumpah itu, ialah memberi makan sepuluh orang miskin, yaitu dari makanan yang biasa kamu berikan kepada keluargamu, atau memberi pakaian kepada mereka atau memerdekakan seorang budak. Barang siapa tidak sanggup melakukan yang demikian, maka kaffaratnya puasa selama tiga hari. Yang demikian itu adalah kaffarat sumpah-sumpahmu bila kamu bersumpah (dan kamu langgar). Dan jagalah sumpahmu. Demikianlah Allah menerangkan kepadamu hukum-hukum-Nya agar kamu bersyukur (kepada-Nya)."
                    (QS Al-Maidah: 89) {'\n'}
                </Text>
            <Text>
            f.  Dapat dipercaya 
            </Text>
              <Dalil ayat='۞ وَإِن كُنتُمْ عَلَىٰ سَفَرٍ وَلَمْ تَجِدُوا۟ كَاتِبًا فَرِهَٰنٌ مَّقْبُوضَةٌ ۖ فَإِنْ أَمِنَ بَعْضُكُم بَعْضًا فَلْيُؤَدِّ ٱلَّذِى ٱؤْتُمِنَ أَمَٰنَتَهُۥ وَلْيَتَّقِ ٱللَّهَ رَبَّهُۥ ۗ وَلَا تَكْتُمُوا۟ ٱلشَّهَٰدَةَ ۚ وَمَن يَكْتُمْهَا فَإِنَّهُۥٓ ءَاثِمٌ قَلْبُهُۥ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ عَلِيمٌ'soundFile={require('./../../assets/audios/Al-Baqarah-283.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Jika kamu dalam perjalanan (dan bermu'amalah tidak secara tunai) sedang kamu tidak memperoleh seorang penulis, maka hendaklah ada barang tanggungan yang dipegang (oleh yang berpiutang). Akan tetapi jika sebagian kamu mempercayai sebagian yang lain, maka hendaklah yang dipercayai itu menunaikan amanatnya (hutangnya) dan hendaklah ia bertakwa kepada Allah Tuhannya; dan janganlah kamu (para saksi) menyembunyikan persaksian. Dan barangsiapa yang menyembunyikannya, maka sesungguhnya ia adalah orang yang berdosa hatinya; dan Allah Maha Mengetahui apa yang kamu kerjakan."
                    (QS Al-Baqarah: 283) {'\n'}
                </Text>
            <Text>
            g.  Adil dan tidak berat sebelah 
            </Text>
              <Dalil ayat='۞ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا۟ ٱلْأَمَٰنَٰتِ إِلَىٰٓ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ ٱلنَّاسِ أَن تَحْكُمُوا۟ بِٱلْعَدْلِ ۚ إِنَّ ٱللَّهَ نِعِمَّا يَعِظُكُم بِهِۦٓ ۗ إِنَّ ٱللَّهَ كَانَ سَمِيعًۢا بَصِيرًا'soundFile={require('./../../assets/audios/An-Nisa-58.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya, dan (menyuruh kamu) apabila menetapkan hukum di antara manusia supaya kamu menetapkan dengan adil. Sesungguhnya Allah memberi pengajaran yang sebaik-baiknya kepadamu. Sesungguhnya Allah adalah Maha Mendengar lagi Maha Melihat."
                    (QS At-Nisa: 58) {'\n'}
                </Text>
            <Text>
            h.  Sabar dan disiplin 
            </Text>
              <Dalil ayat='يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟ وَرَابِطُوا۟ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ'soundFile={require('./../../assets/audios/Ali-Imran-200.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Hai orang-orang yang beriman, bersabarlah kamu dan kuatkanlah kesabaranmu dan tetaplah bersiap siaga (di perbatasan negerimu) dan bertakwalah kepada Allah, supaya kamu beruntung."
                    (QS Ali-Imran: 200) {'\n'}
                </Text>
            <Text>
            i.  Keberanian 
            </Text>
              <Dalil ayat='وَلَمَّا رَءَا ٱلْمُؤْمِنُونَ ٱلْأَحْزَابَ قَالُوا۟ هَٰذَا مَا وَعَدَنَا ٱللَّهُ وَرَسُولُهُۥ وَصَدَقَ ٱللَّهُ وَرَسُولُهُۥ ۚ وَمَا زَادَهُمْ إِلَّآ إِيمَٰنًا وَتَسْلِيمًاl'soundFile={require('./../../assets/audios/Al-Ahzab-22.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan tatkala orang-orang mukmin melihat golongan-golongan yang bersekutu itu, mereka berkata: "Inilah yang dijanjikan Allah dan Rasul-Nya kepada kita". Dan benarlah Allah dan Rasul-Nya. Dan yang demikian itu tidaklah menambah kepada mereka kecuali iman dan ketundukan."
                    (QS Al-Ahzab: 22) {'\n'}
                </Text>
            <Text>
            j.  Toleran             </Text>
              <Dalil ayat='لَاۤ اِكۡرَاهَ فِى الدِّيۡنِ​ۙ  قَد تَّبَيَّنَ الرُّشۡدُ مِنَ الۡغَىِّ​ۚ فَمَنۡ يَّكۡفُرۡ بِالطَّاغُوۡتِ وَيُؤۡمِنۡۢ بِاللّٰهِ فَقَدِ اسۡتَمۡسَكَ بِالۡعُرۡوَةِ الۡوُثۡقٰى لَا انْفِصَامَ لَهَا​​ ؕ وَاللّٰهُ سَمِيۡعٌ عَلِيۡمٌ‏ (٢٥٦) اَللّٰهُ وَلِىُّ الَّذِيۡنَ اٰمَنُوۡا يُخۡرِجُهُمۡ مِّنَ الظُّلُمٰتِ اِلَى النُّوۡرِ​ؕ  وَالَّذِيۡنَ كَفَرُوۡۤا اَوۡلِيٰٓـُٔهُمُ الطَّاغُوۡتُۙ يُخۡرِجُوۡنَهُمۡ مِّنَ النُّوۡرِ اِلَى الظُّلُمٰتِ​ؕ اُولٰٓـئِكَ اَصۡحٰبُ النَّارِ​​ۚ هُمۡ فِيۡهَا خٰلِدُوۡنَ‏ (٢٥٧)'soundFile={require('./../../assets/audios/Al-Baqarah-(256-257).mp3')}/>
                <Text>
                   {'\n'} Artinya : "Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barangsiapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhul tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui. Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah syaitan, yang mengeluarkan mereka daripada cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya."
                    (QS Al-Baqarah: 256-257) {'\n'}
                </Text>
            <Text>
            k.  Mempertahankan dan membela diri 
            </Text>
              <Dalil ayat='أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُمْ ظُلِمُوا وَإِنَّ اللَّهَ عَلَى نَصْرِهِمْ لَقَدِيرٌ (٣٩) الَّذِينَ أُخْرِجُوا مِنْ دِيَارِهِمْ بِغَيْرِ حَقٍّ إِلا أَنْ يَقُولُوا رَبُّنَا اللَّهُ وَلَوْلا دَفْعُ اللَّهِ النَّاسَ بَعْضَهُمْ بِبَعْضٍ لَهُدِّمَتْ صَوَامِعُ وَبِيَعٌ وَصَلَوَاتٌ وَمَسَاجِدُ يُذْكَرُ فِيهَا اسْمُ اللَّهِ كَثِيرًا وَلَيَنْصُرَنَّ اللَّهُ مَنْ يَنْصُرُهُ إِنَّ اللَّهَ لَقَوِيٌّ عَزِيزٌ (٤٠)'soundFile={require('./../../assets/audios/Al-Hajj-(39-40).mp3')}/>
                <Text>
                   {'\n'} Artinya : "Telah diizikan (berperang) bagi orang-orang yang diperangi, karena sesungguhnya mereka telah dianiaya. Dan sesungguh­nya Allah benar-benar Mahakuasa menolong mereka itu, (yaitu) orang-orang yang telah diusir dari kampung halaman mereka tanpa alasan yang benar, kecuali karena mereka berkata, "Tuhan kami hanyalah Allah.” Dan sekiranya Allah tiada me­nolak (keganasan) sebagian manusia dengan sebagian yang lain, tentulah telah dirobohkan biara-biara Nasrani, gereja-gereja, rumah-rumah ibadat orang Yahudi dan masjid-masjid, yang di dalamnya banyak disebut nama Allah. Sesungguhnya Allah pasti menolong orang yang menolong (agama)-Nya. Sesungguhnya Allah benar-benar Mahakuasa lagi Mahaperkasa."
                    (QS Al-Hajj: 39-40) {'\n'}
                </Text>
            <Text>
            l.  Sikap pertengahan 
            </Text>
              <Dalil ayat='وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ ٱلْبَسْطِ فَتَقْعُدَ مَلُومًا مَّحْسُورًا'soundFile={require('./../../assets/audios/Al-Isra-29.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan janganlah kamu jadikan tanganmu terbelenggu pada lehermu dan janganlah kamu terlalu mengulurkannya karena itu kamu menjadi tercela dan menyesal."
                    (QS Al-Isra: 29) {'\n'}
                </Text>
            <Text>
            m.  Kebaikan/ihsan 
            </Text>
              <Dalil ayat='لِلَّذِينَ أَحْسَنُوا الْحُسْنَىٰ وَزِيَادَةٌ ۖ وَلَا يَرْهَقُ وُجُوهَهُمْ قَتَرٌ وَلَا ذِلَّةٌ ۚ أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ ۖ هُمْ فِيهَا خَالِدُونَ'soundFile={require('./../../assets/audios/Yunus-26.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Bagi orang-orang yang berbuat baik, ada pahala yang terbaik (surga) dan tambahannya. Dan muka mereka tidak ditutupi debu hitam dan tidak (pula) kehinaan. Mereka itulah penghuni surga, mereka kekal di dalamnya."
                    (QS Yunus: 26) {'\n'}
                </Text>
            <Text>
            n.  Murah hati
            </Text>
              <Dalil ayat='الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِنْدَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ'soundFile={require('./../../assets/audios/Al-Baqarah-274.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Orang-orang yang menafkahkan hartanya di malam dan di siang hari secara tersembunyi dan terang-terangan, maka mereka mendapat pahala di sisi Tuhannya. Tidak ada kekhawatiran terhadap mereka dan tidak (pula) mereka bersedih hati."
                    (QS Al-Baqarah: 274) {'\n'}
                </Text>
            <Text>
            o.  Pemaaf 
            </Text>
              <Dalil ayat='خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ'soundFile={require('./../../assets/audios/Al-Araf-199.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Jadilah engkau pemaaf dan suruhlah orang mengerjakan yang ma'ruf, serta berpalinglah dari pada orang-orang yang bodoh."
                    (QS Al-Araf: 199) {'\n'}
                </Text>
            <Text>
            p.  Membalas keburukan dengan kebaikan
            </Text>
              <Dalil ayat='مَا يُقَالُ لَكَ إِلَّا مَا قَدْ قِيلَ لِلرُّسُلِ مِنْ قَبْلِكَ ۚ إِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ وَذُو عِقَابٍ أَلِيمٍ'soundFile={require('./../../assets/audios/Fussilat-43.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Tidaklah ada yang dikatakan (oleh orang-orang kafir) kepadamu itu selain apa yang sesungguhnya telah dikatakan kepada rasul-rasul sebelum kamu. Sesungguhnya Rabb-mu benar-benar mempunyai ampunan dan hukuman yang pedih."
                    (QS Fussilat: 43) {'\n'}
                </Text>
            <Text>
            q.  Rendah hati 
            </Text>
              <Dalil ayat='وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ'soundFile={require('./../../assets/audios/Luqman-18.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan janganlah kamu memalingkan mukamu dari manusia (karena sombong) dan janganlah kamu berjalan di muka bumi dengan angkuh. Sesungguhnya Allah tidak menyukai orang-orang yang sombong lagi membanggakan diri."
                    (QS Luqman: 18) {'\n'}
                </Text>
            <Text>
            r.  Sopan santun 
            </Text>
              <Dalil ayat='وَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ حَسِيبًا'soundFile={require('./../../assets/audios/An-Nisa-86.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Apabila kamu diberi penghormatan dengan sesuatu penghormatan, maka balaslah penghormatan itu dengan yang lebih baik dari padanya, atau balaslah penghormatan itu (dengan yang serupa). Sesungguhnya Allah memperhitungankan segala sesuatu."
                    (QS An-Nisa: 86) {'\n'}
                </Text>
       		<Text>
       			Selanjutnya terkait nilai-nilai Al-Qur’an dalam perilaku sosial Irving dkk (2002) mengutarakan diantaranya,
       		</Text>
       		<Text>
            a.  Persatuan 
          </Text>
            <Dalil ayat='وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنْتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا وَكُنْتُمْ عَلَىٰ شَفَا حُفْرَةٍ مِنَ النَّارِ فَأَنْقَذَكُمْ مِنْهَا ۗ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمْ آيَاتِهِ لَعَلَّكُمْ تَهْتَدُونَ'soundFile={require('./../../assets/audios/Ali-Imran-103.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah kamu bercerai berai, dan ingatlah akan nikmat Allah kepadamu ketika kamu dahulu (masa Jahiliyah) bermusuh-musuhan, maka Allah mempersatukan hatimu, lalu menjadilah kamu karena nikmat Allah, orang-orang yang bersaudara; dan kamu telah berada di tepi jurang neraka, lalu Allah menyelamatkan kamu dari padanya. Demikianlah Allah menerangkan ayat-ayat-Nya kepadamu, agar kamu mendapat petunjuk."
                    (QS Ali Imran: 103) {'\n'}
                </Text>
          <Text>
            b.  Persaudaraan dan persamaan 
          </Text>
            <Dalil ayat='إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ'soundFile={require('./../../assets/audios/Al-Hujurat-10.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Orang-orang beriman itu sesungguhnya bersaudara. Sebab itu damaikanlah (perbaikilah hubungan) antara kedua saudaramu itu dan takutlah terhadap Allah, supaya kamu mendapat rahmat."
                    (QS Al Hujurat: 10) {'\n'}
                </Text>
          <Text>
            c.  Salam 
          </Text> 
            <Dalil ayat='وَإِذَا جَاءَكَ الَّذِينَ يُؤْمِنُونَ بِآيَاتِنَا فَقُلْ سَلَامٌ عَلَيْكُمْ ۖ كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ ۖ أَنَّهُ مَنْ عَمِلَ مِنْكُمْ سُوءًا بِجَهَالَةٍ ثُمَّ تَابَ مِنْ بَعْدِهِ وَأَصْلَحَ فَأَنَّهُ غَفُورٌ رَحِيمٌ'soundFile={require('./../../assets/audios/Al-Anam-54.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Apabila orang-orang yang beriman kepada ayat-ayat Kami itu datang kepadamu, maka katakanlah: "Salaamun alaikum. Tuhanmu telah menetapkan atas diri-Nya kasih sayang, (yaitu) bahwasanya barang siapa yang berbuat kejahatan di antara kamu lantaran kejahilan, kemudian ia bertaubat setelah mengerjakannya dan mengadakan perbaikan, maka sesungguhnya Allah Maha Pengampun lagi Maha Penyayang."
                    (QS Al An'am: 54) {'\n'}
                </Text>
          <Text>
            d.  Saling menolong dan kerjasama 
          </Text>
            <Dalil ayat='يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَائِدَ وَلَا آمِّينَ الْبَيْتَ الْحَرَامَ يَبْتَغُونَ فَضْلًا مِنْ رَبِّهِمْ وَرِضْوَانًا ۚ وَإِذَا حَلَلْتُمْ فَاصْطَادُوا ۚ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ أَنْ صَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ أَنْ تَعْتَدُوا ۘ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ ۚ وَاتَّقُوا اللَّهَ ۖ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ'soundFile={require('./../../assets/audios/Al-Maidah-2.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Hai orang-orang yang beriman, janganlah kamu melanggar syi'ar-syi'ar Allah, dan jangan melanggar kehormatan bulan-bulan haram, jangan (mengganggu) binatang-binatang had-ya, dan binatang-binatang qalaa-id, dan jangan (pula) mengganggu orang-orang yang mengunjungi Baitullah sedang mereka mencari kurnia dan keridhaan dari Tuhannya dan apabila kamu telah menyelesaikan ibadah haji, maka bolehlah berburu. Dan janganlah sekali-kali kebencian(mu) kepada sesuatu kaum karena mereka menghalang-halangi kamu dari Masjidilharam, mendorongmu berbuat aniaya (kepada mereka). Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan pelanggaran. Dan bertakwalah kamu kepada Allah, sesungguhnya Allah amat berat siksa-Nya."
                    (QS Al Maidah: 2) {'\n'}
                </Text>
          <Text>  
            e.  Menghargai kehidupan 
          </Text>
            <Dalil ayat='وَمَنْ يَقْتُلْ مُؤْمِنًا مُتَعَمِّدًا فَجَزَاؤُهُ جَهَنَّمُ خَالِدًا فِيهَا وَغَضِبَ اللَّهُ عَلَيْهِ وَلَعَنَهُ وَأَعَدَّ لَهُ عَذَابًا عَظِيمًا'soundFile={require('./../../assets/audios/An-Nisa-93.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Dan barangsiapa yang membunuh seorang mukmin dengan sengaja maka balasannya ialah Jahannam, kekal ia di dalamnya dan Allah murka kepadanya, dan mengutukinya serta menyediakan azab yang besar baginya."
                    (QS An Nisa: 93) {'\n'}
                </Text>
          <Text>  
            f.  Menghargai perasaan dan emosi 
          </Text>
            <Dalil ayat='يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ وَلَا نِسَاءٌ مِنْ نِسَاءٍ عَسَىٰ أَنْ يَكُنَّ خَيْرًا مِنْهُنَّ ۖ وَلَا تَلْمِزُوا أَنْفُسَكُمْ وَلَا تَنَابَزُوا بِالْأَلْقَابِ ۖ بِئْسَ الِاسْمُ الْفُسُوقُ بَعْدَ الْإِيمَانِ ۚ وَمَنْ لَمْ يَتُبْ فَأُولَٰئِكَ هُمُ الظَّالِمُونَ'soundFile={require('./../../assets/audios/Al-Hujurat-11.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Hai orang-orang yang beriman, janganlah sekumpulan orang laki-laki merendahkan kumpulan yang lain, boleh jadi yang ditertawakan itu lebih baik dari mereka. Dan jangan pula sekumpulan perempuan merendahkan kumpulan lainnya, boleh jadi yang direndahkan itu lebih baik. Dan janganlah suka mencela dirimu sendiri dan jangan memanggil dengan gelaran yang mengandung ejekan. Seburuk-buruk panggilan adalah (panggilan) yang buruk sesudah iman dan barangsiapa yang tidak bertobat, maka mereka itulah orang-orang yang zalim."
                    (QS Al Hujurat: 11) {'\n'}
                </Text>
          <Text>  
            g.  Protokol dalam urusan umum 
          </Text>
            <Dalil ayat='إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ آمَنُوا بِاللَّهِ وَرَسُولِهِ وَإِذَا كَانُوا مَعَهُ عَلَىٰ أَمْرٍ جَامِعٍ لَمْ يَذْهَبُوا حَتَّىٰ يَسْتَأْذِنُوهُ ۚ إِنَّ الَّذِينَ يَسْتَأْذِنُونَكَ أُولَٰئِكَ الَّذِينَ يُؤْمِنُونَ بِاللَّهِ وَرَسُولِهِ ۚ فَإِذَا اسْتَأْذَنُوكَ لِبَعْضِ شَأْنِهِمْ فَأْذَنْ لِمَنْ شِئْتَ مِنْهُمْ وَاسْتَغْفِرْ لَهُمُ اللَّهَ ۚ إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ'soundFile={require('./../../assets/audios/An-Nur-62.mp3')}/>
                <Text>
                   {'\n'} Artinya : "Sesungguhnya yang sebenar-benar orang mukmin ialah orang-orang yang beriman kepada Allah dan Rasul-Nya, dan apabila mereka berada bersama-sama Rasulullah dalam sesuatu urusan yang memerlukan pertemuan, mereka tidak meninggalkan (Rasulullah) sebelum meminta izin kepadanya. Sesungguhnya orang-orang yang meminta izin kepadamu (Muhammad) mereka itulah orang-orang yang beriman kepada Allah dan rasul-Nya, maka apabila mereka meminta izin kepadamu karena sesuatu keperluan, berilah izin kepada siapa yang kamu kehendaki di antara mereka, dan mohonkanlah ampunan untuk mereka kepada Allah. Sesungguhnya Allah Maha Pengampun lagi Maha Penyayang."
                    (QS An Nur: 62) {'\n'}
                </Text>
       		</ScrollView>
       		</View>
       		);
       	}
       }