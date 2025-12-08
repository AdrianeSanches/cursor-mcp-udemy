import './Sobre.css'

function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre a Empresa</h1>
      <div className="content">
        <section className="intro">
          <h2>O que é React?</h2>
          <p>
            React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook (atualmente Meta) 
            para criar interfaces de usuário, especialmente aplicações web. Lançada em 2013, o React 
            revolucionou o desenvolvimento front-end com sua abordagem baseada em componentes.
          </p>
        </section>

        <section className="features">
          <h2>Principais Características do React</h2>
          <ul>
            <li>
              <strong>Componentes Reutilizáveis:</strong> Permite criar componentes que podem ser 
              reutilizados em diferentes partes da aplicação, facilitando a manutenção e organização do código.
            </li>
            <li>
              <strong>Virtual DOM:</strong> Utiliza um DOM virtual que otimiza as atualizações da interface, 
              tornando as aplicações mais rápidas e eficientes.
            </li>
            <li>
              <strong>JSX:</strong> Sintaxe que permite escrever HTML dentro do JavaScript, tornando o código 
              mais legível e intuitivo.
            </li>
            <li>
              <strong>Unidirecional de Dados:</strong> O fluxo de dados é unidirecional, facilitando o 
              rastreamento e depuração de problemas.
            </li>
            <li>
              <strong>Ecossistema Rico:</strong> Possui uma vasta comunidade e ecossistema de ferramentas, 
              bibliotecas e recursos.
            </li>
          </ul>
        </section>

        <section className="benefits">
          <h2>Por que escolher React?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Performance</h3>
              <p>Alta performance graças ao Virtual DOM e otimizações internas</p>
            </div>
            <div className="benefit-item">
              <h3>Comunidade</h3>
              <p>Uma das maiores comunidades de desenvolvedores do mundo</p>
            </div>
            <div className="benefit-item">
              <h3>Flexibilidade</h3>
              <p>Pode ser usado para web, mobile (React Native) e desktop</p>
            </div>
            <div className="benefit-item">
              <h3>Empregabilidade</h3>
              <p>Uma das habilidades mais procuradas no mercado de trabalho</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sobre

