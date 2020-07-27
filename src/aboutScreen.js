import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, ScrollView, Image } from 'react-native';

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

                Pengerjaan aplikasi ini dilakukan oleh mahasiswa D4 - Teknik Informatika kelas 1A angkatan 2020. Selengkapnya, kunjungi kami di:{"\n"}
                (logo IG) (link IG kelas)
            </Text>
        </ScrollView>
    );
}