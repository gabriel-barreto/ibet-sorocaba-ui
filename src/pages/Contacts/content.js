export const fields = [
  {
    name: 'name',
    label: 'Nome',
    placeholder: 'Exemplo: John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Exemplo: john.doe@email.com',
    required: true,
  },
  {
    helper: 'DDD + Número. Informe apenas os números',
    name: 'phone',
    label: 'Telefone',
    placeholder: 'Exemplo: 1532925444',
    required: true,
  },
  {
    name: 'subject',
    label: 'Assunto',
    placeholder: 'Exemplo: Gostaria de conhecer o instituto',
    required: true,
  },
];
