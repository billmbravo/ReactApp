import React from 'react';
import ReactDom from 'react-dom';

class Formulario extends React.Component {
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log(this.state);
	};

	handleClick = (e) => {
		console.log({ nombre: this.state.nombre, apellido: this.state.apellido });
	};

	render() {
		return (
			<div className="container">
				<form>
					<div className="form-group">
						<label for="start">Id</label>
						{/* <input onChange={this.props.OnChange} type="date" className="form-control" id="anio_nacimiento" name="anio_nacimiento"/> */}
						<input
							onChange={this.props.OnChange}
							type="number"
							className="form-control"
							id="id"
							name="id"
							min={1}
							max={2000}
							step={1}
							defaultValue={0}
						/>
					</div>
					<div className="form-group">
						<label for="nombre">Nombre</label>
						<input
							onChange={this.props.OnChange}
							type="text"
							className="form-control"
							id="nombre"
							name="nombre"
							placeholder="Ingrese Nombre"
						/>
					</div>
					<div className="form-group">
						<label for="apellido">Apellido</label>
						<input
							onChange={this.props.OnChange}
							type="text"
							className="form-control"
							id="apellido"
							name="apellido"
							placeholder="Ingrese Apellido"
						/>
					</div>
					<div className="form-group">
						<label for="start">Fecha Nacimiento</label>
						{/* <input onChange={this.props.OnChange} type="date" className="form-control" id="anio_nacimiento" name="anio_nacimiento"/> */}
						<input
							onChange={this.props.OnChange}
							type="number"
							className="form-control"
							id="anio_nacimiento"
							name="anio_nacimiento"
							min={1900}
							max={2099}
							step={1}
							defaultValue={2016}
						/>
					</div>
					<button onClick={this.props.onClick} type="button" className="btn btn-primary btn-lg btn-block">
						Enviar
					</button>
					<button
						onClick={this.props.onClickUpdate}
						type="button"
						className="btn btn-primary btn-lg btn-block"
					>
						Actualizar
					</button>
					<button
						onClick={this.props.onClickDelete}
						type="button"
						className="btn btn-primary btn-lg btn-block"
					>
						Eliminar
					</button>
				</form>
			</div>
		);
	}
}

export default Formulario;
