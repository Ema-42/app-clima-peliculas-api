import PropTypes from "prop-types";
export const Props = ({ titulo = "tema por defecto", subtitulo, tema }) => {
  console.log(titulo);
  console.log(subtitulo);
  console.log(tema);
  return (
    <>
      <h1 className="componente">COMPONENTE PROPS</h1>
      <h4>propiedad titulo: {titulo}</h4>
      <h4>propiedad subtitulo : {subtitulo}</h4>
      <h4>propiedad tema: {tema}</h4>
    </>
  );
};

//propiedades requeridas
Props.propTypes = {
  tema: PropTypes.number.isRequired,
};

//propiedades por defecto
Props.defaultProps = {
  tema: 32,
};

//estamos en seccion eventos