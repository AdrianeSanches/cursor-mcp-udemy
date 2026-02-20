import './LatestNews.css'

function LatestNews() {
  // Dados simulados das últimas notícias - em um projeto real, isso viria de uma API
  const latestNews = [
    {
      id: 1,
      title: "Lançamento do Novo Framework React 19",
      date: "2024-02-15",
      excerpt: "Descubra as novas funcionalidades e melhorias do React 19 que tornam o desenvolvimento ainda mais eficiente.",
      category: "Tecnologia"
    },
    {
      id: 2,
      title: "Como Otimizar o Performance do Seu Site",
      date: "2024-02-10",
      excerpt: "Dicas práticas para melhorar o carregamento e a experiência do usuário em seu website.",
      category: "Desenvolvimento Web"
    },
    {
      id: 3,
      title: "Tendências de Design para 2024",
      date: "2024-02-05",
      excerpt: "As principais tendências de design que vão dominar o mercado este ano.",
      category: "Design"
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <section className="latest-news">
      <div className="news-container">
        <h2 className="news-title">Últimas Notícias do Blog</h2>
        <p className="news-subtitle">Fique por dentro das nossas publicações mais recentes</p>

        <div className="news-grid">
          {latestNews.map((news) => (
            <article key={news.id} className="news-card">
              <div className="news-header">
                <span className="news-category">{news.category}</span>
                <time className="news-date" dateTime={news.date}>
                  {formatDate(news.date)}
                </time>
              </div>
              <h3 className="news-card-title">{news.title}</h3>
              <p className="news-excerpt">{news.excerpt}</p>
              <a href="#" className="news-link">Ler mais →</a>
            </article>
          ))}
        </div>

        <div className="news-footer">
          <a href="#" className="view-all-link">Ver todas as notícias</a>
        </div>
      </div>
    </section>
  )
}

export default LatestNews