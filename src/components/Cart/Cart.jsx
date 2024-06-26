import { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex text-center flex-col bg-green-300 font-mono ">
        <h1 className="text-3xl">El carrito esta vacio</h1>
        <Link to="/">
          <button className="bg-blue-500 font-mono text-1xl text-white py-2 px-4 rounded-lg mt-4 ">
            Ver Productos
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className=" bg-green-200 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className=" text-slate-600 flex flex-col text-3xl  font-mono">Carrito de compras</h1>
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Productos</th>
                    <th className="text-left font-semibold">Precio unitario</th>
                    <th className="text-left font-semibold">cantidad</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((productscart) => (
                    <tr key={productscart.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16  mr-4"
                            src={productscart.img}
                            alt={productscart.titulo}
                          />
                          <span className="font-semibold">
                            {productscart.titulo}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">{productscart.precio}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <span className="text-center w-8">
                            {productscart.quantity}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">
                        {productscart.precio * productscart.quantity}
                      </td>
                      <td className="py-4">
                        <FaDeleteLeft
                          onClick={() => removeItem(productscart.id)}
                          className=" gap-10 size-8 text-red-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" flex justify-center md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg bg-slate-300 mx-10 p-2 text-center font-semibold rounded-lg mb-4">
                Total de Carrito
              </h2>
              <h2 className=" text-lg bg-slate-300 mx-10 text-center p-2 font-semibold rounded-lg mb-4">
                $ {totalPrice()}{" "}
              </h2>
              <div className=" mb-2">
                <Link to="/checkout" className="">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </Link>
                <button
                  onClick={clearCart}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Eliminar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
