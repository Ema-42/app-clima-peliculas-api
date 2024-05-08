import PropTypes from "prop-types";
//propiedades por defecto
export const Props = ({ titulo = "tema por defecto", subtitulo, tema=2 }) => {
  console.log(titulo);
  console.log(subtitulo);
  console.log(tema);
  return (
    <>
      <h1 className="componente">COMPONENTE PROPS (propiedades)</h1>
      <h4>propiedad titulo: {titulo}</h4>
      <h4>propiedad subtitulo : {subtitulo}</h4>
      <h4>propiedad tema: {tema}</h4>
    </>
  );
};

//propiedades requeridas
Props.propTpes = {
  tema: PropTypes.number.isRequired,
};