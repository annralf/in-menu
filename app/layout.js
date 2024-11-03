import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat } from "next/font/google";
import "./globals.css";

const monserrate = Montserrat({
  weight:["100", "300", "900"],
  style: "normal",
  subsets:["latin"]
});

export const metadata = {
  title: "In Menu",
  description: "In Menu tu carta a la medida, configura, crea y actualiza tu menú con facilidad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monserrate.className}>{children}</body>
    </html>
  );
}
