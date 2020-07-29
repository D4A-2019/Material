import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter15 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      data: {
      	fungsiKeluarga:['Fungsi Biologis','Fungsi Edukatif','Fungsi Religius','Fungsi Protektif','Fungsi Sosialisasi','Fungsi Rekreatif'],
      	haramKeturunan:['Ibu dan seterusnya ke atas','Anak perempuan dan seterusnya ke bawah','Saudara perempuan kandung, seayah, atau seibu','Bibi dari bapak','Bibi dari ibu','Keponakan perempuan dari saudara laki-laki','Keponakan perempuan dari saudara perempuan'],
      	haramPersusuan:['Ibu yang menyusui','Saudara perempuan sesusuan'],
      	haramPernikahan:['Mertua','Anak Tiri, jika istri (ibunya sang anak) telah digauli','Istri bapak, walaupun sudah dicerai','Istri anak, walaupun sudah dicerai'],
      	waliPernikahan:[' Ayah kandung',' Kakek dari ayah','Saudara laki-laki se ayah se ibu','Saudara laki-laki se ayah','Paman dari pihak ayah yang se ayah se ibu','Paman dari pihak ayah yang se ayah','Anak laki-laki Paman dari pihak ayah yang se ayah se ibu',' Anak laki-laki Paman dari pihak ayah yang se ayah','Wali Hakim'],



    }
  }
}
	render(){

			let fungsiKeluargaList = this.state.data.fungsiKeluarga.map((dataList, index) => {
		      return(
		        <Text key={index}> - {dataList} </Text>
		      )
		    })
		    let haramKeturunanList = this.state.data.haramKeturunan.map((dataList, index) => {
		      return(
		        <Text key={index}> - {dataList} </Text>
		      )
		    })
		    let haramPersusuanList = this.state.data.haramPersusuan.map((dataList, index) => {
		      return(
		        <Text key={index}> - {dataList} </Text>
		      )
		    })
		    let haramPernikahanList = this.state.data.haramPernikahan.map((dataList, index) => {
		      return(
		        <Text key={index}> - {dataList} </Text>
		      )
		    })

			return(
				<View style={{flex: 1 }}>
	     		<ScrollView>
	       		<Dalil ayat='Testing' soundFile={require('./dalil-sound/test.mp3')} />
	       		<Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
	          		Pembinaan Keluarga Dan Anak Dalam Islam
	       		</Text>
	       		<Text style={{fontWeight: 'bold', fontSize: 15}}>
       				A. MAKNA DAN HAKIKAT KELUARGA
       			</Text>
       			<Text>
       				Keluarga merupakan akar terbentuknya masyarakat, bangsa, bahkan sebuah peradaban. Keluarga diibaratkan sebagai pilar pertama untuk membangun suatu negara. Eksistensi keluarga sakinah memiliki pengaruh yang sangat besar terhadap stabilitas umat dan masa depannya. {'\n'}
       			</Text>
       			<Text style={{fontWeight: 'bold', fontSize: 15}}>
       				B. PEMBINAAN KELUARGA ISLAMI
       			</Text>
       			<Text>
       				Berdasarkan Kamus Besar Bahasa Indonesia (2008 : 193), pembinaan adalah suatu proses, cara, perbuatan membina atau pembaharuan, penyempurna atau usaha, tindakan, dan kegiatan yang dilakukan secara efisien dan efektif untuk memperoleh hasil yang lebih baik. {'\n'}
					Jadi pembinaan adalah suatu proses atau pengembangan yang mencakup urutan-urutan pengertian, diawali dengan mendirikan, menumbuhkan, memelihara pertumbuhan tersebut yang disertai dengan usaha-usaha perbaikan, menyempurnakan dan mengembangkan
       			</Text>
       			<Text style={{fontWeight: 'bold'}}>
       				{'\n'}1. Fungsi dan Upaya Mewujudkan Keluarga Sakinah {'\n'}
       				Adapun fungsi dibentuknya keluarga dikemukakan oleh Mufidah C (2008 :42) adalah berikut ini.
       			</Text>
       				{fungsiKeluargaList}
       			<Text>
       			 	Berdasarkan keenam fungsi keluarga tersebut, maka dapat dilihat bahwa keluarga mempunyai fungsi yang vital dalam pembentukan karakter individu seseorang.
       			</Text>
       			<Text style={{fontWeight: 'bold'}}>
       			 	{'\n'}2.	Mewujudkan Keluarga Sakinah
       			</Text>
       			<Text>
       				Adapun untuk mewujudkan keluarga sakinah, mawaddah, dan rahmah diperlukan proses yang panjang dan pengorbanan yang besar meliputi persiapan, pelaksanaan dan pembinaan. 
					Dalam tahapan persiapan, setiap pasangan yang akan menikah hendaknya mempersiapakan diri dengan membekali diringan melalui pemahaman akan ilmu agama yang memadai berdasarkan tuntunan Islam, baik yang terdapat dalam al Quran amupun hadits.
					Tujuan utama memilih pasangan yang sesuai dengan kriteria menurut Islam ialah semata-mata kelak dapat mewujudkan keluarga sakinah, mawaddah, dan rahmah.{'\n'}
					Setelah menentukan pilihan, maka tahapan selanjutnya yang harus dilakukan adalah meng-khitbah-nya. Khitbah dalam bahasa Indonesia sering disebut sebagai tunangan atau meminang, yakni meminta izin kepada pihak keluarga untuk dapat meminang anggota keluarga yang telah dipilih oleh sang pria untuk menjadi calon istrinya.{'\n'} 
					Ketika akan meminang, harus dipastikan pula bahwa calon istrinya tersebut bukanlah mahram-nya (Perempuan yang haram dinikahinya). Adapun kriteria perempuan yang masuk mahram adalah :
       			</Text>
       			<Text>
       				{'\n'}a.	Diharamkan karena keturunan
       			</Text>
       				{haramKeturunanList}
       			<Text>
       				b.	Diharamkan karena persusuan
       			</Text>
       				{haramPersusuanList}
       			<Text>
       				c.	Diharamkan karena pernikahan
       			</Text>
       				{haramPernikahanList}
       			<Text>
       				{'\n'}Selain mahram di atas, ada juga perempuan yang haram untuk dinikahi sementara waktu, yakni :{'\n'}
       			</Text>
       			<Text>
       				a.   	Perempuan yang masih berada dalam ikatan pernikahan, {'\n'}
					b.  	Mantan istri yang telah ditalak bain kubra, kecuali apabila telah dinikahi oleh laki-laki lain dan telah digauli {'\n'}
					c.   	Perempuan yang masih mahram dengan istri (saudara istri){'\n'}
					d.  	Perempuan yang tidak seagama{'\n'}
					Termasuk juga ke dalam persiapan pernikahan adalah mempersiapkan segala dokumen yang dibutuhkan untuk kepentingan pencacatan nikah dan penerbitan buku nikah{'\n'}
					Dalam melangsungkan pernikahan, syariat islam telah mengatur bahwa sah-nya pernikahan dikarenakan terpenuhinya beberapa perkara, yakni :{'\n'}
					a.   	Adanya pasangan yang akan dinikahkan{'\n'}
					b.  	Wali.{'\n'}
					{'\n'}Wali merupakan orang yang bertanggungjawab menikahkan calon pasangan suami/istri. Wali yang dimaksud dalam syariat pernikahan adalah wali dari pihak perempuan. Adapun yang termasuk sah menjadi wali pernikahan adalah berurutan sebagai berikut :
       			</Text>
       			<Text style={{fontWeight: 'bold'}}>
       				{'\n'}a. Dua orang saksi yang adil.
       			</Text>
       			<Text>
       				Seperti halnya Wali, saksi adalah orang yang bertanggungjawab atas sahnya pernikahan. Karena itu, tidak semua orang dapat menjadi saksi. Persyaratan untuk menjadi saksi adalah sebagai berikut {'\n'}
					1)   Islam, {'\n'}
					2)   Baligh, {'\n'}
					3)   Berakal, {'\n'}
					4)   Merdeka, {'\n'}
					5)   Laki-laki, dan {'\n'}
					6)   Adil
       			</Text>
       			<Text style={{fontWeight: 'bold'}}>
       				b. Ijab Qabul {'\n'}
       				c. Mahar {'\n'}
       			</Text>
       			<Text>
       				Setelah itu semua, maka tahapan selanjutnya dalam mewujudkan keluarga Sakinah adalah dengan adanya pembinaan. Proses pembinaan keluarga merupakan ibadah yang paling panjang. Dia menuntut kesabaran dan ketabahan dalam menjalaninya. 
					dalam proses pembinaan ini, ada kriteria atau pondasi utama yang harus dimiliki oleh sebuah keluarga sehingga dapat dikatakan sebagai keluarga bahagia sejahtera (sakinah) menurut Tohari (1992 : 64) ialah:{'\n'}
					{'\n'}a.   	memiliki keinginan menguasai dan menghayati serta mengamalkan ilmu-ilmu    agama dalam kehidupan sehari-hari;{'\n'}
					b.      bersikap saling menghormati setiap anggota keluarga dan memiliki sifat yang sarat dengan etika dan sopan santun;{'\n'}
					c.      berusaha memperoleh rezeki yang halal dan diharapkan rezeki tersebut dapat memenuhi kebutuhan anggota keluarga secara berkecukupan;{'\n'}
					d.		membelanjakan harta secara efektif dan efisien.

       			</Text>
       			<Text style={{fontWeight: 'bold'}}>
       			 	{'\n'}3.	Ciri-Ciri Keluarga Islami
       			</Text>
       			<Text>
       				Perkawinan adalah jalan untuk membentuk suatu keluarga atau rumah tangga, maka Islam telah meletakkan kaedah-kaedah dan aturan-aturan yang bertujuan untuk mewujudkan keluarga yang tenang dan bahagia, yang pada gilirannya akan berdampak pada terciptanya suatu masyarakat yang aman dan tenteram
					Ciri-ciri keluarga/rumah tangga islami, yaitu:{'\n'}
					<Text style={{fontWeight: 'bold'}}>
					{'\n'}a.	Didirikan atas dasar takwa dan kebersamaan dalam beribadah {'\n'}
					</Text>
					Keluarga didirikan dalam rangka ibadah kepada Allah swt. memberi proses pemilihan jodoh, pernikahan (akad nikah, walimah), sampai dengan membina rumah tangga jauh dari unsur kemaksiatan dan perilaku yang tidak islami.{'\n'}
					<Text style={{fontWeight: 'bold'}}>
					{'\n'}b.	Terjadi internalisasi nilai Islam secara kaffah (menyeluruh){'\n'}
					</Text>
					Rumah tangga islami dan segala adab Islam dipelajari dan dipraktikkan sebagai filter bagi penyakit moral di era globalisasi ini. Suami bertanggung jawab terhadap perkembangan pengetahuan keislaman istri dan anak-anaknya. Oleh sebab itu, suami-istri seharusnya memiliki pengetahuan yang cukup memadai tentang Islam.{'\n'}
					<Text style={{fontWeight: 'bold'}}>
					{'\n'}c.	Terdapat Qudwah (Keteladanan){'\n'}
					</Text>
					Qudwah (keteladanan) suami atau istri dapat dicontoh oleh anak-anak, bahkan menjadi contoh teladan di lingkungannya. Adanya pembagian tugas yang sesuai dengan syariat Islam memberikan hak dan kewajibanbagi anggota keluarga secara tepat dan manusiawi. {'\n'}
					<Text style={{fontWeight: 'bold'}}>
					{'\n'}d.	Tercukupinya kebutuhan materi secara wajar {'\n'}
					</Text>
					Hakikatnya kebutuhan  keluarga  selalu  menjadi  perioritas bagi keluarga, suami harus membiayai kelangsungan kebutuhan materi keluarganya karena hal  itu salah satu tugas utamanya. {'\n'}
					<Text style={{fontWeight: 'bold'}}>
					{'\n'}e.	Menghindari hal-hal yang tidak islami{'\n'}
					</Text>
					Banyak kegiatan atau barang-barang yang tidak islami harus disingkirkan dari dalam rumah. {'\n'}
					<Text style={{fontWeight: 'bold'}}>
					{'\n'}f.	Berperan dalam pembinaan masyarakat {'\n'}
					</Text>
					Setiap anggota keluarga islami harus memiliki semangat berdakwah yang{'\n'}
					Sementara itu, beberapa ciri keluarga sakinah dapat dilihat dari berbagai aspek, yaitu aspek lahiriah dan batiniah (psikologi), spiritual (keagamaan), dan aspek sosial.{'\n'}
       			</Text>
       			<Text style={{fontWeight: 'bold', fontSize: 15}}>
       				C. HAK DAN KEWAJIBAN SUAMI ISTRI
       			</Text>
       			<Text style={{fontWeight: 'bold'}}>
       			 	1.	Kewajiban suami kepada Istri
       			</Text>
       			<Text>
       				Secara tekstual, suami/ lelaki dalam al Quran disebut sebagai pelindung bagi istri/ perempuan dengan sebutan al Qawwam. Setidaknya ada dua hal yang menjadi alasan yang mendasari suami menjadi pelindung bagi istrinya, yakni perkara yang sifatnya natural dan sosial. Pada perkara yang bersifat natural, lelaki mempunyai fisik yang cenderung lebih kuat daripada perempuan. Sedangkan pada perkara yang sifatnya sosial adalah segala sesuatu yang dapat diusahakan, semisal harta dan lainnya.{'\n'}
					Secara umum, seorang suami mempunyai 2 kewajiban terhadap istrinya, kewajiban pertama adalah yang berhubungan dengan harta dan benda (materi), serta kewajiban kedua adalah perkara-perkara yang berhubungan dengan non benda (non materi). Kewajiban materi dari usami terhadap istrinya meliputi pemberian Mahar sebagaimana telah ditetapkan dalam al Quran, serta pemberian nafkah. Dalam pemberian nafkah harian, al Quran telah menuntun untuk memberikan nafkah sesuai dengan kadar kemampuan yang telah disepakati, serta diberikan dengan cara yang baik. {'\n'} 
					Sedangkan kewajiban yang sifatnya non materi, adalah dengan menggaulinya dengan baik, memberikan perlindungan, ketenangan, pengayoman, dan juga bimbingan terhadap istrinya. Dalam perkara menggauli istri dengan baik, al Quran telah menuntunnya sebagaimana dalam al Quran surat an Nisa ayat 19{'\n'}
					Perintah untuk mempergauli yang dimaksud dalam ayat ini adalah pergaulan suami istri yang berkenaan dengan pemenuhan kebutuhan seksual.{'\n'}
					makna menggauli istri dengan cara yang baik itu meliputi: pertama, sikap menghormati, menghargai, dan perlakuan-perlakuan yang baik, serta meningkatkan taraf hidupnya dalam bidang-bidang agama, akhlak, dan ilmu pengetahuan yang diperlukan. Kedua, menjaga dan melindungi nama baik istri. Ketiga, memenuhi kebutuhan kodrat biologisnya.
       			</Text>
       			<Text style={{fontWeight: 'bold'}}>
       			 	{'\n'}2.	Kewajiban Istri kepada Suami
       			</Text>
       			<Text>
       				Kewajiban seorang istri kepada suaminya diatur dalam Islam tidak dalam bentuk materi. Kewajiban ini lebih bersifat non materi, {'\n'}
					Selain itu, begitu banyak hadits yang menjelaskan tentang keutamaan seorang istri pada saat memenuhiu kewajiban untuk taat pada suaminya. Seperti hadits yang diriwayatkan oleh Imam Ahmad, Ibn Hibban, dan Thabbrani, dimana Rasulullah bersabda, “seorang perempuan (istri) yang menjaga shalat 5 waktunya, shaum di bulan ramadhan, menjaga kehormatannya, dan mematuhi perintah suaminya, maka perempuan tersebut akan dijemput di akherat supaya masuk melalui pintu mana saja yang ia inginkan.”{'\n'}
					Kepatuhan seorang istri kepada suaminya, tentunya saja mempunyai batasan yang jelas. Kepatuhan tersebut adalah kepatuhan dalam rangka taat kepada Allah swt. Apabila perintah suami tersebut bernilai maksiat, dan dalam rangka membantah perintah Allah, maka seorang istri diperbolehkan untuk menolak perintah tersebut. Hal tersebut sejalan dengan sabda rasulullah, “Tidak ada kewajiban taat kepada siapapun, apabila diperintahkan untuk maksiat kepada Allah”{'\n'}
       			</Text>
       			<Text style={{fontWeight: 'bold', fontSize: 15}}>
       				D. PEMBINAAN ANAK DALAM ISLAM
       			</Text>
       			<Text>
	       			Selain pembinaan keluarga, tidak kalah pentingnya dalam pembangunan keluarga yang sakinah adalah pembinaan anak. Pendidikan anak mendapatkann posisi penting dalam islam, mengingat baik buruknya akhlak anak sangat tergantung dari bagaimana keluarga mendidiknya. {'\n'}
					Sementara itu, setelah kehidupan keluarga itu berjalan dan sang anak sudah dikaruniakan oleh Allah dalam kandungan sang calon ibu, maka pembinaan anak dilanjutkan melalui proses pembinaan pra natal. Metode   pra-natal   yang   dapat diaplikasikan oleh ibu adalah metode berikut ini: {'\n'}
					{'\n'}a.  Metode kasih sayang{'\n'}
					b.	Metode beribadah.{'\n'}
					c.	Metode membaca Al-Qur’an.{'\n'}
					d.	Metode bercerita.{'\n'}
					e.	Metode berdoa.{'\n'}
					f.	Metode bernasyid (bernyanyi).{'\n'}
					g.	Metode kebiasaan.{'\n'}
					{'\n'}Setelah anak lahir, maka pembinaan anak sebagaimana dijelaskan oleh Abdullah Nashih Ulwan sebagaimana dikutip oleh Masganti mengemukakan  beberapa metode yang dapat dipilih antaranya:{'\n'}
					{'\n'}a.	Metode keteladanan{'\n'}
					b.	Metode pembiasaan{'\n'}
					c.	Metode nasehat{'\n'}
					d.	Metode hukuman{'\n'}
					{'\n'}Adapun materi yang dapat dikembangkan dalam pembinaan terhadap anak menurut Abdullah Nashih Ulwan adalah keimanan, akhlak , fisik ,rasio, psikis, sosial, seksual. {'\n'}
       			</Text>
       			<Text style={{fontWeight: 'bold', fontSize: 15}}>
       				E. KEWAJIBAN ORANGTUA TERHADAP ANAK
       			</Text>
       			<Text>
       				Kewajiban tersebut, dengan sendiri menjadi hak yang harus didapatkan oleh anak dari orangtuanya. Adapun secara khusus, orangtua mempunyai kewajiban untuk menjaga fitrah anak agar tumbuh dan berkembang dengan baik sesuai dengan kehendak Allah SWT. Untuk itu, maka orang tua mempunyai kewajiban, yaitu {'\n'}
					{'\n'}a.	Menjaga keselamatan anak, sejak dalam kandungan maupun setelah anak tersebut lahir. {'\n'}
					b.	Memberikan nama yang terbaik untuk sang anak, dan selalu mendoakan kebaikan untuk anak.{'\n'}
					c.	Mencukupi kebutuhan anak akan hal-hal yang sifatnya materi sesuai dengan kadar kemampuannya. Termasuk ke dalam hal ini adalah makanan, pakaian, tempat tidur, dan kebutuhan materi lainnya.{'\n'}
					d.	Mendidik anaknya dengan baik, apakah melalui proses pendidikan di rumah atau melalui lembaga pendidikan di luar rumah. Pendidikan ini meliputi penanaman ilmu pengetahuan, keterampilan, maupun sikap kepada sang anak.{'\n'}
					e.	Menikahkan anak setelah anak tersebut dewasa, hal ini sebagaimana sabda Rasulullah SAW, “kewajiban Bapak kepada anaknya adalah memberikan dia nama yang baik, mengajarkan dia kesopanan, menulis, berenang dan memanah, jangan berikan ia kecuali barang yang baik dan kawinkan ia apabila telah dewasa” (HR. Hakim){'\n'}
       			</Text>
       			<Text style={{fontWeight: 'bold', fontSize: 15}}>
       				F. KEWAJIBAN ANAK TERHADAP ORANGTUA
       			</Text>
       			<Text>
       				Diantara yang paling berjasa dalam kehidupan sang anak, adalah orangtuanya. Sang anak mungkin tidak bisa memilih lahir dari orang yang bagaimana, namun begitu sang anak sejatinya menerima kondisi apapun orangtuanya. Tidak banyak mengeluh, karena rasa sakit yang dirasakan sang ibu ketika mengandung dan melahirkan, maupun letih yang dirasakan sang ayah ketika menafkahi keluarga, tidak akan pernah bisa dibalas oleh sang anak {'\n'}
					Atas dasar hal tersebut, maka ada beberapa kewajiban anak terhadap orangtuanya,{'\n'}
					{'\n'}a.	Mematuhi orangtuanya,{'\n'}
					b.	Senantiasa memuliakan orang tua,{'\n'}
					c.	Berkata dengan baik dan lemah lembut kepada orang tua,{'\n'}
					d.	Merendahkan diri dan selalu mendoakan keduanya,{'\n'}
					e.	Pada saat mereka wafat, berusahalah untuk berada di sampingnya. Menemani di akhir hidupnya, mengurus jenazahnya dengan cara memandikannya, mengkafani, menyolatkan, serta menguburkan jasadnya ke liang lahat.
       			</Text>
	       		</ScrollView>
	       		</View>
	       	);
	       }
	   }