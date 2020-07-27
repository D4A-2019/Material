import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter3 extends React.Component{
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

	render(){

    return (

      <View style={{flex: 1 }}>
      <ScrollView>
      <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
          POKOK AJARAN ISLAM
        </Text>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>
      	A. KONSEP AKIDAH ISLAM
      </Text>
      <Text>
      	Akidah berasal dari kata ‘aqada—ya’qidu—‘aqdan yang berarti simpul, ikatan dan perjanjian yang kokoh dan kuat {'\n'}
		Aqidatan (akidah) merupakan kata bentukan yang berarti kepercayaan dan keyakinan {'\n'}
		Kaitan antara aqdan dan aqidatan adalah bahwa keyakinan itu tersimpul dan tertambat dengan kokoh di dalam hati, bersifat mengikat dan mengandung perjanjian.
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>
      	Menurut Hasan al-Banna,
      </Text>
      <Text>
      	akidah adalah beberapa perkara yang wajib diyakini kebenarannya oleh hati, mendatangkan ketentraman jiwa dan menjadi keyakinan yang tidak tercampur sedikitpun dengan keraguraguan.
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>
      	Menurut Abu Bakar al-Jazairi,
      </Text>
      <Text>
      	sejumlah kebenaran yang dapat diterima secara mudah oleh manusia berdasarkan akal, wahyu dan fitrah. Kebenaran itu dipatrikan dalam hati dan ditolak segala sesuatu yang bertentangan dengan kebenaran itu. {'\n'}
		Akidah di dalam Islam disebut dengan iman. Ia bukan hanya berarti percaya, melainkan keyakinan yang mendorong seorang muslim untuk berperilaku
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>
      	Ruang Lingkup Pembahasan Akidah
      </Text>
      <Text>
      	Menurut Hasan al-Banna ruang lingkup pembahasan akidah meliputi, {'\n'}
		Ilahiah, yaitu pembahasan tentang segala sesuatu yang berhubungan dengan ilah (Tuhan) seperti wujud Allah Swt, nama-nama dan sifat-sifat Allah Swt, perbuatan-perbuatan (af’al) Allah Swt dan lain-lain.{'\n'}
		Nubuwwah, yaitu pembahasan tentang segala sesuatu yang berhubungan dengan nabi dan rasul, termasuk pembicaraan mengenai kitab-kitab Allah Swt, mu’jizat dan sebagainya.{'\n'}
		Ruhaniah, yaitu pembahasan tentang segala sesuatu yang berhubungan dengan alam metafisik, seperti malaikat, jin, iblis, setan dan ruh{'\n'}
		Sam’iyah, yaitu pembahasan tentang segala sesuatu yang hanya bisa diketahui melalui sami’, yakni dalil naqli berupa al-Qur’an dan al-Sunnah, seperti alam barzah, akhirat, azab kubur, surga, neraka dan sebagainya.{'\n'}
		Sistematika di atas apabila diturunkan akan menjadi arkanul iman (rukun iman),{'\n'}
      </Text>
      <Text>
      	Iman kepada Allah, Tauhid merupakan titik pusat keimanan sehingga setiap aktifitas seorang muslim senantiasa dipertautkan secara vertikal kepada Allah Swt.Kaum muslim harus bersikap sangat hati-hati untuk tidak menyekutukan, dengan cara apa pun yang mungkin, setiap citra atau benda dengan kehadiran Ilahi atau dengan kesadaran mereka akan Allah Swt.{'\n'}
		Iman kepada Malaikat, Malaikat adalah makhluk gaib ciptaan Allah Swt, diciptakan dari cahaya dan tidak dapat ditangkap oleh pancaindera manusia.Malaikat diciptakan oleh Allah Swt untuk melaksanakan tugas-tugas khusus yang telah Allah Swt tetapkan yang ada hubungannnya dengan wahyu, rasul, manusia, alam semesta dan akhirat{'\n'}
		Iman kepada Kitab Suci,Kitab-kitab Allah Swt tersebut berisi informasi informasi, aturan-aturan dan hukum-hukum bagi manusia. Kitab-kitab Allah Swt tersebut menjadi pedoaman hidup manusia di dunia agar hidup manusia teratur, tenteram dan bahagia.{'\n'}
		Iman kepada Rasul Allah,Rasul diberi kuasa untuk menerangkan segala sesuatu yang datang dari Allah Swt. Bukti kerasulan seseorang adalah mu’jizat dan kitab Allah Swt yang tidak tertandingi mutunya. Melalui rasul, manusia dapat mengetahui segala sesuatu tentang Allah Swt, seolah-olah manusia berhubungan langsung dengan Allah Swt.Iman kepada rasul merupakan kebutuhan manusia karena dengan adanya rasul, manusia dapat melihat contoh perilaku yang sesuai dengan kehendak Allah Swt.Beriman kepada rasul merupakan prasyarat adanya keimanan terhadap kebenaran ajaran yang dibawanya.{'\n'}
		Iman kepada Hari Kiamat, Orang-orang yang betul-betul beriman kepada hari kiamat dan adanya pahala surga dan siksa nerakanya, pasti akan berlomba-lomba untuk berbuat kebajikan dan berpikir seribu kali untuk berbuat maksiat. Iman kepada hari kiamat seharusnya dapat memberikan dampak positif kepada tata kehidupan manusia{'\n'}
		Iman kepada Qada dan Qadar,Beriman kepada takdir akan melahirkan sikap optimisme, tidak mudah kecewa atau putus asa. Semua kejadian yang menimpa atau yang terjadi setelah segala usaha dilakukan diyakini sebagai takdir Allah Swt. Sesungguhnya Allah Swt akan selalu memberikan yang terbaik sesuai dengan sifat-Nya yang Maha Pengasih dan Penyanyang.{'\n'}
      </Text>

      <Text style={{fontWeight: 'bold', fontSize: 15}}>
      	B. KONSEP SYARIAH ISLAM
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Makna Syariah
      </Text>
      <Text>
      	Makna asal syariah adalah jalan ke sumber air. Sementara dalam bahasa Arab, syariah berasal dari kata syari’ yang berarti jalan yang harus dilalui setiap muslim. {'\n'}
		Syariah merupakan peraturan-peraturan yang bersumber dari wahyu mengenai tingkah laku manusia. syariah wajib diikuti oleh orang islam. Syariah terdapat pada al-Quran dan ktab-kitab hadits.
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Ruang lingkup syariah sebagai aspek hukum
      </Text>
      <Text>
      	Hubungan antara manusia dengan Allah SWT dimana syariah mengatur tentang manusia yang harus tunduk dan patuh kepada Allah SWT yang dibuktikan dengan pelaksanaan ibadah.{'\n'}
		Hubungan antara sesama manusia atau sering disebut juga dengan muamalah. Aturan tentang hal ini akan mewujudkan kesalehan sosial. kesalehan sosial merupakan bentuk hubungan harmonis antara individu dengan lingkungan sosialnya.{'\n'}
		Hubungan antara manusia dengan alam semesta diatur agar manusa dan alam semesta saling mendorong untuk memberi manfaat satu sama lain agar lingkungan alam yang makmur dan lestari dapat terwujud.{'\n'}
		Syariah islam bersifat universal dan abadi. Hal tersebut terjadi karena syariah islam sesuai dengan kemampuan manusia dan mudah dilaksanakan. Juga, bagian syariah yang berupa akidah dan ibadah tidak memerlukan perubahan. Syariah cocok dengan fitrah manusia serta layak digunakan diberbagai tempat dan zaman.
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Maksud diturunkannya Syariat Islam
      </Text>
      <Text>
      	Secara umum tujuan diturunkannya hukum Islam adalah untuk mencegah kerusakan pada manusia. Selain itu beberapa alasan lainnya adalah: {'\n'}
		Memelihara kemaslahatan agama. Syariat diturunkan agar agama dapat dipelihara dan terhindar dari ancaman orang-orang yang tidak bertanggung jawab.{'\n'}
		Memelihara jiwa. Hukum islam ada agar orang yang mau melakukan pembunuhan berpikir ganjaran yang akan ia terima  jika ia membunuh.{'\n'}
		Memelihara akal. Akal mulia merupakan sesuatu yang harus dilindungi agar dapat digunakan dengan baik.{'\n'}
		Memelihara keturunan. Syariat islam diturunkan untuk mengatur siapa yang boleh dan tidak boleh dinikahi dengan tujuan menjaga kemurnian keturunan.{'\n'}
		Memelihara harta benda. Islam mengatur cara berekonomi manusia agar tidak terjadi bentrokan akibat ketamakan pada harta.
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Fungsi hukum islam dalam kehidupan bermasyarakat
      </Text>
      <Text>
      	Fungsi ibadah untuk beribadah kepada Allah SWT{'\n'}
		Fungsi amar ma’ruf nahi munkar. Hukum Islam digunakan sebagai kontrol sosial  untung mendatangkan kemashlahatan dan menghindari kemudharatan.{'\n'}
		Fungsi zawajir. Qisas diyat atau hudud merupakan cerminan dari hukum Islam sebagai hukum yang memaksa dan melindungi masyrakat.{'\n'}
		Fungsi Tandzim wa Islah al-Ummah yang bearti jukum islam merupakan sarana untuk mengatur sesuatu dengan baik sehingga masyarakat menjadi harmonis dan aman.
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Perbedaan antara Syariah dan Fiqih
      </Text>
      <Text>
      	Fiqih  merupakan pengetahuan khusus yang menguraikan syariah. Fiqih dalam bahasa arab berarti paham atau pengertian. Ilmu ini digunakan untuk menguraikan norma-norma hukum dasar yang terdapat di dalam al-Quran. Perbedaan fiqih dan syariah sendiri adalah:{'\n'}
		Syariah terdapat dalam al-Quran dan kitab hadits sementara fiqih terdapat di kitab fiqih.{'\n'}
		Syariah  mengandung kebenaran mutlak sementara fikih bersifat relatif.{'\n'}
		Syariah bersifat fundamental dengan ruang lingkup yang lebih luas sementara fikih bersifat instrumental dengan ruang lingkup terbatas.{'\n'}
		Syariah bersifat global dan mengatur hal-hal umum (ijmali), sementara fikih mengatur hal-hal yang lebih spesifik (tafsili).{'\n'}
		Syariah merupakan ketetapan Allah dan ketentuan Rasul-Nya yang berlaku selamanya. Sementara fikih adalah karya manusia yang dapat diubah{'\n'}
		Syariah hanya satu sementara fikih bergantung pada aliran atau mazhab.{'\n'}
		Syariah menunjukan kesatuan dalam Islam dimana fikih menunjukan keragaman.{'\n'}
		Contoh syariah adalah kewajiban sholat, puasa, dan lainnya. Sementara fikih menerangkan tentang tata cara melakukan syariah.{'\n'}
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Konsep Ibadah dan Muamalah
      </Text>
      <Text>
      	Dalam syariah dikenal dua istilah yaitu ibadah dan muamalah. Ibadah berarti menghambakan diri pada Allah SWT sementara muamalah adalah hubungan antara manusia dengan sesama manusia atau manusia dengan alam.{'\n'}
		Ibadah terdiri atas ibadah khusus (mahdah) dan ibadah umum (gairu mahdah). Ibadah khusus merupakan ibadah langsung kepada Allah SWT yang tata caranya telah ditetapkan. Contoh dari ibadah khusus adalah shalat, taharah sebagai syarat shalat, puasa, dan lainnya. Sementara ibadah umum  merupakan bentuk ibadah yang berkaitan dengan kebaikan seperti berbakti kepada orang tua, membaca al-Quran dan menolong sesama.{'\n'}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>
      	C. KONSEP AKHLAK
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Makna Akhlak
      </Text>
      <Text>
      	Akhlak secara etimologis berasal dari bahasa Arab akhlaq yang merupakan
		bentuk jamak dari khuluq atau al-khulq yang berarti budi pekerti, perangai, tingkah
		laku atau tabiat.
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Menurut Imam Al-Ghazali
      </Text>
      <Text>
      	Akhlak adalah suatu sifat yang tertanam dalam jiwa dan daripadanya timbul perbuatan-perbuatan yang mudah dan tanpa memerlukan pemikiran dan pertimbangan (Ilyas, 2007:1).
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Menurut Ibrahim Anis
      </Text>
      <Text>
      	Akhlak adalah sifat yang tertanam dalam jiwa yang dengannya muncul macam-macam perbuatan baik atau buruk, tanpa memerlukan pemikiran dan pertimbangan (Ilyas, 20017:2).
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Menurut Ibn Miskawaih
      </Text>
      <Text>
      	Akhlak ialah kondisi jiwa yang senantiasa mendorong ke arah melakukan perbuatan dengan tidak menghajatkan pemikiran (Khoiri, 2005:16).{'\n'}
		Konsep akhlak mengatur pola kehidupan manusia meliputi hubungan manusia dengan Allah, manusia dengan sesamanya, manusia dengan lingkungannya, dan akhlak terhadap diri sendiri.{'\n'}
		Beberapa akhlak yang perlu dilakukan sebagai mahasiswa vokasi calon pekerja atau pengusaha adalah Ithqon atau profesional, ikhlas, jujur, dan ramah.
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Hakikat Akhlak dan Tasawuf
      </Text>
      <Text>
      	Tasawuf merupakan salah satu bidang kajian studi islam yang terpusat pada pembersihan aspek batiniyah yang dapat menghidupkan kegairahan akhlak yang mulia.Hakikat tasawuf sangat sulit dipahami karena menyangkut masalah rohani dan batin yang tidak dapat dilihat. Dapat dikatakan bahwa tasawuf merupakan usaha untuk mendekatkan diri kepada Allah maupun terhadap sesama makhluk.
      </Text>
      <Text style={{fontWeight: 'bold'}}>
      	Hubungan Akhlak dan Tasawuf
      </Text>
      <Text>
      	Untuk mencapai akhlak yang mulia diperlukan proses-proses yang dilakukan oleh kalangan mutashawwifin atau para pengamal tasawuf. Akhlak tasawuf adalah proses pencapaian akhlak mulia melalui metode tasawuf. Metode Tasawuf memfokuskan pada Tazkiyah al-Nafs (penyucian jiwa) yang dilakukan dengan mengamalkan istilah takhalli-tahalli-tajalli (Nata, 2012:269).{'\n'}
		Pengamalan selanjutnya tasawuf yang dilakukan oleh kelompok pengamal yang menamakan dirinya tarikat. Tarikat bermakna jalan menuju Allah. Menurut Abdullah Ujong Rimba, tarikat bermakna cara mengerjakan suatu amalan untuk mencapai suatu tujuan. Cara yang dimaksud merupakan mengamalkan ketiga ajaran dasar takhalli-tahalli-tajalli. Salah satu tarikat terbesar yang berkembang adalah Tarikat Naqsyabandiyah.{'\n'}
		Dalam kehidupan modern yang serba sibuk maka tarikat dikembangkan kearah yang lebih konstruktif. Manusia butuh pedoman yang bersifat spiritual untuk menjaga integritas kepribadiannya melalui tasawuf. Dengan demikian, ibadah yang dilakukan ber-tarikat erat hubungannya dengan akhlak. Dengan memahami tasawuf lalu mengamalkan dan menempuhnya dalam bertarekat serta suluk, maka akan terbentuk akhlak yang lebih baik seperti zuhud, sabar, ikhlas, dan optimis dalam berusaha dan bekerja sehari-hari. {'\n'}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>
      	D. KORELASI AQIDAH, SYARIAH, DAN AKHLAK
      </Text>
      <Text>
      	Konsep pada iman melahirkan konsep kajian akidah, konsep islam melahirkan konsep kajian syariah, dan konsep ihsan melahirkan konsep kajian akhlak. ketiga kajian tersebut merupakan kerangka dasar ajaran islam. {'\n'}
		Berakidah berarti beriman yang berarti membenarkan dengan hati, mengucapkan dengan lidah, dan melakukan dengan anggota badan.{'\n'}
		Orang beriman harus menjalankan syariah, dikarenakan syariah merupakan cabang dari akidah. Syariah merupakan perwujudan dari fungsi kalbu dalam berakidah. Lalu akhlak merupakan kondisi jiwa yang menyebabkan munculnya perilaku baik dan buruk tanpa pemikiran terus menerus.{'\n'}
		Akhlak merupakan konsep kajian dari ihsan yaitu penghayatan akan hadirnya Tuhan dalam hidup dan setiap aktifitas termasuk ketika beribadah. Ihsan merupakan puncak tertinggi dari keislaman seseorang. Ihsan baru tercapai jika sudah melalui dua tahapan sebelumnya, yaitu iman dan islam. {'\n'}
		Akidah sebagai konsep atau sistem keyakinan yang bermuatan elemen-elemen dasar iman, menggambarkan sumber dan hakikat keberadaan agama. Syariah sebagai konsep atau sistem hukum berisi peraturan yang menggambarkan fungsi agama. Sedangkan akhlak sebagai sistem nilai etika menggambarkan arah dan tujuan yang hendak dicapai oleh agama.{'\n'}
		Iman menunjukkan konsep akidah, sedangkan amal shalih menunjukkan adanya konsep syariah dan akhlak. {'\n'}
		Tiga kerangka dasar Islam yaitu akidah, syariah, dan akhlak tidak bisa dipisah-pisahkan dan tidak dimungkinkan bagi seorang muslim memilih sebagiannya dan meninggalkan sebagian yang lain.{'\n'}

      </Text>
      </ScrollView>
      </View>
      )
  }
	}