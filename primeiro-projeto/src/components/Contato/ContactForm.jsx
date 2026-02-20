import { useState } from 'react'
import FormField from './FormField'
import SuccessMessage from './SuccessMessage'
import './ContactForm.css'

function ContactForm() {
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
    <>
      <SuccessMessage show={submitted} />

      <form onSubmit={handleSubmit} className="contact-form">
        <FormField
          label="Nome Completo"
          name="nome"
          type="text"
          value={formData.nome}
          onChange={handleChange}
          required
          placeholder="Digite seu nome completo"
        />

        <FormField
          label="E-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="seu@email.com"
        />

        <FormField
          label="Telefone"
          name="telefone"
          type="tel"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
        />

        <FormField
          label="Mensagem"
          name="mensagem"
          type="textarea"
          value={formData.mensagem}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Digite sua mensagem aqui..."
        />

        <button type="submit" className="submit-button">
          Enviar Mensagem
        </button>
      </form>
    </>
  )
}

export default ContactForm