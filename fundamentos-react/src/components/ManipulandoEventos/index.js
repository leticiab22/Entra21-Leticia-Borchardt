export function ManipulandoEventos() {
	function handleClick() {
		alert("Você clicou no botão :P");
	}

	function handleMouseOver() {
		console.log("Você entrou no botão :)");
	}

	function handleMouseLeave() {
		console.log("Você saiu do botão :(");
	}


	function handleSubmit(e) {
		e.preventDefault();
		console.log("Formulário Enviado!");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" />
			<button
				onClick={handleClick}
				onMouseLeave={handleMouseLeave}
				onMouseOver={handleMouseOver}
			>Clique aqui!</button>
		</form>
	);
}