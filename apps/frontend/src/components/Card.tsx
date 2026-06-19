import { ReactNode } from "react";

type CardProps = {
  title: string;
  value: number;
  isPercentage?: boolean;
  children: ReactNode; 
};

export default function SummaryState({
  title,
  value,
  isPercentage = true,
  children,
}: CardProps){

    return(
        <div>
            <h3>{title}</h3>
            <span>{isPercentage? `${value} %`:`$ ${value}`}</span>
            <span>{children}</span>
        </div>
    )
}