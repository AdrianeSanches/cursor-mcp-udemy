function SuccessMessage({ show, message = "✓ Mensagem enviada com sucesso! Entraremos em contato em breve." }) {
  if (!show) return null

  return (
    <div className="success-message">
      <p>{message}</p>
    </div>
  )
}

export default SuccessMessage