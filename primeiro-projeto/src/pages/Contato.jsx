import ContactForm from '../components/Contato/ContactForm'
import './Contato.css'

function Contato() {
  return (
    <div className="contato">
      <h1>Entre em Contato</h1>
      <p className="subtitle">Preencha o formulário abaixo e entraremos em contato em breve</p>

      <ContactForm />
    </div>
  )
}

export default Contato

