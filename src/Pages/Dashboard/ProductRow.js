import React from "react";

const ProductRow = ({product, index}) => {
    const {name, description, img, stock, minOrder, price  }= product
  return (
    <tr>
      <th>
        {index+1}
      </th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
          </div>
        </div>
      </td>
      
      <td>{price}</td>
      <td>{stock}</td>
      <td>{minOrder}</td>
      <th>
        <button class="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ProductRow;
