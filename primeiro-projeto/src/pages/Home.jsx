import './Home.css'

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao nosso site!</h1>
      <p className="subtitle">Esta é a página inicial do nosso projeto React</p>
      
      <div className="features">
        <div className="feature-card">
          <h2>🚀 Rápido</h2>
          <p>Desenvolvido com Vite para máxima performance</p>
        </div>
        <div className="feature-card">
          <h2>⚛️ React</h2>
          <p>Utilizando a biblioteca mais popular do ecossistema JavaScript</p>
        </div>
        <div className="feature-card">
          <h2>🎨 Moderno</h2>
          <p>Interface moderna e responsiva</p>
        </div>
      </div>
    </div>
  )
}

export default Home

