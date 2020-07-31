import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter14 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      data: {
      	kepemimpinan:['Proses mempengaruhi atau memberi contoh dari pemimpin kepada pengikutnya dalam upaya mencapai tujuan organisasi','Seni mempengaruhi dan mengarahkan orang dengan cara kepatuhan, kepercayaan, kehormatan, dan kerja sama yang bersemangat untuk mencapai tujuan bersama','Kemampuan untuk mempengaruhi, memberi inspirasi, dan mengarahkan tindakan seseorang atau kelompok untuk mencapai tujuan yang diharapkan','Melibatkan tiga hal yaitu pemimpin, pengikut, dan situasi tertentu',' Kemampuan untuk mempengaruhi suatu kelompok untuk mencapai tujuan'],
      	ayatKepemimpinan: ['Q.S. An-Nisa/4: 59','Q.S. Al-Baqarah/2: 30','Hadits Riwayat Imam Bukhari : 4789'],
      	syaratPemimpin: ['Muslim','Berakal Sehat dan Sudah Baligh.','Pandai dalam Hukum Syariat Islam.','Pemberani.','Arif dan Bijaksana.','Ketaqwaan.'],
      	karakterPemimpin:[' Beriman dan bertakwa kepada Allah.','Jujur dan bermoral.',' Kompeten dan berilmu pengetahuan.',' Peduli terhadap yang dipimpinnya.',' Inspiratif.','  Sabar.','Rendah Hati.','Musyawarah.'],
    }
  }
}
	render(){
		let kepemimpinanList = this.state.data.kepemimpinan.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })
	    let ayatkepemimpinanList = this.state.data.ayatKepemimpinan.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })
	    let syaratPemimpinList = this.state.data.syaratPemimpin.map((dataList, index) => {
	      return(
	        <Text key={index}> - {dataList} </Text>
	      )
	    })
	    let karakterPemimpinList = this.state.data.karakterPemimpin.map((dataList, index) => {
	      return(
	        <Text key={index}>{index+1}. {dataList} </Text>
	      )
	    })

		return(
			<View>
     		<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10}}>
       		<Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
          		Kepemimpinan Islami
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			A. URGENSI KEPEMIMPINAN
       		</Text>
       		<Text>
       			Menurut kodrat serta irodat-Nya bahwa manusia dilahirkan untuk menjadi pemimpin juga menjadi hamba yang sejati. Sejak Adam diciptakan sebagai manusia pertama dan diturunkan ke bumi, Ia ditugasi sebagai kholifah fil ardhi. {'\n'}
				Tujuan hidup manusia adalah untuk menggapai ridla Allah swt, untuk menggapai ridla itu manusia wajib mengetahui serta memiliki ilmunya, dengan ilmu pengetahuan tersebut muslim bisa melaksanakan perintah Allah swt, yaitu sebagai hamba-Nya yang taat (‘abdullah) dan bisa menjadi pemimpin yang bisa mengurus, mensejahterakan, membuat kedamaian, ketenteraman, dan keteraturan dunia ini (khalifatullah fil ardl).{'\n'}
				Pemimpin memiliki peran yang sangat substantif untuk kemajuan suatu institusi yang ia pimpin, substansi seorang pemimpin adalah bagaimana mampu menterjemahkan nilai-nilai dasar kepemimpinan untuk memenej sebuah lembaga secara progresif. {'\n'}
				Sebagai pemimpin pada hakikatnya adalah seorang yang mempunyai kemampuan untuk memengaruhi perilaku orang lain di dalam kerjanya dengan menggunakan kekuasaan. {'\n'}
				Secara normatif, tugas seorang pemimpin akan dimintai laporan pertanggung jawaban baik secara organisatoris maupun secara ideologis, secara organisatoris, laporan pertanggung jawaban tersebut dapat diwujudkan dalam bentuk skema pelaporan kepada atasan yang lebih tingi darinya atau laporan pertanggung jawaban tersebut disampaikan kepada anggota-anggotanya. Belum jauh dari laporan pertanggung jawaban secara organisatoris, dan yang lebih substantive adalah laporan pertanggung jawaban secara ideologis, yaitu di hadapan Tuhan.{'\n'}
				Nabi Muhammad saw sebagai nabi dan rasul juga menjadi pemimpin negara dan ummat, yang memiliki sifat shidiq, amanah, tablihg dan fathonah, sehingga nilai-nilai kepemimpinan yang dijalankan oleh Nabi saw merupakan nilai-nilai kepemimpinan yang bisa di tiru oleh para pemimpin masa kini.{'\n'}
				Kepemimpinan adalah sesuatu yang istimewa yang akan dituntut pertanggungjawabannya, kepemimpinanan adalah pengorbanan bekerja keras untuk melayani yang dipimpinnya. Dalam Islam, term kepemimpinan biasanya disejajarkan dengan konsep khilafah, imamah, atau qawwam.{'\n'}
       		</Text>	
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			B. KONSEP KEPEMIMPINAN ISLAMI
       		</Text>
       		<Text>
       			Istilah kepemimpinan adalah kata berimbuhan yang diambil dari pimpin. Kepemimpinan adalah sifat dan proses dalam gaya memimpin. Orangnya disebut pemimpin atau pimpinan. Kepemimpinan didefinisikan berdasar ciri-ciri, perilaku, pengaruh, pola interkasi, dan posisi jabatan administratif.{'\n'}
       			kepemimpinan seharusnya melekat pada diri pemimpin dalam wujud kepribadian (personality), kemampuan (ability), dan kesanggupan (capability) guna mewujudkan kepemimpinan bermutu atau Total Quality Management (TQM). {'\n'}
				Oleh karena, kepemimpinan pada hakekatnya adalah:{'\n'}
       		</Text>	
       			{kepemimpinanList}
       		<Text>
       			 Kepemimpinan tersebut berhubungan langsung dengan situasi sosial dalam kehidupan kelompok/organisasi masing-masing, yang mengisyaratkan bahwa setiap pemimpin berada di dalam dan bukan di luar situasi itu.  {'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			 {'\n'}KEPEMIMPINAN DALAM ISLAM
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			 Landasan Normatif 
       		</Text>
       		<Text>
       			Ada beberapa ayat Alquran yang berbicara tentang kepemimpinan, baik secara langsung maupun tidak langsung yang mengacu pada makna kepemimpinan.
       		</Text>
       		<Text>
                        a. Q.S. An-Nisa/4: 59
                  </Text>
                        <Dalil ayat='يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَطِيعُوا۟ ٱللَّهَ وَأَطِيعُوا۟ ٱلرَّسُولَ وَأُو۟لِى ٱلْأَمْرِ مِنكُمْ ۖ فَإِن تَنَٰزَعْتُمْ فِى شَىْءٍ فَرُدُّوهُ إِلَى ٱللَّهِ وَٱلرَّسُولِ إِن كُنتُمْ تُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۚ ذَٰلِكَ خَيْرٌ وَأَحْسَنُ تَأْوِيلًا'soundFile={require('./../../assets/audios/An-Nisa-59.mp3')}/>
                            <Text>
                               {'\n'} Artinya : "Hai orang-orang yang beriman, taatilah Allah dan taatilah Rasul (Nya), dan ulil amri di antara kamu. Kemudian jika kamu berlainan pendapat tentang sesuatu, maka kembalikanlah ia kepada Allah (Al Quran) dan Rasul (sunnahnya), jika kamu benar-benar beriman kepada Allah dan hari kemudian. Yang demikian itu lebih utama (bagimu) dan lebih baik akibatnya."
                                (QS An Nisa: 59) {'\n'}
                            </Text>
                  <Text>
                        b. Q.S. Al-Baqarah/2: 30
                  </Text>
                        <Dalil ayat='وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً ۖ قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ'soundFile={require('./../../assets/audios/Al-Baqarah-30.mp3')}/>
                            <Text>
                               {'\n'} Artinya : "Ingatlah ketika Tuhanmu berfirman kepada para Malaikat: "Sesungguhnya Aku hendak menjadikan seorang khalifah di muka bumi". Mereka berkata: "Mengapa Engkau hendak menjadikan (khalifah) di bumi itu orang yang akan membuat kerusakan padanya dan menumpahkan darah, padahal kami senantiasa bertasbih dengan memuji Engkau dan mensucikan Engkau?" Tuhan berfirman: "Sesungguhnya Aku mengetahui apa yang tidak kamu ketahui"."
                                (QS Al Baqarah: 30) {'\n'}
                            </Text>
                  <Text>
                        c. Hadits Riwayat Imam Bukhari : 4789{'\n'}{'\n'}
                              <Text>
                                    حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ أَيُّوبَ عَنْ نَافِعٍ عَنْ عَبْدِ اللَّهِ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ فَالْإِمَامُ رَاعٍ وَهُوَ مَسْئُولٌ وَالرَّجُلُ رَاعٍ عَلَى أَهْلِهِ وَهُوَ مَسْئُولٌ وَالْمَرْأَةُ رَاعِيَةٌ عَلَى بَيْتِ زَوْجِهَا وَهِيَ مَسْئُولَةٌ وَالْعَبْدُ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهُوَ مَسْئُولٌ أَلَا فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ{'\n'}
                              </Text>
                              <Text>
                               {'\n'} Artinya : "Telah menceritakan kepada kami [Abu Nu'man] Telah menceritakan kepada kami [Hammad bin Zaid] dari [Ayyub] dari [Nafi'] dari [Abdullah] ia berkata; Nabi shallallahu 'alaihi wasallam bersabda: "Setiap kalian adalah pemimpin, dan setiap kalain akan dimintai pertanggungjawabannya. Seorang laki-laki adalah pemimpin atas keluarganya dan ia akan dimintai pertanggungjawabannya. Seorang wanita adalah pemimpin atas rumah suaminya, dan ia pun akan dimintai pertanggungjawabannya. Dan seorang budak juga pemimpin atas atas harta tuannya dan ia juga akan dimintai pertanggungjawabannya. Sungguh setiap kalain adalah pemimpin dan setiap kalian akan dimintai pertanggungjawabannya."
                                (Hadits Riwayat Imam Bukhari: 4789) {'\n'}
                            </Text>
                  </Text>
       		<Text>
       			Hadis yang berbunyi setiap kalian adalah pemimpin menerangkan tentang hakikat kepemimpinan setiap muslim dalam berbagai posisi dan tingkatannya. Mulai dari tingkatan pemimpin rakyat sampai pada tingkatan pengembala, bahkan sebenarnya tersirat sampai tingkatan memimpin diri sendiri. Semua orang pasti memiliki tanggung jawab dan akan dimintai pertanggungjawabannya oleh Allah swt. atas kepemimpinannya kelak di akhirat. {'\n'}
				Frasa dan akan diminta pertanggungjawaban atas kepemimpinannnya menyiratkan makna bahwa setiap orang memiliki beban tanggung jawab kepemimpinan, apapun posisi dan status orang tersebut, apapun jenis kelamin orang tersebut. Semua memiliki tanggung jawab kepemimpinan dan kelak akan dimintai pertanggungjawaban atas kepemimpinan yang diperankannya.{'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			 HADIST RIWAYAT IMAM BUKHARI 
       		</Text>	
       		<Text>
       		Dalam hadis di atas dijelaskan bahwa ada tujuh golongan manusia yang akan diberi naungan dari matahari pada hari tidak ada naungan kecuali naungan Allah swt, yaitu pada hari kiamat. Salah satu dari tujuh golongan tersebut adalah imām/pemimpin yang adil. {'\n'}
			Dua ayat tersebut menyiratkan perintah kepada setiap pemimpin apa saja dan di mana saja untuk berbuat adil
       		</Text>
       		<Text>
       			Syarat-syarat Pemimpin dalam Islam :
       		</Text>
       			{syaratPemimpinList}
       		<Text>
       	 		{'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			C. PRINSIP-PRINSIP KEPEMIMPINAN ISLAM
       		</Text>
       		<Text style={{fontWeight: 'bold'}}>
       			1.  Amanah
       		</Text>
       		<Text>
       			Manusia sebagai khalifah di muka bumi diperintahkan untuk menunaikan amanah kepada yang berhak menerimanya terdapat pada QS. An-Nisa: 58.
       		</Text>
                        <Dalil ayat='۞ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا۟ ٱلْأَمَٰنَٰتِ إِلَىٰٓ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ ٱلنَّاسِ أَن تَحْكُمُوا۟ بِٱلْعَدْلِ ۚ إِنَّ ٱللَّهَ نِعِمَّا يَعِظُكُم بِهِۦٓ ۗ إِنَّ ٱللَّهَ كَانَ سَمِيعًۢا بَصِيرًا'soundFile={require('./../../assets/audios/An-Nisa-58.mp3')}/>
                            <Text>
                               {'\n'} Artinya : "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya, dan (menyuruh kamu) apabila menetapkan hukum di antara manusia supaya kamu menetapkan dengan adil. Sesungguhnya Allah memberi pengajaran yang sebaik-baiknya kepadamu. Sesungguhnya Allah adalah Maha Mendengar lagi Maha Melihat."
                                (QS At-Nisa: 58) {'\n'}
                            </Text>
       		<Text style={{fontWeight: 'bold'}}>
       			2.  Adil
       		</Text>
       		<Text>
       			Menjalankan perintah dan hukum-hukum Tuhan dalam mengatur kehidupan dan pemenuhan hak-hak masyarakat yang dipimpinnya haruslah berlaku dengan adil, hal ini disebabkan para pemimpin selalu berhadapan dengan masyarakat yang terdiri dari kelompok-kelompok. {'\n'}
       		</Text>
       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       			D. KARAKTER PEMIMPIN ISLAMI
       		</Text>
       			{karakterPemimpinList}
       		</ScrollView>
       		</View>
			);
		}
	}