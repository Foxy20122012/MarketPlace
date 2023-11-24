import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "Q" | "EUR" | "GBP" | "BDT",
    notation?: Intl.NumberFormatOptions["notation"],
  } = {}
){
  const {currency = "Q", notation = 'compact'} = options;

  // Define el formato de moneda según la opción proporcionada
  const currencyFormat = currency === "Q" ? "es-GT" : "en-US";

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat(currencyFormat, {
    style: "currency",
    currency: currency === "Q" ? "GTQ" : currency, // Cambia a GTQ si la moneda es "Q"
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice);
}
