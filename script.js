// Dados do quiz
const quizData = {
    slides: [
        {
            id: 1,
            type: 'title',
            title: 'O Desafio da Equipa Digital',
            subtitle: 'Teste seus Conhecimentos em Trabalho Colaborativo e Netiqueta',
            buttonText: 'INICIAR JOGO',
            nextSlide: 2
        },
        {
            id: 2,
            type: 'rules',
            title: 'Regras do Jogo',
            rules: [
                '1. Leia atentamente o cenário e a pergunta.',
                '2. Selecione a opção que representa a melhor prática de Netiqueta/Colaboração.',
                '3. Clique na resposta para saber se acertou e prosseguir.',
                '4. Agora com cenários mais complexos e desafiantes!'
            ],
            buttonText: 'COMEÇAR',
            nextSlide: 3
        },
        {
            id: 3,
            type: 'question',
            title: 'Cenário 1: Gestão de Comunicações (Netiqueta - Email)',
            question: 'Um colega envia um email com 5 perguntas urgentes, todas escritas em MAIÚSCULAS. Qual é a melhor forma de responder?',
            options: [
                {
                    text: 'Opção A: Responder no mesmo tom (em MAIÚSCULAS) para demonstrar urgência.',
                    correct: false,
                    feedbackSlide: 5
                },
                {
                    text: 'Opção B: Responder normalmente, mencionando educadamente que escrever em MAIÚSCULAS na internet é percebido como "gritar".',
                    correct: true,
                    feedbackSlide: 4
                },
                {
                    text: 'Opção C: Ignorar a forma e responder apenas às 5 perguntas, sem comentar o tom.',
                    correct: false,
                    feedbackSlide: 6
                }
            ]
        },
        {
            id: 4,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Manter a calma e comunicar a regra de Netiqueta de forma construtiva é o ideal, sem escalar o tom.',
            nextSlide: 7
        },
        {
            id: 5,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Responder em MAIÚSCULAS piora a situação e quebra a Netiqueta.',
            nextSlide: 7
        },
        {
            id: 6,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Embora seja prático, ignorar a Netiqueta pode levar à repetição do comportamento.',
            nextSlide: 7
        },
        {
            id: 7,
            type: 'question',
            title: 'Cenário 2: Reuniões Virtuais (Colaboração)',
            question: 'Está numa reunião de equipa online com 10 pessoas e um colega está a monopolizar a discussão. Qual é a ação mais colaborativa?',
            options: [
                {
                    text: 'Opção A: Desligar a câmara e o microfone e enviar uma mensagem privada a um colega a queixar-se.',
                    correct: false,
                    feedbackSlide: 9
                },
                {
                    text: 'Opção B: Interromper a pessoa, dizendo: "Basta, a reunião não é só sobre o seu projeto!".',
                    correct: false,
                    feedbackSlide: 10
                },
                {
                    text: 'Opção C: Utilizar a funcionalidade de "Levantar a Mão" (ou o chat) para sinalizar ao moderador ou ao colega que gostaria de contribuir.',
                    correct: true,
                    feedbackSlide: 8
                }
            ]
        },
        {
            id: 8,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Usar ferramentas de moderação (mão, chat) é a forma respeitosa e eficiente de manter a ordem e garantir a inclusão de todos.',
            nextSlide: 11
        },
        {
            id: 9,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Não contribui para a reunião e mina o espírito de equipa.',
            nextSlide: 11
        },
        {
            id: 10,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Interromper de forma agressiva prejudica o ambiente de trabalho colaborativo.',
            nextSlide: 11
        },
        {
            id: 11,
            type: 'question',
            title: 'Cenário 3: Partilha de Documentos (Netiqueta)',
            question: 'Precisa de enviar um documento grande (50 MB) a toda a sua equipa por email. Qual é a melhor prática de Netiqueta?',
            options: [
                {
                    text: 'Opção A: Enviar o ficheiro diretamente como anexo a todos, sem aviso prévio.',
                    correct: false,
                    feedbackSlide: 13
                },
                {
                    text: 'Opção B: Compactar o ficheiro (.zip) e enviá-lo com a notificação: "É urgente, abram já!"',
                    correct: false,
                    feedbackSlide: 14
                },
                {
                    text: 'Opção C: Colocar o ficheiro numa plataforma de partilha na cloud (ex: OneDrive, Drive) e enviar por email apenas o link de acesso, com uma breve descrição.',
                    correct: true,
                    feedbackSlide: 12
                }
            ]
        },
        {
            id: 12,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Ficheiros grandes "entopem" as caixas de correio. Partilhar por link é a Netiqueta padrão para evitar problemas técnicos.',
            nextSlide: 15
        },
        {
            id: 13,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Ficheiros grandes sem aviso são contra a Netiqueta e podem ser bloqueados por filtros de spam.',
            nextSlide: 15
        },
        {
            id: 14,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Embora compactado, o anexo continua a ser um peso. A urgência não justifica o mau uso dos recursos.',
            nextSlide: 15
        },
        {
            id: 15,
            type: 'question',
            title: 'Cenário 4: Resolução de Conflitos (Colaboração)',
            question: 'Discorda veementemente de uma decisão tomada por um colega no chat de trabalho. Qual a melhor atitude para resolver o conflito?',
            options: [
                {
                    text: 'Opção A: Enviar uma mensagem longa e pública no chat principal, detalhando os erros do colega para que todos vejam.',
                    correct: false,
                    feedbackSlide: 17
                },
                {
                    text: 'Opção B: Marcar uma conversa privada (virtual ou presencial) para discutir o assunto com calma e apresentar a sua perspetiva.',
                    correct: true,
                    feedbackSlide: 16
                },
                {
                    text: 'Opção C: Começar uma votação no chat para ver quem concorda consigo.',
                    correct: false,
                    feedbackSlide: 18
                }
            ]
        },
        {
            id: 16,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Regra de Ouro: nunca confronte publicamente. Leve a discussão para um canal privado para um diálogo produtivo e respeitoso.',
            nextSlide: 19
        },
        {
            id: 17,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Viola a Netiqueta e cria um ambiente tóxico.',
            nextSlide: 19
        },
        {
            id: 18,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Tenta "ganhar" um voto em vez de resolver o problema de forma colaborativa e profissional.',
            nextSlide: 19
        },
        // NOVAS PERGUNTAS - NÍVEL AVANÇADO
        {
            id: 19,
            type: 'question',
            title: 'Cenário 5: Gestão de Tempo em Reuniões (Colaboração Avançada)',
            question: 'É moderador de uma reunião virtual e percebe que há 3 tópicos na agenda, mas apenas 15 minutos restantes. Dois colegas estão a debater intensamente o primeiro tópico. Como deve proceder?',
            options: [
                {
                    text: 'Opção A: Deixar o debate continuar até terminar naturalmente, mesmo que ultrapasse o tempo, pois é importante que todos se expressem.',
                    correct: false,
                    feedbackSlide: 20
                },
                {
                    text: 'Opção B: Interromper educadamente, resumir os pontos-chave, propor continuar a discussão offline entre os interessados, e avançar para os restantes tópicos.',
                    correct: true,
                    feedbackSlide: 21
                },
                {
                    text: 'Opção C: Silenciar os microfones dos dois colegas e passar imediatamente ao próximo tópico.',
                    correct: false,
                    feedbackSlide: 22
                }
            ]
        },
        {
            id: 20,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Embora valorize a participação, ignorar a gestão do tempo desrespeita os outros participantes e compromete a eficácia da reunião.',
            nextSlide: 23
        },
        {
            id: 21,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Excelente! Um bom moderador equilibra a participação com a gestão eficaz do tempo, garantindo que todos os tópicos sejam abordados e propondo soluções alternativas.',
            nextSlide: 23
        },
        {
            id: 22,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Silenciar participantes sem aviso é autoritário e desrespeitoso. A moderação eficaz requer diplomacia e comunicação clara.',
            nextSlide: 23
        },
        {
            id: 23,
            type: 'question',
            title: 'Cenário 6: Comunicação Assíncrona (Netiqueta Avançada)',
            question: 'Trabalha com uma equipa distribuída por 4 fusos horários diferentes. Precisa de uma decisão urgente sobre um projeto. Qual é a melhor estratégia de comunicação?',
            options: [
                {
                    text: 'Opção A: Enviar mensagens individuais a todos os membros da equipa através de chat, independentemente da hora local deles, marcando como "@urgente".',
                    correct: false,
                    feedbackSlide: 24
                },
                {
                    text: 'Opção B: Criar um documento partilhado com a questão, prazo claro para resposta, e enviar um email explicativo durante o horário de trabalho da maioria, permitindo respostas assíncronas.',
                    correct: true,
                    feedbackSlide: 25
                },
                {
                    text: 'Opção C: Agendar uma reunião síncrona imediata, mesmo que seja madrugada para alguns membros, pois a urgência justifica.',
                    correct: false,
                    feedbackSlide: 26
                }
            ]
        },
        {
            id: 24,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Enviar mensagens urgentes fora do horário de trabalho viola os limites pessoais e pode causar stress desnecessário. A urgência da sua perspetiva não justifica desrespeitar os fusos horários.',
            nextSlide: 27
        },
        {
            id: 25,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Perfeito! A comunicação assíncrona bem estruturada respeita os diferentes fusos horários, permite reflexão e mantém a produtividade sem comprometer o equilíbrio trabalho-vida.',
            nextSlide: 27
        },
        {
            id: 26,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Forçar uma reunião síncrona em horários inadequados demonstra falta de consideração pela equipa global. Salvo emergências críticas, deve privilegiar métodos assíncronas.',
            nextSlide: 27
        },
        {
            id: 27,
            type: 'question',
            title: 'Cenário 7: Feedback Construtivo Digital (Colaboração Complexa)',
            question: 'Recebeu um relatório de um colega júnior com múltiplos erros factuais e de formatação. O prazo de entrega ao cliente é amanhã. Como deve fornecer feedback?',
            options: [
                {
                    text: 'Opção A: Reescrever o relatório você mesmo e enviá-lo, mencionando ao colega que "desta vez tratou do assunto" para cumprir o prazo.',
                    correct: false,
                    feedbackSlide: 28
                },
                {
                    text: 'Opção B: Marcar uma videochamada breve, partilhar o ecrã, destacar 2-3 exemplos específicos de erros, explicar o impacto, e trabalhar colaborativamente nas correções prioritárias.',
                    correct: true,
                    feedbackSlide: 29
                },
                {
                    text: 'Opção C: Enviar o documento de volta por email com todos os erros destacados a vermelho e uma mensagem: "Precisa de rever isto urgentemente. Não está ao nível esperado."',
                    correct: false,
                    feedbackSlide: 30
                }
            ]
        },
        {
            id: 28,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Embora resolva o problema imediato, perde a oportunidade de desenvolvimento do colega e cria dependência. O feedback é essencial para o crescimento profissional.',
            nextSlide: 31
        },
        {
            id: 29,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Excelente abordagem! Feedback eficaz é específico, construtivo, e colaborativo. Trabalhar em conjunto desenvolve competências e mantém a relação profissional positiva.',
            nextSlide: 31
        },
        {
            id: 30,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Feedback puramente crítico sem orientação construtiva é desmotivador e pouco eficaz. Destacar erros sem explicar soluções não promove aprendizagem.',
            nextSlide: 31
        },
        {
            id: 31,
            type: 'question',
            title: 'Cenário 8: Gestão de Informação Sensível (Netiqueta e Segurança)',
            question: 'Um colega de outro departamento pede-lhe por email acesso a dados confidenciais de clientes para "uma análise rápida". Você tem acesso a esses dados. Como deve proceder?',
            options: [
                {
                    text: 'Opção A: Enviar os dados imediatamente por email, pois é um colega de confiança da mesma empresa.',
                    correct: false,
                    feedbackSlide: 32
                },
                {
                    text: 'Opção B: Verificar se o pedido segue os protocolos da empresa, confirmar a autorização do superior do colega, e se aprovado, partilhar através de canais seguros com permissões limitadas.',
                    correct: true,
                    feedbackSlide: 33
                },
                {
                    text: 'Opção C: Ignorar o pedido, pois partilhar dados entre departamentos é sempre proibido.',
                    correct: false,
                    feedbackSlide: 34
                }
            ]
        },
        {
            id: 32,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Grave erro! Partilhar dados confidenciais sem verificação adequada viola políticas de proteção de dados (RGPD) e pode ter consequências legais sérias.',
            nextSlide: 35
        },
        {
            id: 33,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Perfeito! A segurança da informação exige verificação de autorizações, seguir protocolos estabelecidos, e usar canais seguros. A confiança não substitui os procedimentos.',
            nextSlide: 35
        },
        {
            id: 34,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Ignorar o pedido sem comunicação é pouco colaborativo. A partilha entre departamentos pode ser legítima se seguir os protocolos corretos. Deve verificar e responder adequadamente.',
            nextSlide: 35
        },
        {
            id: 35,
            type: 'question',
            title: 'Cenário 9: Gestão de Crises em Comunicação Digital (Avançado)',
            question: 'Durante uma apresentação virtual importante para clientes, a sua ligação à internet falha por 5 minutos. Quando regressa, percebe que houve confusão. Como deve gerir a situação?',
            options: [
                {
                    text: 'Opção A: Pedir desculpa brevemente, perguntar o que foi perdido, resumir rapidamente onde estava, e continuar a apresentação com foco nos pontos-chave restantes.',
                    correct: true,
                    feedbackSlide: 36
                },
                {
                    text: 'Opção B: Gastar 10 minutos a explicar detalhadamente os problemas técnicos que teve e a justificar que não foi culpa sua.',
                    correct: false,
                    feedbackSlide: 37
                },
                {
                    text: 'Opção C: Continuar exatamente de onde parou, sem reconhecer a interrupção, como se nada tivesse acontecido.',
                    correct: false,
                    feedbackSlide: 38
                }
            ]
        },
        {
            id: 36,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Excelente gestão de crise! Reconhecer o problema brevemente, realinhar rapidamente, e focar no valor para a audiência demonstra profissionalismo e resiliência.',
            nextSlide: 39
        },
        {
            id: 37,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Justificações excessivas desperdiçam tempo valioso e desviam o foco do conteúdo. Os clientes valorizam soluções rápidas, não desculpas prolongadas.',
            nextSlide: 39
        },
        {
            id: 38,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Ignorar a interrupção cria confusão e mostra falta de consciência situacional. Reconhecer e realinhar é essencial para manter a audiência envolvida.',
            nextSlide: 39
        },
        {
            id: 39,
            type: 'question',
            title: 'Cenário 10: Diversidade e Inclusão Digital (Colaboração Avançada)',
            question: 'Numa reunião de equipa multicultural, um colega faz um comentário que, embora bem-intencionado, pode ser considerado culturalmente insensível. Como líder da equipa, deve reagir?',
            options: [
                {
                    text: 'Opção A: Ignorar o comentário para evitar constrangimento e abordar o colega privadamente após a reunião.',
                    correct: false,
                    feedbackSlide: 40
                },
                {
                    text: 'Opção B: Interromper imediatamente, repreender o colega publicamente, e fazer um discurso sobre sensibilidade cultural.',
                    correct: false,
                    feedbackSlide: 41
                },
                {
                    text: 'Opção C: Reconhecer diplomaticamente a intenção positiva, reformular o comentário de forma mais inclusiva, e após a reunião, ter uma conversa construtiva privada sobre sensibilidade cultural.',
                    correct: true,
                    feedbackSlide: 42
                }
            ]
        },
        {
            id: 40,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Ignorar completamente pode fazer com que outros se sintam desvalorizados. É importante abordar a situação de forma equilibrada, tanto no momento quanto posteriormente.',
            nextSlide: 43
        },
        {
            id: 41,
            type: 'feedback',
            correct: false,
            title: 'INCORRETO!',
            message: 'Repreensões públicas criam ambiente hostil e podem ser contraproducentes. A educação sobre diversidade requer empatia e diálogo privado.',
            nextSlide: 43
        },
        {
            id: 42,
            type: 'feedback',
            correct: true,
            title: 'CORRETO!',
            message: 'Perfeito! Liderança inclusiva requer equilíbrio: abordar a situação sem humilhar, educar com empatia, e criar um ambiente onde todos se sintam respeitados e seguros.',
            nextSlide: 43
        },
        {
            id: 43,
            type: 'final',
            title: 'Desafio Concluído!',
            message: 'Parabéns! Completou o nível avançado. O Trabalho Colaborativo e a Netiqueta em ambientes digitais complexos exigem não apenas conhecimento das regras, mas também inteligência emocional, pensamento crítico e adaptabilidade. As suas escolhas moldam a cultura digital da sua equipa e organização!'
        }
    ]
};

// Estado atual do jogo
let currentSlideId = 1;

// Função para renderizar um slide
function renderSlide(slideId) {
    const slide = quizData.slides.find(s => s.id === slideId);
    if (!slide) return;

    const container = document.getElementById('slide-container');
    container.innerHTML = '';

    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide active';

    switch (slide.type) {
        case 'title':
            slideDiv.innerHTML = `
                <h1>${slide.title}</h1>
                <p class="subtitle">${slide.subtitle}</p>
                <button class="btn-primary" onclick="goToSlide(${slide.nextSlide})">${slide.buttonText}</button>
            `;
            break;

        case 'rules':
            slideDiv.innerHTML = `
                <h2>${slide.title}</h2>
                <div class="rules">
                    ${slide.rules.map(rule => `<p>${rule}</p>`).join('')}
                </div>
                <button class="btn-primary" onclick="goToSlide(${slide.nextSlide})">${slide.buttonText}</button>
            `;
            break;

        case 'question':
            slideDiv.innerHTML = `
                <h2>${slide.title}</h2>
                <p class="question">${slide.question}</p>
                <div class="options">
                    ${slide.options.map((option, index) => `
                        <button class="option-btn" onclick="selectOption(${slideId}, ${index})">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
            `;
            break;

        case 'feedback':
            const feedbackClass = slide.correct ? 'correct' : 'incorrect';
            slideDiv.innerHTML = `
                <div class="feedback ${feedbackClass}">
                    <h2>${slide.title}</h2>
                    <p>${slide.message}</p>
                </div>
                <button class="btn-primary" onclick="goToSlide(${slide.nextSlide})">CONTINUAR</button>
            `;
            break;

        case 'final':
            slideDiv.innerHTML = `
                <h1>${slide.title}</h1>
                <p class="final-message">${slide.message}</p>
                <button class="btn-primary" onclick="restartQuiz()">RECOMEÇAR</button>
            `;
            break;
    }

    container.appendChild(slideDiv);
}

// Função para navegar para um slide específico
function goToSlide(slideId) {
    currentSlideId = slideId;
    renderSlide(slideId);
}

// Função para selecionar uma opção
function selectOption(questionSlideId, optionIndex) {
    const slide = quizData.slides.find(s => s.id === questionSlideId);
    if (!slide || !slide.options) return;

    const selectedOption = slide.options[optionIndex];
    goToSlide(selectedOption.feedbackSlide);
}

// Função para reiniciar o quiz
function restartQuiz() {
    goToSlide(1);
}

// Inicializar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderSlide(currentSlideId);
});

