const adviceData = [
  {
    advice:
      'Cultive o hábito da gratidão; a vida fica mais leve quando aprendemos a valorizar o que temos.',
    image: require('@assets/gratitude.png'),
  },
  {
    advice:
      'Não adie para amanhã o que você pode fazer hoje. A procrastinação só atrasa o caminho para o sucesso.',
    image: require('@assets/procrastination.png'),
  },
  {
    advice:
      'Seja gentil sempre. As palavras têm poder, e um gesto amável pode fazer toda a diferença na vida de alguém.',
    image: require('@assets/kindness.png'),
  },
  {
    advice:
      'Aprenda com o passado, viva o presente e construa o futuro. Cada momento é uma oportunidade única.',
    image: require('@assets/learning.png'),
  },
  {
    advice:
      'Não compare sua jornada com a dos outros. Cada pessoa tem sua própria história e tempo de crescimento.',
    image: require('@assets/respect.png'),
  },
  {
    advice:
      'Priorize o equilíbrio entre trabalho e descanso. O corpo e a mente precisam de pausas para funcionar melhor.',
    image: require('@assets/balance.png'),
  },
  {
    advice:
      'Aceite as mudanças como parte natural da vida. A resiliência é uma habilidade valiosa.',
    image: require('@assets/resilience.png'),
  },
  {
    advice:
      'Invista em conhecimento. A aprendizagem contínua é a chave para o desenvolvimento pessoal e profissional.',
    image: require('@assets/knowledge.png'),
  },
  {
    advice:
      'Cuide da sua saúde física e mental. O bem-estar é a base para uma vida plena e realizada.',
    image: require('@assets/health.png'),
  },
  {
    advice:
      'Não tenha medo de falhar. Cada erro é uma oportunidade de aprendizado e crescimento.',
    image: require('@assets/growth.png'),
  },
]

const intervalInMinutes = 5 * 1000 * 60 // 5 minutes

function getRandomAdvice() {
  const randomIndex = Math.floor(Math.random() * adviceData.length)
  const randomAdvice = adviceData[randomIndex]

  return {
    advice: randomAdvice.advice,
    image: randomAdvice.image,
  }
}

export { adviceData, intervalInMinutes, getRandomAdvice }
