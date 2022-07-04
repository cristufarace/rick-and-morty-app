import React from "react";

const Pagination = ({ prev, next, onPrevius, onNext }) => {
  const handlePrevius = () => {
    onPrevius();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center ">
        <li className="page-item">
          <button className="page-link" onClick={handlePrevius}>
            Previus
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={handleNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

//prev, next, onPrevius, onNext son funciones que se crearon en app y aca las recibe como props
//para que esos botones anden le tengo que agregar eventos, y lo hago dentro del componente
//dice que la logica de las funciones q hacen el prevs y el next deberia ser definida por el componente (app)  que use a este componente (pagination) y enviada desed app a pagination, PARA ENVIARLAS.......... usa props , es decir pagination recibe las funciones a travez de props
