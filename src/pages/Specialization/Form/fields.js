export default [
  {
    label: 'Nome',
    name: 'name',
    placeholder: 'Exemplo: John Doe',
    required: true,
  },
  {
    label: 'Email',
    helper: 'Qual o seu melhor email?',
    name: 'email',
    placeholder: 'Exemplo: john.doe@myemail.com',
    required: true,
    type: 'email',
  },
  {
    label: 'Telefone',
    name: 'phone',
    helper: 'DDD + Número. Informe apenas os números',
    placeholder: 'Exemplo: 1532027783',
    mask(value) {
      return value
        .replace(/\D/g, '')
        .replace(/(\d{11})(\d)/, '$1')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d)/, '$1-$2');
    },
    required: true,
  },
];
