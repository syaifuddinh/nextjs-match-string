import React from "react";
import CheckIcon from "@/assets/icons/check.svg"; 
import Image from "next/image";

type ChecklistInputType = {
    isActive: boolean,
    onClick: any 
}

const ChecklistInput = (p: ChecklistInputType) => {
    return (
            <div
                className={`checklist-input ${p.isActive === true ? "active" : ""}`}
                onClick={p.onClick}
            >
                { p.isActive === true && (
                    <Image
                        src={CheckIcon}
                        alt="check-icon"
                    />
                ) }
            </div>
    )
}

export default React.memo(ChecklistInput);