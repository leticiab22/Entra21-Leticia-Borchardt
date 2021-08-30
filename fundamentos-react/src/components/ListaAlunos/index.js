import {Aluno} from "../Aluno";

const alunos = [
	{ id: 1, nome: "Pedro", media: 9.5},
	{ id: 2, nome: "João", media: 4.75},
	{ id: 3, nome: "Júlia", media: 8.0}
];

export function ListaAlunos() {
	return (
		<>
		{
			alunos.map(aluno => {
				return (
					<Aluno key={aluno.id} nome={aluno.nome} media={aluno.media}/>
				);
			})
		}
		</>
	);
}