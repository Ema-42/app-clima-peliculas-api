import './PrimerComponente.css'

const string = "Esto es un texto";
const number = 313123;
const array = [1, 1, 3, 4, true, "otro texto", [1, 23, 1.2]];
const boolean = true;
const funcion = () => 1 + 12;
const objeto = { nombre: "emanuel", edad: 24 };
const fecha = new Date();

const PrimerComponente = () => {
  return (
    <>
    <h1 className='componente'>PRIMER COMPONENTE</h1>
      <h1>variables en JSX</h1>
      <h4>Variable de tipo String</h4> <p>{string}</p>
      <h4>Variable de tipo Number</h4> <p>{number}</p>
      <h4>Variable de tipo Array</h4>{" "}
      <p>
        {array} contiene: {array.length}
      </p>
      <h4>Variable de tipo Boolean</h4> <p>{boolean}</p>
      <h4>Variable de tipo Funcion</h4> <p>{funcion()}</p>
    </>
  );
};

export default PrimerComponente;
