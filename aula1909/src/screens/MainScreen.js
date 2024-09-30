import { useContext } from "react"
import { Button, Text, TextInput, View } from "react-native"

export default function MainScreen() {
    const transactionProps = {
        id:Math.random(),
        transaction:transactionText,
        transactionValue: transactionValue
    }
    const {transactions, addTransaction, removeTransaction} = useContext(TransactionContext)
    const [transactionText, setTransactionText] = useState('')
    const [transactionValue, setTransactionValue] = useState(0)
    return (
        <View style={styles.container}>
            <TextInput placeholder="Adicionar nova transação" value={transactionText} onChangeText={setTransactionText}/>
            <TextInput placeholder="Valor da transação" value={transactionValue} onChangeText={setTransactionValue}/>
            <Button title="Adicionar transação" onPress={() => addTransaction(transactionProps)}/>
            <Text>
                {transactions.map((t) =>(
                    <Text key={t.id}>A transação {t.transactions} tem o valor de: {t.transactionValue}</Text>
                ))}

            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    containter:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent
    }
})    
