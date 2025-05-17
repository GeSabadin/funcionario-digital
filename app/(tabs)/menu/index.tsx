import { StyleSheet, Text, View } from 'react-native';

const letters = [
  { char: 'j', top: 40, left: 30 },
  { char: 'o', top: 80, left: 120 },
  { char: 'h', top: 150, left: 60 },
  { char: 'n', top: 200, left: 200 },
  { char: ' ', top: 60, left: 90 },
  { char: 'W', top: 120, left: 180 },
  { char: 'i', top: 170, left: 100 },
  { char: 'l', top: 220, left: 40 },
  { char: 'l', top: 90, left: 250 },
  { char: 'i', top: 200, left: 140 },
  { char: 'a', top: 60, left: 200 },
  { char: 'n', top: 250, left: 100 },
  { char: ' ', top: 130, left: 60 },
  { char: 'é', top: 180, left: 250 },
  { char: ' ', top: 210, left: 180 },
  { char: 'b', top: 100, left: 60 },
  { char: 'o', top: 250, left: 200 },
  { char: 'b', top: 180, left: 30 },
  { char: 'o', top: 220, left: 250 },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      {letters.map((item, idx) => (
        <Text
          key={idx}
          style={[
            styles.letter,
            { top: item.top, left: item.left },
          ]}
        >
          {item.char}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  letter: {
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D3D47',
  },
});