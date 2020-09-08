import "react-native-gesture-handler";
import * as React from "react";

import { StyleSheet, Text, ScrollView, Image } from "react-native";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ color: "#fff" }}>
          MAI merupakan singkatan dari Materi Agama Islam. Aplikasi ini
          menyediakan materi untuk mata kuliah Agama Islam di Politeknik Negeri
          Bandung. Materi disiapkan sedemikian rupa agar lebih mudah dibaca dan
          dipahami. {"\n\n"}
          Aplikasi ini juga dilengkapi dengan pemutar audio untuk dalil yang
          bersumber dari Al-Qur'an.abs Cara penggunaannya adalah dengan menekan
          dalil yang ada kemudian mendengarkannya. Apabila ingin dihentikan,
          tekan sekali lagi. {"\n\n"}
          Selain itu, aplikasi ini juga dilengkapi navigasi untuk ke bab lain.
          Caranya dengan swipe ke kanan ketika di halaman suatu bab. Kemudian,
          Anda dapat pindah ke bab lainnya dengan menekan salah satu judul bab{" "}
          {"\n\n"}
          Aplikasi ini merupakan hasil kolaborasi antara Dosen PAI dengan Kelas
          D4 - Teknik Informatika kelas 1A Tahun 2019 Jurusan Teknik Komputer
          Politeknik Negeri Bandung.
          {"\n\n"}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007f5f",
    padding: 20,
  },
});
