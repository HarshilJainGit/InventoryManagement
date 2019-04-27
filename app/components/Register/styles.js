import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	heading: {
		fontSize:25,
		textAlign: 'center',
		color:'white',
	},
	
	parent:
	{
		flex:1,
		justifyContent:'center',
	},

	backGroundImage:
	{
		flex:1,
		alignSelf:'stretch',
		width: null,
		justifyContent:'center',

	},
	content:
	{
		alignItems:'center',
	},
	logo:
	{
		color: 'white',
		fontWeight: 'bold',
		textShadowColor: '#252525',
		textShadowOffset: {width:2, height:2},
		textShadowRadius: 20,
		marginBottom: 20,
		alignItems:'center',
		textAlign: 'center',
		justifyContent:'center',

	},
	inputContainer:
	{
		margin:20,
		marginBottom: 0,
		padding: 20,
		paddingBottom: 10,
		alignSelf: 'stretch',
		borderWidth:1,
		borderColor: '#fff',
		backgroundColor:'rgba(255,255,255,0.2)',
	},
	input:
	{
		fontSize:20,
		height: 40,
		padding: 10,
		marginBottom: 10,
		backgroundColor:'rgba(255,255,255,1)',
	},
})