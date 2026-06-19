// Dados dos grafos embutidos para evitar problemas de CORS ao abrir localmente
const GRAFO_AGENTE_IA = {"titulo": "Grafo de Fluxo dos Componentes de um Agente de IA Moderno", "descricao": "Representação em grafo dos principais componentes e fluxos de execução de um agente de IA baseado em LLM.", "metadata": {"versao": "1.0", "autor": "Especialista em IA", "formato": "node-edge graph", "total_nos": 16, "total_arestas": 24}, "nodes": [{"id": "input", "label": "Input / Objetivo", "tipo": "entrada", "descricao": "Comando, pergunta ou tarefa recebida pelo agente. Define o que precisa ser resolvido."}, {"id": "guardrails_entrada", "label": "Guardrails de Entrada", "tipo": "seguranca", "descricao": "Valida o input, bloqueia conteúdo malicioso, verifica permissões e limites."}, {"id": "llm", "label": "LLM (Motor de Raciocínio)", "tipo": "cerebro", "descricao": "Modelo de linguagem grande responsável por interpretar, raciocinar, planejar e gerar respostas."}, {"id": "memoria_curta", "label": "Memória de Curto Prazo", "tipo": "memoria", "descricao": "Contexto imediato da conversa ou tarefa em andamento."}, {"id": "memoria_longa", "label": "Memória de Longo Prazo", "tipo": "memoria", "descricao": "Informações persistentes sobre usuários, preferências e aprendizados acumulados."}, {"id": "memoria_vetorial", "label": "Memória Vetorial (RAG)", "tipo": "memoria", "descricao": "Embeddings armazenados em vector database para recuperação semântica de informações."}, {"id": "planejador", "label": "Planejador", "tipo": "raciocinio", "descricao": "Decompõe o objetivo em passos ou subtarefas executáveis."}, {"id": "seletor_ferramentas", "label": "Seletor de Ferramentas", "tipo": "raciocinio", "descricao": "Escolhe qual ferramenta usar com base na tarefa atual e no estado do agente."}, {"id": "executor", "label": "Executor de Ferramentas", "tipo": "acao", "descricao": "Invoca a ferramenta escolhida passando os parâmetros corretos."}, {"id": "ferramentas_externas", "label": "Ferramentas Externas", "tipo": "acao", "descricao": "APIs, bancos de dados, busca na web, cálculos, envio de mensagens e outras ações no mundo real."}, {"id": "parser", "label": "Parser de Resultados", "tipo": "processamento", "descricao": "Interpreta e transforma o retorno das ferramentas em formato compreensível para o LLM."}, {"id": "avaliador", "label": "Avaliador / Reflexão", "tipo": "raciocinio", "descricao": "Avalia se o objetivo foi atingido ou se é necessário outro ciclo de raciocínio."}, {"id": "guardrails_saida", "label": "Guardrails de Saída", "tipo": "seguranca", "descricao": "Verifica a resposta final antes de entregá-la ao usuário."}, {"id": "output", "label": "Output / Resposta", "tipo": "saida", "descricao": "Resultado final entregue ao usuário ou a outro sistema."}, {"id": "observabilidade", "label": "Observabilidade / Logs", "tipo": "monitoramento", "descricao": "Registra pensamentos, ações, custos, latência e erros para análise e auditoria."}, {"id": "controle_loop", "label": "Controle de Loop", "tipo": "controle", "descricao": "Limita o número de iterações, previne loops infinitos e gerencia timeouts."}], "edges": [{"source": "input", "target": "guardrails_entrada", "label": "validar", "tipo": "controle"}, {"source": "guardrails_entrada", "target": "llm", "label": "processar", "tipo": "fluxo"}, {"source": "llm", "target": "memoria_curta", "label": "atualiza", "tipo": "memoria"}, {"source": "memoria_curta", "target": "llm", "label": "fornece contexto", "tipo": "memoria"}, {"source": "llm", "target": "memoria_longa", "label": "consulta/salva", "tipo": "memoria"}, {"source": "memoria_longa", "target": "llm", "label": "recupera dados", "tipo": "memoria"}, {"source": "llm", "target": "memoria_vetorial", "label": "busca semântica", "tipo": "memoria"}, {"source": "memoria_vetorial", "target": "llm", "label": "retorna documentos", "tipo": "memoria"}, {"source": "llm", "target": "planejador", "label": "delega planejamento", "tipo": "raciocinio"}, {"source": "planejador", "target": "seletor_ferramentas", "label": "define passos", "tipo": "raciocinio"}, {"source": "seletor_ferramentas", "target": "executor", "label": "escolhe ferramenta", "tipo": "acao"}, {"source": "executor", "target": "ferramentas_externas", "label": "invoca", "tipo": "acao"}, {"source": "ferramentas_externas", "target": "parser", "label": "retorna resultado", "tipo": "processamento"}, {"source": "parser", "target": "avaliador", "label": "estrutura informação", "tipo": "processamento"}, {"source": "avaliador", "target": "controle_loop", "label": "verifica continuidade", "tipo": "controle"}, {"source": "controle_loop", "target": "llm", "label": "próxima iteração", "tipo": "loop"}, {"source": "controle_loop", "target": "guardrails_saida", "label": "finaliza", "tipo": "controle"}, {"source": "guardrails_saida", "target": "output", "label": "entrega resposta", "tipo": "saida"}, {"source": "llm", "target": "observabilidade", "label": "registra raciocínio", "tipo": "monitoramento"}, {"source": "executor", "target": "observabilidade", "label": "registra ação", "tipo": "monitoramento"}, {"source": "ferramentas_externas", "target": "observabilidade", "label": "registra retorno", "tipo": "monitoramento"}, {"source": "avaliador", "target": "observabilidade", "label": "registra avaliação", "tipo": "monitoramento"}, {"source": "guardrails_entrada", "target": "observabilidade", "label": "registra validação", "tipo": "monitoramento"}, {"source": "guardrails_saida", "target": "observabilidade", "label": "registra verificação", "tipo": "monitoramento"}]};

const GRAFO_CHATBOT_TRADICIONAL = {"titulo": "Grafo de Fluxo de um Chatbot Tradicional", "descricao": "Versão simplificada do fluxo de execução de um chatbot tradicional baseado em NLU, intenções e respostas pré-definidas.", "metadata": {"versao": "1.1", "autor": "Especialista em IA", "formato": "node-edge graph", "total_nos": 6, "total_arestas": 7}, "nodes": [{"id": "input_usuario", "label": "Mensagem do Usuário", "tipo": "entrada", "descricao": "Texto, áudio ou comando enviado pelo usuário ao chatbot. É o ponto de partida da interação."}, {"id": "nlu", "label": "NLU", "tipo": "cerebro", "descricao": "Natural Language Understanding: compreende a mensagem, identifica a intenção e extrai entidades relevantes."}, {"id": "contexto", "label": "Contexto", "tipo": "memoria", "descricao": "Armazena o histórico recente da conversa e variáveis importantes para manter a coerência do diálogo."}, {"id": "roteador", "label": "Roteador", "tipo": "raciocinio", "descricao": "Escolhe o próximo passo com base na intenção detectada: resposta pré-definida, consulta externa ou fallback."}, {"id": "acao", "label": "Ação / Resposta", "tipo": "acao", "descricao": "Executa a ação escolhida: busca uma resposta fixa, consulta uma API ou dispara um fluxo específico."}, {"id": "output_usuario", "label": "Resposta ao Usuário", "tipo": "saida", "descricao": "Mensagem final processada e enviada de volta ao usuário."}], "edges": [{"source": "input_usuario", "target": "nlu", "label": "envia", "tipo": "fluxo"}, {"source": "nlu", "target": "contexto", "label": "atualiza", "tipo": "memoria"}, {"source": "contexto", "target": "roteador", "label": "informa estado", "tipo": "fluxo"}, {"source": "nlu", "target": "roteador", "label": "intenção + entidades", "tipo": "raciocinio"}, {"source": "roteador", "target": "acao", "label": "direciona", "tipo": "acao"}, {"source": "acao", "target": "output_usuario", "label": "retorna", "tipo": "saida"}, {"source": "output_usuario", "target": "contexto", "label": "alimenta histórico", "tipo": "memoria"}]};

const coresTipo = {
  entrada: '#34B8F5',
  saida: '#34B8F5',
  cerebro: '#7B61FF',
  raciocinio: '#7B61FF',
  memoria: '#00C48C',
  acao: '#F59E0B',
  processamento: '#F59E0B',
  seguranca: '#EF4444',
  monitoramento: '#64748B',
  controle: '#64748B',
  fluxo: '#64748B'
};

function atualizarPainel(prefix, nodeData) {
  const tituloEl = document.getElementById(prefix + '-titulo');
  const tipoEl = document.getElementById(prefix + '-tipo');
  const descEl = document.getElementById(prefix + '-descricao');
  if (!tituloEl || !tipoEl || !descEl) return;

  tituloEl.textContent = nodeData.label;
  tipoEl.textContent = nodeData.tipo;
  tipoEl.style.display = 'inline-block';
  tipoEl.style.backgroundColor = nodeData.color + '33';
  tipoEl.style.color = nodeData.color;
  descEl.textContent = nodeData.descricao;
  descEl.classList.remove('placeholder');
}

function limparPainel(prefix) {
  const tituloEl = document.getElementById(prefix + '-titulo');
  const tipoEl = document.getElementById(prefix + '-tipo');
  const descEl = document.getElementById(prefix + '-descricao');
  if (!tituloEl || !tipoEl || !descEl) return;

  tituloEl.textContent = 'Explore o grafo';
  tipoEl.style.display = 'none';
  descEl.textContent = 'Clique em um nó para ver detalhes sobre o componente.';
  descEl.classList.add('placeholder');
}

function criarGrafo(containerId, data, infoPrefix, layoutName, tooltipId) {
  try {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const tooltip = tooltipId ? document.getElementById(tooltipId) : null;

    const elementos = [];

    data.nodes.forEach(node => {
      elementos.push({
        data: {
          id: node.id,
          label: node.label,
          tipo: node.tipo,
          descricao: node.descricao,
          color: coresTipo[node.tipo] || '#94A3B8'
        }
      });
    });

    data.edges.forEach((edge, index) => {
      elementos.push({
        data: {
          id: `e${index}`,
          source: edge.source,
          target: edge.target,
          label: edge.label
        }
      });
    });

    const layoutConfig = layoutName === 'breadthfirst'
      ? {
          name: 'breadthfirst',
          directed: true,
          padding: 20,
          spacingFactor: 1.2,
          animate: true,
          animationDuration: 800,
          fit: true,
          roots: [data.nodes[0].id]
        }
      : {
          name: 'cose',
          padding: 20,
          nodeRepulsion: 400000,
          edgeElasticity: 100,
          nestingFactor: 5,
          gravity: 80,
          numIter: 1000,
          initialTemp: 200,
          coolingFactor: 0.95,
          minTemp: 1.0,
          fit: true,
          animate: true,
          animationDuration: 800
        };

    const instancia = cytoscape({
      container: container,
      elements: elementos,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            'label': 'data(label)',
            'color': '#FFFFFF',
            'font-size': '11px',
            'font-weight': '600',
            'text-valign': 'bottom',
            'text-halign': 'center',
            'text-margin-y': 8,
            'text-wrap': 'wrap',
            'text-max-width': '100px',
            'width': 36,
            'height': 36,
            'border-width': 2,
            'border-color': 'rgba(255,255,255,0.3)',
            'shadow-blur': 10,
            'shadow-color': 'data(color)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': 'rgba(184, 192, 204, 0.4)',
            'target-arrow-color': 'rgba(184, 192, 204, 0.6)',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(label)',
            'color': '#B8C0CC',
            'font-size': '9px',
            'text-background-color': '#0B0F19',
            'text-background-opacity': 0.8,
            'text-background-padding': '2px',
            'text-background-shape': 'roundrectangle'
          }
        },
        {
          selector: ':selected',
          style: {
            'border-width': 4,
            'border-color': '#FFFFFF',
            'shadow-blur': 20,
            'shadow-color': '#FFFFFF'
          }
        }
      ],
      layout: layoutConfig
    });

    instancia.on('tap', 'node', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      const node = evt.target;
      const nodeData = node.data();

      atualizarPainel(infoPrefix, nodeData);

      if (tooltip) {
        document.getElementById('tooltip-titulo').textContent = nodeData.label;
        const tooltipTipo = document.getElementById('tooltip-tipo');
        tooltipTipo.textContent = nodeData.tipo;
        tooltipTipo.style.backgroundColor = nodeData.color + '33';
        tooltipTipo.style.color = nodeData.color;
        document.getElementById('tooltip-descricao').textContent = nodeData.descricao;

        const renderedPosition = node.renderedPosition();
        const containerRect = container.getBoundingClientRect();
        let left = renderedPosition.x + 20;
        let top = renderedPosition.y - 20;

        if (left + 260 > containerRect.width) {
          left = renderedPosition.x - 280;
        }
        if (top + 120 > containerRect.height) {
          top = containerRect.height - 140;
        }
        if (top < 10) top = 10;

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.classList.add('visible');
      }
    });

    instancia.on('tap', function(evt) {
      if (evt.target === instancia) {
        limparPainel(infoPrefix);
        if (tooltip) tooltip.classList.remove('visible');
      }
    });

    instancia.resize();
    return instancia;
  } catch (erro) {
    console.error('Erro ao carregar o grafo:', erro);
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '<p style="color: #EF4444; text-align: center; padding: 2rem;">Erro ao carregar o grafo.</p>';
    }
    return null;
  }
}

function inicializarGrafos() {
  if (document.getElementById('cy')) {
    criarGrafo('cy', GRAFO_AGENTE_IA, 'info', 'cose');
  }
  if (document.getElementById('cy-chatbot')) {
    criarGrafo('cy-chatbot', GRAFO_CHATBOT_TRADICIONAL, 'info-chatbot', 'breadthfirst', 'cy-chatbot-tooltip');
  }
}

document.addEventListener('DOMContentLoaded', inicializarGrafos);
