import Button from "./Button";

export default function ItemList({ items, onDelete }) {
  return (
    <div className="space-y-2">
      <div className="text-lg font-semibold">
        Lista de Items:
      </div>
      <ul className="border rounded p-2">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-gray-600">
                {item.quantity && item.quantity > 1 ? (
                  <>
                    ${item.price} x {item.quantity} = ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </>
                ) : (
                  <>${item.price}</>
                )}
              </div>
            </div>
            <div className="space-x-2">
              <Button onClick={() => onDelete(item.id)} className="bg-red-600 text-white">
                Eliminar
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}