export const formatedPrice = (price: number) => {
  return (
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    })
      .format(price)
      .replace(",00", "") + " COP"
  );
};
