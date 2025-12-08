import { useState } from 'react'
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData)
    setSubmitted(true)
    
    // Resetar o formulário após 3 segundos
    setTimeout(() => {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contato">
      <h1>Entre em Contato</h1>
      <p className="subtitle">Preencha o formulário abaixo e entraremos em contato em breve</p>

      {submitted && (
        <div className="success-message">
          <p>✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="nome">Nome Completo *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Digite seu nome completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem *</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Digite sua mensagem aqui..."
          />
        </div>

        <button type="submit" className="submit-button">
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}

export default Contato

