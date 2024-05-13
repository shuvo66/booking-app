type CardProps = {
  title?: string;
  children: React.ReactNode;
  cardChild?: React.ReactNode;
};

export const Cards = ({ title, children, cardChild }: CardProps) => {
  return (
    <div className="bg-card shadow-lg my-5 rounded-sm p-5">
      {(title || cardChild) && (
        <div className="flex items-center justify-between p-[20px] pt-0 border-b-[#f1f1f1]  border-b-[2px]">
          <div className="text-lg	font-bold capitalize">{title}</div>
          {cardChild}
        </div>
      )}

      {children}
    </div>
  );
};
