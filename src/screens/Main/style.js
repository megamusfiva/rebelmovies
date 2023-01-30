import { PixelRatio } from "react-native";

export default {
	container: {
		flex: 1,
		backgroundColor: '#1D1D1D'
	},

	cardHeader: {
		backgroundColor: '#FFF',
		height: '100%',
	},

	backgroundCard: {
		height: '100%',
	},

	absoluteCardView: {
		position: 'absolute',
		bottom: '5%',
		padding: 15,
	},

	backgroundCardWraper: {
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.3)',
		position: 'absolute',
	},

	tagCard: {
		backgroundColor: 'rgba(15, 239, 253, 0.1);',
		color: '#0FEFFD',
		padding: 10,
		width: 80,
		marginBottom: 10
	},

	textCard: {
		fontSize: 32,
		fontWeight: '800',
		color: '#FFF',

	},

	buttonCard: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		borderColor: '#FFE922',
		borderWidth: 1,
		borderRadius: 60 / PixelRatio.get(),
		color: '#FFF',
		alignSelf: 'flex-start',
		marginTop: 10
	},

};