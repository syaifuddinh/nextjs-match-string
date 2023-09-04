import { useEffect, useState } from "react";

const useItemController = (items) => {
    const [itemLength, setItemLength] = useState(items.length);
    const [itemSelectedLength, setItemSelectedLength] = useState(items.length);
    const [isSelectedAll, setIsSelectedAll] = useState(() => {
        return items.length > 0 && items.length === items.filter(({ isSelected }) => isSelected === true).length
    });
    const [total, setTotal] = useState(
           () => items.length === 0 ?  0 : items
           .map(({ isSelected, quantity, price }) => isSelected === true ? quantity * price : 0)
           .reduce((a, b) => a + b)
    );

    useEffect(() => {
        setItemLength(items.length)
        setItemSelectedLength(() => items.filter(({ isSelected }) => isSelected === true).length)
        setIsSelectedAll(() => items.length > 0 && items.length === items.filter(({ isSelected }) => isSelected === true).length)
        setTotal(
            () => items.length === 0 ?  0 : items
           .map(({ isSelected, quantity, price }) => isSelected === true ? quantity * price : 0)
           .reduce((a, b) => a + b)
        );
    }, [items])

    return { itemLength, itemSelectedLength, isSelectedAll, total };
}

export default useItemController;