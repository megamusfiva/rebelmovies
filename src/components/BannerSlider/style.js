import { PixelRatio } from "react-native";

export default {
	controls: {
		position: 'absolute',
		width: '100%',
		top: 320,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dotGroup: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 10,
		marginHorizontal: 5,
		backgroundColor: '#DDD'
	},
	dotActive: {
		width: 20,
		backgroundColor: '#E0A526',
	},
	cardHeader: {
		backgroundColor: '#FFF',
		height: '100%',
	},
	backgroundCard: {
		height: '100%',
	},
	backgroundCardWraper: {
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.3)',
		position: 'absolute',
	},
	absoluteCardView: {
		position: 'absolute',
		bottom: '5%',
		padding: 15,
	},
	tagCard: {
		// backgroundColor: 'rgba(15, 239, 253, 0.1);',
		color: '#0FEFFD',
		// padding: 10,
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