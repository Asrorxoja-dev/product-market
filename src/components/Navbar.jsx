import { useSelector } from "react-redux"

function Navbar() {
  const {total, products, price} =useSelector((store)=> store.products)

  const subtotal = products.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);
  return (
   <div>
     <div className=" max-w-[1200px] w-full mx-auto mt-3">
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-neutral text-xl">Products Market</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm bg-red-300  indicator-item">{total}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{total}</span>
          <span className="text-info">Subtotal: {subtotal}$</span>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="mt-7 ml-16">
    <h2 className="text-2xl font-bold">Total Price:</h2>
    <p className="text-xl font-bold ml-4">{subtotal}$</p>
    </div>
   </div>
  )
}

export default Navbar