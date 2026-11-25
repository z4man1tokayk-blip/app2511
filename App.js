import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// Array com 8 opções temáticas de lanches e pausas para o café
const OPCOES_LANCHE = [
  {
    id: 1,
    titulo: 'Café Coado + Pão de Queijo',
    descricao: 'Clássico que abraça qualquer tarde chuvosa ou dia corrido.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 2,
    titulo: 'Tapioca com Queijo e Coco',
    descricao: 'Leve, quentinha e pronta em poucos minutos na frigideira.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 3,
    titulo: 'Torrada com Abacate e Ovo',
    descricao: 'Sustenta bem e traz energia limpa para o meio da tarde.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 4,
    titulo: 'Bolo de Cenoura com Cobertura',
    descricao: 'Difícil errar quando bate aquela vontade de um doce caseiro.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 5,
    titulo: 'Sanduíche Natural de Frango',
    descricao: 'Prático, fresco e ótimo para comer sem pressa.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 6,
    titulo: 'Vitamina de Banana com Aveia',
    descricao: 'Cremosa, rápida de bater e ideal para recuperar o ritmo.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 7,
    titulo: 'Cuscuz Quentinho com Manteiga',
    descricao: 'Aconchego puro no prato — simples e cheio de memória afetiva.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    },
  },
  {
    id: 8,
    titulo: 'Iogurte com Granola e Mel',
    descricao: 'Equilíbrio entre crocância e leveza para encerrar a tarde.',
    imagem: {
      uri: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    },
  },
];

// 1. Classe App estendendo Component (POO)
export default class App extends Component {
  // 3. Constructor para inicializar o estado da aplicação
  constructor(props) {
    super(props);

    // 4. Estado inicial com o primeiro item exibido e contador de sorteios
    this.state = {
      opcaoAtual: OPCOES_LANCHE[0],
      totalSorteios: 0,
    };

    // Garante o contexto de 'this' dentro da função de sorteio
    this.sortearOpcao = this.sortearOpcao.bind(this);
  }

  // 6. Função principal que sorteia um novo item e altera o estado
  sortearOpcao() {
    // 7. Math.random() e Math.floor() escolhem um índice válido do array (0 a 7)
    const indiceAleatorio = Math.floor(Math.random() * OPCOES_LANCHE.length);
    const novaOpcao = OPCOES_LANCHE[indiceAleatorio];

    // 8. Atualiza a interface com o novo item e a nova imagem
    this.setState((estadoAnterior) => ({
      opcaoAtual: novaOpcao,
      totalSorteios: estadoAnterior.totalSorteios + 1,
    }));
  }

  render() {
    const { opcaoAtual, totalSorteios } = this.state;

    // 2. Uso de View, Text, Image e TouchableOpacity
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />

        {/* Cabeçalho com identidade visual própria */}
        <View style={styles.header}>
          <Text style={styles.tagApp}>SABOR DO DIA</Text>
          <Text style={styles.tituloApp}>Sua pausa, sem dúvida</Text>
          <Text style={styles.subtituloApp}>
            Toque no botão e deixe a escolha do lanche por nossa conta.
          </Text>
        </View>

        {/* Cartão central com imagem dinâmica e informações */}
        <View style={styles.card}>
          {/* 10. Imagem que muda conforme o item sorteado */}
          <Image
            source={opcaoAtual.imagem}
            style={styles.imagem}
            resizeMode="cover"
          />

          <View style={styles.cardConteudo}>
            <Text style={styles.badge}>SUGESTÃO ATUAL</Text>
            <Text style={styles.nomeOpcao}>{opcaoAtual.titulo}</Text>
            <Text style={styles.descricaoOpcao}>{opcaoAtual.descricao}</Text>
          </View>
        </View>

        {/* Rodapé com ação principal e contador discreto */}
        <View style={styles.acoes}>
          {/* 9. Evento onPress acionando a função de sorteio */}
          <TouchableOpacity
            style={styles.botao}
            onPress={this.sortearOpcao}
            activeOpacity={0.85}
          >
            <Text style={styles.textoBotao}>Sortear nova opção</Text>
          </TouchableOpacity>

          <Text style={styles.contador}>
            Sugestões geradas hoje: {totalSorteios}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

// 11. Estilização da interface com StyleSheet.create() (preto + laranja vivo)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  header: {
    marginTop: 8,
  },
  tagApp: {
    color: '#FF5A00',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 6,
  },
  tituloApp: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtituloApp: {
    color: '#A3A3A3',
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#161616',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#262626',
  },
  imagem: {
    width: '100%',
    height: 220,
    backgroundColor: '#1F1F1F',
  },
  cardConteudo: {
    padding: 20,
  },
  badge: {
    color: '#FF5A00',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  nomeOpcao: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  descricaoOpcao: {
    color: '#CCCCCC',
    fontSize: 15,
    lineHeight: 22,
  },
  acoes: {
    gap: 12,
  },
  botao: {
    backgroundColor: '#FF5A00',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#0D0D0D',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  contador: {
    color: '#8C8C8C',
    fontSize: 13,
    textAlign: 'center',
  },
});