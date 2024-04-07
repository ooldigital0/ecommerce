import bolsa from './assets/bolsa.svg'
const CartWidget = () => {
    return (
    <button className="CartWidget">
        <img src={bolsa} alt="bolsa" />
        <span>0</span>
    </button>
    );
}
export default CartWidget;
