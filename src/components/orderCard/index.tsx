import React from "react";
import Image from "next/image";
import ChecklistInput from "@/ui/input/checklist";
import NumberInput from "@/ui/input/number";
import Link from "next/link";
import { formatCurrency } from "@/utils/string";
import CloseIcon from "@/assets/icons/close.svg";

type OrderCardType = {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    thumbnailUrl: string;
    isChecked: boolean;
    onDelete: any;
    onChange: any;
    onChecked: any;
}

const OrderCard = (p: OrderCardType) => {
    return (
            <div className="order-card">
                <div className="order-card_left">
                    <ChecklistInput
                        isActive={p.isChecked}
                        onClick={p.onChecked}
                    />
                    <div className="order-card_thumbnail">
                        <img
                            src={p.thumbnailUrl}
                            alt="good"
                        />
                    </div>
                    <div className="order-card_description">
                        <Link href={`/${p.id}`}>
                            <div className="order-card_description__label">
                                { p.name }
                            </div>    
                        </Link>

                        <NumberInput
                            value={p.quantity}
                            onChange={p.onChange}
                        />
                    </div>    
                </div>   

                <div className="order-card_right">
                    <div
                        className="order-card_remove"
                        onClick={p.onDelete}
                    >
                        <Image
                            src={CloseIcon}
                            alt="remove-item-button"
                        />
                    </div>

                    <div className="order-card_price">Rp { formatCurrency(p.price) }</div>
                </div>   
                
            </div>
    )
}

export default React.memo(OrderCard);