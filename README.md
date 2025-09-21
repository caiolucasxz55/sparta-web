📊 SPARTA Dashboard
▶ Como rodar localmente
git clone https://github.com/caiolucasxz55/sparta-web.git
cd sparta-dashboard
npm install
npm run dev


Acesse em: http://localhost:3000

🧭 Decisões principais

Tratamento dos dados e URLs customizadas

Usei Python para processar os dados da API SIDRA/IBGE e gerar URLs personalizadas, garantindo que apenas dados consistentes fossem consumidos.

def gerar_url_sidra(table_id: str, category_id: str = None):
    base_url = "https://apisidra.ibge.gov.br/values/t"
    return f"{base_url}/{table_id}/n1/all/v/all/p/all" + (f"/c844/{category_id}" if category_id else "")


Construção dos gráficos

Usei Recharts para criar gráficos interativos a partir dos dados tratados.

Layout e páginas de exibição

Criei todo o design com TailwindCSS e shadcn/ui, incluindo Dashboard, Sidebar responsiva, Footer, Header e páginas (IPP, INPC, IPCA, Calendário e Sobre Nós).

Dados da API

Muitos dados da API SIDRA estão incompletos, desatualizados ou encerrados.

Por isso, selecionei tabelas específicas confiáveis para gerar gráficos funcionais e garantir uma boa experiência ao usuário.

🌐 Link do Deploy

sparta-web-theta.vercel.app
