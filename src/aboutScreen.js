import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, ScrollView, Image } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default function AboutScreen() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image
                source={require("./../assets/images/icons/Icon-256px.png")}
            />
            <Text>
                MAI merupakan singkatan dari Materi Agama Islam. Aplikasi ini menyediakan materi untuk mata kuliah Agama Islam di Politeknik Negeri Bandung.
                Materi disiapkan sedemikian rupa agar lebih mudah dibaca dan dipahami. {"\n\n"}

                Aplikasi ini juga dilengkapi dengan pemutar audio untuk dalil yang bersumber dari Al-Qur'an.abs
                Cara penggunaannya adalah dengan menekan dalil yang ada kemudian mendengarkannya. Apabila ingin dihentikan, tekan sekali lagi. {"\n\n"}

                Selain itu, aplikasi ini juga dilengkapi navigasi untuk ke bab lain. Caranya dengan swipe ke kanan ketika di halaman suatu bab.
                Kemudian, Anda dapat pindah ke bab lainnya dengan menekan salah satu judul bab {"\n\n"}

                Pengerjaan aplikasi ini dilakukan oleh mahasiswa D4 - Teknik Informatika kelas 1A angkatan 2019. Selengkapnya, kunjungi kami di:{"\n"}
            </Text>
            <Hyperlink
                linkDefault
                linkText={url => url === 'https://www.instagram.com/d4mbiz_2019/' ? 'd4mbiz_2019' : url}
                >
                <Text>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require("./../assets/images/instagramLogo.png")}
                    />
                    https://www.instagram.com/d4mbiz_2019/
                {"\n\n"}
                </Text>
            </Hyperlink>
            <Text>

            </Text>
        </ScrollView>
    );
}