import 'react-native-gesture-handler';
import * as React from 'react';

import { Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

export const titles = [
  'Konsep Ketuhanan',
  'Peran Agama dalam Kehidupan Manusia',
  'Pokok Ajaran Islam',
  'Al-Qur\'an',
  'Sunnah',
  'Memahami ijtihad',
  'Konsep Manusia dalam Islam',
  'Relasi antar Manusia dalam Islam',
  'Relasi Manusia dan Alam',
  'Peradaban Islam',
  'IPTEK dalam Islam',
  'Etos Kerja dan Profesi',
  'Urgensi softskill dalam Dunia Kerja',
  'Kepemimpinan Islam',
  'Pembinaan Keluarga Islam'
]

var chapterButtons = [];

export default function MaterialsScreen({ navigation }) {
  chapterButtons = titles.map(generateButtons);

  function generateButtons(value, index) {
    return <Button mode="contained" onPress={() => navigation.navigate('Chapter' + (index + 1))}>Bab {index + 1}</Button>;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {chapterButtons}
    </ScrollView>
  );
}

