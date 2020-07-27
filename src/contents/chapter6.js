import React, {Component} from 'react';
import { FlatList, Text, View, ScrollView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UnorderedList from 'react-native-unordered-list';
import Dalil from "../dalil/dalil";
import AppIntroSlider from 'react-native-app-intro-slider';

const Drawer = createDrawerNavigator();

export default class Chapter6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
            hukum: ['Wajib ain, yaitu bagi seorang yang faqih yang dimintai fatwa hukum mengenai suatu peristiwa yang terjadi.','Wajib Kifayah, yaitu bagi mereka yang dimintai fatwa hukum suatu peristiwa, sedangkan hanya dia seorang faqih yang dapat melakukan ijtihad, yang tidak dikhawatirkan peristiwa tersebut akan lenyap.','Sunnah, yaitu apabila melakukan ijtihad mengenai masalah-masalah yang belum atau tidak terjadi.','Mubah, yaitu apabila melakukan ijtihad mengenai masalah-masalah yang belum atau sudah  terjadi dalam kenyataan.','Haram, yaitu apabila melakukan ijtihad mengenai masalah-masalah yang telah ada hukumnya dan telah ditetapkan berdasarkan dalil-dalil yang sharih, dan qath’i.'],
            syaratUlama: ['Memiliki pengetahuan bahasa Arab dengan segala cabangnya.','Mengetahui nas-nas Alquran perihal hukum-hukum syara’ yang dikandungnya, ayat-ayat hukumnya, dan cara meng-istinbāṭ-kan hukum darinya.','Mengetahui nash-nash hadis.','Mengetahui maqāṣid al-syarī’ah, tingkah laku dan adat kebiasaan manusia yang mengandung maslahat dan madarat, serta ‘illat hukum dan dapat menganalogikan peristiwa dengan peristiwa yang lain.'],
            delapanSyarat: ['Mengetahui bahasa Arab','Mengetahui ilmu Al-Qur’an; nāsikh dan mansūkh-nya','Mengetahui dengan baik sunnah','Mengetahui posisi-posisi ijmak dan kontroversialitas','Mengetahui analogi (al-qiyās)','Mengetahui maqāṣid al-aḥkām','Memiliki pemahaman dan pandangan yang sehat','Memiliki niat yang niat dan iktikad yang bersih dan lurus'],
            }
        }
    }

    render() {
        let hukumList = this.state.data.hukum.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
        })
        let syaratUlamaList = this.state.data.syaratUlama.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
        })
        let delapanSyaratList = this.state.data.delapanSyarat.map((dataList, index) => {
            return(
              <Text key={index}> - {dataList} </Text>
            )
        })

        return (
            <View style={{flex: 1 }}>
            <ScrollView>
            <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
            A. Pendahuluan
            </Text>
            <Text>
            Dalam mencari pemecahan melalui jalur agama ini, seringkali umat Islam mengalami kesulitan, karena kehidupan dan peradaban terus bergulir serta berkembang, sedangkan agama apabila hanya didasarkan kepada Al-Qur’an dan Hadits, akan mengalami kesulitan. 
            Hal tersebut karena Al-Qur’an hanya memuat prinsip-prinsip utama dalam memberikan petunjuk. 
            Di sisi lain, Hadis yang bersumber dari Rasulullah saw sudah tidak mungkin lagi muncul, karena Rasulullah saw sendiri sudah wafat. 
            Atas dasar itu, maka para ulama dimulai dari kalangan sahabat mencoba mencari solusi dari permasalahan dalam kehidupan dengan jalan penggalian hukum Islam melalui konsep yang dinamakan sebagai ijtihad.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            {"\n"}
            Menurut Ulama Ushul Fiqh
            </Text>
            <Text>
            Sunnah merupakan setiap yang datang dari rasulullah saw selain al-quran baik berupa perkataan, perbuatan, maupun ketetapan yang dapat dijadikan sebagai dalil dalam menetapkan hukum syariat.
            
            </Text>

            <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
            {"\n"}
            B. Makna serta fungsi dan kedudukan ijtihad
            </Text>
            <Text>
            Secara etimologi ijtihad yaitu berasal dari bahasa Arab, yaitu “ijtahada-yajtahidu-ijtihadan” artinya mengerahkan segala kemampuan dalam menanggung beban. Adapun terminologi ijtihad yaitu mencurahkan dan mengeluarkan semua kemampuan akal dan pikiran untuk mengetahui atau menetapkan hukum atau syari’at.
            Asy-Syahrastani mengatakan bahwa kejadian-kejadian dan kasus-kasus dalam peribadatan dan muamalah (tindakan manusia) termasuk yang tidak dapat dihitung. Secara pasti dapat diketahui bahwa tidak setiap kasus ada nashnya.
            Perkembangan nash sudah berakhir dengan wafatnya Rasulullah saw, sedangkan kejadian-kejadiannya berlangsung terus tanpa batas; dan tatkala sesuatu yang terbatas tidak mungkin dapat mengikuti sesuatu yang tidak terbatas, maka qiyas wajib dipakai sehingga setiap kasus ada solusi mengenainya.Para ulama membagi hukum untuk melakukan ijtihad dengan lima  bagian (Syarifuddin, 1997), yaitu :
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                a. Wajib ain, 
                </Text>
                <Text>
                yaitu bagi seorang yang faqih yang dimintai fatwa hukum mengenai suatu peristiwa yang terjadi.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                b. Wajib Kifayah, 
                </Text>
                <Text>
                yaitu bagi mereka yang dimintai fatwa hukum suatu peristiwa, sedangkan hanya dia seorang faqih yang dapat melakukan ijtihad, yang tidak dikhawatirkan peristiwa tersebut akan lenyap.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                c. Sunnah, 
                </Text>
                <Text>
                yaitu apabila melakukan ijtihad mengenai masalah-masalah yang belum atau tidak terjadi.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                d. Mubah, 
                </Text>
                <Text>
                yaitu apabila melakukan ijtihad mengenai masalah-masalah yang belum atau sudah  terjadi dalam kenyataan.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                e. Haram, 
                </Text>
                <Text>
                yaitu apabila melakukan ijtihad mengenai masalah-masalah yang telah ada hukumnya dan telah ditetapkan berdasarkan dalil-dalil yang sharih, dan qath’i.
                </Text>
            </Text>
            <Text>
            {"\n"}
            Kedudukan ijtihad adalah sumber hukum ketiga setelah yang pertama Al-Qur’an dan yang kedua Hadis. Untuk mencapai fungsi dan tujuannya di atas, maka tidak sembarang orang dapat melakukan ijtihad, ada syarat-syarat yang harus dipenuhi oleh seorang yang berijtihad (mujtahid). Pada umumnya, syarat-sayat ijtihad yang dikemukakan oleh para ulama usul fikih berfokus pada empat hal (Yahya, 1986).
            </Text>
            {syaratUlamaList}
            <Text>
            {"\n"}
            Dalam kitab Uṣūl al-fiqh, Muḥammad Abū Zahrah mengajukan delapan syarat, yaitu
            </Text>
            {delapanSyaratList}

            <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
            {"\n"}
            C. Metode dan pola ijtihad
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                Ijtihad Al-Bayani, 
                </Text>
                <Text>
                yaitu ijtihad untuk menjelaskan hukum-hukum syara’ yang terkandung dalam nash namun sifatnya masih zhonni baik dari segi penetapannya maupun dari segi penunjukannya. Ijtihad ini hanya memberikan penjelasan hukum yang pasti dari dalil nash tersebut. Sebagai contoh yaitu menetapkan keharusan ber’iddah tiga kali suci terhadap isteri yang dicerai dalam keadaan tidak hamil dan pernah dicampuri. (QS al-Baqarah ayat 228)
                </Text>
            </Text>

            <Text>
                {"\n"}
                <Text style={{fontWeight : 'bold'}}>
                Ijtihad Ta’lili/Al-Qiyasi,
                </Text>
                <Text>
                yaitu ijtihad untuk menggali dan menetapkan hukum terdapat permasalahan yang tidak terdapat dalam Al-Qur’an dan sunnah dengan menggunakan metode qiyas.  Dalam ijtihad qiyasi ini hukumnya memang tidak tersurat tetapi tersirat dalam dalil yang ada. Untuk mencari hukum tersebut
                diperlukan ijtihad qiyasi. Contoh hukum memukul kedua orang tua yang diqiyaskan dengan mengatakan ucapan “ah”.(Q.S al-Isra’: 23)
                </Text>
            </Text>

            <Text>
                {"\n"}
                <Text style={{fontWeight : 'bold'}}>
                Ijtihad Istishlahi,
                </Text>
                <Text>
                Menurut Muhammad Salam Madkur ijtihad istishlahi adalah pengorbanan kemampuan untuk sampai kepada hukum syara’ (Islam) dengan menggunakan pendekatan  kaidah-kaidah  umum (kulliyah), yaitu mengenai masalah yang mungkin digunakan pendekatan kaidah-kaidah umum tersebut, dan tidak ada nash yang khusus atau dukungan ijma’ terhadap masalah itu. Selain itu, tidak mungkin pula diterapkan metode qiyas atau metode istihsan terhadap masalah itu.
                </Text>
            </Text>

            <Text>
            {"\n"}
            Para ulama mendeskripsikan pola atau jenis ijtihad ke dalam berbagai istilah sesuai dengan konteks permasalahan yang dihadapinya, diantaranya ialah:
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                a. Ijma’{" "}
                </Text>
                <Text>
                ialah kesepakatan pengambilan hukum yang diambil dari fatwa atau musyawarah para ulama tentang suatu perkara yang tidak ditemukan hukumnya di dalam Al-Quran ataupun Hadis.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                b. Qiyas{" "}
                </Text>
                <Text>
                adalah menyamakan atau mengibaratkan, dengan pengertian lain yaitu menetapkan suatu hukum dalam suatu perkara baru yang belum pernah ada pada masa sebelumnya namun memiliki kesamaan seperti sebab, manfaat, bahaya atau  berbagai aspek dalam perkara sebelumnya sehingga dihukumi sama.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                c. Maslahah mursalah{" "}
                </Text>
                <Text>
                ialah suatu cara menetapkan atau mengambil hukum  berdasarkan atas pertimbangan kegunaan dan manfaatnya.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                d. Saddu dzari’ah{" "}
                </Text>
                <Text>
                adalah memutuskan suatu perkara yang mubah menjadi makruh atau haram demi kepentingan umat.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                e. Istishab{" "}
                </Text>
                <Text>
                adalah  tindakan dalam menetapkan hukum atau suatu ketetapan sampai ada alasan yang mengubahnya.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                f. Urf{" "}
                </Text>
                <Text>
                yaitu suatu tindakan dalam menentukan suatu perkara berdasarkan adat istiadat yang berlaku di masyarakat dan tidak bertentangan dengan Al-Qur’an dan Hadis.
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight : 'bold'}}>
                g. Istihsan{" "}
                </Text>
                <Text>
                yaitu suatu tindakan dengan meninggalkan satu hukum kepada hukum lainnya, disebabkan adanya suatu dalil syara’ yang mengharuskan untuk meninggalkannya.
                </Text>
            </Text>

            <Text style={{fontWeight: 'bold', color: 'brown', fontSize: 20}}>
            {"\n"}
            D. Faktor faktor yang melatarbelakangi keanekaragaman ijtihad ulama
            </Text>
            <Text>
            Terdapat beberapa faktor yang mempengaruhi terjadinya keanekaragaman hasil ijtihad yang dilakukan oleh seorang mujtahid dalam menggali hukum-hukum baru yang terjadi pada kehidupan umat Islam dan tidak atau belum diatur sebelumnya di dalam Al-Qur’an maupun Hadis, yaitu:  
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            {"\n"}
            Perbedaan metode memahami ayat al-qur’an
            </Text>
            <Text>
            Terjadinya perbedaan di kalangan mereka disebabkan oleh hal-hal sebagai berikut:{"\n"}
            a. Adanya perbedaan wawasan dan pengetahuan para sahabat, karena perbedaan lamanya mereka bergaul dengan Rasulullah saw.{"\n"}
            b. Adanya “ta’arrudl al-nushush” (pertentangan antar ayat-ayat), misalnya masalah “iddah wafat” dan “iddah hamil” yang disebabkan perbedaan di dalam memahami makna lafdziyyah ayat.{"\n"}
            c. Adanya susunan ayat yang mengandung dua presepsi atau wajah, seperti ayat tentang “Ila’ (Suami bersumpah tidak akan mencampuri istrinya atau menidurinya).{"\n"}
            </Text>

            <Text style={{fontWeight : 'bold'}}>
            {"\n"}
            Perbedaan dalam metode memahami al-sunnah   
            </Text>
            <Text>
            Al-Hadis yang dikeluarkan oleh Rasulullah saw selama 22 tahun lebih itu disebabkan adanya kasus yang terjadi di tengah-tengah masyarakat pada waktu itu. Di antara kasus-kasus tersebut ada yang disepakati dan ada pula yang dibatalkan. Oleh sebab itu, para sahabat yang masuk Islam lebih dahulu, lalu waktunya dihabiskan untuk menyertai Rasulullah saw, maka wawasan mereka dalam kemampuan memahami nash, lebih sempurna dibandingkan dengan sahabat yang masuk Islamnya belakang dan waktu mereka gunakan untuk menyertai Rasulullah saw hanya sedikit.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Masalah mandi wajib pada wanita yang rambutnya tebal
            </Text>
            <Text>
                hal ini terjadi perbedaan pendapat di kalangan para sahabat, yaitu{"\n"}
                1) Umar berpendapat wanita tersebut harus menguraikan rambutnya airnya dapat merata di atas kepala.{"\n"}
                2) ‘Aisyah berpendapat setelah mendengar fatwa ‘Umar sambil merasa geli hatinya dengan mengatakan, “Benar-benar aku mandi bersama Rasulullah saw dari satu bejana, sedangkan aku tidak melebihi menuangkan air di atas kepalaku dari tiga kali siraman.”{"\n"}
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            Masalah Nasikh-Mansukh dalam al-Hadis
            </Text>
            <Text>
            Dalam hal ini terjadi perbedaan pandangan di kalangan para sahabat, yang disebabkan adanya sahabat yang belum mengetahui bahwa al-Hadis itu sudah di nasakh, seperti Ibnu Mas’ud. Sedang Hadis yang me-nasakh sudah diketahui oleh sahabat lain yang diriwayatkan oleh Sa’ad bin Abi Waqqash.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            {"\n"}
            Menyikapi Keragaman Hasil Ijtihad
            </Text>
            <Text>
            Adapun bagi kalangan berpendidikan, minimal ada dua sikap yang dapat dikembangkan dalam menyikapi keragaman hasil ijtihad, yakni :{"\n"}
            a. Memahami bahwa perbedaan pendapat di kalangan ulama adalah hal yang wajar dan sehat. Kemampuan akal setiap manusia mempunyai kadar yang berbeda-beda, karenanya kemampuan dalam menangkap isyarat yang ada dalam nash-nash syariat juga berpotensi memunculkan perbedaan pemahaman.{"\n"}
            b. Menjadi kewajiban bagi setiap muslim untuk tidak terlalu fanatik mazhab atau pemikiran seorang ulama.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            {"\n"}
            Mengetahui Peran Ijtihad dalam Pengembangan Budaya dan profesi
            </Text>
            <Text>
            Para ahli hukum Islam telah melakukan kodifikasi kaidah fiqhiyyah yang berkaitan dengan perubahan sosial dan dinamika masyarakat yang diinduksi dari nas. Kaidah-kaidah itu antara lain :{"\n"}
            a. Ahmad al Hajji menyebutkan sebuah kaidah, “Tidak dapat diingkari, perubahan hukum disebabkan oleh perubahan zaman.”{"\n"}
            b. Jalaluddin as Suyuti berpendapat bahwa, Adat kebiasaan (yang berlaku di kehidupan masyarakat) dapat menjadi hukum.{"\n"}
            c. Ibn al-Qayyim al-Jauziyyah mengemukakan suatu prinsip dalam berijtihad, yaitu berubahnya dan berbedanya fatwa itu sejalan dengan perubahan zaman, tempat, kondisi sosial, niat, dan adat kebiasaan.
            </Text>
            <Text style={{fontWeight : 'bold'}}>
            {"\n"}
            Menerapkan Nilai-nilai Ijtihad dalam Lingkungan Pendidikan, Keluarga dan pekerjaan.
            </Text>
            <Text>
            Secara garis besar, ijtihad dilakukan dengan beberapa manfaat yang diperolehnya, diantaranya yakni:{"\n"}
            a. Umat Islam memperoleh hukum baru atas permasalahan baru yang muncul seiring berkembang dan modernisasi zaman{"\n"}
            b. Memperoleh relevansi antara hukum Islam yang berlaku dalam syariat sesuai dengan kondisi zaman, keadaan, waktu juga perkembangan zaman.{"\n"}
            c. Menetapkan hukum halal-haram atas permasalahan yang muncul dan tidak membuat kesimpangsiuran hukum dalam masyarakat.{"\n"}
            d. Mempermudah dan menolong umat Islam dalam menyikapi masalah yang belum dijelaskan hukumnya.
            </Text>
            <Text>
            Atas dasar itu, nilai-nilai yang dapat diimplementasikan dalam kehidupan baik di lingkungan pendidikan, keluarga dan pekerjaan, setelah memahami urgensi ijtihad dalam ajaran Islam adalah sebagai berikut :{"\n"}
            a. Memahami nilai ketauhidan.{"\n"}
            b. Menanamkan nilai optimisme{"\n"}
            c. Menanamkan nilai toleransi{"\n"}
            d. Menanamkan pemahaman kehidupan yang dinamis dan kreatif{"\n"}
            e. Ijtihad ini maknanya bersungguh-sungguh dalam mencari jawaban dan solusi dari permasalahan yang ada dalam kehidupan beragama.
  
            </Text>
            </ScrollView>
            </View> 
        );
    }
}