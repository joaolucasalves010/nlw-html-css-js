let participantes = [
  {
    nome: 'Mayk Brito',
    email: 'mayk@gmail.com',
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: 'Ana Silva',
    email: 'ana.silva@example.com',
    dataInscricao: new Date(2024, 2, 23, 10, 45),
    dataCheckIn: new Date(2024, 2, 26, 9, 15)
  },
  {
    nome: 'Pedro Santos',
    email: 'pedro.santos@example.com',
    dataInscricao: new Date(2024, 2, 24, 14, 30),
    dataCheckIn: new Date(2024, 2, 27, 17, 45)
  },
  {
    nome: 'Carla Oliveira',
    email: 'carla.oliveira@example.com',
    dataInscricao: new Date(2024, 2, 25, 16, 10),
    dataCheckIn: new Date(2024, 2, 28, 8, 20)
  },
  {
    nome: 'Ricardo Sousa',
    email: 'ricardo.sousa@example.com',
    dataInscricao: new Date(2024, 2, 26, 20, 55),
    dataCheckIn: new Date(2024, 2, 29, 11, 30)
  },
  {
    nome: 'Mariana Costa',
    email: 'mariana.costa@example.com',
    dataInscricao: new Date(2024, 2, 27, 9, 15),
    dataCheckIn: new Date(2024, 2, 30, 14, 10)
  },
  {
    nome: 'João Oliveira',
    email: 'joao.oliveira@example.com',
    dataInscricao: new Date(2024, 2, 28, 13, 40),
    dataCheckIn: new Date(2024, 3, 1, 16, 30)
  },
  {
    nome: 'Sara Martins',
    email: 'sara.martins@example.com',
    dataInscricao: new Date(2024, 2, 29, 17, 20),
    dataCheckIn: new Date(2024, 3, 2, 19, 45)
  },
  {
    nome: 'Luís Rodrigues',
    email: 'luis.rodrigues@example.com',
    dataInscricao: new Date(2024, 2, 30, 22, 10),
    dataCheckIn: new Date(2024, 3, 3, 8, 55)
  },
  {
    nome: 'Inês Pereira',
    email: 'ines.pereira@example.com',
    dataInscricao: new Date(2024, 3, 1, 8, 45),
    dataCheckIn: new Date(2024, 3, 4, 12, 20)
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)
  
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  participantes.forEach((participante) => {
    output += criarNovoParticipante(participante)
  })

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null  
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)
}