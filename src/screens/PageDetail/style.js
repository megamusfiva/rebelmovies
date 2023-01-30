import { PixelRatio } from "react-native";

export default {
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10
	},

	column: {
		flex: 1,
		flexDirection: 'column'
	},

	iconYellow: {
		color: '#FFE922',
		fontSize: 14,
		fontWeight: '800'
	},

	iconWhite: {
		color: '#FFF'
	},

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

	viewCard: {
		flexDirection: 'row',
	},

	tagCard: {
		flexDirection: 'row',
		backgroundColor: 'rgba(15, 239, 253, 0.1);',
		color: '#0FEFFD',
		marginBottom: 10
	},

	dotIcon: {
		color: '#FFF',
		paddingLeft: 10,
		paddingRight: 10,
	},

	textCard: {
		fontSize: 32,
		fontWeight: '800',
		color: '#FFF',
	},

	textDetail: {
		fontSize: 20,
		fontWeight: '800',
		color: '#FFF',
		padding: 15
	},

	textRelease: {
		fontSize: 12,
		color: '#FFF',
	},

	textDesc: {
		fontSize: 14,
		color: '#FFF'
	},

	text: {
		fontSize: 14,
		fontWeight: '800',
		color: '#FFF'
	},

	line: {
		borderBottomColor: '#FFF',
		borderBottomWidth: 0.24
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

	viewContainer: {
		padding: 15,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#242424'
	},

	containerCast: {
		flexDirection: 'row',
		padding: 15,
		marginBottom: 10
	},

	containerListCast: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},

	containerEp: {
		padding: 10
	},

	backgroundVideo: {
		flex: 1,
		width: 100,
		height: 100,
	}
};