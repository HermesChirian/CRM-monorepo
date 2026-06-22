import {type ReactNode } from "react";

type CardProps = {
  title: string;
  value: number;
  isPercentage?: boolean;
  children: ReactNode; 
};

export default function Card({
  title,
  value,
  isPercentage = true,
  children,
}: CardProps){

    return(
        <div className=" bg-gray-800 rounded-xl items-center m-2 grid p-2">
            <h3>{title}</h3>
            <span>{isPercentage? `${value} %`:`$ ${value}`}</span> 
            <span className="text-sm text-muted-foreground">{children}</span>
        </div>
    )
}