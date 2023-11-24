import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
{
  name: "Entrega inmediata",
  icon: ArrowDownToLine,
  Description: "Reciba sus activos en su correo electrónico en segundos y descárguelos de inmediato.",
},
{
  name: "Calidad garantizada",
  icon: CheckCircle,
  Description: "Nuestro equipo verifica cada activo de nuestra plataforma para garantizar nuestros más altos estándares de calidad. ¿No estás contento? Ofrecemos una garantía de reembolso de 30 días.",
},
{
  name: "Para el planeta",
  icon: Leaf,
  Description: "Estamos comprometidos con el 1% de las ventas a la preservación y restauración del medio ambiente natural.",
},
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Su mercado de alta calidad
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Bienvenido a MercadoPlace. Cada activo en nuestra plataforma es verificado por
             nuestro equipo para garantizar nuestros más altos estándares de calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
            Explora tendencias
            </Link>
            <Button variant="ghost">Nuestra promesa de calidad. &rarr;</Button>
          </div>
        </div>

        {/*TODO: List Products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div
            className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6
          lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="flex flex-col items-center">
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.icon className='w-12 h-12' />}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-2 text-base text-center text-muted-foreground justify-center">
                  {perk.Description}
                </p>
              </div>
            ))}            
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
