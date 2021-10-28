import { Dimensions, StyleSheet } from "react-native"
import { theme } from '../../Utils/Theme';
const largura = Dimensions.get('window').width
const altura = Dimensions.get('window').height
export default StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    //backgroundColor: '#ffffff'
    backgroundColor: '#003366'
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 50,
    //backgroundColor:'#fff',
    borderRadius: 15,
  },
  cadastrar: {
    width: 65,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 50,
    marginEnd: '40%',
    //backgroundColor:'#fff',
    borderRadius: 15,
  },
  opcoes: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    margin: 15,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.primary,
  },
  versao: {
    fontSize: 10,
    textAlign: 'center',
    color: '#FFCC0A',
    fontWeight: 'bold',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})