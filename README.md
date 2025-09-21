📊 SPARTA Dashboard

Um painel web responsivo para visualização e análise de indicadores econômicos (IPP, INPC e IPCA), com gráficos interativos, tabelas detalhadas e sistema de lembretes integrado.
Projeto desenvolvido com Next.js, TailwindCSS, shadcn/ui, Framer Motion e Python para tratamento de dados.

🚀 Funcionalidades

📈 Dashboard de Indicadores Econômicos

Visualização de IPP, INPC e IPCA com gráficos filtráveis.

Alternância entre escala linear/logarítmica e tipos de gráficos (linhas/barras).

Tabelas detalhadas para cada filtro selecionado.

🗂 Navegação

Sidebar responsivo com animação drawer para dispositivos móveis.

Header e Footer estilizados com a paleta SPARTA.

📅 Calendário

Lista de reuniões e lembretes existentes.

Formulário simples para adicionar novos lembretes.

Estatísticas automáticas sobre reuniões.

🏢 Sobre nós

Página "About Us" com fundo azul escuro e texto em duas colunas.

🐍 Integração com Python

Python foi usado para tratar dados vindos da API SIDRA e gerar URLs customizadas.

📉 Limitações dos Dados da API

Os gráficos exibidos no projeto utilizam apenas algumas tabelas específicas da API SIDRA.
Grande parte dos dados fornecidos pela API está incompleta, desatualizada ou contém tabelas encerradas sem valores.
Por isso, para garantir qualidade e consistência visual, foram selecionadas tabelas confiáveis para IPP, INPC e IPCA.

🛠️ Tecnologias Utilizadas

Next.js

React

TailwindCSS

shadcn/ui

Framer Motion

Lucide Icons

Python
 – tratamento de dados e URLs

API SIDRA/IBGE

🐍 Trecho de Código em Python para URLs Customizadas
import requests

with open("metadados_ibge.json", "r", encoding="utf-8") as f:
    metadados = json.load(f)

base_url = "https://apisidra.ibge.gov.br/values/t"

for grupo in metadados:
    for agregado in grupo["agregados"]:
        tabela_id = agregado["id"]
        nome = agregado["nome"]
        url = f"{base_url}/{tabela_id}/n1/all/v/all/p/all"
        print(f"Tabela {tabela_id}: {nome}\n→ {url}\n")


def buscar_dados(table_id: str, category_id: str = None):
    url = gerar_url_sidra(table_id, category_id)
    response = requests.get(url)
    if response.status_code == 200:
        dados = response.json()
        tratados = [
            {
                "periodo": item["D2N"],
                "valor": float(item["V"].replace(",", "."))
            }
            for item in dados[1:]
        ]
        return tratados
    else:
        raise Exception(f"Erro ao buscar dados: {response.status_code}")
meta = response.json()
classificacoes = meta.get('classificacoes', [])
for c in classificacoes:
    print(f"Classificação {c['id']}: {c['nome']}")
    for cat in c.get('categorias', [])[:60]:  # Mostra até 10 categorias
        print(f"  - {cat['id']}: {cat['nome']}")
    print()

with open("classificacoes_6723.json", "w", encoding="utf-8") as f:
    json.dump(classificacoes, f, ensure_ascii=False, indent=2)

📂 Estrutura do Projeto
src/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx       
│   │   ├── ipp/           
│   │   ├── inpc/          
│   │   └── ipca/          
│   ├── calendar/          
│   ├── about-us/          
│   └── globals.css        
├── components/
│   ├── structure/         
│   ├── sidraChart.tsx     
│   └── ui/                
├── lib/
│   └── sidra-data.ts      
└── types/
    └── sidra.ts           

📸 Pré-visualização

🖥 Desktop: Dashboard com cards centralizados e gráficos filtráveis.

📱 Mobile: Sidebar em formato drawer e layout adaptável.

📜 Licença
Este projeto foi desenvolvido para fins de demonstração.
todos os direitos pertencem a Sparta - Fundo de Investimentos.
