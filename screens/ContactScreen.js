import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animateable from 'react-native-animatable';

const ContactScreen = () => {
	return (
		<ScrollView>
			<Animateable.View animation='fadeInDown' duration={2000} delay={1000}>
				<Card wrapperStyle={{ margin: 20 }}>
					<Card.Title>Contact Information</Card.Title>
					<Card.Divider />
					<Text>1 Nucamp Way</Text>
					<Text>Seattle, WA 98001</Text>
					<Text style={{ marginBottom: 10 }}>U.S.A.</Text>
					<Text>Phone: 1-206-555-1234</Text>
					<Text>Email: campsites@nucamp.co</Text>
				</Card>
			</Animateable.View>
		</ScrollView>
	);
};
export default ContactScreen;
