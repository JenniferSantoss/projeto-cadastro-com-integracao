import firebase from "../config";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    
    conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentShapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            await this.colecao()doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colection().add(cliente)
            const doc = await decRef.get()
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }

    async excluir(cliente: Cliente): Promise<void> {
        return null
    }

    async obterTodos(): Promise<Cliente[]> {
        return null
    }
}