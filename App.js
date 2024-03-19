import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [count, setCount] = useState(0);

	const decreaseCounter = () => {
		setCount(count > 0 ? count- 1 : 0);
		console.log(count);
	}

	const increaseCounter = () => {
		setCount(count + 1);
		console.log(count);
	}

	return (
		<View style={styles.container}>
			<Button title="Increase" onPress={decreaseCounter}/>
			<Text style={styles.counter}>Counter: {count}</Text>
			<Button title="Decrease" onPress={increaseCounter}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#20516c',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	counter: {
		fontSize: 20,
		color: "#fff"
	}
});
